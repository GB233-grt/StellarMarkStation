export interface Civilization {
  name: string
  x: number
  y: number
  z: number
  size: 'small' | 'medium' | 'large' | 'galaxy'
}

export interface Outcome {
  type: 'clean' | 'hide' | 'lock'
  title: string
  description: string
}

export const darkForestOutcomes: Record<string, Outcome> = {
  clean: {
    type: 'clean',
    title: '二向箔清理',
    description: '你的文明坐标已暴露。一艘歌者飞船发现了这个星系，向太阳系投掷了一张二向箔。在三维世界的最后时刻，你目睹了整个太阳系被不可逆地压入二维平面，一切归于寂静。'
  },
  hide: {
    type: 'hide',
    title: '隐匿存活',
    description: '幸运的是，你的文明选择了正确的策略。在暴露坐标后，你们立即启动了黑域计划，将太阳系转化为低光速黑洞。这个举动成功欺骗了所有可能的观察者，你们的文明得以在黑暗森林中继续生存。'
  },
  lock: {
    type: 'lock',
    title: '水滴锁定',
    description: '三体探测器"水滴"已经抵达太阳系。它以接近光速的速度摧毁了你们的太空舰队，封锁了太阳的电磁波频段。你们的文明被降维至无法威胁三体世界的程度，被迫接受奴役。'
  }
}

export function calculateDarkForestOutcome(civ: Civilization): Outcome {
  const random = Math.random()
  const sizeFactor = civ.size === 'galaxy' ? 0.6 : civ.size === 'large' ? 0.5 : civ.size === 'medium' ? 0.4 : 0.3
  
  const risk = sizeFactor + (Math.abs(civ.x) + Math.abs(civ.y) + Math.abs(civ.z)) / 300
  
  if (random < risk * 0.5) {
    return darkForestOutcomes.clean
  } else if (random < risk * 0.8) {
    return darkForestOutcomes.lock
  } else {
    return darkForestOutcomes.hide
  }
}

export interface WallfacerPlan {
  strategy: string
}

export interface WallfacerResult {
  success: boolean
  analysis: string
}

export const wallfacerAnalyses = {
  success: [
    '你的计划通过了破壁人的分析。策略的关键在于利用了猜疑链的盲点，让三体人无法判断你的真实意图。面壁计划成功，人类文明获得了宝贵的喘息时间。',
    '破壁人未能看穿你的伪装。你的策略建立在量子纠缠的不可预测性之上，三体人的思维透明特性让他们无法理解这种深层次的欺骗。计划成功。',
    '你的方案完美利用了黑暗森林法则。通过构建虚假的坐标广播系统，你成功误导了三体舰队的航向。面壁计划取得了阶段性胜利。'
  ],
  failure: [
    '破壁人在第一时间看穿了你的计划。你的策略中存在一个致命的逻辑漏洞——在绝对的技术差距面前，任何计谋都显得苍白无力。面壁计划失败。',
    '三体文明通过智子实时监控了你的所有思考过程。你的计划从一开始就暴露在敌人的视野中，没有任何成功的可能。',
    '你的方案基于对三体人心理的误判。他们并非你想象中的理性文明，而是一个完全服从于生存本能的物种。计划被轻易破解。'
  ]
}

export function simulateWallfacer(plan: WallfacerPlan): WallfacerResult {
  const success = Math.random() > 0.5
  const analyses = success ? wallfacerAnalyses.success : wallfacerAnalyses.failure
  return {
    success,
    analysis: analyses[Math.floor(Math.random() * analyses.length)]
  }
}

export interface CivilizationQuestion {
  question: string
  options: string[]
  scores: number[]
}

