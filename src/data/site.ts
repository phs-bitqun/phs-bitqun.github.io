export type Service = {
  id: string;
  number: string;
  group: string;
  title: string;
  summary: string;
  description: string;
  deliverables: string[];
  audience: string;
  startingPrice: string;
  priceUnit: string;
  icon: 'code' | 'video' | 'media' | 'consult' | 'delivery';
  featured?: boolean;
};

export const site = {
  name: '张群',
  brand: 'AI 交付工作室',
  brandMark: 'ZQ',
  title: '张群｜AI 交付工作室',
  description:
    '张群，20+ 年 IT 与互联网经验。提供 AI 软件开发、AI 视频制作、新媒体代运营、IT 技术咨询与 AI 落地交付，一人负责从需求到上线。',
  location: '湖北 · 浠水',
  availability: '接受新项目',
  email: 'bitqun@163.com',
  responseTime: '工作日 24 小时内',
  keywords: [
    '张群',
    'AI 交付',
    'AI 软件开发',
    'AI 视频制作',
    '新媒体代运营',
    'IT 技术咨询',
    '一人公司',
    '浠水',
  ],
};

export const navItems = [
  { label: '服务', href: '#services' },
  { label: '案例', href: '#cases' },
  { label: '方法', href: '#method' },
  { label: '关于', href: '#about' },
  { label: 'FAQ', href: '#faq' },
];

export const stats = [
  { value: '20+', label: '年 IT 与互联网经历', note: '技术、销售与运营' },
  { value: '5', label: '条 AI 业务线', note: '从产品到内容与咨询' },
  { value: '7', label: '个月做到本地前三', note: '同是浠水人' },
  { value: '15万+', label: '单场活动关注', note: '浠水好声音' },
];

export const services: Service[] = [
  {
    id: 'ai-software',
    number: '01',
    group: '做产品',
    title: 'AI 软件开发',
    summary: '把业务流程变成真正能运行的产品。',
    description:
      '从需求拆解、交互原型到开发上线，适合 Web 应用、小程序、内部工具、自动化流程与轻量 AI 应用。',
    deliverables: ['需求与范围梳理', 'Web / 小程序 / 内部工具', 'AI Agent、RAG 与自动化', '部署、文档与源码交接'],
    audience: '企业、门店、个体老板与内容团队',
    startingPrice: '¥8,000',
    priceUnit: '起 / 项目',
    icon: 'code',
    featured: true,
  },
  {
    id: 'ai-video',
    number: '02',
    group: '做内容',
    title: 'AI 视频制作',
    summary: '从脚本到成片，做能发布的内容。',
    description:
      '围绕品牌宣传、产品介绍、本地生活与个人 IP，建立稳定的 AI 视频生产流程，而不是只生成几张漂亮画面。',
    deliverables: ['选题、脚本与分镜', '角色与画面风格控制', '配音、字幕、剪辑与包装', '单条成片或系列内容'],
    audience: '品牌方、本地商家与个人 IP',
    startingPrice: '¥1,500',
    priceUnit: '起 / 条',
    icon: 'video',
  },
  {
    id: 'media-operation',
    number: '03',
    group: '做内容',
    title: '新媒体代运营',
    summary: '不是代发，是把内容生产变成流程。',
    description:
      '从账号定位、选题库到发布与复盘，交付一套能够持续运行的内容体系，覆盖公众号、视频号、小红书等平台。',
    deliverables: ['账号定位与栏目规划', '选题库与月度排期', '图文、短视频与封面制作', '数据复盘与内容 SOP'],
    audience: '本地商家、机构与个人品牌',
    startingPrice: '¥3,000',
    priceUnit: '起 / 月',
    icon: 'media',
  },
  {
    id: 'it-consulting',
    number: '04',
    group: '做落地',
    title: 'IT 技术咨询',
    summary: '先把问题想清楚，再决定用什么技术。',
    description:
      '面向缺少技术负责人的团队，梳理业务与系统需求，评估方案、供应商和投入产出，减少走弯路与重复建设。',
    deliverables: ['业务需求与流程梳理', '技术方案与工具选型', '系统、数据与安全评估', '供应商沟通与实施建议'],
    audience: '中小企业与传统业务团队',
    startingPrice: '¥600',
    priceUnit: '起 / 小时',
    icon: 'consult',
  },
  {
    id: 'ai-delivery',
    number: '05',
    group: '做落地',
    title: 'AI 落地交付',
    summary: '把 AI 接进真实工作，而不是停在演示里。',
    description:
      '从一个具体业务问题出发，完成工具配置、知识库、工作流、培训与交接，让团队能自己继续使用。',
    deliverables: ['AI 场景识别与优先级', '工具配置与工作流搭建', '知识库、提示词与模板', '培训、陪跑与交接'],
    audience: '想用 AI 提效但缺少方法的中小团队',
    startingPrice: '¥5,000',
    priceUnit: '起 / 项目',
    icon: 'delivery',
  },
];

