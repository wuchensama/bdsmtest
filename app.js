const ANIMALS = [
  { id: "panther", name: "黑豹", badge: "Dom", role: "支配者 / 主人", domain: "权力与暴力支配", en: "Dom / Master", dim: ["dom"], text: "制定规则、奖惩与长期契约，追求精神上的归属与秩序。", hasLogo: true },
  { id: "wolf", name: "头狼", badge: "猎手", role: "掠食者 / 管教者", domain: "权力与暴力支配", en: "Hunter", dim: ["dom", "pain", "flow"], text: "喜欢对方保留野性，用追逐、压制和管教完成征服。", hasLogo: true },
  { id: "shark", name: "白鲨", badge: "施虐", role: "施虐狂", domain: "权力与暴力支配", en: "Sadist", dim: ["dom", "pain"], text: "从施加高强度刺激和疼痛反馈中直接获得兴奋。", hasLogo: true },
  { id: "crocodile", name: "鳄鱼", badge: "羞辱", role: "羞辱者", domain: "权力与暴力支配", en: "Degrader", dim: ["dom", "taboo"], text: "用语言和姿态瓦解防线，快感来自把高傲者拉下神坛。", hasLogo: true },
  { id: "widow", name: "黑寡妇", badge: "缚手", role: "缚手", domain: "权力与暴力支配", en: "Rigger", dim: ["dom", "pain"], text: "享受绳艺、悬吊与行动剥夺，把身体当成秩序和雕塑。", hasLogo: true },
  { id: "lion", name: "雄狮", badge: "饲主", role: "饲主 / 爹地妈咪", domain: "权力与暴力支配", en: "Owner / CG", dim: ["dom", "romance"], text: "领地庇护、投喂与长期管教，强保护欲裹着照顾。", hasLogo: true },
  { id: "dog", name: "忠犬", badge: "忠犬", role: "宠物 / 忠诚奴", domain: "极度臣服与物化", en: "Pet / Slave", dim: ["sub", "romance"], text: "项圈、跪姿与绝对服从，在交出主权里获得归属。", hasLogo: true },
  { id: "scorpion", name: "蝎子", badge: "受虐", role: "受虐狂", domain: "极度臣服与物化", en: "Masochist", dim: ["sub", "pain"], text: "痛感转化成释放，迷恋印记、红肿与事后痕迹。", hasLogo: true },
  { id: "jellyfish", name: "水母", badge: "物化", role: "家具 / 物化奴", domain: "极度臣服与物化", en: "Furniture", dim: ["sub", "taboo"], text: "甘当静止道具，在无自我、无表情的工具化里解压。", hasLogo: true },
  { id: "moth", name: "飞蛾", badge: "被羞辱", role: "被羞辱者", domain: "极度臣服与物化", en: "Degradee", dim: ["sub", "taboo"], text: "越被贬低越兴奋，需要很强的事后安抚。", hasLogo: true },
  { id: "dove", name: "白鸽", badge: "受缚", role: "受缚者", domain: "极度臣服与物化", en: "Rope Bunny", dim: ["sub", "pain"], text: "痴迷被绑、失能与悬吊失重，无助里带着安全感。", hasLogo: true },
  { id: "rabbit", name: "垂耳兔", badge: "Little", role: "小朋友", domain: "极度臣服与物化", en: "Little / Ageplay", dim: ["sub", "romance"], text: "退行到被照顾、被引导的状态，依赖里有轻管教。", hasLogo: true },
  { id: "fox", name: "小狐狸", badge: "Brat", role: "捣蛋鬼", domain: "挑衅、逃逸与多变", en: "Brat", dim: ["sub", "flow"], text: "顶嘴和踩线是为了确认对方在乎，不是真想夺权。", hasLogo: true },
  { id: "lynx", name: "猞猁", badge: "驯服", role: "挑衅驯服者", domain: "挑衅、逃逸与多变", en: "Brat Tamer", dim: ["dom", "flow"], text: "专治作精，看穿套路后用强硬又带着趣味的方式按住。", hasLogo: true },
  { id: "deer", name: "梅花鹿", badge: "猎物", role: "猎物", domain: "挑衅、逃逸与多变", en: "Primal Prey", dim: ["sub", "flow", "pain"], text: "半推半就的追逐与被捕获，紧张感本身就是顶点。", hasLogo: true },
  { id: "octopus", name: "章鱼", badge: "Switch", role: "实验家 / 双属性", domain: "挑衅、逃逸与多变", en: "Switch", dim: ["flow"], text: "角色可换，玩法可试，强弱位置看对手和当天气氛。", hasLogo: true },
  { id: "cuckoo", name: "杜鹃", badge: "NTR", role: "NTR / 绿帽主", domain: "禁忌、越界与群体", en: "NTR Dom", dim: ["taboo", "dom"], text: "快感来自跨越排他边界，安排与占有他人伴侣。", hasLogo: true },
  { id: "hermit", name: "寄居蟹", badge: "绿帽", role: "绿帽奴", domain: "禁忌、越界与群体", en: "Cuckold", dim: ["taboo", "sub"], text: "旁观伴侣被他人占有，屈辱和兴奋缠在一起。", hasLogo: true },
  { id: "dolphin", name: "海豚", badge: "群体", role: "群体 / 放纵", domain: "禁忌、越界与群体", en: "Group / Orgy", dim: ["taboo", "flow"], text: "多人在场、交叉互动，比一对一更容易点燃。", hasLogo: true },
  { id: "horse", name: "野马", badge: "开放", role: "非单偶制 / 开放派", domain: "禁忌、越界与群体", en: "Open", dim: ["taboo", "flow"], text: "拒绝单一绑定，享受多线并行与自由探索。", hasLogo: true },
  { id: "centipede", name: "蜈蚣", badge: "恋足", role: "恋足 / 脚控", domain: "恋物与感官偏执", en: "Foot Fetish", dim: ["pain", "romance"], text: "兴奋点高度集中在足部线条、踩踏与袜足。", hasLogo: true },
  { id: "raven", name: "渡鸦", badge: "恋物", role: "材质恋物控", domain: "恋物与感官偏执", en: "Material Fetish", dim: ["pain", "romance"], text: "皮革、乳胶、丝袜等材质会先于情节打动你。", hasLogo: true },
  { id: "owl", name: "猫头鹰", badge: "窥看", role: "偷窥狂", domain: "恋物与感官偏执", en: "Voyeur", dim: ["taboo", "flow"], text: "我在暗、他在明，看本身就比上场更满。", hasLogo: true },
  { id: "peacock", name: "孔雀", badge: "暴露", role: "暴露狂", domain: "恋物与感官偏执", en: "Exhibitionist", dim: ["taboo", "romance"], text: "被看见的羞耻和兴奋会一起放大表现力。", hasLogo: true }
];

