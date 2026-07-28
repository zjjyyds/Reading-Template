export interface DictEntry {
  word: string;
  phonetic?: string;
  pos?: string;
  translation: string;
}

export const offlineDict: Record<string, DictEntry> = {
  // Articles & Pronouns & Prepositions & Common Words
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

  // Comprehensive 考研 / CET4 / CET6 / IELTS / Core Vocabulary
  "abandon": { word: "abandon", phonetic: "/əˈbæn.dən/", pos: "v.", translation: "放弃，抛弃" },
  "ability": { word: "ability", phonetic: "/əˈbɪl.ə.ti/", pos: "n.", translation: "能力，本领" },
  "able": { word: "able", phonetic: "/ˈeɪ.bəl/", pos: "adj.", translation: "有能力的，能...的" },
  "abroad": { word: "abroad", phonetic: "/əˈbrɔːd/", pos: "adv.", translation: "在国外，出国" },
  "absence": { word: "absence", phonetic: "/ˈæb.səns/", pos: "n.", translation: "缺席，不存在" },
  "absent": { word: "absent", phonetic: "/ˈæb.sənt/", pos: "adj.", translation: "缺席的，心不在焉的" },
  "absolute": { word: "absolute", phonetic: "/ˈæb.sə.luːt/", pos: "adj.", translation: "绝对的，完全的" },
  "absolutely": { word: "absolutely", phonetic: "/ˈæb.sə.luːt.li/", pos: "adv.", translation: "绝对地，完全地" },
  "absorb": { word: "absorb", phonetic: "/əbˈzɔːb/", pos: "v.", translation: "吸收，吸引注意力" },
  "abstract": { word: "abstract", phonetic: "/ˈæb.strækt/", pos: "adj./n.", translation: "抽象的；摘要" },
  "abundant": { word: "abundant", phonetic: "/əˈbʌn.dənt/", pos: "adj.", translation: "丰富的，充裕的" },
  "abuzz": { word: "abuzz", phonetic: "/əˈbʌz/", pos: "adj.", translation: "议论纷纷，嘈杂热烈的" },
  "academic": { word: "academic", phonetic: "/ˌæk.əˈdem.ɪk/", pos: "adj.", translation: "学术的，教学的" },
  "academy": { word: "academy", phonetic: "/əˈkæd.ə.mi/", pos: "n.", translation: "研究院，学会" },
  "accelerate": { word: "accelerate", phonetic: "/əkˈsel.ə.reɪt/", pos: "v.", translation: "加速，促进" },
  "accent": { word: "accent", phonetic: "/ˈæk.sənt/", pos: "n.", translation: "口音，重音" },
  "accept": { word: "accept", phonetic: "/əkˈsept/", pos: "v.", translation: "接受，认可" },
  "acceptable": { word: "acceptable", phonetic: "/əkˈsep.tə.bəl/", pos: "adj.", translation: "可接受的，合意的" },
  "access": { word: "access", phonetic: "/ˈæk.ses/", pos: "n./v.", translation: "通道，使用权；获取" },
  "accessible": { word: "accessible", phonetic: "/əkˈses.ə.bəl/", pos: "adj.", translation: "易接近的，易获得的" },
  "accident": { word: "accident", phonetic: "/ˈæk.sɪ.dənt/", pos: "n.", translation: "事故，意外" },
  "acclaim": { word: "acclaim", phonetic: "/əˈkleɪm/", pos: "v./n.", translation: "欢呼，赞誉" },
  "accommodate": { word: "accommodate", phonetic: "/əˈkɒm.ə.deɪt/", pos: "v.", translation: "提供住宿，适应" },
  "accompany": { word: "accompany", phonetic: "/əˈkʌm.pə.ni/", pos: "v.", translation: "陪伴，伴随，随同" },
  "accomplish": { word: "accomplish", phonetic: "/əˈkʌm.plɪʃ/", pos: "v.", translation: "完成，实现" },
  "accomplishment": { word: "accomplishment", phonetic: "/əˈkʌm.plɪʃ.mənt/", pos: "n.", translation: "成就，完成" },
  "accord": { word: "accord", phonetic: "/əˈkɔːd/", pos: "n./v.", translation: "一致，协议；给予" },
  "accordance": { word: "accordance", phonetic: "/əˈkɔː.dəns/", pos: "n.", translation: "一致，依照" },
  "according": { word: "according", phonetic: "/əˈkɔː.dɪŋ/", pos: "prep.", translation: "according to 按照，根据" },
  "account": { word: "account", phonetic: "/əˈkaʊnt/", pos: "n./v.", translation: "账户，账目；说明" },
  "accountant": { word: "accountant", phonetic: "/əˈkaʊn.tənt/", pos: "n.", translation: "会计师" },
  "accumulate": { word: "accumulate", phonetic: "/əˈkjuː.mjə.leɪt/", pos: "v.", translation: "积累，积聚" },
  "accuracy": { word: "accuracy", phonetic: "/ˈæk.jə.rə.si/", pos: "n.", translation: "准确性，精确度" },
  "accurate": { word: "accurate", phonetic: "/ˈæk.jə.rət/", pos: "adj.", translation: "精确的，准确的" },
  "accurately": { word: "accurately", phonetic: "/ˈæk.jə.rət.li/", pos: "adv.", translation: "精确地，准确地" },
  "accuse": { word: "accuse", phonetic: "/əˈkjuːz/", pos: "v.", translation: "指控，控告" },
  "achieve": { word: "achieve", phonetic: "/əˈtʃiːv/", pos: "v.", translation: "实现，取得" },
  "achievement": { word: "achievement", phonetic: "/əˈtʃiːv.mənt/", pos: "n.", translation: "成就，成绩" },
  "acid": { word: "acid", phonetic: "/ˈæs.ɪd/", pos: "n./adj.", translation: "酸；酸性的" },
  "acknowledge": { word: "acknowledge", phonetic: "/əkˈnɒl.ɪdʒ/", pos: "v.", translation: "承认，确认" },
  "acquire": { word: "acquire", phonetic: "/əˈkwaɪər/", pos: "v.", translation: "获取，获得" },
  "acquisition": { word: "acquisition", phonetic: "/ˌæk.wɪˈzɪʃ.ən/", pos: "n.", translation: "获得，收购" },
  "across": { word: "across", phonetic: "/əˈkrɒs/", pos: "prep./adv.", translation: "穿过，跨越" },
  "act": { word: "act", phonetic: "/ækt/", pos: "v./n.", translation: "行动，表现；法案" },
  "action": { word: "action", phonetic: "/ˈæk.ʃən/", pos: "n.", translation: "行动，活动" },
  "activate": { word: "activate", phonetic: "/ˈæk.tɪ.veɪt/", pos: "v.", translation: "激活，启动" },
  "active": { word: "active", phonetic: "/ˈæk.tɪv/", pos: "adj.", translation: "积极的，活跃的" },
  "activity": { word: "activity", phonetic: "/ækˈtɪv.ə.ti/", pos: "n.", translation: "活动，行动" },
  "actor": { word: "actor", phonetic: "/ˈæk.tər/", pos: "n.", translation: "演员" },
  "actual": { word: "actual", phonetic: "/ˈæk.tʃu.əl/", pos: "adj.", translation: "实际的，真实的" },
  "actually": { word: "actually", phonetic: "/ˈæk.tʃu.ə.li/", pos: "adv.", translation: "实际上，事实上" },
  "adapt": { word: "adapt", phonetic: "/əˈdæpt/", pos: "v.", translation: "适应，改编" },
  "adaptation": { word: "adaptation", phonetic: "/ˌæd.æpˈteɪ.ʃən/", pos: "n.", translation: "适应，改编本" },
  "add": { word: "add", phonetic: "/æd/", pos: "v.", translation: "增加，添加" },
  "addition": { word: "addition", phonetic: "/əˈdɪʃ.ən/", pos: "n.", translation: "增加，加法" },
  "additional": { word: "additional", phonetic: "/əˈdɪʃ.ən.əl/", pos: "adj.", translation: "额外的，附加的" },
  "address": { word: "address", phonetic: "/əˈdres/", pos: "n./v.", translation: "地址，演讲；处理" },
  "adequate": { word: "adequate", phonetic: "/ˈæd.ə.kwət/", pos: "adj.", translation: "充分的，适当的" },
  "adjust": { word: "adjust", phonetic: "/əˈdʒʌst/", pos: "v.", translation: "调整，调节" },
  "adjustment": { word: "adjustment", phonetic: "/əˈdʒʌst.mənt/", pos: "n.", translation: "调整，适应" },
  "administer": { word: "administer", phonetic: "/ədˈmɪn.ɪ.stər/", pos: "v.", translation: "管理，执行" },
  "administration": { word: "administration", phonetic: "/ədˌmɪn.ɪˈstreɪ.ʃən/", pos: "n.", translation: "行政，管理，政府" },
  "admire": { word: "admire", phonetic: "/ədˈmaɪər/", pos: "v.", translation: "钦佩，赞赏" },
  "admission": { word: "admission", phonetic: "/ədˈmɪʃ.ən/", pos: "n.", translation: "准许进入，承认" },
  "admit": { word: "admit", phonetic: "/ədˈmɪt/", pos: "v.", translation: "承认，准许进入" },
  "adopt": { word: "adopt", phonetic: "/əˈdɒpt/", pos: "v.", translation: "采用，采纳，收养" },
  "adoption": { word: "adoption", phonetic: "/əˈdɒp.ʃən/", pos: "n.", translation: "采用，收养" },
  "adult": { word: "adult", phonetic: "/ˈæd.ʌlt/", pos: "n./adj.", translation: "成年人；成年的" },
  "advance": { word: "advance", phonetic: "/ədˈvɑːns/", pos: "n./v.", translation: "前进，提升，预先" },
  "advanced": { word: "advanced", phonetic: "/ədˈvɑːnst/", pos: "adj.", translation: "先进的，高级的" },
  "advantage": { word: "advantage", phonetic: "/ədˈvɑːn.tɪdʒ/", pos: "n.", translation: "优势，好处" },
  "advertisement": { word: "advertisement", phonetic: "/ədˈvɜː.tɪs.mənt/", pos: "n.", translation: "广告" },
  "advice": { word: "advice", phonetic: "/ədˈvaɪs/", pos: "n.", translation: "建议，忠告" },
  "advise": { word: "advise", phonetic: "/ədˈvaɪz/", pos: "v.", translation: "建议，通知" },
  "advocate": { word: "advocate", phonetic: "/ˈæd.və.keɪt/", pos: "v./n.", translation: "提倡，主张；倡导者" },
  "affair": { word: "affair", phonetic: "/əˈfeər/", pos: "n.", translation: "事务，事件" },
  "affect": { word: "affect", phonetic: "/əˈfekt/", pos: "v.", translation: "影响，感染" },
  "affection": { word: "affection", phonetic: "/əˈfek.ʃən/", pos: "n.", translation: "喜爱，感情" },
  "afford": { word: "afford", phonetic: "/əˈfɔːd/", pos: "v.", translation: "负担得起，提供" },
  "afraid": { word: "afraid", phonetic: "/əˈfreɪd/", pos: "adj.", translation: "害怕的，担心的" },
  "after": { word: "after", phonetic: "/ˈɑːf.tər/", pos: "prep./conj.", translation: "在...之后" },
  "afternoon": { word: "afternoon", phonetic: "/ˌɑːf.təˈnuːn/", pos: "n.", translation: "下午" },
  "again": { word: "again", phonetic: "/əˈɡen/", pos: "adv.", translation: "再次，又" },
  "against": { word: "against", phonetic: "/əˈɡenst/", pos: "prep.", translation: "反对，倚靠" },
  "age": { word: "age", phonetic: "/eɪdʒ/", pos: "n./v.", translation: "年龄，时代；变老" },
  "agency": { word: "agency", phonetic: "/ˈeɪ.dʒən.si/", pos: "n.", translation: "代理机构，中介" },
  "agenda": { word: "agenda", phonetic: "/əˈdʒen.də/", pos: "n.", translation: "议程，议题" },
  "agent": { word: "agent", phonetic: "/ˈeɪ.dʒənt/", pos: "n.", translation: "代理人，智能体" },
  "aggressive": { word: "aggressive", phonetic: "/əˈɡres.ɪv/", pos: "adj.", translation: "好斗的，进取的" },
  "ago": { word: "ago", phonetic: "/əˈɡəʊ/", pos: "adv.", translation: "以前" },
  "agree": { word: "agree", phonetic: "/əˈɡriː/", pos: "v.", translation: "同意，赞同" },
  "agreement": { word: "agreement", phonetic: "/əˈɡriː.mənt/", pos: "n.", translation: "协议，同意" },
  "agriculture": { word: "agriculture", phonetic: "/ˈæɡ.rɪ.kʌl.tʃər/", pos: "n.", translation: "农业" },
  "agricultural": { word: "agricultural", phonetic: "/ˌæɡ.rɪˈkʌl.tʃər.əl/", pos: "adj.", translation: "农业的" },
  "ahead": { word: "ahead", phonetic: "/əˈhed/", pos: "adv.", translation: "在前，提前" },
  "aid": { word: "aid", phonetic: "/eɪd/", pos: "n./v.", translation: "援助，帮助" },
  "aim": { word: "aim", phonetic: "/eɪm/", pos: "n./v.", translation: "目标；旨在，瞄准" },
  "air": { word: "air", phonetic: "/eər/", pos: "n.", translation: "空气，天空" },
  "aircraft": { word: "aircraft", phonetic: "/ˈeə.krɑːft/", pos: "n.", translation: "飞机，飞行器" },
  "airliner": { word: "airliner", phonetic: "/ˈeəˌlaɪ.nər/", pos: "n.", translation: "客机，大型民航飞机" },
  "airline": { word: "airline", phonetic: "/ˈeə.laɪn/", pos: "n.", translation: "航空公司" },
  "airport": { word: "airport", phonetic: "/ˈeə.pɔːt/", pos: "n.", translation: "机场" },
  "alarm": { word: "alarm", phonetic: "/əˈlɑːm/", pos: "n./v.", translation: "警报；使惊恐" },
  "alcohol": { word: "alcohol", phonetic: "/ˈæl.kə.hɒl/", pos: "n.", translation: "酒精，烈酒" },
  "alert": { word: "alert", phonetic: "/əˈlɜːt/", pos: "adj./v.", translation: "警惕的；使警觉" },
  "alien": { word: "alien", phonetic: "/ˈeɪ.li.ən/", pos: "adj./n.", translation: "外来的；外星人" },
  "alike": { word: "alike", phonetic: "/əˈlaɪk/", pos: "adj./adv.", translation: "相似的；同样地" },
  "alive": { word: "alive", phonetic: "/əˈlaɪv/", pos: "adj.", translation: "活着的，有生气的" },
  "all": { word: "all", phonetic: "/ɔːl/", pos: "adj./pron.", translation: "全部的，所有" },
  "allegation": { word: "allegation", phonetic: "/ˌæl.ɪˈɡeɪ.ʃən/", pos: "n.", translation: "指控，陈述" },
  "allege": { word: "allege", phonetic: "/əˈledʒ/", pos: "v.", translation: "断言，宣称" },
  "allow": { word: "allow", phonetic: "/əˈlaʊ/", pos: "v.", translation: "允许，使得" },
  "allowance": { word: "allowance", phonetic: "/əˈlaʊ.əns/", pos: "n.", translation: "津贴，允许" },
  "ally": { word: "ally", phonetic: "/ˈæl.aɪ/", pos: "n./v.", translation: "盟友；结盟" },
  "almost": { word: "almost", phonetic: "/ˈɔːl.məʊst/", pos: "adv.", translation: "几乎，差不多" },
  "alone": { word: "alone", phonetic: "/əˈləʊn/", pos: "adj./adv.", translation: "单独的，独自" },
  "along": { word: "along", phonetic: "/əˈlɒŋ/", pos: "prep./adv.", translation: "沿着，顺着" },
  "alongside": { word: "alongside", phonetic: "/əˈlɒŋ.saɪd/", pos: "prep./adv.", translation: "在...旁边" },
  "already": { word: "already", phonetic: "/ɔːlˈred.i/", pos: "adv.", translation: "已经" },
  "also": { word: "also", phonetic: "/ˈɔːl.səʊ/", pos: "adv.", translation: "也，而且" },
  "alter": { word: "alter", phonetic: "/ˈɔːl.tər/", pos: "v.", translation: "改变，修改" },
  "alternative": { word: "alternative", phonetic: "/ɒlˈtɜː.nə.tɪv/", pos: "n./adj.", translation: "替代选择；供选择的" },
  "although": { word: "although", phonetic: "/ɔːlˈðəʊ/", pos: "conj.", translation: "虽然，尽管" },
  "altogether": { word: "altogether", phonetic: "/ˌɔːl.təˈɡeð.ər/", pos: "adv.", translation: "总共，完全" },
  "always": { word: "always", phonetic: "/ˈɔːl.weɪz/", pos: "adv.", translation: "总是，始终" },
  "amateur": { word: "amateur", phonetic: "/ˈæm.ə.tər/", pos: "n./adj.", translation: "业余爱好者；业余的" },
  "amaze": { word: "amaze", phonetic: "/əˈmeɪz/", pos: "v.", translation: "使吃惊" },
  "ambition": { word: "ambition", phonetic: "/æmˈbɪʃ.ən/", pos: "n.", translation: "野心，抱负" },
  "ambitious": { word: "ambitious", phonetic: "/æmˈbɪʃ.əs/", pos: "adj.", translation: "有雄心的，野心勃勃的" },
  "amend": { word: "amend", phonetic: "/əˈmend/", pos: "v.", translation: "修正，修改" },
  "among": { word: "among", phonetic: "/əˈmʌŋ/", pos: "prep.", translation: "在...之中" },
  "amount": { word: "amount", phonetic: "/əˈmaʊnt/", pos: "n./v.", translation: "数量；总计" },
  "ample": { word: "ample", phonetic: "/ˈæm.pəl/", pos: "adj.", translation: "充足的，丰富的" },
  "amuse": { word: "amuse", phonetic: "/əˈmjuːz/", pos: "v.", translation: "使发笑，娱人" },
  "analysis": { word: "analysis", phonetic: "/əˈnæl.ə.sɪs/", pos: "n.", translation: "分析，解析" },
  "analyst": { word: "analyst", phonetic: "/ˈæn.əl.ɪst/", pos: "n.", translation: "分析师" },
  "analyze": { word: "analyze", phonetic: "/ˈæn.əl.aɪz/", pos: "v.", translation: "分析，剖析" },
  "ancestor": { word: "ancestor", phonetic: "/ˈæn.ses.tər/", pos: "n.", translation: "祖先，祖宗" },
  "ancient": { word: "ancient", phonetic: "/ˈeɪn.ʃənt/", pos: "adj.", translation: "古代的，古老的" },
  "angel": { word: "angel", phonetic: "/ˈeɪn.dʒəl/", pos: "n.", translation: "天使" },
  "anger": { word: "anger", phonetic: "/ˈæŋ.ɡər/", pos: "n./v.", translation: "怒火；使发怒" },
  "angle": { word: "angle", phonetic: "/ˈæŋ.ɡəl/", pos: "n.", translation: "角度，角" },
  "angry": { word: "angry", phonetic: "/ˈæŋ.ɡri/", pos: "adj.", translation: "生气的，愤怒的" },
  "animal": { word: "animal", phonetic: "/ˈæn.ɪ.məl/", pos: "n.", translation: "动物" },
  "announce": { word: "announce", phonetic: "/əˈnaʊns/", pos: "v.", translation: "宣布，通告" },
  "announcement": { word: "announcement", phonetic: "/əˈnaʊns.mənt/", pos: "n.", translation: "公告，声明" },
  "annoy": { word: "annoy", phonetic: "/əˈnɔɪ/", pos: "v.", translation: "打扰，使烦恼" },
  "annual": { word: "annual", phonetic: "/ˈæn.ju.əl/", pos: "adj.", translation: "每年的，年度的" },
  "anonymous": { word: "anonymous", phonetic: "/əˈnɒn.ɪ.məs/", pos: "adj.", translation: "匿名的" },
  "another": { word: "another", phonetic: "/əˈnʌð.ər/", pos: "adj./pron.", translation: "另一个，又一个" },
  "answer": { word: "answer", phonetic: "/ˈɑːn.sər/", pos: "v./n.", translation: "回答，解答" },
  "anticipate": { word: "anticipate", phonetic: "/ænˈtɪs.ɪ.peɪt/", pos: "v.", translation: "预料，预期" },
  "anxiety": { word: "anxiety", phonetic: "/æŋˈzaɪ.ə.ti/", pos: "n.", translation: "焦虑，不安" },
  "anxious": { word: "anxious", phonetic: "/ˈæŋ.kʃəs/", pos: "adj.", translation: "焦虑的，渴望的" },
  "any": { word: "any", phonetic: "/ˈen.i/", pos: "adj./pron.", translation: "任何，一些" },
  "anybody": { word: "anybody", phonetic: "/ˈen.iˌbɒd.i/", pos: "pron.", translation: "任何人" },
  "anymore": { word: "anymore", phonetic: "/ˌen.iˈmɔːr/", pos: "adv.", translation: "再也（不）" },
  "anyone": { word: "anyone", phonetic: "/ˈen.i.wʌn/", pos: "pron.", translation: "任何人" },
  "anything": { word: "anything", phonetic: "/ˈen.i.θɪŋ/", pos: "pron.", translation: "任何事物" },
  "anyway": { word: "anyway", phonetic: "/ˈen.i.weɪ/", pos: "adv.", translation: "无论如何，不管怎样" },
  "anywhere": { word: "anywhere", phonetic: "/ˈen.i.weər/", pos: "adv.", translation: "任何地方" },
  "apart": { word: "apart", phonetic: "/əˈpɑːt/", pos: "adv.", translation: "相隔，分开" },
  "apartment": { word: "apartment", phonetic: "/əˈpɑːt.mənt/", pos: "n.", translation: "公寓" },
  "apologize": { word: "apologize", phonetic: "/əˈpɒl.ə.dʒaɪz/", pos: "v.", translation: "道歉" },
  "apparent": { word: "apparent", phonetic: "/əˈpær.ənt/", pos: "adj.", translation: "显而易见的，表面上的" },
  "apparently": { word: "apparently", phonetic: "/əˈpær.ənt.li/", pos: "adv.", translation: "显然，看来" },
  "appeal": { word: "appeal", phonetic: "/əˈpiːl/", pos: "v./n.", translation: "呼吁，上诉；吸引力" },
  "appear": { word: "appear", phonetic: "/əˈpɪər/", pos: "v.", translation: "出现，显得" },
  "appearance": { word: "appearance", phonetic: "/əˈpɪə.rəns/", pos: "n.", translation: "外表，出现" },
  "application": { word: "application", phonetic: "/ˌæp.lɪˈkeɪ.ʃən/", pos: "n.", translation: "应用，申请" },
  "apply": { word: "apply", phonetic: "/əˈplaɪ/", pos: "v.", translation: "应用，申请" },
  "appoint": { word: "appoint", phonetic: "/əˈpɔɪnt/", pos: "v.", translation: "任命，委派" },
  "appointment": { word: "appointment", phonetic: "/əˈpɔɪnt.mənt/", pos: "n.", translation: "约会，任命" },
  "appreciate": { word: "appreciate", phonetic: "/əˈpriː.ʃi.eɪt/", pos: "v.", translation: "欣赏，感激" },
  "approach": { word: "approach", phonetic: "/əˈprəʊtʃ/", pos: "v./n.", translation: "接近；方法" },
  "appropriate": { word: "appropriate", phonetic: "/əˈprəʊ.pri.ət/", pos: "adj.", translation: "适当的，恰当的" },
  "approval": { word: "approval", phonetic: "/əˈpruː.vəl/", pos: "n.", translation: "批准，赞成" },
  "approve": { word: "approve", phonetic: "/əˈpruːv/", pos: "v.", translation: "批准，赞成" },
  "approximate": { word: "approximate", phonetic: "/əˈprɒk.sɪ.mət/", pos: "adj.", translation: "大约的，近似的" },
  "architect": { word: "architect", phonetic: "/ˈɑː.kɪ.tekt/", pos: "n.", translation: "建筑师" },
  "architecture": { word: "architecture", phonetic: "/ˈɑː.kɪ.tek.tʃər/", pos: "n.", translation: "建筑学，建筑" },
  "architectural": { word: "architectural", phonetic: "/ˌɑː.kɪˈtek.tʃər.əl/", pos: "adj.", translation: "建筑的" },
  "area": { word: "area", phonetic: "/ˈeə.ri.ə/", pos: "n.", translation: "区域，面积，领域" },
  "argue": { word: "argue", phonetic: "/ˈɑːɡ.juː/", pos: "v.", translation: "争论，主张" },
  "argument": { word: "argument", phonetic: "/ˈɑːɡ.ju.mənt/", pos: "n.", translation: "争论，论点" },
  "arise": { word: "arise", phonetic: "/əˈraɪz/", pos: "v.", translation: "产生，出现" },
  "arm": { word: "arm", phonetic: "/ɑːm/", pos: "n./v.", translation: "手臂；武装" },
  "army": { word: "army", phonetic: "/ˈɑː.mi/", pos: "n.", translation: "军队" },
  "around": { word: "around", phonetic: "/əˈraʊnd/", pos: "prep./adv.", translation: "在四周，大约" },
  "arrange": { word: "arrange", phonetic: "/əˈreɪndʒ/", pos: "v.", translation: "安排，整理" },
  "arrangement": { word: "arrangement", phonetic: "/əˈreɪndʒ.mənt/", pos: "n.", translation: "安排，布置" },
  "arrest": { word: "arrest", phonetic: "/əˈrest/", pos: "v./n.", translation: "逮捕，拘留" },
  "arrival": { word: "arrival", phonetic: "/əˈraɪ.vəl/", pos: "n.", translation: "到达，到来" },
  "arrive": { word: "arrive", phonetic: "/əˈraɪv/", pos: "v.", translation: "到达，到来" },
  "art": { word: "art", phonetic: "/ɑːt/", pos: "n.", translation: "艺术，美术" },
  "article": { word: "article", phonetic: "/ˈɑː.tɪ.kəl/", pos: "n.", translation: "文章，物品，条款" },
  "artificial": { word: "artificial", phonetic: "/ˌɑː.tɪˈfɪʃ.əl/", pos: "adj.", translation: "人工的，人造的" },
  "artist": { word: "artist", phonetic: "/ˈɑː.tɪst/", pos: "n.", translation: "艺术家，画家" },
  "artistic": { word: "artistic", phonetic: "/ɑːˈtɪs.tɪk/", pos: "adj.", translation: "艺术的" },
  "ashamed": { word: "ashamed", phonetic: "/əˈʃeɪmd/", pos: "adj.", translation: "羞愧的，惭愧的" },
  "ask": { word: "ask", phonetic: "/ɑːsk/", pos: "v.", translation: "问，要求" },
  "asleep": { word: "asleep", phonetic: "/əˈsliːp/", pos: "adj.", translation: "睡着的" },
  "aspect": { word: "aspect", phonetic: "/ˈæs.pekt/", pos: "n.", translation: "方面，面貌" },
  "aspire": { word: "aspire", phonetic: "/əˈspaɪər/", pos: "v.", translation: "渴望，追求" },
  "assemble": { word: "assemble", phonetic: "/əˈsem.bəl/", pos: "v.", translation: "集合，装配" },
  "assembly": { word: "assembly", phonetic: "/əˈsem.bli/", pos: "n.", translation: "集会，装配" },
  "assert": { word: "assert", phonetic: "/əˈsɜːt/", pos: "v.", translation: "断言，声称" },
  "assess": { word: "assess", phonetic: "/əˈses/", pos: "v.", translation: "评估，估算" },
  "assessment": { word: "assessment", phonetic: "/əˈses.mənt/", pos: "n.", translation: "评估，评价" },
  "asset": { word: "asset", phonetic: "/ˈæs.et/", pos: "n.", translation: "资产，长处" },
  "assign": { word: "assign", phonetic: "/əˈsaɪn/", pos: "v.", translation: "分配，指派" },
  "assignment": { word: "assignment", phonetic: "/əˈsaɪn.mənt/", pos: "n.", translation: "任务，作业" },
  "assist": { word: "assist", phonetic: "/əˈsɪst/", pos: "v.", translation: "协助，帮助" },
  "assistance": { word: "assistance", phonetic: "/əˈsɪs.təns/", pos: "n.", translation: "协助，援助" },
  "assistant": { word: "assistant", phonetic: "/əˈsɪs.tənt/", pos: "n.", translation: "助手，助理" },
  "associate": { word: "associate", phonetic: "/əˈsəʊ.si.eɪt/", pos: "v./n.", translation: "联想；伙伴" },
  "association": { word: "association", phonetic: "/əˌsəʊ.siˈeɪ.ʃən/", pos: "n.", translation: "协会，联合" },
  "assume": { word: "assume", phonetic: "/əˈsjuːm/", pos: "v.", translation: "假定，承担" },
  "assumption": { word: "assumption", phonetic: "/əˈsʌmp.ʃən/", pos: "n.", translation: "假定，设想" },
  "assure": { word: "assure", phonetic: "/əˈʃɔːr/", pos: "v.", translation: "向...保证" },
  "astonish": { word: "astonish", phonetic: "/əˈstɒn.ɪʃ/", pos: "v.", translation: "使惊讶" },
  "astonishing": { word: "astonishing", phonetic: "/əˈstɒn.ɪ.ʃɪŋ/", pos: "adj.", translation: "惊人的，令人吃惊的" },
  "atmosphere": { word: "atmosphere", phonetic: "/ˈæt.məs.fɪər/", pos: "n.", translation: "大气层，氛围" },
  "atom": { word: "atom", phonetic: "/ˈæt.əm/", pos: "n.", translation: "原子" },
  "attach": { word: "attach", phonetic: "/əˈtætʃ/", pos: "v.", translation: "附加，贴上" },
  "attack": { word: "attack", phonetic: "/əˈtæk/", pos: "v./n.", translation: "攻击，袭击" },
  "attain": { word: "attain", phonetic: "/əˈteɪn/", pos: "v.", translation: "达到，获得" },
  "attempt": { word: "attempt", phonetic: "/əˈtempt/", pos: "n./v.", translation: "企图，尝试" },
  "attend": { word: "attend", phonetic: "/əˈtend/", pos: "v.", translation: "出席，参加" },
  "attention": { word: "attention", phonetic: "/əˈten.ʃən/", pos: "n.", translation: "注意力，留心" },
  "attitude": { word: "attitude", phonetic: "/ˈæt.ɪ.tʃuːd/", pos: "n.", translation: "态度，看法" },
  "attract": { word: "attract", phonetic: "/əˈtrækt/", pos: "v.", translation: "吸引，引诱" },
  "attraction": { word: "attraction", phonetic: "/əˈtræk.ʃən/", pos: "n.", translation: "吸引力，景致" },
  "attractive": { word: "attractive", phonetic: "/əˈtræk.tɪv/", pos: "adj.", translation: "有吸引力的" },
  "attribute": { word: "attribute", phonetic: "/əˈtrɪb.juːt/", pos: "v./n.", translation: "归因于；属性" },
  "audience": { word: "audience", phonetic: "/ˈɔː.di.əns/", pos: "n.", translation: "听众，观众" },
  "august": { word: "august", phonetic: "/ˈɔː.ɡəst/", pos: "n.", translation: "八月" },
  "author": { word: "author", phonetic: "/ˈɔː.θər/", pos: "n.", translation: "作者，创始人" },
  "authority": { word: "authority", phonetic: "/ɔːˈθɒr.ə.ti/", pos: "n.", translation: "权威，官方机构" },
  "auto": { word: "auto", phonetic: "/ˈɔː.təʊ/", pos: "n.", translation: "汽车" },
  "automatic": { word: "automatic", phonetic: "/ˌɔː.təˈmæt.ɪk/", pos: "adj.", translation: "自动的" },
  "automatically": { word: "automatically", phonetic: "/ˌɔː.təˈmæt.ɪ.kəl.i/", pos: "adv.", translation: "自动地" },
  "autonomous": { word: "autonomous", phonetic: "/ɔːˈtɒn.ə.məs/", pos: "adj.", translation: "自治的，自主的" },
  "available": { word: "available", phonetic: "/əˈveɪ.lə.bəl/", pos: "adj.", translation: "可获得的，可用的" },
  "avenue": { word: "avenue", phonetic: "/ˈæv.ə.njuː/", pos: "n.", translation: "大街，途径" },
  "average": { word: "average", phonetic: "/ˈæv.ər.ɪdʒ/", pos: "n./adj.", translation: "平均数；平均的" },
  "avoid": { word: "avoid", phonetic: "/əˈvɔɪd/", pos: "v.", translation: "避免，回避" },
  "await": { word: "await", phonetic: "/əˈweɪt/", pos: "v.", translation: "等待，等候" },
  "award": { word: "award", phonetic: "/əˈwɔːd/", pos: "n./v.", translation: "奖品；授予" },
  "aware": { word: "aware", phonetic: "/əˈweər/", pos: "adj.", translation: "意识到的，知道的" },
  "awareness": { word: "awareness", phonetic: "/əˈweə.nəs/", pos: "n.", translation: "意识，认识" },
  "away": { word: "away", phonetic: "/əˈweɪ/", pos: "adv.", translation: "离开，远离" },
  "awful": { word: "awful", phonetic: "/ˈɔː.fəl/", pos: "adj.", translation: "可怕的，糟糕的" }
};