export const cases = [
  {
    type: '本地平台运营',
    year: '2015—2018',
    title: '同是浠水人',
    description:
      '联合创办并任运营总监，从平台定位、栏目设计到图文和活动运营，建立本地内容与用户增长体系。',
    metric: '本地前三',
    metricLabel: '7 个月做到综合影响力与粉丝活跃度前三',
    tags: ['内容体系', '用户运营', '活动策划'],
  },
  {
    type: '活动与新媒体',
    year: '2016',
    title: '首届“浠水好声音”',
    description:
      '策划并执行本地全民参与的大型歌唱比赛，通过线上线下联动完成预热、报名、现场传播与赛后复盘。',
    metric: '15万+',
    metricLabel: '活动累计关注',
    tags: ['活动策划', '传播执行', '微信生态'],
  },
  {
    type: '企业新媒体',
    year: '2023',
    title: '湖北润东生物',
    description:
      '负责企业公众号从 0 搭建，并参与电商平台、直播运营和产品内容制作，补齐企业线上内容与销售链路。',
    metric: '0→1',
    metricLabel: '账号、内容与运营体系搭建',
    tags: ['企业公众号', '电商内容', '直播运营'],
  },
  {
    type: '地方文献整理',
    year: '长期项目',
    title: '浠水地方文献',
    description:
      '参与《浠水方言词考》《浠水历代文选》《浠水历代诗歌选》的录入、校对、断句、排序与排版。',
    metric: '3 部',
    metricLabel: '地方文献项目',
    tags: ['校对整理', '多版本比对', '成书排版'],
  },
];

export const capabilityScenarios = [
  {
    label: 'AI 软件方向',
    title: '门店小程序与会员工具',
    description: '产品目录、会员、预约、优惠与分享卡片一体化，让日常经营数据不再散落在表格和聊天记录里。',
    tags: ['小程序', '业务后台', '数据整合'],
  },
  {
    label: 'AI 视频方向',
    title: '品牌短片与短视频矩阵',
    description: '用统一角色、画面风格和叙事模板批量生产内容，兼顾品牌一致性与发布效率。',
    tags: ['品牌片', '系列短视频', '风格控制'],
  },
  {
    label: 'AI 交付方向',
    title: '企业知识库与内容工作流',
    description: '把产品资料、案例和常见问题整理成可检索知识库，并接入选题、写作与客服工作流。',
    tags: ['知识库', '内容工作流', '团队培训'],
  },
];

export const processSteps = [
  {
    number: '01',
    title: '说清业务问题',
    description: '先聊目标、用户、现有流程和约束。第一次沟通免费，不急着谈技术选型。',
  },
  {
    number: '02',
    title: '给范围与原型',
    description: '拆出最小可行范围，明确交付物、周期、风险和报价。需要时先用原型验证关键假设。',
  },
  {
    number: '03',
    title: '分阶段交付',
    description: '把项目拆成看得见的里程碑。每个阶段都有能运行、能检查的结果，而不是等到最后才验收。',
  },
  {
    number: '04',
    title: '交接与陪跑',
    description: '源码、账号、文档和运营方法一并交接。需要长期维护或团队培训时，再单独约定。',
  },
];

export const experience = [
  {
    period: '2001—2015',
    title: '上海 IT、系统实施与企业客户服务',
    description: '从技术支持做起，经历系统实施、项目销售与客户管理，理解技术如何真正进入业务。',
  },
  {
    period: '2012—2015',
    title: '腾讯微生活合作方 · 客户与运营经理',
    description: '负责餐饮客户管理系统、微信电子会员卡的销售、系统设计与运营策划。',
  },
  {
    period: '2015—2018',
    title: '同是浠水人 · 联合创始人 / 运营总监',
    description: '返乡参与创办本地平台，7 个月进入本地综合影响力前三，并策划首届“浠水好声音”。',
  },
  {
    period: '2018—至今',
    title: '内容与运营顾问 · AI 一人公司实践',
    description: '持续服务本地商家与机构，主理公众号《泛语文》，把 AI 工具接入内容、视频与日常工作流程。',
  },
];

export const faqs = [
  {
    question: '没有明确需求，能不能先聊？',
    answer:
      '可以。你只需要说清楚现在遇到什么问题、希望达到什么结果。我会先判断是否适合合作，再一起收敛范围和方案。',
  },
  {
    question: '不在浠水，可以远程合作吗？',
    answer:
      '可以。需求沟通、原型评审、项目交付和培训都可以远程完成；需要现场参与的项目会单独评估差旅与执行安排。',
  },
  {
    question: 'AI 视频和图片可以直接商用吗？',
    answer:
      '需要逐项确认。不同模型、平台和素材的授权条款不同，我会在制作前说明可商用范围、平台限制和必要的替代方案，不默认承诺所有生成素材可无限制商用。',
  },
  {
    question: '项目完成后，源码和账号归谁？',
    answer:
      '默认在项目款项结清后，将约定范围内的源码、文档和相关账号交付给你。使用的第三方服务、模型和字体授权除外，会在报价与合同中写清楚。',
  },
  {
    question: '页面上的起价怎么理解？',
    answer:
      '页面起价用于判断预算是否大致匹配，是同类项目的最小启动范围，不等于最终报价。确认需求、交付边界和周期后，我会提供一份固定范围报价；第三方模型、素材、广告投放、服务器与差旅等费用会单独列明。',
  },
  {
    question: '项目上线后还提供维护吗？',
    answer:
      '可以提供。维护、内容更新、模型调用成本和功能迭代会按实际工作量单独约定，避免用模糊的“终身维护”制造误解。',
  },
];