const DIMS = {
  dom: { name: "支配欲", text: "下命令、定秩序、掌控局面。" },
  sub: { name: "臣服欲", text: "交出去、被安排、在服从里安心。" },
  pain: { name: "感官痛觉", text: "施痛、受痛、绑缚与强烈身体刺激。" },
  romance: { name: "纯爱情调", text: "照顾、依恋、材质与关系养成。" },
  taboo: { name: "禁忌越界", text: "暴露、窥看、开放、NTR 与群体。" },
  flow: { name: "博弈流动", text: "追逐、挑衅、切换与多变位置。" }
};
const DIM_ORDER = ["dom", "sub", "pain", "romance", "taboo", "flow"];

const CORE = [
  { key: "panther", label: "Dom 支配", text: "谁下命令、定规则。" },
  { key: "dog", label: "Sub 顺从", text: "谁听命令、把选择交出去。" },
  { key: "shark", label: "S 施虐", text: "谁给予痛感与压迫。" },
  { key: "scorpion", label: "M 受虐", text: "谁接收痛感与失能。" }
];

// S / M 必须同序一一对应，交叉展示才用同一套轴。
const SM_PAIRS = [
  { sKey: "panther", mKey: "rabbit", sLabel: "支配", mLabel: "顺从", crossLabel: "支配 / 顺从" },
  { sKey: "lion", mKey: "dog", sLabel: "管教", mLabel: "宠物", crossLabel: "管教 / 宠物" },
  { sKey: "shark", mKey: "scorpion", sLabel: "施虐", mLabel: "受虐", crossLabel: "施虐 / 受虐" },
  { sKey: "crocodile", mKey: "moth", sLabel: "羞辱", mLabel: "被羞辱", crossLabel: "羞辱 / 被羞辱" },
  { sKey: "wolf", mKey: "deer", sLabel: "猎手", mLabel: "猎物", crossLabel: "猎手 / 猎物" },
  { sKey: "widow", mKey: "dove", sLabel: "缚手", mLabel: "受缚", crossLabel: "缚手 / 受缚" }
];
const S_RADAR = SM_PAIRS.map((item) => ({ key: item.sKey, label: item.sLabel }));
const M_RADAR = SM_PAIRS.map((item) => ({ key: item.mKey, label: item.mLabel }));
const CROSS_RADAR = SM_PAIRS.map((item, index) => ({ key: `pair${index}`, label: item.crossLabel, sKey: item.sKey, mKey: item.mKey }));
const MAIN_RADAR = DIM_ORDER.map((key) => ({ key, label: DIMS[key].name }));

const BALANCED = {
  id: "balanced",
  name: "万象",
  badge: "均衡",
  role: "全谱平衡",
  domain: "特殊结果",
  en: "Balanced",
  text: "这一轮多项倾向同时点亮，不是单一动物压过其余。",
  hasLogo: true
};

const GROUP_URL = "";
const PAGE_SIZE = 5;
const STORAGE_KEY = "desire-animal-v7";
const app = document.querySelector("#app");

let page = 0;
let order = [];
let picks = {};
let barPct = 0;
let showAllFeatures = false;
let smMode = "cross"; // s | m | cross
let lastResult = null;

const store = (() => {
  const memory = new Map();
  let backend = null;
  try {
    sessionStorage.setItem("__probe__", "1");
    sessionStorage.removeItem("__probe__");
    backend = sessionStorage;
  } catch {
    backend = null;
  }
  return {
    get(key) {
      if (backend) {
        try { return backend.getItem(key); } catch { backend = null; }
      }
      return memory.has(key) ? memory.get(key) : null;
    },
    set(key, value) {
      if (backend) {
        try { backend.setItem(key, value); return; } catch { backend = null; }
      }
      memory.set(key, value);
    },
    remove(key) {
      if (backend) {
        try { backend.removeItem(key); } catch { backend = null; }
      }
      memory.delete(key);
    }
  };
})();

let memorySearch = null;
function setSearch(search) {
  memorySearch = search;
  try {
    const url = new URL(location.href);
    url.search = search;
    history.replaceState(null, "", url);
  } catch {}
}
function currentSearch() {
  if (memorySearch !== null) return memorySearch;
  try { return location.search || ""; } catch { return ""; }
}
function queryParam(name) {
  const raw = currentSearch();
  if (!raw) return null;
  const match = new RegExp("[?&]" + name + "=([^&]*)").exec(raw);
  if (!match) return null;
  try { return decodeURIComponent(match[1]); } catch { return match[1]; }
}

