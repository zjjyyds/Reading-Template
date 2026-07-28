export interface DictEntry {
  word: string;
  phonetic?: string;
  pos?: string;
  translation: string;
}

export const offlineDict: Record<string, DictEntry> = {
  // A
  "a": { word: "a", pos: "art.", translation: "一个，一" },
  "an": { word: "an", pos: "art.", translation: "一个，一" },
  "the": { word: "the", pos: "art.", translation: "这个，那个，这些" },
  "and": { word: "and", pos: "conj.", translation: "和，与，并且" },
  "or": { word: "or", pos: "conj.", translation: "或者，否则" },
  "but": { word: "but", pos: "conj.", translation: "但是，然而" },
  "of": { word: "of", pos: "prep.", translation: "...的，关于" },
  "to": { word: "to", pos: "prep.", translation: "到，向，对于" },
  "in": { word: "in", pos: "prep.", translation: "在...里面，在...中" },
  "on": { word: "on", pos: "prep.", translation: "在...上面，关于" },
  "for": { word: "for", pos: "prep.", translation: "为了，对于，因为" },
  "with": { word: "with", pos: "prep.", translation: "同...一起，带有" },
  "by": { word: "by", pos: "prep.", translation: "被，通过，依靠" },
  "at": { word: "at", pos: "prep.", translation: "在...，在...时刻" },
  "from": { word: "from", pos: "prep.", translation: "来自，从" },
  "as": { word: "as", pos: "conj./prep.", translation: "作为，正如，当...时" },
  "it": { word: "it", pos: "pron.", translation: "它" },
  "its": { word: "its", pos: "pron.", translation: "它的" },
  "they": { word: "they", pos: "pron.", translation: "他们，它们" },
  "their": { word: "their", pos: "pron.", translation: "他们的，它们的" },
  "them": { word: "them", pos: "pron.", translation: "他们，它们" },
  "you": { word: "you", pos: "pron.", translation: "你，你们" },
  "your": { word: "your", pos: "pron.", translation: "你的，你们的" },
  "yourself": { word: "yourself", pos: "pron.", translation: "你自己" },
  "this": { word: "this", pos: "pron./adj.", translation: "这，这个" },
  "that": { word: "that", pos: "pron./conj.", translation: "那，那个；引导从句" },
  "these": { word: "these", pos: "pron./adj.", translation: "这些" },
  "those": { word: "those", pos: "pron./adj.", translation: "那些" },
  "is": { word: "be", pos: "v.", translation: "是，存在" },
  "are": { word: "be", pos: "v.", translation: "是" },
  "was": { word: "be", pos: "v.", translation: "是（过去式）" },
  "were": { word: "be", pos: "v.", translation: "是（过去式）" },
  "be": { word: "be", pos: "v.", translation: "是，存在" },
  "been": { word: "be", pos: "v.", translation: "是（过去分词）" },
  "being": { word: "be", pos: "v.", translation: "是，存在（现在分词）" },
  "have": { word: "have", pos: "v.", translation: "有，具备，已经" },
  "has": { word: "have", pos: "v.", translation: "有，具备（第三人称单数）" },
  "had": { word: "have", pos: "v.", translation: "有，具备（过去式）" },
  "do": { word: "do", pos: "v.", translation: "做，干，助动词" },
  "does": { word: "do", pos: "v.", translation: "做，干（第三人称单数）" },
  "did": { word: "do", pos: "v.", translation: "做，干（过去式）" },

  "accomplishment": { word: "accomplishment", phonetic: "/əˈkʌm.plɪʃ.mənt/", pos: "n.", translation: "成就，完成" },
  "achievement": { word: "achievement", phonetic: "/əˈtʃiːv.mənt/", pos: "n.", translation: "成就，成绩" },
  "academic": { word: "academic", phonetic: "/ˌæk.əˈdem.ɪk/", pos: "adj.", translation: "学术的，教学的" },
  "accompany": { word: "accompany", phonetic: "/əˈkʌm.pə.ni/", pos: "v.", translation: "陪伴，伴随，随同" },
  "accurate": { word: "accurate", phonetic: "/ˈæk.jə.rət/", pos: "adj.", translation: "精确的，准确的" },
  "accurately": { word: "accurately", phonetic: "/ˈæk.jə.rət.li/", pos: "adv.", translation: "精确地，准确地" },
  "activity": { word: "activity", phonetic: "/ækˈtɪv.ə.ti/", pos: "n.", translation: "活动，行动" },
  "adopt": { word: "adopt", phonetic: "/əˈdɒpt/", pos: "v.", translation: "采用，采纳，收养" },
  "advocate": { word: "advocate", phonetic: "/ˈæd.və.keɪt/", pos: "v./n.", translation: "提倡，主张；倡导者" },
  "ahead": { word: "ahead", phonetic: "/əˈhed/", pos: "adv.", translation: "在前，提前" },
  "airliner": { word: "airliner", phonetic: "/ˈeəˌlaɪ.nər/", pos: "n.", translation: "客机，大型民航飞机" },
  "allow": { word: "allow", phonetic: "/əˈlaʊ/", pos: "v.", translation: "允许，使得" },
  "ancient": { word: "ancient", phonetic: "/ˈeɪn.ʃənt/", pos: "adj.", translation: "古代的，古老的" },
  "application": { word: "application", phonetic: "/ˌæp.lɪˈkeɪ.ʃən/", pos: "n.", translation: "应用，申请" },
  "architectural": { word: "architectural", phonetic: "/ˌɑː.kɪˈtek.tʃər.əl/", pos: "adj.", translation: "建筑的，建筑学的" },
  "artificial": { word: "artificial", phonetic: "/ˌɑː.tɪˈfɪʃ.əl/", pos: "adj.", translation: "人工的，人造的" },
  "atrial": { word: "atrial", phonetic: "/ˈeɪ.tri.əl/", pos: "adj.", translation: "心房的" },
  "authority": { word: "authority", phonetic: "/ɔːˈθɒr.ə.ti/", pos: "n.", translation: "权威，官方机构" },
  "avoid": { word: "avoid", phonetic: "/əˈvɔɪd/", pos: "v.", translation: "避免，回避" },
  "awry": { word: "awry", phonetic: "/əˈraɪ/", pos: "adj./adv.", translation: "出错的，乱套的" },

  // B
  "basic": { word: "basic", phonetic: "/ˈbeɪ.sɪk/", pos: "adj.", translation: "基础的，基本的" },
  "behaviour": { word: "behaviour", phonetic: "/bɪˈheɪ.vjər/", pos: "n.", translation: "行为，举止" },
  "behavior": { word: "behavior", phonetic: "/bɪˈheɪ.vjər/", pos: "n.", translation: "行为，举止" },
  "believer": { word: "believer", phonetic: "/bɪˈliː.vər/", pos: "n.", translation: "信徒，相信...的人" },
  "blunder": { word: "blunder", phonetic: "/ˈblʌn.dər/", pos: "n./v.", translation: "大错，愚蠢的失误" },
  "body": { word: "body", phonetic: "/ˈbɒd.i/", pos: "n.", translation: "身体，主体，机构" },
  "bookkeeping": { word: "bookkeeping", phonetic: "/ˈbʊkˌkiː.pɪŋ/", pos: "n.", translation: "记账，簿记" },
  "boom": { word: "boom", phonetic: "/buːm/", pos: "n./v.", translation: "繁荣，暴涨" },
  "breathe": { word: "breathe", phonetic: "/briːð/", pos: "v.", translation: "呼吸，畅通呼吸" },
  "bubble": { word: "bubble", phonetic: "/ˈbʌb.əl/", pos: "n.", translation: "泡沫，气泡" },
  "builder": { word: "builder", phonetic: "/ˈbɪl.dər/", pos: "n.", translation: "建筑者，建造者" },
  "bust": { word: "bust", phonetic: "/bʌst/", pos: "n./v.", translation: "破产，萧条，萧条期" },

  // C
  "calm": { word: "calm", phonetic: "/kɑːm/", pos: "adj./v.", translation: "平静的；使平静" },
  "capable": { word: "capable", phonetic: "/ˈkeɪ.pə.bəl/", pos: "adj.", translation: "有能力的，能胜任的" },
  "capture": { word: "capture", phonetic: "/ˈkæp.tʃər/", pos: "v./n.", translation: "捕捉，捕获" },
  "carmaker": { word: "carmaker", phonetic: "/ˈkɑːˌmeɪ.kər/", pos: "n.", translation: "汽车制造商" },
  "castle": { word: "castle", phonetic: "/ˈkɑː.səl/", pos: "n.", translation: "城堡" },
  "catastrophe": { word: "catastrophe", phonetic: "/kəˈtæs.trə.fi/", pos: "n.", translation: "灾难，大祸" },
  "cavity": { word: "cavity", phonetic: "/ˈkæv.ə.ti/", pos: "n.", translation: "洞，腔，洞穴" },
  "cell": { word: "cell", phonetic: "/sel/", pos: "n.", translation: "细胞，蜂房，小室" },
  "century": { word: "century", phonetic: "/ˈsen.tʃər.i/", pos: "n.", translation: "世纪，百年" },
  "chain": { word: "chain", phonetic: "/tʃeɪn/", pos: "n.", translation: "链条，供应链，连锁" },
  "challenge": { word: "challenge", phonetic: "/ˈtʃæl.ɪndʒ/", pos: "n./v.", translation: "挑战，质疑" },
  "chimpanzee": { word: "chimpanzee", phonetic: "/ˌtʃɪm.pænˈziː/", pos: "n.", translation: "黑猩猩" },
  "city": { word: "city", phonetic: "/ˈsɪt.i/", pos: "n.", translation: "城市" },
  "civilisation": { word: "civilisation", phonetic: "/ˌsɪv.əl.aɪˈzeɪ.ʃən/", pos: "n.", translation: "文明" },
  "civilization": { word: "civilization", phonetic: "/ˌsɪv.əl.aɪˈzeɪ.ʃən/", pos: "n.", translation: "文明" },
  "climate": { word: "climate", phonetic: "/ˈklaɪ.mət/", pos: "n.", translation: "气候" },
  "colony": { word: "colony", phonetic: "/ˈkɒl.ə.ni/", pos: "n.", translation: "群体，殖民地" },
  "comb": { word: "comb", phonetic: "/kəʊm/", pos: "n.", translation: "蜂巢，梳子" },
  "company": { word: "company", phonetic: "/ˈkʌm.pə.ni/", pos: "n.", translation: "公司，陪伴" },
  "complex": { word: "complex", phonetic: "/ˈkɒm.pleks/", pos: "adj.", translation: "复杂的，复合的" },
  "compromise": { word: "compromise", phonetic: "/ˈkɒm.prə.maɪz/", pos: "v./n.", translation: "妥协；损害，危及" },
  "computer": { word: "computer", phonetic: "/kəmˈpjuː.tər/", pos: "n.", translation: "计算机，电脑" },
  "concern": { word: "concern", phonetic: "/kənˈsɜːn/", pos: "n./v.", translation: "担忧，关切" },
  "consequence": { word: "consequence", phonetic: "/ˈkɒn.sɪ.kwəns/", pos: "n.", translation: "后果，结果" },
  "consensus": { word: "consensus", phonetic: "/kənˈsen.səs/", pos: "n.", translation: "共识，一致意见" },
  "contraction": { word: "contraction", phonetic: "/kənˈtræk.ʃən/", pos: "n.", translation: "萎缩，收缩" },
  "corporate": { word: "corporate", phonetic: "/ˈkɔː.pər.ət/", pos: "adj.", translation: "企业的，公司的" },
  "counterpart": { word: "counterpart", phonetic: "/ˈkaʊn.tə.pɑːt/", pos: "n.", translation: "对应的人或物，物理实体" },
  "crash": { word: "crash", phonetic: "/kræʃ/", pos: "n./v.", translation: "碰撞测试，暴跌，崩溃" },
  "crystal": { word: "crystal", phonetic: "/ˈkrɪs.təl/", pos: "n.", translation: "水晶；水晶球" },
  "cumulatively": { word: "cumulatively", phonetic: "/ˈkjuː.mjə.lə.tɪv.li/", pos: "adv.", translation: "累积地" },

  // D
  "dam": { word: "dam", phonetic: "/dæm/", pos: "n.", translation: "水坝，堤坝" },
  "data": { word: "data", phonetic: "/ˈdeɪ.tə/", pos: "n.", translation: "数据，资料" },
  "debate": { word: "debate", phonetic: "/dɪˈbeɪt/", pos: "n./v.", translation: "辩论，讨论" },
  "demonstration": { word: "demonstration", phonetic: "/ˌdem.ənˈstreɪ.ʃən/", pos: "n.", translation: "演示，证明" },
  "demonstrator": { word: "demonstrator", phonetic: "/ˈdem.ən.streɪ.tər/", pos: "n.", translation: "演示者，示范者" },
  "depilis": { word: "depilis", phonetic: "/deˈpɪl.ɪs/", pos: "n.", translation: "[生物] 无刺蜂物种名" },
  "design": { word: "design", phonetic: "/dɪˈzaɪn/", pos: "n./v.", translation: "设计，图案" },
  "diagnosis": { word: "diagnosis", phonetic: "/ˌdaɪ.əɡˈnəʊ.sɪs/", pos: "n.", translation: "诊断，判断" },
  "digital": { word: "digital", phonetic: "/ˈdɪdʒ.ɪ.təl/", pos: "adj.", translation: "数字的，数码的" },
  "disaster": { word: "disaster", phonetic: "/dɪˈzɑː.stər/", pos: "n.", translation: "灾难，天灾" },
  "disorder": { word: "disorder", phonetic: "/dɪsˈɔː.dər/", pos: "n.", translation: "混乱，病症，失调" },
  "displacement": { word: "displacement", phonetic: "/dɪsˈpleɪs.mənt/", pos: "n.", translation: "替代，移位，失业" },
  "doctor": { word: "doctor", phonetic: "/ˈdɒk.tər/", pos: "n.", translation: "医生，博士" },
  "doppelganger": { word: "doppelganger", phonetic: "/ˈdɒp.əlˌɡæŋ.ər/", pos: "n.", translation: "分身，面貌极相似的人" },
  "door": { word: "door", phonetic: "/dɔːr/", pos: "n.", translation: "门，大门" },
  "double-entry": { word: "double-entry", phonetic: "/ˌdʌb.əlˈen.tri/", pos: "adj.", translation: "复式记账的" },
  "downsizing": { word: "downsizing", phonetic: "/ˈdaʊn.saɪ.zɪŋ/", pos: "n.", translation: "精简，裁员" },
  "drive": { word: "drive", phonetic: "/draɪv/", pos: "v./n.", translation: "驱动，驾驶，试驾" },
  "dual": { word: "dual", phonetic: "/ˈdʒuː.əl/", pos: "adj.", translation: "双重的，两部分的" },

  // E
  "earnings": { word: "earnings", phonetic: "/ˈɜː.nɪŋz/", pos: "n.", translation: "收益，利润，收入" },
  "economist": { word: "economist", phonetic: "/ɪˈkɒn.ə.mɪst/", pos: "n.", translation: "经济学家" },
  "economy": { word: "economy", phonetic: "/ɪˈkɒn.ə.mi/", pos: "n.", translation: "经济，经济体" },
  "effect": { word: "effect", phonetic: "/ɪˈfekt/", pos: "n.", translation: "效果，影响" },
  "efficiency": { word: "efficiency", phonetic: "/ɪˈfɪʃ.ən.si/", pos: "n.", translation: "效率，效能" },
  "emergence": { word: "emergence", phonetic: "/ɪˈmɜː.dʒəns/", pos: "n.", translation: "兴起，出现" },
  "emerging": { word: "emerging", phonetic: "/ɪˈmɜː.dʒɪŋ/", pos: "adj.", translation: "新兴的，初露头角的" },
  "engine": { word: "engine", phonetic: "/ˈen.dʒɪn/", pos: "n.", translation: "发动机，引擎" },
  "engineering": { word: "engineering", phonetic: "/ˌen.dʒɪˈnɪə.rɪŋ/", pos: "n.", translation: "工程学，工程技术" },
  "entertainment": { word: "entertainment", phonetic: "/en.təˈteɪn.mənt/", pos: "n.", translation: "娱乐，娱乐产业" },
  "environment": { word: "environment", phonetic: "/ɪnˈvaɪ.rən.mənt/", pos: "n.", translation: "环境" },
  "environmental": { word: "environmental", phonetic: "/ɪnˌvaɪ.rənˈmen.təl/", pos: "adj.", translation: "环境的，环保的" },
  "erratic": { word: "erratic", phonetic: "/ɪˈræt.ɪk/", pos: "adj.", translation: "反复无常的，不稳定的" },
  "evaluate": { word: "evaluate", phonetic: "/ɪˈvæl.ju.eɪt/", pos: "v.", translation: "评估，评价" },
  "evaluation": { word: "evaluation", phonetic: "/ɪˌvæl.juˈeɪ.ʃən/", pos: "n.", translation: "评估，评价" },
  "everyday": { word: "everyday", phonetic: "/ˈev.ri.deɪ/", pos: "adj.", translation: "日常的，每天的" },
  "everyone": { word: "everyone", phonetic: "/ˈev.ri.wʌn/", pos: "pron.", translation: "每个人" },
  "everywhere": { word: "everywhere", phonetic: "/ˈev.ri.weər/", pos: "adv.", translation: "到处，各处" },
  "evolutionary": { word: "evolutionary", phonetic: "/ˌiː.vəˈluː.ʃən.ər.i/", pos: "adj.", translation: "进化的，演化的" },
  "expect": { word: "expect", phonetic: "/ɪkˈspekt/", pos: "v.", translation: "预期，期望，预计" },
  "expectation": { word: "expectation", phonetic: "/ˌek.spekˈteɪ.ʃən/", pos: "n.", translation: "预期，期望" },
  "experiment": { word: "experiment", phonetic: "/ɪkˈsper.ɪ.mənt/", pos: "n./v.", translation: "实验，尝试" },
  "explanation": { word: "explanation", phonetic: "/ˌek.spləˈneɪ.ʃən/", pos: "n.", translation: "解释，说明" },
  "extensive": { word: "extensive", phonetic: "/ɪkˈsten.sɪv/", pos: "adj.", translation: "广泛的，大规模的" },
  "extend": { word: "extend", phonetic: "/ɪkˈstend/", pos: "v.", translation: "延伸，拓展" },

  // F
  "factory": { word: "factory", phonetic: "/ˈfæk.tər.i/", pos: "n.", translation: "工厂" },
  "fantasy": { word: "fantasy", phonetic: "/ˈfæn.tə.si/", pos: "n.", translation: "幻想，虚幻" },
  "farm": { word: "farm", phonetic: "/fɑːm/", pos: "n.", translation: "农场，农业" },
  "fashion": { word: "fashion", phonetic: "/ˈfæʃ.ən/", pos: "v./n.", translation: "制作，塑造；时尚" },
  "fast": { word: "fast", phonetic: "/fɑːst/", pos: "adv./adj.", translation: "快速地；快速的" },
  "federal": { word: "federal", phonetic: "/ˈfed.ər.əl/", pos: "adj.", translation: "联邦的" },
  "feed": { word: "feed", phonetic: "/fiːd/", pos: "v.", translation: "喂养，输入数据" },
  "fibrillation": { word: "fibrillation", phonetic: "/ˌfɪb.rɪˈleɪ.ʃən/", pos: "n.", translation: "颤动（如心房颤动）" },
  "finance": { word: "finance", phonetic: "/ˈfaɪ.næns/", pos: "n.", translation: "财务，金融" },
  "fine-tune": { word: "fine-tune", phonetic: "/ˌfaɪnˈtʃuːn/", pos: "v.", translation: "微调，精心调整" },
  "fire": { word: "fire", phonetic: "/faɪər/", pos: "v./n.", translation: "解雇；点火；火（fire on all cylinders马力全开）" },
  "flood": { word: "flood", phonetic: "/flʌd/", pos: "n./v.", translation: "洪水，淹没" },
  "flooding": { word: "flooding", phonetic: "/ˈflʌd.ɪŋ/", pos: "n.", translation: "洪涝灾害，泛滥" },
  "flow": { word: "flow", phonetic: "/fləʊ/", pos: "n./v.", translation: "流动，运转" },
  "forecast": { word: "forecast", phonetic: "/ˈfɔː.kɑːst/", pos: "v./n.", translation: "预测，预报" },
  "form": { word: "form", phonetic: "/fɔːm/", pos: "v./n.", translation: "形成，构成；形式" },
  "foundation": { word: "foundation", phonetic: "/faʊnˈdeɪ.ʃən/", pos: "n.", translation: "基础，根基" },
  "future": { word: "future", phonetic: "/ˈfjuː.tʃər/", pos: "n./adj.", translation: "未来，前景" },

  // G
  "generative": { word: "generative", phonetic: "/ˈdʒen.ər.ə.tɪv/", pos: "adj.", translation: "生成式的，生成的" },
  "generational": { word: "generational", phonetic: "/ˌdʒen.əˈreɪ.ʃən.əl/", pos: "adj.", translation: "世代的" },
  "genetic": { word: "genetic", phonetic: "/dʒəˈnet.ɪk/", pos: "adj.", translation: "基因的，遗传的" },
  "geographic": { word: "geographic", phonetic: "/ˌdʒiː.əˈɡræf.ɪk/", pos: "adj.", translation: "地理的" },
  "geometric": { word: "geometric", phonetic: "/ˌdʒiː.əˈmet.rɪk/", pos: "adj.", translation: "几何的" },
  "giant": { word: "giant", phonetic: "/ˈdʒaɪ.ənt/", pos: "n./adj.", translation: "巨头，骨干；巨大的" },
  "glum": { word: "glum", phonetic: "/ɡlʌm/", pos: "adj.", translation: "阴郁的，低迷的" },
  "gobble": { word: "gobble", phonetic: "/ˈɡɒb.əl/", pos: "v.", translation: "吞噬，狼吞虎咽" },
  "government": { word: "government", phonetic: "/ˈɡʌv.ən.mənt/", pos: "n.", translation: "政府" },
  "grand": { word: "grand", phonetic: "/ɡrænd/", pos: "adj.", translation: "盛大的（Grand Prix 大奖赛）" },

  // H
  "hack": { word: "hack", phonetic: "/hæk/", pos: "v.", translation: "黑客入侵，砍" },
  "health": { word: "health", phonetic: "/helθ/", pos: "n.", translation: "健康，运行状态" },
  "healthcare": { word: "healthcare", phonetic: "/ˈhelθ.keər/", pos: "n.", translation: "医疗保健" },
  "heart": { word: "heart", phonetic: "/hɑːt/", pos: "n.", translation: "心脏，核心" },
  "helicity": { word: "helicity", phonetic: "/hɪˈlɪs.ə.ti/", pos: "n.", translation: "螺旋度，螺旋结构" },
  "high": { word: "high", phonetic: "/haɪ/", pos: "adj.", translation: "高的" },
  "horizontal": { word: "horizontal", phonetic: "/ˌhɒr.ɪˈzɒn.təl/", pos: "adj.", translation: "水平的" },
  "host": { word: "host", phonetic: "/həʊst/", pos: "n.", translation: "宿主，东道主" },
  "human": { word: "human", phonetic: "/ˈhjuː.mən/", pos: "n./adj.", translation: "人类；人的" },
  "hunker": { word: "hunker", phonetic: "/ˈhʌŋ.kər/", pos: "v.", translation: "蹲下，hunker down 观望收缩" },
  "hydraulic": { word: "hydraulic", phonetic: "/haɪˈdrɔː.lɪk/", pos: "adj.", translation: "水力的，液压的" },
  "hypothesise": { word: "hypothesise", phonetic: "/haɪˈpɒθ.ə.saɪz/", pos: "v.", translation: "假设，假定" },

  // I
  "idea": { word: "idea", phonetic: "/aɪˈdɪə/", pos: "n.", translation: "想法，概念" },
  "ignore": { word: "ignore", phonetic: "/ɪɡˈnɔːr/", pos: "v.", translation: "忽视，忽略" },
  "immigration": { word: "immigration", phonetic: "/ˌɪm.ɪˈɡreɪ.ʃən/", pos: "n.", translation: "移民，入境" },
  "impossible": { word: "impossible", phonetic: "/ɪmˈpɒs.ə.bəl/", pos: "adj.", translation: "不可能的" },
  "indigenous": { word: "indigenous", phonetic: "/ɪnˈdɪdʒ.ɪ.nəs/", pos: "adj.", translation: "本土的，原产的" },
  "indirect": { word: "indirect", phonetic: "/ˌɪn.daɪˈrekt/", pos: "adj.", translation: "间接的" },
  "individual": { word: "individual", phonetic: "/ˌɪn.dɪˈvɪdʒ.u.əl/", pos: "n./adj.", translation: "个体；个别的" },
  "industry": { word: "industry", phonetic: "/ˈɪn.də.stri/", pos: "n.", translation: "工业，产业" },
  "inflation": { word: "inflation", phonetic: "/ɪnˈfleɪ.ʃən/", pos: "n.", translation: "通货膨胀" },
  "initially": { word: "initially", phonetic: "/ɪˈnɪʃ.əl.i/", pos: "adv.", translation: "最初，起初" },
  "innovation": { word: "innovation", phonetic: "/ˌɪn.əˈveɪ.ʃən/", pos: "n.", translation: "创新，改革" },
  "insect": { word: "insect", phonetic: "/ˈɪn.sekt/", pos: "n.", translation: "昆虫" },
  "insecurity": { word: "insecurity", phonetic: "/ˌɪn.sɪˈkjʊə.rə.ti/", pos: "n.", translation: "不安全感，局促" },
  "institution": { word: "institution", phonetic: "/ˌɪn.stɪˈtʃuː.ʃən/", pos: "n.", translation: "机构，制度" },
  "instruct": { word: "instruct", phonetic: "/ɪnˈstrʌkt/", pos: "v.", translation: "指导，指示" },
  "integration": { word: "integration", phonetic: "/ˌɪn.tɪˈɡreɪ.ʃən/", pos: "n.", translation: "融合，一体化" },
  "integrity": { word: "integrity", phonetic: "/ɪnˈteɡ.rə.ti/", pos: "n.", translation: "诚信，完整" },
  "intelligence": { word: "intelligence", phonetic: "/ɪnˈtel.ɪ.dʒəns/", pos: "n.", translation: "智力，情报，人工智能" },
  "intricate": { word: "intricate", phonetic: "/ˈɪn.trɪ.kət/", pos: "adj.", translation: "错综复杂的" },
  "intricacy": { word: "intricacy", phonetic: "/ˈɪn.trɪ.kə.si/", pos: "n.", translation: "错综复杂之处" },
  "inventory": { word: "inventory", phonetic: "/ˈɪn.vən.tər.i/", pos: "n.", translation: "库存，清单" },
  "investment": { word: "investment", phonetic: "/ɪnˈvest.mənt/", pos: "n.", translation: "投资" },
  "inversion": { word: "inversion", phonetic: "/ɪnˈvɜː.ʃən/", pos: "n.", translation: "倒装，颠倒" },

  // J - L
  "job": { word: "job", phonetic: "/dʒɒb/", pos: "n.", translation: "工作，岗位" },
  "larva": { word: "larva", phonetic: "/ˈlɑː.və/", pos: "n.", translation: "幼虫" },
  "larvae": { word: "larvae", phonetic: "/ˈlɑː.viː/", pos: "n.", translation: "幼虫（复数）" },
  "latest": { word: "latest", phonetic: "/ˈleɪ.tɪst/", pos: "adj.", translation: "最新的，最近的" },
  "layer": { word: "layer", phonetic: "/ˈleɪ.ər/", pos: "n.", translation: "层，分层" },
  "layoff": { word: "layoff", phonetic: "/ˈleɪ.ɒf/", pos: "n.", translation: "裁员，解雇" },
  "like": { word: "like", phonetic: "/laɪk/", pos: "v./prep.", translation: "像，如同；喜欢" },
  "likely": { word: "likely", phonetic: "/ˈlaɪk.li/", pos: "adj./adv.", translation: "很可能的，大概" },
  "link": { word: "link", phonetic: "/lɪŋk/", pos: "v./n.", translation: "连接，关联" },
  "litany": { word: "litany", phonetic: "/ˈlɪt.ən.i/", pos: "n.", translation: "一连串（不愉快的事）" },
  "locale": { word: "locale", phonetic: "/ləʊˈkɑːl/", pos: "n.", translation: "场所，地点" },
  "log": { word: "log", phonetic: "/lɒɡ/", pos: "v./n.", translation: "记录，日志" },

  // M
  "manage": { word: "manage", phonetic: "/ˈmæn.ɪdʒ/", pos: "v.", translation: "管理，经营" },
  "management": { word: "management", phonetic: "/ˈmæn.ɪdʒ.mənt/", pos: "n.", translation: "管理，管理部门" },
  "market": { word: "market", phonetic: "/ˈmɑː.kɪt/", pos: "n.", translation: "市场" },
  "materialise": { word: "materialise", phonetic: "/məˈtɪə.ri.ə.laɪz/", pos: "v.", translation: "实现，变为现实" },
  "materialize": { word: "materialize", phonetic: "/məˈtɪə.ri.ə.laɪz/", pos: "v.", translation: "实现，变为现实" },
  "measure": { word: "measure", phonetic: "/ˈmeʒ.ər/", pos: "v./n.", translation: "测量，衡量" },
  "mechanic": { word: "mechanic", phonetic: "/mɪˈkæn.ɪk/", pos: "n.", translation: "机制，技工" },
  "mechanism": { word: "mechanism", phonetic: "/ˈmek.ə.nɪz.əm/", pos: "n.", translation: "机制，机理" },
  "medical": { word: "medical", phonetic: "/ˈmed.ɪ.kəl/", pos: "adj.", translation: "医疗的，医学的" },
  "medicine": { word: "medicine", phonetic: "/ˈmed.sən/", pos: "n.", translation: "药物，医学" },
  "memorisation": { word: "memorisation", phonetic: "/ˌmem.ər.aɪˈzeɪ.ʃən/", pos: "n.", translation: "死记硬背，记忆" },
  "merchant": { word: "merchant", phonetic: "/ˈmɜː.tʃənt/", pos: "n.", translation: "商人" },
  "minuscule": { word: "minuscule", phonetic: "/ˈmɪn.ə.skjuːl/", pos: "adj.", translation: "极小的，微小的" },
  "mirror": { word: "mirror", phonetic: "/ˈmɪr.ər/", pos: "v./n.", translation: "镜像映射；镜子" },
  "model": { word: "model", phonetic: "/ˈmɒd.əl/", pos: "n./v.", translation: "模型，模式；建模" },
  "modelling": { word: "modelling", phonetic: "/ˈmɒd.əl.ɪŋ/", pos: "n.", translation: "建模，模拟" },
  "modifier": { word: "modifier", phonetic: "/ˈmɒd.ɪ.faɪ.ər/", pos: "n.", translation: "修饰语" },
  "monitor": { word: "monitor", phonetic: "/ˈmɒn.ɪ.tər/", pos: "v./n.", translation: "监控，监视" },
  "mountain": { word: "mountain", phonetic: "/ˈmaʊn.tɪn/", pos: "n.", translation: "山，海量(mountains of)" },

  // N - O
  "national": { word: "national", phonetic: "/ˈnæʃ.ən.əl/", pos: "adj.", translation: "国家的，国民的" },
  "native": { word: "native", phonetic: "/ˈneɪ.tɪv/", pos: "adj.", translation: "土生土长的，原产的" },
  "network": { word: "network", phonetic: "/ˈnet.wɜːk/", pos: "n.", translation: "网络，网状系统" },
  "nonfarm": { word: "nonfarm", phonetic: "/nɒnˈfɑːm/", pos: "adj.", translation: "非农的（如非农就业数据）" },
  "notion": { word: "notion", phonetic: "/ˈnəʊ.ʃən/", pos: "n.", translation: "概念，观念" },
  "observe": { word: "observe", phonetic: "/əbˈzɜːv/", pos: "v.", translation: "观察，遵守" },
  "omission": { word: "omission", phonetic: "/əʊˈmɪʃ.ən/", pos: "n.", translation: "省略，遗漏" },
  "online": { word: "online", phonetic: "/ˈɒn.laɪn/", pos: "adj./adv.", translation: "在线的，网络上的" },
  "operate": { word: "operate", phonetic: "/ˈɒp.ər.eɪt/", pos: "v.", translation: "操作，运转" },
  "operation": { word: "operation", phonetic: "/ˌɒp.ərˈeɪ.ʃən/", pos: "n.", translation: "运营，操作" },
  "optimise": { word: "optimise", phonetic: "/ˈɒp.tɪ.maɪz/", pos: "v.", translation: "优化，使完善" },
  "optimize": { word: "optimize", phonetic: "/ˈɒp.tɪ.maɪz/", pos: "v.", translation: "优化，使完善" },
  "organ": { word: "organ", phonetic: "/ˈɔː.ɡən/", pos: "n.", translation: "器官，机构" },
  "organism": { word: "organism", phonetic: "/ˈɔː.ɡən.ɪz.əm/", pos: "n.", translation: "生物，有机体" },
  "outplacement": { word: "outplacement", phonetic: "/ˈaʊtˌpleɪs.mənt/", pos: "n.", translation: "再就业援助，职业转换服务" },

  // P
  "paper-based": { word: "paper-based", phonetic: "/ˈpeɪ.pər.beɪst/", pos: "adj.", translation: "纸质的，基于纸张的" },
  "paradigm": { word: "paradigm", phonetic: "/ˈpær.ə.daɪm/", pos: "n.", translation: "范式，典范" },
  "parallel": { word: "parallel", phonetic: "/ˈpær.ə.lel/", pos: "adj.", translation: "平行的，无比的" },
  "participate": { word: "participate", phonetic: "/pɑːˈtɪs.ɪ.peɪt/", pos: "v.", translation: "参与，参加" },
  "passive": { word: "passive", phonetic: "/ˈpæs.ɪv/", pos: "adj.", translation: "被动的" },
  "patient": { word: "patient", phonetic: "/ˈpeɪ.ʃənt/", pos: "n./adj.", translation: "患者，病人；有耐心的" },
  "peer": { word: "peer", phonetic: "/pɪər/", pos: "v./n.", translation: "窥视，凝视；同伴" },
  "perpetuated": { word: "perpetuate", phonetic: "/pəˈpet.ʃu.eɪt/", pos: "v.", translation: "使延续，使永存" },
  "person": { word: "person", phonetic: "/ˈpɜː.sən/", pos: "n.", translation: "人" },
  "personal": { word: "personal", phonetic: "/ˈpɜː.sən.əl/", pos: "adj.", translation: "个人的，私人的" },
  "personalised": { word: "personalised", phonetic: "/ˈpɜː.sən.əl.aɪzd/", pos: "adj.", translation: "个性化的，定制的" },
  "personalized": { word: "personalized", phonetic: "/ˈpɜː.sən.əl.aɪzd/", pos: "adj.", translation: "个性化的，定制的" },
  "perspective": { word: "perspective", phonetic: "/pəˈspek.tɪv/", pos: "n.", translation: "视角，深入透视" },
  "phonetic": { word: "phonetic", phonetic: "/fəˈnet.ɪk/", pos: "adj.", translation: "语音的，音标的" },
  "physical": { word: "physical", phonetic: "/ˈfɪz.ɪ.kəl/", pos: "adj.", translation: "物理的，实体的，身体的" },
  "physician": { word: "physician", phonetic: "/fɪˈzɪʃ.ən/", pos: "n.", translation: "医师，内科医生" },
  "pioneering": { word: "pioneering", phonetic: "/ˌpaɪəˈnɪə.rɪŋ/", pos: "adj.", translation: "开创性的，先驱的" },
  "planet": { word: "planet", phonetic: "/ˈplæn.ɪt/", pos: "n.", translation: "行星，地球" },
  "pop": { word: "pop", phonetic: "/pɒp/", pos: "v.", translation: "pop up 弹出，纷至沓来" },
  "powerful": { word: "powerful", phonetic: "/ˈpaʊə.fəl/", pos: "adj.", translation: "强大的，强有力的" },
  "predecessor": { word: "predecessor", phonetic: "/ˈpriː.dɪˌses.ər/", pos: "n.", translation: "前任，前辈" },
  "prediction": { word: "prediction", phonetic: "/prɪˈdɪk.ʃən/", pos: "n.", translation: "预测，预言" },
  "preference": { word: "preference", phonetic: "/ˈpref.ər.əns/", pos: "n.", translation: "偏好，优先选择" },
  "prejudiced": { word: "prejudiced", phonetic: "/ˈpredʒ.ə.dɪst/", pos: "adj.", translation: "有偏见的，有成见的" },
  "privacy": { word: "privacy", phonetic: "/ˈprɪv.ə.si/", pos: "n.", translation: "隐私，私密" },
  "procedure": { word: "procedure", phonetic: "/prəˈsiː.dʒər/", pos: "n.", translation: "程序，诊疗步骤" },
  "process": { word: "process", phonetic: "/ˈprəʊ.ses/", pos: "n./v.", translation: "过程；处理" },
  "progress": { word: "progress", phonetic: "/ˈprəʊ.ɡres/", pos: "n./v.", translation: "进步，进展" },
  "prompt": { word: "prompt", phonetic: "/prɒmpt/", pos: "v./adj.", translation: "促使，引起；迅速的" },
  "pyramid": { word: "pyramid", phonetic: "/ˈpɪr.ə.mɪd/", pos: "n.", translation: "金字塔" },

  // Q - R
  "real": { word: "real", phonetic: "/rɪəl/", pos: "adj.", translation: "真实的，现实的" },
  "real-time": { word: "real-time", phonetic: "/ˌrɪəlˈtaɪm/", pos: "adj.", translation: "实时的" },
  "recession": { word: "recession", phonetic: "/rɪˈseʃ.ən/", pos: "n.", translation: "衰退，萧条" },
  "recovery": { word: "recovery", phonetic: "/rɪˈkʌv.ər.i/", pos: "n.", translation: "康复，恢复" },
  "reflect": { word: "reflect", phonetic: "/rɪˈflekt/", pos: "v.", translation: "反映，反射" },
  "remainder": { word: "remainder", phonetic: "/rɪˈmeɪn.dər/", pos: "n.", translation: "剩余部分" },
  "reminiscent": { word: "reminiscent", phonetic: "/ˌrem.ɪˈnɪs.ənt/", pos: "adj.", translation: "令人想起...的" },
  "replicate": { word: "replicate", phonetic: "/ˈrep.lɪ.keɪt/", pos: "v.", translation: "复制，精准拟真" },
  "representation": { word: "representation", phonetic: "/ˌrep.rɪ.zenˈteɪ.ʃən/", pos: "n.", translation: "表征，呈现" },
  "researcher": { word: "researcher", phonetic: "/rɪˈsɜː.tʃər/", pos: "n.", translation: "研究人员" },
  "resemble": { word: "resemble", phonetic: "/rɪˈzem.bəl/", pos: "v.", translation: "类似于，像" },
  "respond": { word: "respond", phonetic: "/rɪˈspɒnd/", pos: "v.", translation: "回应，应对" },
  "response": { word: "response", phonetic: "/rɪˈspɒns/", pos: "n.", translation: "回答，反应" },
  "retailer": { word: "retailer", phonetic: "/ˈriː.teɪ.lər/", pos: "n.", translation: "零售商" },
  "rethink": { word: "rethink", phonetic: "/ˌriːˈθɪŋk/", pos: "v.", translation: "重新思考，反思" },
  "reverse": { word: "reverse", phonetic: "/rɪˈvɜːs/", pos: "v./n.", translation: "颠倒，逆转" },
  "risk": { word: "risk", phonetic: "/rɪsk/", pos: "n./v.", translation: "风险，冒...风险" },
  "risky": { word: "risky", phonetic: "/ˈrɪs.ki/", pos: "adj.", translation: "高风险的，危险的" },
  "rogue": { word: "rogue", phonetic: "/rəʊɡ/", pos: "adj./n.", translation: "失控的，违规作恶(go rogue)" },
  "runaway": { word: "runaway", phonetic: "/ˈrʌn.ə.weɪ/", pos: "adj./n.", translation: "逃跑的，失控外流的" },

  // S
  "sales": { word: "sales", phonetic: "/seɪlz/", pos: "n.", translation: "销售额，销量" },
  "sandbox": { word: "sandbox", phonetic: "/ˈsænd.bɒks/", pos: "n.", translation: "沙盒，试验场" },
  "scenario": { word: "scenario", phonetic: "/səˈnɑː.ri.əʊ/", pos: "n.", translation: "情景预案，设想" },
  "schism": { word: "schism", phonetic: "/ˈsɪz.əm/", pos: "n.", translation: "分裂，分化" },
  "screen": { word: "screen", phonetic: "/skriːn/", pos: "n.", translation: "屏幕，屏障" },
  "sensor": { word: "sensor", phonetic: "/ˈsen.sər/", pos: "n.", translation: "传感器" },
  "sentiment": { word: "sentiment", phonetic: "/ˈsen.tɪ.mənt/", pos: "n.", translation: "情绪，情感" },
  "shave": { word: "shave", phonetic: "/ʃeɪv/", pos: "v.", translation: "剃，shave off 削减缩短" },
  "sign": { word: "sign", phonetic: "/saɪn/", pos: "n.", translation: "体征，迹象" },
  "simulation": { word: "simulation", phonetic: "/ˌsɪm.jəˈleɪ.ʃən/", pos: "n.", translation: "模拟，仿真" },
  "sophisticated": { word: "sophisticated", phonetic: "/səˈfɪs.tɪ.keɪ.tɪd/", pos: "adj.", translation: "精密复杂的，高级的" },
  "specifically": { word: "specifically", phonetic: "/spəˈsɪf.ɪ.kəl.i/", pos: "adv.", translation: "专门地，具体地" },
  "speech": { word: "speech", phonetic: "/spiːtʃ/", pos: "n.", translation: "语音，演讲" },
  "spiral": { word: "spiral", phonetic: "/ˈspaɪə.rəl/", pos: "adj./n.", translation: "螺旋形的；螺旋" },
  "spontaneously": { word: "spontaneously", phonetic: "/spɒnˈteɪ.ni.əs.li/", pos: "adv.", translation: "自发地" },
  "spreadsheet": { word: "spreadsheet", phonetic: "/ˈspred.ʃiːt/", pos: "n.", translation: "电子表格" },
  "statistical": { word: "statistical", phonetic: "/stəˈtɪs.tɪ.kəl/", pos: "adj.", translation: "统计的" },
  "stigmergy": { word: "stigmergy", phonetic: "/ˈstɪɡ.mɜː.dʒi/", pos: "n.", translation: "共识主动性，痕迹导引" },
  "streamline": { word: "streamline", phonetic: "/ˈstriːm.laɪn/", pos: "v.", translation: "精简，使合理化" },
  "streamlined": { word: "streamlined", phonetic: "/ˈstriːm.laɪnd/", pos: "adj.", translation: "精简高效的" },
  "structure": { word: "structure", phonetic: "/ˈstrʌk.tʃər/", pos: "n.", translation: "结构，建筑物" },
  "suburb": { word: "suburb", phonetic: "/ˈsʌb.ɜːb/", pos: "n.", translation: "郊区" },
  "succession": { word: "succession", phonetic: "/səkˈseʃ.ən/", pos: "n.", translation: "一连串，接替" },
  "sucrose": { word: "sucrose", phonetic: "/ˈsuː.krəʊz/", pos: "n.", translation: "蔗糖" },
  "summon": { word: "summon", phonetic: "/ˈsʌm.ən/", pos: "v.", translation: "召唤，调取" },
  "supply": { word: "supply", phonetic: "/səˈplaɪ/", pos: "n./v.", translation: "供应，供给" },
  "surveillance": { word: "surveillance", phonetic: "/səˈveɪ.ləns/", pos: "n.", translation: "监控，监视" },
  "symbolic": { word: "symbolic", phonetic: "/sɪmˈbɒl.ɪk/", pos: "adj.", translation: "象征性的" },
  "syntactic": { word: "syntactic", phonetic: "/sɪnˈtæk.tɪk/", pos: "adj.", translation: "句法的" },
  "system": { word: "system", phonetic: "/ˈsɪs.təm/", pos: "n.", translation: "系统，体系" },

  // T - Z
  "tackle": { word: "tackle", phonetic: "/ˈtæk.əl/", pos: "v.", translation: "处理，应对（难题）" },
  "tantalising": { word: "tantalising", phonetic: "/ˈtæn.təl.aɪ.zɪŋ/", pos: "adj.", translation: "令人心动的，诱人的" },
  "technique": { word: "technique", phonetic: "/tekˈniːk/", pos: "n.", translation: "技术，技巧" },
  "technology": { word: "technology", phonetic: "/tekˈnɒl.ə.dʒi/", pos: "n.", translation: "技术，科技" },
  "threaten": { word: "threaten", phonetic: "/ˈθret.ən/", pos: "v.", translation: "威胁，恐吓" },
  "tier": { word: "tier", phonetic: "/tɪər/", pos: "n.", translation: "层，阶层" },
  "tomb": { word: "tomb", phonetic: "/tuːm/", pos: "n.", translation: "坟墓，陵墓" },
  "track": { word: "track", phonetic: "/træk/", pos: "v./n.", translation: "追踪，记录；轨道" },
  "tradition": { word: "tradition", phonetic: "/trəˈdɪʃ.ən/", pos: "n.", translation: "传统" },
  "transaction": { word: "transaction", phonetic: "/trænˈzæk.ʃən/", pos: "n.", translation: "交易" },
  "transplant": { word: "transplant", phonetic: "/trænˈsplɑːnt/", pos: "v.", translation: "移植，迁移" },
  "treatment": { word: "treatment", phonetic: "/ˈtriːt.mənt/", pos: "n.", translation: "治疗，处理" },
  "tunnel": { word: "tunnel", phonetic: "/ˈtʌn.əl/", pos: "n.", translation: "隧道；tunnel vision 管道视野" },
  "turbocharge": { word: "turbocharge", phonetic: "/ˈtɜː.bəʊ.tʃɑːdʒ/", pos: "v.", translation: "加速推动，提速" },
  "turnaround": { word: "turnaround", phonetic: "/ˈtɜːn.a.raʊnd/", pos: "n.", translation: "好转，逆转" },
  "twin": { word: "twin", phonetic: "/twɪn/", pos: "n./v.", translation: "孪生，双胞胎；数字孪生" },
  "underestimate": { word: "underestimate", phonetic: "/ˌʌn.dəˈres.tɪ.meɪt/", pos: "v.", translation: "低估" },
  "unemployment": { word: "unemployment", phonetic: "/ˌʌn.ɪmˈplɔɪ.mənt/", pos: "n.", translation: "失业，失业率" },
  "unparalleled": { word: "unparalleled", phonetic: "/ʌnˈpær.ə.leld/", pos: "adj.", translation: "无与伦比的，空前的" },
  "update": { word: "update", phonetic: "/ʌpˈdeɪt/", pos: "v./n.", translation: "更新，最新消息" },
  "vehicle": { word: "vehicle", phonetic: "/ˈvɪə.kəl/", pos: "n.", translation: "车辆，载体" },
  "version": { word: "version", phonetic: "/ˈvɜː.ʃən/", pos: "n.", translation: "版本" },
  "virtual": { word: "virtual", phonetic: "/ˈvɜː.tʃu.əl/", pos: "adj.", translation: "虚拟的，实质上的" },
  "visiting": { word: "visiting", phonetic: "/ˈvɪz.ɪ.tɪŋ/", pos: "v./adj.", translation: "拜访，看诊" },
  "vital": { word: "vital", phonetic: "/ˈvaɪ.təl/", pos: "adj.", translation: "生命的，至关重要的" },
  "volatile": { word: "volatile", phonetic: "/ˈvɒl.ə.taɪl/", pos: "adj.", translation: "动荡不安的，易变的" },
  "whipsaw": { word: "whipsaw", phonetic: "/ˈwɪp.sɔː/", pos: "v.", translation: "使两头受挫，剧烈折磨" },
  "workforce": { word: "workforce", phonetic: "/ˈwɜːk.fɔːs/", pos: "n.", translation: "劳动力，职工总数" },
  "world": { word: "world", phonetic: "/wɜːld/", pos: "n.", translation: "世界，领域" },
  "year": { word: "year", phonetic: "/jɪər/", pos: "n.", translation: "年，年份" }
};