/**
 * Universal Stemming & Safe Dictionary Lookup Engine
 * Never returns null, never throws exceptions!
 */
export function lookupOfflineDict(rawWord: string): DictEntry {
  if (!rawWord) {
    return { word: "word", pos: "n.", translation: "暂未找到释义" };
  }

  try {
    const cleanWord = rawWord.trim().toLowerCase().replace(/[^a-z-]/g, '');
    if (!cleanWord || cleanWord.length < 1) {
      return { word: rawWord, pos: "word", translation: `[${rawWord}] 支持点击播放发音` };
    }

    // 1. Direct match
    if (offlineDict[cleanWord]) {
      return { ...offlineDict[cleanWord], word: rawWord };
    }

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
    ];

    for (const c of candidates) {
      if (c && offlineDict[c]) {
        return {
          ...offlineDict[c],
          word: rawWord
        };
      }
    }
  } catch (err) {
    // Prevent any crash
  }

  // 3. Guaranteed Safe Fallback Entry
  const cleanWord = rawWord.trim().toLowerCase().replace(/[^a-z-]/g, '');
  return {
    word: rawWord,
    phonetic: `/${cleanWord || rawWord}/`,
    pos: "word",
    translation: `[生词: ${rawWord}] 支持点击发音聆听标准美音`
  };
}