function animalById(id) {
  if (id === "balanced") return BALANCED;
  return ANIMALS.find((item) => item.id === id) || BALANCED;
}

function scoreValue(question, raw) {
  const value = Number(raw) || 0;
  return question.reverse ? 100 - value : value;
}

function scoreAll(answers) {
  const totals = {};
  const weights = {};
  ANIMALS.forEach((animal) => {
    totals[animal.id] = 0;
    weights[animal.id] = 0;
  });
  QUESTIONS.forEach((question) => {
    const value = scoreValue(question, answers[question.id] ?? 0);
    Object.entries(question.scores || {}).forEach(([animalId, weight]) => {
      const w = Number(weight) || 0;
      if (!weights.hasOwnProperty(animalId)) return;
      if (w >= 0) {
        totals[animalId] += value * w;
        weights[animalId] += w;
      } else {
        const abs = -w;
        totals[animalId] += (100 - value) * abs;
        weights[animalId] += abs;
      }
    });
  });
  const values = {};
  ANIMALS.forEach((animal) => {
    values[animal.id] = weights[animal.id] ? Math.round(totals[animal.id] / weights[animal.id]) : 0;
  });
  return values;
}

function dimScores(values) {
  const bucket = {};
  const weight = {};
  DIM_ORDER.forEach((key) => {
    bucket[key] = 0;
    weight[key] = 0;
  });
  ANIMALS.forEach((animal) => {
    (animal.dim || []).forEach((dim) => {
      bucket[dim] += values[animal.id] || 0;
      weight[dim] += 1;
    });
  });
  const out = {};
  DIM_ORDER.forEach((key) => {
    out[key] = weight[key] ? Math.round(bucket[key] / weight[key]) : 0;
  });
  return out;
}

function topAnimals(values) {
  return ANIMALS
    .map((animal) => ({ ...animal, value: values[animal.id] || 0 }))
    .sort((a, b) => b.value - a.value || a.id.localeCompare(b.id));
}

function animalFor(values) {
  const ranked = topAnimals(values);
  const top = ranked[0]?.value || 0;
  const tied = ranked.filter((item) => item.value === top);
  const nearFull = ranked.filter((item) => item.value >= 95);
  if (nearFull.length >= 8) return BALANCED;
  const asked = queryParam("a");
  return tied.find((item) => item.id === asked) || tied[0] || BALANCED;
}

function answeredCount() {
  return Object.keys(picks).filter((id) => picks[id] !== undefined).length;
}
function progressPct() {
  return QUESTIONS.length ? Math.round((answeredCount() / QUESTIONS.length) * 100) : 0;
}

function ensureChrome() {
  let chrome = document.querySelector("#quiz-chrome");
  if (chrome) return chrome;
  chrome = document.createElement("div");
  chrome.id = "quiz-chrome";
  chrome.innerHTML = `
    <div class="progress"><span>测试进度</span><span class="progress-pct">0%</span></div>
    <div class="bar"><span></span></div>
    <div id="quiz-body"></div>
    <div class="row nav" id="quiz-nav"></div>
  `;
  app.appendChild(chrome);
  return chrome;
}

function syncBar(immediate) {
  const next = progressPct();
  const bar = document.querySelector("#quiz-chrome .bar > span");
  const label = document.querySelector("#quiz-chrome .progress-pct");
  if (label) label.textContent = `${next}%`;
  if (!bar) {
    barPct = next;
    return;
  }
  if (immediate || next === barPct) {
    bar.style.transition = "none";
    bar.style.width = `${next}%`;
    void bar.offsetWidth;
    bar.style.transition = "";
    barPct = next;
    return;
  }
  const current = getComputedStyle(bar).width;
  bar.style.transition = "none";
  bar.style.width = current;
  void bar.offsetWidth;
  bar.style.transition = "width 520ms cubic-bezier(0.22, 1, 0.36, 1)";
  bar.style.width = `${next}%`;
  barPct = next;
}

function radar(values, dims, opts = {}) {
  const size = opts.size || 320;
  const cx = size / 2;
  const cy = size / 2;
  const r = opts.radius || size * 0.34;
  const rings = [0.25, 0.5, 0.75, 1];
  const point = (i, scale) => {
    const angle = (-Math.PI / 2) + (i * 2 * Math.PI / dims.length);
    return [cx + Math.cos(angle) * r * scale, cy + Math.sin(angle) * r * scale];
  };
  const grid = rings.map((scale) => {
    const d = dims.map((_, i) => point(i, scale).map((n) => n.toFixed(1)).join(",")).join(" ");
    return `<polygon points="${d}" fill="none" stroke="rgba(223,195,140,.18)" />`;
  }).join("");
  const axes = dims.map((_, i) => {
    const [x, y] = point(i, 1);
    return `<line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="rgba(223,195,140,.18)" />`;
  }).join("");
  const series = (opts.series || [{ values, color: "rgba(223,195,140,.25)", stroke: "#DFC38C" }]).map((item) => {
    const shape = dims.map((dim, i) => point(i, ((item.values[dim.key] || 0) / 100)).map((n) => n.toFixed(1)).join(",")).join(" ");
    return `<polygon points="${shape}" fill="${item.color}" stroke="${item.stroke}" stroke-width="2" />`;
  }).join("");
  const labels = dims.map((dim, i) => {
    const [x, y] = point(i, opts.labelScale || 1.28);
    const score = values[dim.key] || 0;
    return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" text-anchor="middle" dominant-baseline="middle" fill="#f3ecdf" font-size="${opts.fontSize || 12}">${dim.label}${opts.hideScores ? "" : ` ${score}%`}</text>`;
  }).join("");
  return `<svg viewBox="0 0 ${size} ${size}" role="img">${grid}${axes}${series}${labels}</svg>`;
}

