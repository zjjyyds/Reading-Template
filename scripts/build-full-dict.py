import csv
import json
import urllib.request
import io
import re

print("🚀 Downloading official ECDICT dataset...")
url = "https://raw.githubusercontent.com/skywind3000/ECDICT/master/ecdict.csv"

req = urllib.request.urlopen(url, timeout=30)
content = req.read().decode('utf-8')

# Read all article texts from articles.ts to guarantee 100% coverage for current articles
print("📄 Scanning all current article words in src/data/articles.ts...")
article_path = "/home/jay/Learning/reading/src/data/articles.ts"
article_words = set()

with open(article_path, "r", encoding="utf-8") as f:
    text = f.read()
    raw_words = re.findall(r'\b[a-zA-Z-]+\b', text)
    for w in raw_words:
        if len(w) >= 2:
            article_words.add(w.lower())

print(f"Found {len(article_words)} unique words in articles.")

print("📦 Processing complete A-Z ECDICT dataset for exam & article vocabulary...")
reader = csv.DictReader(io.StringIO(content))

dict_entries = {}

for row in reader:
    word = row.get('word', '').strip()
    translation = row.get('translation', '').strip()
    phonetic = row.get('phonetic', '').strip()
    frq = int(row.get('frq', '0') or '0')
    tag = row.get('tag', '')

    if not word or not translation:
        continue

    word_lower = word.lower()

    # Must include if used in articles OR if exam tagged OR high frequency (>30)
    is_article_word = word_lower in article_words
    is_exam_word = (tag != '') or (frq > 30)

    if (is_article_word or is_exam_word) and len(word) >= 2:
        clean_trans = translation.replace('\\n', '； ').replace('\n', '； ').strip()
        phonetic_str = f"/{phonetic}/" if phonetic else f"/{word}/"
        
        pos_match = ""
        if clean_trans.startswith(('n.', 'v.', 'adj.', 'adv.', 'prep.', 'conj.', 'num.', 'pron.', 'art.', 'vt.', 'vi.')):
            parts = clean_trans.split(' ', 1)
            pos_match = parts[0]
            clean_trans = parts[1] if len(parts) > 1 else clean_trans

        dict_entries[word_lower] = {
            "word": word,
            "phonetic": phonetic_str,
            "pos": pos_match,
            "translation": clean_trans
        }

print(f"✅ Filtered {len(dict_entries)} A-Z exam & article English-Chinese dictionary entries!")

output_path = "/home/jay/Learning/reading/src/data/dictionary.ts"
dict_json = json.dumps(dict_entries, ensure_ascii=False)

ts_content = f"""export interface DictEntry {{
  word: string;
  phonetic?: string;
  pos?: string;
  translation: string;
}}

export const offlineDict: Record<string, DictEntry> = {dict_json};

/**
 * Universal Morphological Stemming & Safe Dictionary Lookup Engine
 * Prototype-safe to prevent any white screen crashes
 */
export function lookupOfflineDict(rawWord: string): DictEntry {{
  const safeDefault: DictEntry = {{
    word: rawWord || "word",
    phonetic: `/${{rawWord || "word"}}/`,
    pos: "word",
    translation: `[${{rawWord || "word"}}]`
  }};

  if (!rawWord || typeof rawWord !== 'string') {{
    return safeDefault;
  }}

  try {{
    const cleanWord = rawWord.trim().toLowerCase().replace(/[^a-z-]/g, '');
    if (!cleanWord || cleanWord.length < 1) {{
      return safeDefault;
    }}

    // 1. Direct match with prototype safety check
    if (Object.prototype.hasOwnProperty.call(offlineDict, cleanWord)) {{
      const match = offlineDict[cleanWord];
      if (match && typeof match === 'object' && typeof match.translation === 'string') {{
        return {{ ...match, word: rawWord }};
      }}
    }}

    // 2. Systematic Morphological Stemming Rules
    const candidates = [
      cleanWord.replace(/s$/, ''),
      cleanWord.replace(/es$/, ''),
      cleanWord.replace(/ed$/, ''),
      cleanWord.replace(/ing$/, ''),
      cleanWord.replace(/ly$/, ''),
      cleanWord.replace(/ingly$/, ''),
      cleanWord.replace(/tion$/, ''),
      cleanWord.replace(/sion$/, ''),
      cleanWord.replace(/ment$/, ''),
      cleanWord.replace(/al$/, ''),
      cleanWord.replace(/ic$/, ''),
      cleanWord.replace(/able$/, ''),
      cleanWord.replace(/ive$/, ''),
      cleanWord.replace(/ies$/, 'y'),
      cleanWord.replace(/ied$/, 'y'),
      cleanWord.replace(/ing$/, 'e'),
      cleanWord.replace(/ed$/, 'e'),
      cleanWord.replace(/er$/, ''),
      cleanWord.replace(/est$/, ''),
      cleanWord.replace(/ist$/, ''),
      cleanWord.replace(/ists$/, ''),
      cleanWord.replace(/ian$/, ''),
      cleanWord.replace(/ians$/, ''),
    ];

    for (const c of candidates) {{
      if (c && Object.prototype.hasOwnProperty.call(offlineDict, c)) {{
        const match = offlineDict[c];
        if (match && typeof match === 'object' && typeof match.translation === 'string') {{
          return {{
            ...match,
            word: rawWord
          }};
        }}
      }}
    }}
  }} catch (err) {{
    return safeDefault;
  }}

  // 3. Fallback Entry (Never crashes)
  return safeDefault;
}}

export async function fetchWordDefinition(rawWord: string): Promise<DictEntry> {{
  return lookupOfflineDict(rawWord);
}}
"""

with open(output_path, "w", encoding="utf-8") as f:
    f.write(ts_content)

print(f"🎉 Successfully built A-Z ECDICT dictionary dataset ({len(dict_entries)} words) into {output_path}!")