export const civilizationQuestions: CivilizationQuestion[] = [
  {
    question: '你的文明能够利用的能源范围是？',
    options: ['仅限于行星本身', '整个恒星系', '银河系级别的能源', '跨星系能源网络'],
    scores: [1, 2, 3, 4]
  },
  {
    question: '你的文明的宇宙航行能力如何？',
    options: ['无法离开母星', '能够在太阳系内航行', '能够进行恒星际航行', '能够进行跨星系航行'],
    scores: [1, 2, 3, 4]
  },
  {
    question: '你的文明对宇宙的认知程度？',
    options: ['仅限于本星系', '了解银河系结构', '理解宇宙基本规律', '掌握宇宙终极奥秘'],
    scores: [1, 2, 3, 4]
  },
  {
    question: '你的文明的信息处理能力？',
    options: ['基于传统计算机', '量子计算机普及', '神经网络覆盖整个文明', '意识上传成为常态'],
    scores: [1, 2, 3, 4]
  },
  {
    question: '你的文明能否改造天体？',
    options: ['无法改造任何天体', '能够改造行星环境', '能够建造戴森球', '能够重构恒星结构'],
    scores: [1, 2, 3, 4]
  }
]

export interface KardashevResult {
  level: number
  description: string
  name: string
}

export function calculateKardashevLevel(answers: number[]): KardashevResult {
  const total = answers.reduce((sum, score) => sum + score, 0)
  const avg = total / answers.length
  
  if (avg < 1.5) {
    return { level: 1, description: '你的文明处于卡尔达肖夫I型，能够利用母星的全部能源。这是迈向星际文明的第一步。', name: '行星文明' }
  } else if (avg < 2.5) {
    return { level: 2, description: '你的文明处于卡尔达肖夫II型，能够利用整个恒星系的能源。戴森球不再是梦想。', name: '恒星文明' }
  } else if (avg < 3.5) {
    return { level: 3, description: '你的文明处于卡尔达肖夫III型，能够利用整个银河系的能源。你已成为宇宙中的重要力量。', name: '银河文明' }
  } else {
    return { level: 4, description: '你的文明处于卡尔达肖夫IV型，超越了常规的能源利用概念。你已触及宇宙的终极奥秘。', name: '宇宙文明' }
  }
}

export interface DeterrenceResult {
  choice: 'press' | 'release'
  outcome: string
}

export const deterrenceOutcomes = {
  press: [
    '你按下了引力波发射器的按钮。三体世界的坐标被广播到整个宇宙。在接下来的几个世纪里，你目睹了三体星系被未知的力量摧毁。人类文明虽然获得了暂时的安全，但也暴露在黑暗森林的视野中。',
    '引力波以光速向宇宙扩散。三体舰队立即转向逃离，同时向人类表达了求和的意愿。威慑建立，两个文明进入了脆弱的和平期。'
  ],
  release: [
    '你松开了手指。三体舰队继续向太阳系前进，没有任何犹豫。四年后，水滴抵达地球，人类文明的历史在此终结。',
    '威慑失败。三体人控制了引力波发射器，人类被迫迁往澳大利亚。黑暗森林的法则再次得到验证：弱小和无知不是生存的障碍，傲慢才是。'
  ]
}

export function simulateDeterrence(choice: 'press' | 'release'): DeterrenceResult {
  const outcomes = deterrenceOutcomes[choice]
  return {
    choice,
    outcome: outcomes[Math.floor(Math.random() * outcomes.length)]
  }
}

export interface SurvivalOption {
  id: string
  text: string
  isCorrect: boolean
}

export const survivalScenarios = [
  {
    scenario: '三日凌空降临，地表温度急剧上升',
    options: [
      { id: 'a', text: '潜入地下深处的掩体', isCorrect: true },
      { id: 'b', text: '建造巨大的遮阳屏障', isCorrect: false },
      { id: 'c', text: '发射核弹试图改变恒星轨道', isCorrect: false },
      { id: 'd', text: '全体进入脱水状态', isCorrect: true }
    ]
  },
  {
    scenario: '乱纪元突然降临，无法预测下一次恒纪元的时间',
    options: [
      { id: 'a', text: '建造太空城逃离行星', isCorrect: true },
      { id: 'b', text: '继续等待恒纪元到来', isCorrect: false },
      { id: 'c', text: '向其他文明求助', isCorrect: false },
      { id: 'd', text: '启动行星发动机逃离星系', isCorrect: true }
    ]
  },
  {
    scenario: '飞星不动，漫长的严寒即将来临',
    options: [
      { id: 'a', text: '建造地热发电站维持生存', isCorrect: true },
      { id: 'b', text: '向恒星方向迁徙', isCorrect: false },
      { id: 'c', text: '利用核聚变制造人工太阳', isCorrect: true },
      { id: 'd', text: '放弃地表转入地下城市', isCorrect: true }
    ]
  }
]