function animalImage(id, cls = "animal-photo") {
  const animal = animalById(id);
  if (animal.hasLogo === false) {
    return `<div class="${cls} placeholder" aria-label="${animal.name}"><span>${animal.name.slice(0, 1)}</span></div>`;
  }
  // 本地静态资源不要加 crossorigin，否则 file:// 或无 CORS 头时会直接裂图。
  return `<img class="${cls}" src="assets/animals/${animal.id}.jpg" alt="${animal.name}" loading="lazy">`;
}

function animalLogo(id, cls = "animal-logo") {
  const animal = animalById(id);
  // 全部动物已有黑金线稿；仍保留字母标兜底。
  if (animal.hasLogo === false) return monogramLogo(animal, cls);
  return `<img class="${cls}" src="assets/animals/${animal.id}-line.svg" alt="${animal.name}">`;
}

function monogramLogo(animal, cls = "animal-logo") {
  const ch = (animal.name || "?").slice(0, 1);
  return `
    <svg class="${cls} mono" viewBox="0 0 160 160" role="img" aria-label="${animal.name}">
      <circle cx="80" cy="80" r="74" fill="#14110e" stroke="#DFC38C" stroke-width="3"/>
      <circle cx="80" cy="80" r="58" fill="none" stroke="#DFC38C" stroke-opacity=".28" stroke-width="1.5"/>
      <text x="80" y="92" text-anchor="middle" fill="#DFC38C" font-size="54" font-family="Songti SC, serif">${ch}</text>
    </svg>
  `;
}

function archiveNo(animal) {
  const idx = ANIMALS.findIndex((item) => item.id === animal.id);
  const n = idx >= 0 ? idx + 1 : 1;
  return `NO.${String(n).padStart(2, "0")}`;
}

function partnerFor(animal) {
  const hit = SM_PAIRS.find((pair) => pair.sKey === animal.id || pair.mKey === animal.id);
  if (hit) {
    const partnerId = hit.sKey === animal.id ? hit.mKey : hit.sKey;
    return animalById(partnerId);
  }
  // 非对偶轴：按 Dom/Sub 倾向给一个互补推荐。
  const domish = (animal.dim || []).includes("dom");
  const subish = (animal.dim || []).includes("sub");
  if (domish) return animalById("fox");
  if (subish) return animalById("lynx");
  return animalById("octopus");
}

function qrImage(data, size = 120) {
  // 占位；真正生成时由 ensurePosterQrs 画到 canvas dataURL，避免外链 CORS 黑块。
  return `<canvas class="poster-qr" width="${size}" height="${size}" data-qr="${encodeURIComponent(data)}" aria-label="二维码"></canvas>`;
}

async function ensurePosterQrs(root) {
  const nodes = [...root.querySelectorAll("canvas.poster-qr")];
  if (!nodes.length) return;
  if (!window.QRCode) {
    try {
      await loadScript("assets/vendor/qrcode.min.js");
    } catch {
      try {
        await loadScript("https://cdn.jsdelivr.net/npm/qrcode/build/qrcode.min.js");
      } catch (error) {
        console.warn("qr lib unavailable", error);
      }
    }
  }
  const qrApi = window.QRCode || window.qrcode;
  await Promise.all(nodes.map(async (canvas) => {
    const raw = canvas.getAttribute("data-qr") || "";
    const text = decodeURIComponent(raw);
    try {
      if (qrApi?.toCanvas) {
        await qrApi.toCanvas(canvas, text, {
          width: canvas.width,
          margin: 1,
          color: { dark: "#111111", light: "#ffffff" }
        });
      } else {
        paintQrFallback(canvas, text);
      }
    } catch (error) {
      console.warn("qr failed", error);
      paintQrFallback(canvas, text);
    }
  }));
}

function paintQrFallback(canvas, text) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const size = canvas.width;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = "#111111";
  ctx.strokeStyle = "#111111";
  ctx.lineWidth = 4;
  ctx.strokeRect(8, 8, size - 16, size - 16);
  ctx.font = "bold 12px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("扫码", size / 2, size / 2 - 6);
  ctx.font = "10px sans-serif";
  ctx.fillText("打开测试", size / 2, size / 2 + 10);
  canvas.setAttribute("title", text);
}

function compactRows(values, keys) {
  return keys.map((item) => {
    const animal = typeof item === "string" ? animalById(item) : animalById(item.key);
    const label = typeof item === "string" ? `${animal.name}` : item.label;
    const text = typeof item === "string" ? animal.text : item.text;
    const score = values[animal.id] || 0;
    return `
      <div class="compact-row">
        <div class="compact-main">
          <span class="compact-name">${label}</span>
          <span class="compact-track"><span style="width:${score}%"></span></span>
          <b>${score}%</b>
        </div>
        <p class="compact-desc">${text}</p>
      </div>
    `;
  }).join("");
}

