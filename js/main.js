/* ============ 站点数据（演示用模拟数据） ============ */
const FEATURES = [
  { id: '1', icon: '🛡️', title: '纯净无商城', description: '商城不卖任何提升战力的装备宝石，点卡仅代表游戏时长，不带来属性差距' },
  { id: '2', icon: '⚔️', title: '公平掉落', description: '大佬与散人共用同一套掉落规则，顶级装备全靠打宝产出，散人也能站稳脚跟' },
  { id: '3', icon: '⏱️', title: '点卡时长计费', description: '仅按游戏时长收取点卡，无VIP、无付费战力，真正公平竞技环境' },
  { id: '4', icon: '📱', title: '三端互通', description: '支持PC、安卓、鸿蒙、iOS，同一账号多设备数据互通、自由切换' },
  { id: '5', icon: '🏰', title: '经典三职业团战', description: '行会争夺、BOSS抢怪、万人攻沙，考验配合走位与角色培养而非充值' },
  { id: '6', icon: '⚙️', title: '内置原生挂机', description: '内置挂机解放双手，严打第三方外挂，查实即封号，维护公平环境' },
];

const CLASSES = [
  {
    id: 'warrior', name: '战士', role: '近战攻防一体', themeColor: '#8B0000', image: './images/warrior.jpg',
    description: '高血量高防御，前排坦克与单挑核心',
    skills: [
      { name: '烈火剑法', description: '瞬间爆发高额伤害' },
      { name: '野蛮冲撞', description: '突进击退并眩晕敌人' },
      { name: '逐日剑法', description: '远程剑气贯穿攻击' },
    ],
    playStyle: '前排冲锋、单挑与BOSS斩杀核心，适合喜欢近身肉搏的玩家',
  },
  {
    id: 'mage', name: '法师', role: '远程群伤核心', themeColor: '#1E90FF', image: './images/mage.jpg',
    description: '多系元素技能，刷怪效率极高',
    skills: [
      { name: '火墙', description: '范围持续火焰伤害' },
      { name: '冰咆哮', description: '冰霜AOE减速并伤害' },
      { name: '雷电术', description: '单体高爆发雷电打击' },
    ],
    playStyle: '副本清怪与团战压制的输出炮台，考验地形走位与站位',
  },
  {
    id: 'taoist', name: '道士', role: '攻防辅助一体', themeColor: '#228B22', image: './images/taoist.jpg',
    description: '施毒减防、召唤神兽，团队全能辅助',
    skills: [
      { name: '施毒术', description: '持续掉血并降低防御' },
      { name: '召唤神兽', description: '召唤强力神兽助战' },
      { name: '群体治愈术', description: '恢复范围内友方生命' },
    ],
    playStyle: '团队续航与控场核心，群体战中不可或缺的全能职业',
  },
];

const SCENES = [
  { id: '1', name: '玛法大陆', description: '广袤的复古原野，山川河流间散落着神秘遗迹与怪物巢穴', image: './images/scene-mapafa-v2.jpg' },
  { id: '2', name: '暗黑地牢', description: '阴森的地下迷宫，暗藏珍稀宝物与凶猛BOSS', image: './images/scene-dungeon-v3.png' },
  { id: '3', name: '沙城攻伐', description: '万人攻沙史诗战场，行会争夺至高荣耀', image: './images/scene-sandcastle-v5.jpg' },
];

const NEWS = [
  {
    id: '1', title: '玛法大陆新区「赤月传说」今日火爆开启', category: 'server', categoryLabel: '开服公告', date: '2025-01-15',
    summary: '全新点卡制新区开放，百万豪礼等你来拿，还原最纯粹的1.76复古体验。',
    content: '尊敬的玩家：\n\n《传奇3D纯净点卡版》全新大区「赤月传说」已于今日19:00正式开启！\n\n开服活动：\n• 首周双倍经验\n• 首次充值点卡送5小时时长\n• 等级排名前100名获得专属称号\n\n纯净无商城，公平打宝，期待您的加入！',
  },
  {
    id: '2', title: '春节活动「龙腾玛法」即将上线', category: 'event', categoryLabel: '活动公告', date: '2025-01-10',
    summary: '新春特别活动，打宝掉落翻倍，集龙符兑换稀有道具，与行会兄弟共度佳节。',
    content: '新春佳节将至，玛法大陆为各位勇士准备了丰富的节日活动：\n\n活动时间：1月20日 - 2月5日\n\n活动内容：\n1. 全地图BOSS掉落翻倍\n2. 集龙符兑换永久称号与外观\n3. 行会拜年活动，行会积分排名奖励\n\n更多活动详情请留意游戏内公告。',
  },
  {
    id: '3', title: '版本更新 v1.2.0：新增沙城攻伐玩法', category: 'update', categoryLabel: '版本更新', date: '2025-01-05',
    summary: '沙巴克攻城战正式开放，新增坐骑系统与装备修炼，优化三端互通体验。',
    content: '本次版本更新内容如下：\n\n【新增内容】\n• 沙巴克攻城战玩法，每周六晚开放\n• 坐骑系统，野外BOSS掉落稀有坐骑\n• 装备修炼系统，提升装备基础属性\n\n【优化调整】\n• 优化三端互通同步性能\n• 调整部分BOSS刷新时间\n• 修复已知BUG若干\n\n感谢各位玩家的支持与反馈！',
  },
];