export interface SurvivalResult {
  survived: boolean
  message: string
}

export function calculateSurvival(options: string[], scenarioIndex: number): SurvivalResult {
  const scenario = survivalScenarios[scenarioIndex]
  const correctCount = options.filter(opt => {
    const option = scenario.options.find(o => o.id === opt)
    return option?.isCorrect
  }).length
  
  const totalCorrect = scenario.options.filter(o => o.isCorrect).length
  const survivalRate = correctCount / totalCorrect
  
  if (survivalRate >= 0.6) {
    return {
      survived: true,
      message: `你的选择成功让文明度过了这场危机！${correctCount}/${totalCorrect}的正确决策确保了文明的延续。`
    }
  } else {
    return {
      survived: false,
      message: `文明未能在乱纪元中幸存。正确答案是：${scenario.options.filter(o => o.isCorrect).map(o => o.text).join('、')}`
    }
  }
}

export interface StarIdentity {
  id: string
  name: string
  description: string
  avatar: string
}

export const starIdentities: StarIdentity[] = [
  {
    id: 'trisolaran',
    name: '三体士兵',
    description: '你是三体帝国的一名普通士兵，隶属于三体舰队第一阵列。在漫长的星际航行中，你经历了脱水与复活的循环，见证了文明的兴衰。你的使命是为三体文明开拓新的生存空间。',
    avatar: '👽'
  },
  {
    id: 'captain',
    name: '太空舰长',
    description: '你是人类太空舰队"自然选择号"的舰长。在末日战役中，你做出了逃亡的决定，成为了星舰文明的先驱。你将带领幸存者在宇宙中寻找新的家园。',
    avatar: '🚀'
  },
  {
    id: 'singer',
    name: '歌者',
    description: '你是一名来自远方星系的清洁工，负责清理宇宙中的低熵体。你手中的二向箔是最优雅的清理工具。在你眼中，整个宇宙只是一首需要被清理的诗篇。',
    avatar: '🎵'
  },
  {
    id: 'zerower',
    name: '归零者',
    description: '你是宇宙的守护者，见证了无数文明的诞生与消亡。你的使命是在宇宙坍缩前归还所有物质，让宇宙能够重新开始。你是秩序的化身。',
    avatar: '🔮'
  },
  {
    id: 'human',
    name: '地球人',
    description: '你是普通的地球人类，生活在三体危机时代。虽然科技水平有限，但你的文明拥有三体人无法理解的韧性和创造力。在黑暗森林中，生存是你唯一的目标。',
    avatar: '👤'
  },
  {
    id: 'detector',
    name: '水滴探测器',
    description: '你是三体文明派出的探测器，由强相互作用力材料制成。你的任务是封锁太阳，监视人类文明的一举一动。在你面前，任何抵抗都显得微不足道。',
    avatar: '💧'
  },
  {
    id: 'wallfacer',
    name: '面壁者',
    description: '你是被联合国选中的面壁者之一，拥有不受限制的资源和权力。你的任务是制定对抗三体人的战略，而你的真实意图将永远成为秘密。',
    avatar: '🧠'
  },
  {
    id: 'sentry',
    name: '执剑人',
    description: '你是人类文明的执剑人，手握引力波发射器的开关。你的每一个决定都关系到两个文明的命运。在威慑的天平上，你是唯一的砝码。',
    avatar: '⚔️'
  }
]

export function drawRandomIdentity(): StarIdentity {
  return starIdentities[Math.floor(Math.random() * starIdentities.length)]
}