function ringCard(animal, index) {
  const pct = animal.value || 0;
  const r = 46;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - pct / 100);
  return `
    <button class="flip-card" type="button" data-id="${animal.id}" style="--delay:${index * 70}ms">
      <span class="flip-inner">
        <span class="flip-face front">
          <span class="ring-wrap">
            <svg class="ring-svg" viewBox="0 0 120 120" aria-hidden="true">
              <circle cx="60" cy="60" r="${r}" fill="none" stroke="rgba(243,236,223,.12)" stroke-width="6"></circle>
              <circle cx="60" cy="60" r="${r}" fill="none" stroke="#DFC38C" stroke-width="6" stroke-linecap="round" stroke-dasharray="${c.toFixed(2)}" stroke-dashoffset="${offset.toFixed(2)}" transform="rotate(-90 60 60)"></circle>
            </svg>
            <span class="ring-photo">${animalImage(animal.id, "animal-photo round")}</span>
          </span>
          <strong>${animal.name}</strong>
          <em>${animal.badge} ${pct}%</em>
        </span>
        <span class="flip-face back">
          <strong>${animal.name}</strong>
          <span class="back-role">${animal.role}</span>
          <span class="back-text">${animal.text}</span>
        </span>
      </span>
    </button>
  `;
}

function featureListRow(animal) {
  const pct = animal.value || 0;
  return `
    <div class="feature-row">
      <div class="feature-head">
        <strong>${animal.name}</strong>
        <span>${animal.badge} · ${pct}%</span>
      </div>
      <p class="feature-role">${animal.role}</p>
      <span class="feature-track"><i style="width:${pct}%"></i></span>
    </div>
  `;
}

function posterMiniRing(animal) {
  const pct = animal.value || 0;
  const r = 18;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - pct / 100);
  return `
    <div class="poster-ring">
      <div class="poster-ring-graph">
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <circle cx="24" cy="24" r="${r}" fill="none" stroke="#2E2C34" stroke-width="3.5"></circle>
          <circle cx="24" cy="24" r="${r}" fill="none" stroke="#DFC38C" stroke-width="3.5" stroke-linecap="round"
            stroke-dasharray="${c.toFixed(2)}" stroke-dashoffset="${offset.toFixed(2)}"
            transform="rotate(-90 24 24)"></circle>
        </svg>
        <div class="poster-ring-core"><span>${pct}%</span></div>
      </div>
      <strong>${animal.badge}</strong>
    </div>
  `;
}

function posterCoreBars(values) {
  return CORE.map((item) => {
    const score = values[item.key] || 0;
    return `
      <div class="poster-bar">
        <div class="poster-bar-label"><span>${item.label}</span><b>${score}%</b></div>
        <span class="poster-bar-track"><i style="width:${score}%"></i></span>
      </div>
    `;
  }).join("");
}

function buildSharePoster(values, animal, top3, ranked) {
  const dims = dimScores(values);
  const top6 = ranked.slice(0, 6);
  const overflow = ranked.slice(6).filter((item) => item.value >= 90).slice(0, 8);
  const archive = archiveNo(animal);
  const partner = partnerFor(animal);
  const retakeUrl = location.href.split("#")[0];
  const groupUrl = GROUP_URL || retakeUrl;
  return `
    <div class="poster-topbar">
      <span>ARCHIVE ${archive}</span>
      <span>By / Z先生</span>
    </div>

    <section class="poster-card poster-identity">
      <div class="poster-id-logo">${animalImage(animal.id, "animal-photo poster-logo")}</div>
      <div class="poster-id-copy">
        <h2>${animal.name}</h2>
        <div class="poster-caps">
          <span>${animal.badge}</span>
          <span>${animal.role}</span>
          <span>天菜搭档：${partner.name}</span>
        </div>
        <p class="poster-quote">${animal.text}</p>
        <div class="poster-tags">${top3.map((item) => `<span>${item.badge} ${item.value}%</span>`).join("")}</div>
      </div>
    </section>

    <section class="poster-dual">
      <div class="poster-card poster-radar">
        <p class="poster-sec">六维欲望雷达</p>
        ${radar(dims, MAIN_RADAR, { size: 150, radius: 48, fontSize: 8, labelScale: 1.2, hideScores: true })}
      </div>
      <div class="poster-card poster-core">
        <p class="poster-sec">核心站位</p>
        ${posterCoreBars(values)}
      </div>
    </section>

    <section class="poster-card poster-matrix">
      <p class="poster-sec">高分欲望特征 · Top 6</p>
      <div class="poster-rings">${top6.map(posterMiniRing).join("")}</div>
      ${overflow.length ? `<div class="poster-overflow">${overflow.map((item) => `<span>${item.badge}</span>`).join("")}</div>` : ""}
    </section>

    <section class="poster-card poster-action">
      <div class="poster-action-copy">
        <p>完整图谱 · 进群找天菜搭档</p>
        <span>By / Z先生</span>
      </div>
      <div class="poster-qrs single">
        <figure>
          ${qrImage(groupUrl, 96)}
          <figcaption>扫码进入小圈子</figcaption>
        </figure>
      </div>
    </section>
  `;
}

function bindFlipCards(root = document) {
  root.querySelectorAll(".flip-card").forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("is-flipped");
    });
  });
}

function shuffle(list) {
  const copy = list.slice();
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
function pages() { return Math.ceil(order.length / PAGE_SIZE); }
function pageItems() { return order.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE); }