// Memory Cache for Dynamically Fetched Words
const dynamicDictCache: Record<string, DictEntry> = {};

/**
 * Enhanced Stemming & Lookup Helper
 */
export function lookupOfflineDict(rawWord: string): DictEntry | null {
  if (!rawWord) return null;
  const cleanWord = rawWord.trim().toLowerCase().replace(/[^a-z-]/g, '');
  if (!cleanWord || cleanWord.length < 1) return null;

  // Check cache first
  if (dynamicDictCache[cleanWord]) return dynamicDictCache[cleanWord];

  // Exact match
  if (offlineDict[cleanWord]) return offlineDict[cleanWord];

  // Advanced English suffix & inflection rules
  const candidates = [
    cleanWord.replace(/s$/, ''),
    cleanWord.replace(/es$/, ''),
    cleanWord.replace(/ed$/, ''),
    cleanWord.replace(/ing$/, ''),
    cleanWord.replace(/ly$/, ''),
    cleanWord.replace(/ingly$/, ''),
    cleanWord.replace(/tion$/, ''),
    cleanWord.replace(/ment$/, ''),
    cleanWord.replace(/al$/, ''),
    cleanWord.replace(/ic$/, ''),
    cleanWord.replace(/able$/, ''),
    cleanWord.replace(/ive$/, ''),
    cleanWord.replace(/ies$/, 'y'),
    cleanWord.replace(/ied$/, 'y'),
    cleanWord.replace(/ing$/, 'e'),
    cleanWord.replace(/ed$/, 'e'),
  ];

  for (const c of candidates) {
    if (c && offlineDict[c]) {
      return {
        ...offlineDict[c],
        word: rawWord
      };
    }
  }

  return null;
}