const PLATFORMS = [
  { name: 'PC 客户端', icon: '🖥️', desc: 'Windows 7/10/11', size: '4.2 GB' },
  { name: '安卓版', icon: '📱', desc: 'Android 8.0+', size: '1.8 GB' },
  { name: 'iOS 版', icon: '', desc: 'iOS 13.0+', size: '2.1 GB' },
  { name: '鸿蒙版', icon: '📱', desc: 'HarmonyOS 2.0+', size: '1.9 GB' },
];

const PLANS = [
  { id: '1', name: '月卡', duration: '30天', hours: 720, price: 30, originalPrice: 36, tag: '新手推荐', featured: false },
  { id: '2', name: '季卡', duration: '90天', hours: 2160, price: 80, originalPrice: 108, tag: '热销', featured: true },
  { id: '3', name: '年卡', duration: '365天', hours: 8760, price: 280, originalPrice: 438, tag: '超值', featured: false },
];

const NAV_LINKS = [
  { label: '首页', href: '#hero' },
  { label: '游戏特色', href: '#features' },
  { label: '职业介绍', href: '#classes' },
  { label: '场景地图', href: '#scenes' },
  { label: '新闻公告', href: '#news' },
  { label: '下载专区', href: '#download' },
  { label: '点卡充值', href: '#recharge' },
];

/* ============ 工具 ============ */
const $ = (sel) => document.querySelector(sel);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