function renderStart() {
  app.className = "screen-home";
  app.innerHTML = `
    <div class="home">
      <p class="archive">ARCHIVE NO.01  ·  INSTINCT TEST</p>
      <h1>欲望动物人格测试</h1>
      <p class="home-sub">- 你的BDSM人格测试 -</p>
      <div class="home-copy">
        <p>白天你是秩序里的普通人，</p>
        <p>关上门，体内却住着另一头野兽。</p>
        <p>是冷静的猎手，还是渴望失重的飞鸟？</p>
        <p class="gap">剥开理性的伪装，</p>
        <p>看看你的灵魂深处，究竟藏着哪一种欲望动物。</p>
      </div>
      <p class="byline">By / Z先生</p>
      <button class="primary home-cta" id="begin" type="button">开始测试</button>
      <p class="home-hint">匿名测评 · 生成专属欲望动物图谱</p>
      <p class="home-note">注：本测试不会收集您的任何个人信息。</p>
    </div>
  `;
  document.querySelector("#begin").addEventListener("click", () => {
    order = shuffle(QUESTIONS.map((q) => q.id));
    picks = {};
    page = 0;
    barPct = 0;
    showAllFeatures = false;
    smMode = "cross";
    save();
    renderPage(true);
  });
}

function paintDots() {
  pageItems().forEach((id) => {
    document.querySelectorAll(`.dot[data-id="${id}"]`).forEach((button) => {
      const on = Number(button.dataset.value) === picks[id];
      button.classList.toggle("on", on);
      button.setAttribute("aria-checked", on ? "true" : "false");
    });
  });
}

function paintNav() {
  const items = pageItems();
  const ready = items.every((id) => picks[id] !== undefined);
  const last = page === pages() - 1;
  const nav = document.querySelector("#quiz-nav");
  nav.innerHTML = `
    <button class="ghost" id="back" type="button">${page === 0 ? "回到首页" : "上一页"}</button>
    <button class="primary" id="next" type="button" ${ready ? "" : "disabled"}>${last ? "看结果" : "下一页"}</button>
  `;
  document.querySelector("#back").addEventListener("click", () => {
    if (page === 0) renderStart();
    else {
      page -= 1;
      save();
      renderPage(false);
      window.scrollTo({ top: 0 });
    }
  });
  document.querySelector("#next").addEventListener("click", () => {
    if (!ready) return;
    if (last) finish();
    else {
      page += 1;
      save();
      renderPage(false);
      window.scrollTo({ top: 0 });
    }
  });
}

function renderPage(immediateBar) {
  app.className = "screen-quiz";
  if (!document.querySelector("#quiz-chrome")) {
    app.innerHTML = "";
    ensureChrome();
  }
  const body = document.querySelector("#quiz-body");
  const items = pageItems();
  body.innerHTML = `
    <div class="stack">
      ${items.map((id, offset) => {
        const question = QUESTIONS.find((item) => item.id === id);
        const no = page * PAGE_SIZE + offset + 1;
        return `
          <section class="q-card">
            <h2 class="q-title"><span class="q-no">${no}.</span><span class="q-text">${question.text}</span></h2>
            <div class="likert" role="radiogroup" aria-label="${question.text}">
              <div class="likert-track">
                ${SCALE.map((step) => `
                  <button
                    class="dot size-${step.size} tone-${step.tone} ${picks[id] === step.value ? "on" : ""}"
                    type="button"
                    data-id="${id}"
                    data-value="${step.value}"
                    aria-label="${step.label || "中间档"}"
                    aria-checked="${picks[id] === step.value ? "true" : "false"}"
                  ></button>
                `).join("")}
              </div>
              <div class="likert-labels">
                <span>不认同</span>
                <span>无感</span>
                <span>非常认同</span>
              </div>
            </div>
          </section>
        `;
      }).join("")}
    </div>
  `;
  body.querySelectorAll(".dot").forEach((button) => {
    button.addEventListener("click", () => {
      picks[Number(button.dataset.id)] = Number(button.dataset.value);
      save();
      paintDots();
      paintNav();
      syncBar(false);
    });
  });
  paintNav();
  syncBar(!!immediateBar);
}

function answersInIdOrder() {
  const values = {};
  QUESTIONS.forEach((question) => {
    values[question.id] = picks[question.id] ?? 0;
  });
  return values;
}

function finish() {
  const values = scoreAll(answersInIdOrder());
  const animal = animalFor(values);
  const packed = ANIMALS.map((item) => values[item.id]).join(".");
  setSearch("?v=" + packed + "&a=" + encodeURIComponent(animal.id));
  store.remove(STORAGE_KEY);
  renderResult(values, animal);
  window.scrollTo({ top: 0 });
}

function smChart(values) {
  if (smMode === "s") {
    return {
      title: "S / 主导倾向",
      html: radar(values, S_RADAR, { size: 320, radius: 100, fontSize: 12, labelScale: 1.28 })
    };
  }
  if (smMode === "m") {
    return {
      title: "M / 臣服倾向",
      html: radar(values, M_RADAR, { size: 320, radius: 100, fontSize: 12, labelScale: 1.28 })
    };
  }
  // 交叉：同一套 6 对轴，S 金线 / M 紫线叠在一张图上，标签写清对立项且不显示百分比。
  const sValues = {};
  const mValues = {};
  CROSS_RADAR.forEach((dim) => {
    sValues[dim.key] = values[dim.sKey] || 0;
    mValues[dim.key] = values[dim.mKey] || 0;
  });
  return {
    title: "交叉展示 · S金 / M紫",
    html: radar(sValues, CROSS_RADAR, {
      size: 320,
      radius: 100,
      fontSize: 11,
      labelScale: 1.3,
      hideScores: true,
      series: [
        { values: sValues, color: "rgba(223,195,140,.22)", stroke: "#DFC38C" },
        { values: mValues, color: "rgba(156,140,180,.18)", stroke: "#9c8cb4" }
      ]
    })
  };
}