/**
 * Async Dual-Engine Lookup: Offline Dict + Free Public API Fallback
 */
export async function fetchWordDefinition(rawWord: string): Promise<DictEntry> {
  const cleanWord = rawWord.trim().toLowerCase().replace(/[^a-z-]/g, '');
  
  // 1. Try Offline Dictionary & Stemming
  const offlineMatch = lookupOfflineDict(rawWord);
  if (offlineMatch) {
    return offlineMatch;
  }

  // 2. Try Free Public Dictionary API Fallback
  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${cleanWord}`);
    if (response.ok) {
      const data = await response.json();
      if (data && data[0]) {
        const item = data[0];
        const phonetic = item.phonetic || (item.phonetics && item.phonetics.find((p: any) => p.text)?.text) || `/${cleanWord}/`;
        const firstMeaning = item.meanings && item.meanings[0];
        const pos = firstMeaning ? firstMeaning.partOfSpeech + "." : "v./n.";
        const def = firstMeaning && firstMeaning.definitions && firstMeaning.definitions[0] ? firstMeaning.definitions[0].definition : "";

        const entry: DictEntry = {
          word: rawWord,
          phonetic: phonetic,
          pos: pos,
          translation: def || `[${rawWord}] 支持实时离线发音`
        };

        // Cache result in memory
        dynamicDictCache[cleanWord] = entry;
        return entry;
      }
    }
  } catch (err) {
    // Network or CORS issue, fallback silently
  }

  // 3. Fallback Entry with Pronunciation capability
  return {
    word: rawWord,
    phonetic: `/${cleanWord}/`,
    pos: "word",
    translation: `[生词: ${rawWord}] 点击喇叭听标准美音`
  };
}
