const SCALE = [
  { id: 0, label: "不认同", value: 0, size: "lg", tone: "no" },
  { id: 1, label: "", value: 25, size: "md", tone: "no-soft" },
  { id: 2, label: "无感", value: 50, size: "sm", tone: "mid" },
  { id: 3, label: "", value: 75, size: "md", tone: "yes-soft" },
  { id: 4, label: "非常认同", value: 100, size: "lg", tone: "yes" }
];

/**
 * scores 支持正负权重：
 * - 正权重：越认同，该动物分越高
 * - 负权重：越不认同，该动物分越高（对立项）
 * reverse: true 时先把分值翻成 100-value，再按权重计入
 */
const QUESTIONS = [
  // Dom / Master
  { id: 1, text: "我喜欢支配伴侣，尤其是在卧室里。", scores: { panther: 1, rabbit: -0.55, dog: -0.35 } },
  { id: 2, text: "我喜欢伴侣在卧室里完全由我发号施令。", scores: { panther: 1, rabbit: -0.5, dove: -0.25 } },
  { id: 3, text: "我希望伴侣为我服务，并且认为我的地位更高。", scores: { panther: 1, dog: 0.35, rabbit: -0.35 } },
  { id: 4, text: "我希望伴侣长时间向我臣服，我也愿意承担随之而来的责任。", scores: { panther: 0.9, lion: 0.55, dog: 0.25 } },
  { id: 5, text: "我想控制伴侣的衣服和外表。", scores: { panther: 0.85, lion: 0.45, raven: 0.25 } },
  { id: 6, text: "顺从者的项圈比领导者的鞭子更让我有感觉。", scores: { rabbit: 0.8, dog: 0.7, panther: -0.7, shark: -0.35 } },

  // Owner / CG
  { id: 7, text: "我想把伴侣当成宠物来照料，包括笼子、喂食和抚摸。", scores: { lion: 1, dog: 0.35, panther: 0.25 } },
  { id: 8, text: "我会自然而然地在一段关系中承担培育、引导的责任，成为像父母一样的角色。", scores: { lion: 1, rabbit: 0.35, lynx: 0.2 } },

  // Pet / Slave
  { id: 9, text: "我想被当成宠物，被放进笼子、被喂食、被抚摸。", scores: { dog: 1, rabbit: 0.3, panther: -0.25 } },
  { id: 10, text: "我喜欢被伴侣当成宠物，被关在笼子里，用宠物专用的碗吃饭，被抚摸等。", scores: { dog: 1, rabbit: 0.25 } },
  { id: 11, text: "我喜欢表现得像一个宠物（狗、猫、小马驹等）。", scores: { dog: 1, deer: 0.2 } },
  { id: 12, text: "我想每周7天、每天24小时不间断地服务我的伴侣，并把它当作我一生的目标。", scores: { dog: 1, jellyfish: 0.25 } },
  { id: 13, text: "和一群属于我、服务于我的奴隶生活在一起是我人生的终极目标。", scores: { panther: 0.75, dog: 0.35, dolphin: 0.35 } },
  { id: 14, text: "我想在一个正式的环境中（为主人）服务，并且有严格的奴隶训练、规定好的身体姿势和仪式等。", scores: { dog: 1, dove: 0.25 } },
  { id: 15, text: "我想成为某人生活里的侍从，替对方打理事务。", scores: { dog: 0.9, rabbit: 0.35 } },
  { id: 16, text: "完成别人为我定下的任务，会让我高兴。", scores: { dog: 0.75, rabbit: 0.45 } },

  // Submissive
  { id: 17, text: "我喜欢被控制，尤其是在卧室里。", scores: { rabbit: 0.7, dog: 0.55, dove: 0.3, panther: -0.45 } },
  { id: 18, text: "我不喜欢做那些亲密上的决定，更希望伴侣来定。", scores: { rabbit: 1, dog: 0.4, panther: -0.5 } },
  { id: 19, text: "我觉得有必要侍奉伴侣，并且认为对方的地位比我高。", scores: { dog: 0.8, rabbit: 0.55 } },
  { id: 20, text: "在理想的关系里，我可以把决定权交给伴侣，由对方判断什么对我好。", scores: { rabbit: 1, dog: 0.4 } },
  { id: 21, text: "有时候我更想被对方强势地带进顺从里，而不是我自己先开口交出去。", scores: { deer: 0.7, fox: 0.45, rabbit: 0.4 } },
  { id: 22, text: "信任到可以把控制权交出去，这件事本身就很吸引我。", scores: { rabbit: 0.9, dog: 0.45 } },

  // Switch
  { id: 23, text: "我可以这一次顺从，下一次又变成支配的一方。", scores: { octopus: 1, panther: 0.2, rabbit: 0.2 } },
  { id: 24, text: "我没法一直只当支配方，也没法一直只当顺从方。", scores: { octopus: 1 } },
  { id: 25, text: "面对同一个人，我也想两边都试过（有时我主导发号施令，有时我臣服被安排）。", scores: { octopus: 1 } },
  { id: 26, text: "我可以在某一时间段内臣服于我的伴侣，然后在另一个时候支配TA（无论是对同一个人或者另一个人）。", scores: { octopus: 1 } },

  // Brat
  { id: 27, text: "故意跟支配方拧着来，是我作为顺从方的乐趣。", scores: { fox: 1, lynx: 0.25, deer: 0.2 } },
  { id: 28, text: "我不服从常常是在逗对方，不是真的想把位置反过来。", scores: { fox: 1, rabbit: 0.2 } },
  { id: 29, text: "用顽皮或者反抗的方式来和支配者对话是臣服者的乐趣之一。", scores: { fox: 1 } },

  // Brat Tamer
  { id: 30, text: "我喜欢伴侣故意顶嘴或反抗，然后再被我管教回来。", scores: { lynx: 1, wolf: 0.4, panther: 0.25 } },
  { id: 31, text: "对方越是调皮捣蛋，我越想把他/她按回去。", scores: { lynx: 1, wolf: 0.3 } },

  // Sadist
  { id: 32, text: "给伴侣带来疼痛，并看到淤青、眼泪这些反应，这件事吸引我。", scores: { shark: 1, wolf: 0.25, scorpion: -0.35 } },
  { id: 33, text: "折磨某人的想法本身就吸引我。", scores: { shark: 1, crocodile: 0.3 } },
  { id: 34, text: "在两人同意的前提下，粗鲁地对待伴侣吸引我。", scores: { shark: 0.7, crocodile: 0.55 } },
  { id: 35, text: "我喜欢自己去追逐，主动去按住对方的那种感觉。", scores: { wolf: 1, shark: 0.35, deer: -0.35 } },

  // Masochist
  { id: 36, text: "我喜欢疼痛，也不排斥它留下的淤青和眼泪。", scores: { scorpion: 1, shark: -0.35, dove: 0.2 } },
  { id: 37, text: "被适度折磨的想法吸引我。", scores: { scorpion: 1, moth: 0.25 } },
  { id: 38, text: "我喜欢身体完全由对方摆布，自己处在使不上劲的状态。", scores: { scorpion: 0.55, dove: 0.6, jellyfish: 0.4 } },
  { id: 39, text: "我喜欢对方有力量、很强硬地靠近。", scores: { scorpion: 0.45, deer: 0.55, wolf: 0.25 } },

  // Hunter / Prey
  { id: 40, text: "我喜欢追踪、围猎和逐步逼近伴侣的过程，而不仅仅是最终抓住。", scores: { wolf: 1, deer: -0.4 } },
  { id: 41, text: "把伴侣逼到无处可逃的感觉，会让我非常兴奋。", scores: { wolf: 1, lynx: 0.25 } },
  { id: 42, text: "我喜欢自己像猎物，被一个更强的人追上。", scores: { deer: 1, wolf: -0.45 } },

  // Rigger / Rope Bunny
  { id: 43, text: "我想把伴侣限制住，用绳子、镣铐或其他东西。", scores: { widow: 1, dove: -0.35 } },
  { id: 44, text: "我喜欢用绳子把伴侣绑出漂亮的花样，而不仅仅是限制行动。", scores: { widow: 1 } },
  { id: 45, text: "绑缚的过程和最终呈现的效果，对我来说都很重要。", scores: { widow: 1, raven: 0.2 } },
  { id: 46, text: "我想自己被完全束缚住。", scores: { dove: 1, widow: -0.35 } },
  { id: 47, text: "我喜欢被绳子紧紧包裹，完全失去行动能力的感觉。", scores: { dove: 1, scorpion: 0.25 } },
  { id: 48, text: "长时间被绑着、无法挣脱，会让我产生强烈的满足。", scores: { dove: 1, jellyfish: 0.25 } },

  // Tools
  { id: 49, text: "鞭子、手铐这类东西在我的幻想里占很重的位置。", scores: { shark: 0.45, widow: 0.45, scorpion: 0.35, dove: 0.3 } },
  { id: 50, text: "我想象过自己成为性奴，或者拥有一个性奴。", scores: { dog: 0.65, panther: 0.65 } },

  // Degrader / Degradee
  { id: 51, text: "我喜欢用语言羞辱伴侣，或用不好听的称呼叫对方。", scores: { crocodile: 1, moth: -0.4 } },
  { id: 52, text: "我喜欢用语言贬低伴侣，让对方觉得自己低等或没用。", scores: { crocodile: 1 } },
  { id: 53, text: "把伴侣当作物品或工具来称呼和对待，会让我兴奋。", scores: { crocodile: 0.75, jellyfish: 0.4 } },
  { id: 54, text: "我喜欢被语言羞辱，或被用不好听的称呼叫。", scores: { moth: 1, crocodile: -0.4 } },
  { id: 55, text: "我喜欢在私密生活中被语言羞辱或者被叫羞辱性的称呼。", scores: { moth: 1 } },
  { id: 56, text: "我喜欢被贬低、被叫废物或者被当成没有价值的东西。", scores: { moth: 1, jellyfish: 0.3 } },
  { id: 57, text: "对方用羞辱性的语言让我觉得自己低人一等时，我会更兴奋。", scores: { moth: 1 } },

  // Furniture
  { id: 58, text: "我想被当成桌子、椅子或者装饰品使用，长时间保持一个姿势不动。", scores: { jellyfish: 1, dove: 0.25 } },
  { id: 59, text: "被当作没有意识的物品对待，会让我产生满足感。", scores: { jellyfish: 1, moth: 0.25 } },
  { id: 60, text: "我喜欢被摆放在某个位置，任由对方使用或忽视。", scores: { jellyfish: 1 } },

  // Little
  { id: 61, text: "我喜欢扮演和我真实年龄有（较大）区别的角色。", scores: { rabbit: 1, lion: 0.2 } },
  { id: 62, text: "我喜欢穿着或表现得像小孩子一样，或做适合小孩子的事情，如给绘画书上色或去游乐场。", scores: { rabbit: 1 } },
  { id: 63, text: "我喜欢回归到更小的年龄状态，被对方照顾和引导。", scores: { rabbit: 1, lion: 0.3 } },
  { id: 64, text: "穿着或行为像小孩子，并被对方当成小朋友对待，会让我感到安心和兴奋。", scores: { rabbit: 1 } },
  { id: 65, text: "和我年龄差很大的成年人，会让我更有兴趣。", scores: { rabbit: 0.55, lion: 0.45 } },

  // Exhibition / Voyeur
  { id: 66, text: "我想让别人看到我的身体或很大尺度的照片。", scores: { peacock: 1, owl: -0.25 } },
  { id: 67, text: "不完全私密的场合，也会让我更有感觉。", scores: { peacock: 0.9, horse: 0.2 } },
  { id: 68, text: "我喜欢让别人看到我的裸体，甚至（尤其）是在他们没有打算去这么做的时候。", scores: { peacock: 1 } },
  { id: 69, text: "在公开一点的场合做支配或顺从的游戏，这个想法吸引我。", scores: { peacock: 0.75, octopus: 0.3 } },
  { id: 70, text: "我喜欢看别人的身体或很大尺度的行为，尤其是对方没料到被看的时候。", scores: { owl: 1, peacock: -0.2 } },
  { id: 71, text: "暗处看着对方，比自己上场更让我满足。", scores: { owl: 1 } },

  // Open / NTR / Group
  { id: 72, text: "如果伴侣满足不了我的偏好，我会想另外找人补上。", scores: { horse: 1, hermit: 0.2 } },
  { id: 73, text: "如果我不能满足自己伴侣的所有欲望，我会鼓励TA去找别人来满足TA。", scores: { horse: 0.85, hermit: 0.4, cuckoo: 0.25 } },
  { id: 74, text: "我不排斥同一段时间里和多于一个人发生亲密关系。", scores: { horse: 0.75, dolphin: 0.55 } },
  { id: 75, text: "如果我是单身，我出于性关系和/或情感目的，想加入一对情侣或多人关系。", scores: { horse: 0.65, dolphin: 0.5, cuckoo: 0.25 } },
  { id: 76, text: "我喜欢把伴侣分享给别人，并且由我来掌控整个过程。", scores: { cuckoo: 1, horse: 0.3 } },
  { id: 77, text: "看着或者知道伴侣被别人占有，会让我产生强烈的兴奋。", scores: { cuckoo: 0.65, hermit: 0.55 } },
  { id: 78, text: "我享受安排伴侣和其他人发生关系，并从中获得主导感。", scores: { cuckoo: 1, panther: 0.25 } },
  { id: 79, text: "看着或想象伴侣被别人占有，会让我产生强烈的兴奋和屈辱感。", scores: { hermit: 1, cuckoo: -0.25 } },
  { id: 80, text: "我喜欢被要求看着伴侣和别人发生关系，自己却无法参与。", scores: { hermit: 1 } },
  { id: 81, text: "伴侣被别人更好地满足时，会让我感到既痛苦又兴奋。", scores: { hermit: 1 } },
  { id: 82, text: "我想和多个人同时发生亲密关系，而不是一对一。", scores: { dolphin: 1, horse: 0.3 } },
  { id: 83, text: "在多人同时参与的场合里，我会比单独相处时更兴奋。", scores: { dolphin: 1 } },
  { id: 84, text: "我喜欢被多个人一起对待，或者同时对待多个人。", scores: { dolphin: 1 } },

  // Foot / Material fetish
  { id: 85, text: "伴侣的脚比其他部位更能先打动我。", scores: { centipede: 1, raven: 0.2 } },
  { id: 86, text: "我喜欢亲吻、舔舐或被对方用脚对待。", scores: { centipede: 1 } },
  { id: 87, text: "看到或接触到脚，会比其他身体部位更快让我产生欲望。", scores: { centipede: 1 } },
  { id: 88, text: "某种特定材质（比如皮革、乳胶、丝袜、制服）会比裸体本身更能让我兴奋。", scores: { raven: 1, centipede: 0.25 } },
  { id: 89, text: "我喜欢伴侣穿着特定材质的衣物，而不是完全赤裸。", scores: { raven: 1 } },
  { id: 90, text: "触摸或被某种材质包裹，会让我产生强烈的性唤起。", scores: { raven: 1 } },

  // Other / reverse / orientation soft
  { id: 91, text: "我喜欢在卧室之外的地方寻求刺激。", scores: { peacock: 0.55, horse: 0.35, octopus: 0.3 } },
  { id: 92, text: "就算觉得自己可能不喜欢，我也愿意先试一次。", scores: { octopus: 0.75, horse: 0.3 } },
  { id: 93, text: "我的幻想很多，而且我比一般人更想把它们试出来。", scores: { octopus: 0.7, peacock: 0.3 } },
  { id: 94, text: "我没有任何恋物癖（皮革、乳胶、丝袜等等）。", scores: { raven: 1, centipede: 0.4 }, reverse: true },
  { id: 95, text: "亲密时我会想发出低吼或嚎叫，表现得像动物。", scores: { wolf: 0.45, deer: 0.45, dog: 0.3 } },
  { id: 96, text: "我会和同性亲吻、爱抚。", scores: { horse: 0.35, octopus: 0.35, dolphin: 0.2 } },
  { id: 97, text: "我可以爱上同性（不一定要发生性关系）。", scores: { horse: 0.3, octopus: 0.3 } },
  { id: 98, text: "我排斥和同性发生性行为。", scores: { horse: 0.4, dolphin: 0.2 }, reverse: true },
  { id: 99, text: "我排斥和异性发生性行为。", scores: { horse: 0.25, octopus: 0.25 }, reverse: true },
  { id: 100, text: "当接触到异性之间发生性关系的讯息时（例如八卦消息、影片等），我会有“性奋”的感觉。", scores: { owl: 0.4, peacock: 0.25 } },
  { id: 101, text: "当我有心理困扰的时候，我会找同性朋友倾诉。", scores: { horse: 0.2, octopus: 0.2 } },
  { id: 102, text: "我可以接受寻找异性发泄性欲。", scores: { horse: 0.4 } }
];