function renderResult(values, animal = animalFor(values)) {
  lastResult = { values, animal };
  const dims = dimScores(values);
  const ranked = topAnimals(values).filter((item) => item.value > 0);
  const top3 = ranked.slice(0, 3);
  const rest = ranked.slice(3);
  const visibleRest = showAllFeatures ? rest : [];
  const chart = smChart(values);
  const leadLine = animal.id === "balanced"
    ? `图谱状态：全维点亮`
    : `主导欲望：${animal.name} / ${animal.badge} · ${values[animal.id] || 0}%`;

  app.className = "screen-result";
  app.innerHTML = `
    <section class="card-shot" id="result-card">
      <p class="kicker">你的欲望动物</p>
      <div class="hero-badge">${animalImage(animal.id, "animal-photo hero")}</div>
      <h1>${animal.name}</h1>
      <p class="share">${animal.text}</p>
      <p class="pair-tag">${animal.role}</p>
      <p class="lead subtle">${leadLine}</p>
      <div class="radar-wrap">${radar(dims, MAIN_RADAR, { size: 320, radius: 108, fontSize: 11 })}</div>
      <div class="top-pills">
        ${top3.map((item) => `<span>${item.name} / ${item.badge} ${item.value}%</span>`).join("")}
      </div>
      <p class="byline">By / Z先生</p>
    </section>

    <section class="panel tight">
      <div class="panel-head">
        <h3>S / M 双子倾向</h3>
        <div class="seg" role="tablist" aria-label="倾向切换">
          <button type="button" data-mode="s" class="${smMode === "s" ? "on" : ""}">S倾向</button>
          <button type="button" data-mode="m" class="${smMode === "m" ? "on" : ""}">M倾向</button>
          <button type="button" data-mode="cross" class="${smMode === "cross" ? "on" : ""}">交叉展示</button>
        </div>
      </div>
      <p class="note" id="sm-title">${chart.title}</p>
      <div class="radar-wrap" id="sm-chart">${chart.html}</div>
      <div class="core-mini">
        ${compactRows(values, CORE)}
      </div>
    </section>

    <section class="panel tight">
      <h3>你的动物属性</h3>
      <div class="ring-row">${top3.map((item, index) => ringCard(item, index)).join("")}</div>
      ${visibleRest.length ? `<div class="feature-list">${visibleRest.map(featureListRow).join("")}</div>` : ""}
      ${rest.length ? `<button class="ghost fold-btn" id="toggle-features" type="button">${showAllFeatures ? "收起全部偏好" : "查看全部偏好 ▾"}</button>` : ""}
    </section>

    <section class="group cta-card">
      <h3>分享完整图谱，进群添加小圈子</h3>
      <img class="cta-image" src="assets/group-cta.webp" alt="进群引流">
    </section>

    <div class="row result-actions">
      <button class="ghost" id="again" type="button">再测一次</button>
      <button class="primary" id="share" type="button">保存分享</button>
    </div>

    <div class="share-modal" id="share-modal" hidden>
      <div class="share-dialog">
        <p class="kicker">分享海报</p>
        <img id="share-preview" alt="分享图">
        <p class="note" id="share-tip">长按图片保存到相册，或使用系统分享。</p>
        <div class="row">
          <button class="ghost" id="share-close" type="button">关闭</button>
          <button class="primary" id="share-native" type="button">系统分享</button>
        </div>
      </div>
    </div>

    <section id="share-poster" class="share-poster" aria-hidden="true">
      ${buildSharePoster(values, animal, top3, ranked)}
    </section>
  `;

  bindFlipCards(app);
  document.querySelectorAll(".seg button").forEach((button) => {
    button.addEventListener("click", () => {
      smMode = button.dataset.mode;
      renderResult(values, animal);
    });
  });
  const toggle = document.querySelector("#toggle-features");
  if (toggle) {
    toggle.addEventListener("click", () => {
      showAllFeatures = !showAllFeatures;
      renderResult(values, animal);
    });
  }
  document.querySelector("#again").addEventListener("click", () => {
    picks = {};
    page = 0;
    order = [];
    showAllFeatures = false;
    smMode = "cross";
    setSearch("");
    renderStart();
  });
  document.querySelector("#share").addEventListener("click", () => {
    openSharePoster();
  });
  document.querySelector("#share-close").addEventListener("click", () => {
    document.querySelector("#share-modal").hidden = true;
  });
}