let toastTimer = null;
function showToast(msg) {
  const toast = $('#toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

/* ============ 渲染：特色 ============ */
function renderFeatures() {
  $('#features-grid').innerHTML = FEATURES.map((f) => `
    <div class="feature-card">
      <div class="feature-icon">${f.icon}</div>
      <h3>${esc(f.title)}</h3>
      <p>${esc(f.description)}</p>
    </div>
  `).join('');
}

/* ============ 渲染：职业 ============ */
function renderClasses() {
  $('#classes-grid').innerHTML = CLASSES.map((c) => `
    <div class="class-card">
      <div class="class-media">
        <img src="${c.image}" alt="${esc(c.name)}" loading="lazy" />
        <div class="class-media-top" style="background:linear-gradient(to right, transparent, ${c.themeColor}, transparent)"></div>
        <div class="class-media-info">
          <div>
            <h3>${esc(c.name)}</h3>
            <span>${esc(c.role)}</span>
          </div>
          <div class="class-orb" style="border-color:${c.themeColor};background:${c.themeColor}33;box-shadow:0 0 20px ${c.themeColor}66">
            <span style="color:${c.themeColor}">✦</span>
          </div>
        </div>
      </div>
      <div class="class-body">
        <p>${esc(c.playStyle)}</p>
        <div class="skill-list">
          ${c.skills.map((s) => `
            <div class="skill-item">
              <span class="skill-dot" style="background-color:${c.themeColor}"></span>
              <div>
                <div class="skill-name">${esc(s.name)}</div>
                <div class="skill-desc">${esc(s.description)}</div>
              </div>
            </div>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

/* ============ 渲染：场景 + Lightbox ============ */
let lightboxIndex = null;

function renderScenes() {
  $('#scenes-grid').innerHTML = SCENES.map((s, i) => `
    <div class="scene-card" data-index="${i}">
      <div class="scene-media">
        <img src="${s.image}" alt="${esc(s.name)}" loading="lazy" />
        <div class="scene-hover"><span>🔍</span></div>
        <div class="scene-caption">
          <h3>${esc(s.name)}</h3>
          <p>${esc(s.description)}</p>
        </div>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.scene-card').forEach((card) => {
    card.addEventListener('click', () => {
      lightboxIndex = Number(card.dataset.index);
      const s = SCENES[lightboxIndex];
      $('#lightbox-img').src = s.image;
      $('#lightbox-img').alt = s.name;
      $('#lightbox-title').textContent = s.name;
      $('#lightbox-desc').textContent = s.description;
      $('#lightbox').hidden = false;
      document.body.style.overflow = 'hidden';
    });
  });
}

function closeLightbox() {
  $('#lightbox').hidden = true;
  document.body.style.overflow = '';
  lightboxIndex = null;
}

/* ============ 渲染：新闻 ============ */
let currentFilter = 'all';

function renderNews() {
  const list = currentFilter === 'all' ? NEWS : NEWS.filter((n) => n.category === currentFilter);
  const box = $('#news-list');
  if (!list.length) {
    box.innerHTML = '<div class="news-empty">暂无相关公告</div>';
    return;
  }
  box.innerHTML = list.map((n) => `
    <div class="news-item">
      <button class="news-row" data-id="${n.id}">
        <span class="news-meta">
          <span class="news-date">${n.date}</span>
          <span class="category-tag cat-${n.category}">${esc(n.categoryLabel)}</span>
        </span>
        <div class="news-main">
          <h3>${esc(n.title)}</h3>
          <p>${esc(n.summary)}</p>
        </div>
        <span class="news-more">查看详情 →</span>
      </button>
    </div>
  `).join('');

  box.querySelectorAll('.news-row').forEach((row) => {
    row.addEventListener('click', () => openNewsDialog(NEWS.find((n) => n.id === row.dataset.id)));
  });
}

function openNewsDialog(news) {
  if (!news) return;
  $('#dialog-title').textContent = news.title;
  const cat = $('#dialog-category');
  cat.textContent = news.categoryLabel;
  cat.className = 'category-tag cat-' + news.category;
  $('#dialog-date').textContent = news.date;
  $('#dialog-content').textContent = news.content;
  $('#news-dialog').hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeDialog() {
  $('#news-dialog').hidden = true;
  document.body.style.overflow = '';
}

/* ============ 渲染：下载 / 充值 / 页脚 ============ */
function renderDownloads() {
  $('#download-grid').innerHTML = PLATFORMS.map((p) => `
    <div class="platform-card">
      <div class="platform-icon">${p.icon || '🍎'}</div>
      <h3>${esc(p.name)}</h3>
      <p class="platform-desc">${esc(p.desc)}</p>
      <p class="platform-size">安装包大小约 ${p.size}</p>
      <button class="btn btn-primary" data-toast="「${esc(p.name)}」下载功能为演示占位，暂不提供真实下载">
        ⬇ 立即下载
      </button>
      <div class="platform-demo">※ 演示占位，非真实下载</div>
    </div>
  `).join('');
}

function renderPlans() {
  $('#recharge-grid').innerHTML = PLANS.map((p) => `
    <div class="plan-card ${p.featured ? 'featured' : ''}">
      ${p.tag ? `<div class="plan-tag">${esc(p.tag)}</div>` : ''}
      <div class="plan-watermark">演示占位</div>
      <div class="plan-head">
        <h3>${esc(p.name)}</h3>
        <p>${p.duration} · ${p.hours} 小时</p>
      </div>
      <div class="plan-body">
        <div class="plan-price">
          <div class="amount"><span class="currency">¥</span><span class="price-num">${p.price}</span></div>
          ${p.originalPrice ? `<div class="original">原价 ¥${p.originalPrice}</div>` : ''}
        </div>
        <ul class="plan-features">
          <li>纯净无商城</li><li>公平掉落体验</li><li>全职业平衡</li><li>三端互通</li>
        </ul>
        <button class="btn ${p.featured ? '' : 'btn-primary'}" data-toast="「${esc(p.name)}」充值功能为演示占位，不涉及真实支付">立即充值</button>
      </div>
    </div>
  `).join('');
}

function renderFooterLinks() {
  $('#footer-links').innerHTML = NAV_LINKS.map((l) => `<li><a href="${l.href}">${esc(l.label)}</a></li>`).join('');
}

/* ============ 全局交互 ============ */
function bindGlobalEvents() {
  // 头部滚动样式
  const header = $('#site-header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // 移动端菜单
  const toggle = $('#nav-toggle');
  const mobileNav = $('#mobile-nav');
  const iconMenu = $('#icon-menu');
  const iconClose = $('#icon-close');
  toggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    mobileNav.hidden = !open;
    iconMenu.style.display = open ? 'none' : 'block';
    iconClose.style.display = open ? 'block' : 'none';
    toggle.setAttribute('aria-expanded', String(open));
  });
  mobileNav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    mobileNav.hidden = true;
    iconMenu.style.display = 'block';
    iconClose.style.display = 'none';
  }));

  // 锚点滚动按钮
  document.querySelectorAll('[data-scroll-to]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.scrollTo);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Toast 按钮（事件委托，覆盖动态渲染内容）
  document.body.addEventListener('click', (e) => {
    const toastBtn = e.target.closest('[data-toast]');
    if (toastBtn) showToast(toastBtn.dataset.toast);
  });

  // 公告筛选
  $('#news-filters').addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    currentFilter = btn.dataset.filter;
    document.querySelectorAll('.filter-btn').forEach((b) => b.classList.toggle('active', b === btn));
    renderNews();
  });

  // Lightbox / Dialog 关闭
  document.querySelectorAll('[data-close-lightbox]').forEach((el) => el.addEventListener('click', closeLightbox));
  document.querySelectorAll('[data-close-dialog]').forEach((el) => el.addEventListener('click', closeDialog));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeLightbox(); closeDialog(); }
  });

  // 年份
  $('#year').textContent = new Date().getFullYear();
}

/* ============ 初始化 ============ */
document.addEventListener('DOMContentLoaded', () => {
  renderFeatures();
  renderClasses();
  renderScenes();
  renderNews();
  renderDownloads();
  renderPlans();
  renderFooterLinks();
  bindGlobalEvents();
});