/**
 * Safe Dual Engine Fetch (Async API fallback)
 */
export async function fetchWordDefinition(rawWord: string): Promise<DictEntry> {
  const local = lookupOfflineDict(rawWord);
  // If local dictionary already has explicit translation
  if (local && !local.translation.includes("暂未找到释义") && !local.translation.includes("点击发音")) {
    return local;
  }

  try {
    const cleanWord = rawWord.trim().toLowerCase().replace(/[^a-z-]/g, '');
    if (cleanWord) {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${cleanWord}`);
      if (response.ok) {
        const data = await response.json();
        if (data && data[0]) {
          const item = data[0];
          const phonetic = item.phonetic || (item.phonetics && item.phonetics.find((p: any) => p.text)?.text) || `/${cleanWord}/`;
          const firstMeaning = item.meanings && item.meanings[0];
          const pos = firstMeaning ? firstMeaning.partOfSpeech + "." : "v./n.";
          const def = firstMeaning && firstMeaning.definitions && firstMeaning.definitions[0] ? firstMeaning.definitions[0].definition : "";

          if (def) {
            return {
              word: rawWord,
              phonetic: phonetic,
              pos: pos,
              translation: def
            };
          }
        }
      }
    }
  } catch (err) {
    // Silent catch, no white screen
  }

  return local;
}