async function openSharePoster() {
  const modal = document.querySelector("#share-modal");
  const preview = document.querySelector("#share-preview");
  const tip = document.querySelector("#share-tip");
  const poster = document.querySelector("#share-poster");
  const nativeBtn = document.querySelector("#share-native");
  if (!modal || !preview || !poster) return;
  tip.textContent = "正在生成海报…";
  modal.hidden = false;
  preview.removeAttribute("src");

  const restorePoster = stagePosterForCapture(poster);
  try {
    // 先把同域图片转成 dataURL，避免截图时因 CORS/本地协议变成黑图。
    await inlinePosterImages(poster);
    await ensurePosterQrs(poster);
    await waitImages(poster);
    if (!window.modernScreenshot) {
      try {
        await loadScript("assets/vendor/modern-screenshot.min.js");
      } catch {
        await loadScript("https://cdn.jsdelivr.net/npm/modern-screenshot@4.5.5/dist/index.js");
      }
    }
    const api = window.modernScreenshot || window;
    const shot = api.domToPng || api.domtoPng || (api.default && api.default.domToPng);
    if (!shot) throw new Error("modern-screenshot unavailable");
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    const dataUrl = await Promise.race([
      shot(poster, {
        scale: Math.min(window.devicePixelRatio || 2, 3),
        backgroundColor: "#0b0b0d",
        width: poster.offsetWidth || 390,
        height: poster.scrollHeight || undefined
      }),
      new Promise((_, reject) => setTimeout(() => reject(new Error("poster capture timeout")), 12000))
    ]);
    if (!dataUrl || dataUrl.length < 1000) throw new Error("empty poster");
    preview.src = dataUrl;
    tip.textContent = "长按图片保存到相册；也可以点系统分享。";
    nativeBtn.onclick = async () => {
      try {
        const blob = await (await fetch(dataUrl)).blob();
        const file = new File([blob], `${lastResult?.animal?.name || "欲望动物"}-属性卡.png`, { type: "image/png" });
        if (navigator.share && navigator.canShare?.({ files: [file] })) {
          await navigator.share({
            files: [file],
            title: "欲望动物属性测试",
            text: `${lastResult?.animal?.name || ""} / ${lastResult?.animal?.badge || ""}`
          });
        } else if (navigator.share) {
          await navigator.share({
            title: "欲望动物属性测试",
            text: `${lastResult?.animal?.name || ""} / ${lastResult?.animal?.badge || ""}`,
            url: location.href
          });
        } else {
          tip.textContent = "当前浏览器不支持系统分享，请长按图片保存。";
        }
      } catch (error) {
        tip.textContent = "分享取消或失败，请长按图片保存。";
      }
    };
  } catch (error) {
    console.error(error);
    tip.textContent = "海报生成失败。请改用本地服务器打开页面后再试，或直接截图结果卡。";
  } finally {
    restorePoster();
  }
}

function stagePosterForCapture(poster) {
  // modern-screenshot 对 left:-9999 / opacity:0 的节点会空图或卡住；
  // 拉回视口并放在分享弹层下面（弹层 z-index:40），用户看不见但能截到。
  const prev = {
    left: poster.style.left,
    top: poster.style.top,
    position: poster.style.position,
    zIndex: poster.style.zIndex,
    opacity: poster.style.opacity,
    pointerEvents: poster.style.pointerEvents,
    transform: poster.style.transform
  };
  poster.style.position = "fixed";
  poster.style.left = "0";
  poster.style.top = "0";
  poster.style.zIndex = "1";
  poster.style.opacity = "1";
  poster.style.pointerEvents = "none";
  poster.style.transform = "none";
  return () => {
    poster.style.left = prev.left;
    poster.style.top = prev.top;
    poster.style.position = prev.position;
    poster.style.zIndex = prev.zIndex;
    poster.style.opacity = prev.opacity;
    poster.style.pointerEvents = prev.pointerEvents;
    poster.style.transform = prev.transform;
  };
}

function waitImages(root) {
  const imgs = [...root.querySelectorAll("img")];
  return Promise.all(imgs.map((img) => {
    if (img.complete && img.naturalWidth > 0) return Promise.resolve();
    return new Promise((resolve) => {
      const done = () => resolve();
      img.addEventListener("load", done, { once: true });
      img.addEventListener("error", done, { once: true });
    });
  }));
}

async function inlinePosterImages(root) {
  const imgs = [...root.querySelectorAll("img")];
  await Promise.all(imgs.map(async (img) => {
    const src = img.getAttribute("src");
    if (!src || src.startsWith("data:")) return;
    try {
      const absolute = new URL(src, location.href).href;
      const res = await fetch(absolute, { mode: "cors" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const blob = await res.blob();
      const reader = new FileReader();
      const dataUrl = await new Promise((resolve, reject) => {
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
      img.setAttribute("src", dataUrl);
    } catch (error) {
      // 外链二维码可能被 CORS 拦；保留原 src，截图库尽量继续画。
      console.warn("inline image failed", src, error);
    }
  }));
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existed = document.querySelector(`script[src="${src}"]`);
    if (existed) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("script load failed"));
    document.head.appendChild(script);
  });
}

function save() {
  store.set(STORAGE_KEY, JSON.stringify({ page, order, picks }));
}

function fromQuery() {
  const raw = queryParam("v");
  if (!raw) return null;
  const parts = raw.split(".").map(Number);
  if (parts.length !== ANIMALS.length || parts.some((n) => !Number.isFinite(n))) return null;
  const values = {};
  ANIMALS.forEach((animal, i) => {
    values[animal.id] = parts[i];
  });
  return values;
}

function restore() {
  const queried = fromQuery();
  if (queried) {
    renderResult(queried);
    return;
  }
  const raw = store.get(STORAGE_KEY);
  if (!raw) {
    renderStart();
    return;
  }
  try {
    const saved = JSON.parse(raw);
    order = saved.order || [];
    picks = saved.picks || {};
    page = Math.min(saved.page || 0, Math.max(pages() - 1, 0));
    if (!order.length) renderStart();
    else renderPage(true);
  } catch {
    renderStart();
  }
}

window.__scoreAll = scoreAll;
window.__ANIMALS = ANIMALS;
window.__missingLogos = () => ANIMALS.filter((item) => !item.hasLogo).map((item) => item.name);

try {
  restore();
} catch (error) {
  console.error(error);
  renderStart();
}
