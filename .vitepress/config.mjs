import { defineConfig } from 'vitepress'

// ============================================================
// 国际化（i18n）参考配置
// 结构：中文保留为 root locale（内容路径不变），
//       英文页面放在 en/ 目录下，通过 /en/ 路径访问。
// ============================================================
export default defineConfig({
  base: "/Dracogenisis-wiki/",
  title: "Dracogenesis Unofficial Wiki",
  description: "非官方规则与卡牌数据库",
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  ],

  // 各语言共享的 themeConfig（会被各 locale 的 themeConfig 合并覆盖）
  themeConfig: {
    logo: '/images/tokens/gold-icon.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },

  // ===================== i18n 核心 =====================
  locales: {
    // ---------- 中文（默认，root） ----------
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '摩点官页', link: 'https://zhongchou.modian.com/item/158999.html' },
          { text: '首页', link: '/' },
          { text: '角色', link: '/characters' },
          { text: '规则',
            items: [
              { text: '快速规则', link: '/rules/quickstart' },
              { text: '完整规则', link: '/rules/full/' },
              { text: '规则裁定', link: '/rules/faq/' }
            ]
          },
          { text: '卡牌查询',
            items: [
              { text: '技能牌', link: '/cards/skills/' },
              { text: '奇观牌', link: '/cards/wonders/' },
              { text: '纪念碑', link: '/cards/monuments/' }
            ]
          }
        ],

        sidebar: {
          // 快速规则页：不显示侧边栏（单页即可）
          '/rules/quickstart': [],
          // 完整规则：显示子页面导航
          '/rules/full/': [
            {
              text: '完整规则',
              items: [
                { text: '总览', link: '/rules/full/' },
                { text: '游戏设置', link: '/rules/full/setup' },
                { text: '回合流程', link: '/rules/full/turn-flow' },
                { text: '胜利条件', link: '/rules/full/victory' }
              ]
            }
          ],
          // 卡牌查询：技能牌 + 奇观牌 + 纪念碑 + 领袖扩展
          '/cards/': [
            {
              text: '技能牌',
              link: '/cards/skills/',
              collapsed: true,
              items: [
                { text: '采集', link: '/cards/skills/classic_skill_01' },
                { text: '捕猎', link: '/cards/skills/classic_skill_06' },
                { text: '收获浆果丛', link: '/cards/skills/classic_skill_05' },
                { text: '收获蘑菇树桩', link: '/cards/skills/skill_01' },
                { text: '收获龙果树', link: '/cards/skills/skill_02' },
                { text: '高效捕猎', link: '/cards/skills/skill_03' },
                { text: '高效采集', link: '/cards/skills/skill_04' },
                { text: '掠夺商队', link: '/cards/skills/skill_05' },
                { text: '掠夺矿山', link: '/cards/skills/skill_06' },
                { text: '传承技艺', link: '/cards/skills/skill_07' },
                { text: '传承财富', link: '/cards/skills/skill_08' },
                { text: '展翅翱翔', link: '/cards/skills/skill_09' },
                { text: '顺手掠夺', link: '/cards/skills/skill_10' },
                { text: '顺手采集', link: '/cards/skills/skill_11' },
                { text: '顺手捕猎', link: '/cards/skills/skill_12' },
                { text: '按需分配', link: '/cards/skills/skill_13' },
                { text: '采购物资', link: '/cards/skills/skill_14' },
                { text: '伐木动员', link: '/cards/skills/skill_15' },
                { text: '磨练技艺', link: '/cards/skills/skill_16' },
                { text: '一网打尽', link: '/cards/skills/skill_17' },
                { text: '亲密无间（待完善）', link: '/cards/skills/skill_18' }
              ]
            },
            {
              text: '奇观牌',
              link: '/cards/wonders/',
              collapsed: true,
              items: [
                { text: '巨石阵', link: '/cards/wonders/wonder_01' },
                { text: '博览会馆', link: '/cards/wonders/wonder_02' },
                { text: '黄金塔', link: '/cards/wonders/wonder_03' },
                { text: '大巴扎', link: '/cards/wonders/wonder_04' },
                { text: '扎实地基', link: '/cards/wonders/wonder_05' },
                { text: '大金字塔', link: '/cards/wonders/wonder_06' },
                { text: '智慧宫', link: '/cards/wonders/wonder_07' },
                { text: '猎手神庙', link: '/cards/wonders/wonder_08' },
                { text: '地热温泉', link: '/cards/wonders/wonder_09' },
                { text: '龙墓', link: '/cards/wonders/wonder_10' },
                { text: '芦苇棚屋', link: '/cards/wonders/wonder_11' },
                { text: '伐木小屋', link: '/cards/wonders/wonder_12' },
                { text: '琉璃宝塔', link: '/cards/wonders/wonder_13' },
                { text: '大浴场', link: '/cards/wonders/wonder_14' },
                { text: '城堡', link: '/cards/wonders/wonder_15' },
                { text: '水渠', link: '/cards/wonders/wonder_16' },
                { text: '兵马俑', link: '/cards/wonders/wonder_17' },
                { text: '地下水宫', link: '/cards/wonders/wonder_18' },
                { text: '天空学院', link: '/cards/wonders/wonder_19' },
                { text: '炼金实验室', link: '/cards/wonders/wonder_20' },
                { text: '空中花园', link: '/cards/wonders/wonder_21' },
                { text: '巨龙神庙', link: '/cards/wonders/wonder_22' },
                { text: '生命之树', link: '/cards/wonders/wonder_23' },
                { text: '巨龙雕像', link: '/cards/wonders/wonder_24' },
                { text: '大竞技场', link: '/cards/wonders/wonder_25' },
                { text: '熔岩火山', link: '/cards/wonders/wonder_26' },
                { text: '冰川残骸', link: '/cards/wonders/wonder_27' },
                { text: '水运浑天仪', link: '/cards/wonders/wonder_28' },
                { text: '特洛伊城（待完善）', link: '/cards/wonders/wonder_29' },
                { text: '佩特拉城（待完善）', link: '/cards/wonders/wonder_30' },
                { text: '大图书馆（待完善）', link: '/cards/wonders/wonder_31' },
                { text: '庞贝古城（待完善）', link: '/cards/wonders/wonder_32' }
              ]
            },
            {
              text: '纪念碑',
              link: '/cards/monuments/',
              collapsed: true,
              items: []
            },
            {
              text: '领袖迷你扩展',
              link: '/cards/abilities/',
              collapsed: true,
              items: []
            }
          ]
        },

        search: {
          provider: 'local'
        }
      }
    },

    // ---------- 英文（/en/） ----------
    // 对应文件放在项目根目录的 en/ 文件夹下
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',              // 语言切换菜单中指向的入口链接
      title: 'Dracogenesis Unofficial Wiki',
      description: 'Unofficial rules and card database',
      themeConfig: {
        nav: [
          { text: 'Modian Campaign', link: 'https://zhongchou.modian.com/item/158999.html' },
          { text: 'Home', link: '/en/' },
          { text: 'Characters', link: '/en/characters' },
          { text: 'Rules',
            items: [
              { text: 'Quickstart', link: '/en/rules/quickstart' },
              { text: 'Full Rules', link: '/en/rules/full/' },
              { text: 'Rulings (FAQ)', link: '/en/rules/faq/' }
            ]
          },
          { text: 'Cards',
            items: [
              { text: 'Skill Cards', link: '/en/cards/skills/' },
              { text: 'Wonder Cards', link: '/en/cards/wonders/' },
              { text: 'Monuments', link: '/en/cards/monuments/' }
            ]
          }
        ],

        sidebar: {
          '/en/rules/quickstart': [],
          '/en/rules/full/': [
            {
              text: 'Full Rules',
              items: [
                { text: 'Overview', link: '/en/rules/full/' },
                { text: 'Setup', link: '/en/rules/full/setup' },
                { text: 'Turn Flow', link: '/en/rules/full/turn-flow' },
                { text: 'Victory Conditions', link: '/en/rules/full/victory' }
              ]
            }
          ],
          // 注意：EN 区卡牌的 text 为占位译名，
          // 正式开发时请替换为官方英文卡名（保持 link 文件名不变）
          '/en/cards/': [
            {
              text: 'Skill Cards',
              link: '/en/cards/skills/',
              collapsed: true,
              items: [
                { text: 'Hunting', link: '/en/cards/skills/classic_skill_01' },
                { text: 'gathering', link: '/en/cards/skills/classic_skill_06' },
                { text: 'Harvesting', link: '/en/cards/skills/classic_skill_05' },
                { text: 'Harvest Mushroom Stump', link: '/en/cards/skills/skill_01' },
                { text: 'Harvest Dragonfruit Tree', link: '/en/cards/skills/skill_02' },
                { text: 'Efficient Hunting', link: '/en/cards/skills/skill_03' },
                { text: 'Efficient Gathering', link: '/en/cards/skills/skill_04' },
                { text: 'Looting Caravan', link: '/en/cards/skills/skill_05' },
                { text: 'Looting Mine', link: '/en/cards/skills/skill_06' },
                { text: 'Pass Down Craftsmanship', link: '/en/cards/skills/skill_07' },
                { text: 'Pass Down Wealth', link: '/en/cards/skills/skill_08' },
                { text: 'Take Flight', link: '/en/cards/skills/skill_09' },
                { text: 'Quick Looting', link: '/en/cards/skills/skill_10' },
                { text: 'Quick Gathering', link: '/en/cards/skills/skill_11' },
                { text: 'Quick Hunting', link: '/en/cards/skills/skill_12' },
                { text: 'Allocating', link: '/en/cards/skills/skill_13' },
                { text: 'Trading', link: '/en/cards/skills/skill_14' },
                { text: 'Logging Mobilization', link: '/en/cards/skills/skill_15' },
                { text: 'Honning Skills', link: '/en/cards/skills/skill_16' },
                { text: 'Catch Them All', link: '/en/cards/skills/skill_17' },
                { text: 'Close Bond (WIP)', link: '/en/cards/skills/skill_18' }
              ]
            },
            {
              text: 'Wonder Cards',
              link: '/en/cards/wonders/',
              collapsed: true,
              items: [
                { text: 'Stonehenge', link: '/en/cards/wonders/wonder_01' },
                { text: 'Expo Pavilion', link: '/en/cards/wonders/wonder_02' },
                { text: 'TorreDelOro', link: '/en/cards/wonders/wonder_03' },
                { text: 'Bazaar', link: '/en/cards/wonders/wonder_04' },
                { text: 'Solid Foundation', link: '/en/cards/wonders/wonder_05' },
                { text: 'Great Pyramid', link: '/en/cards/wonders/wonder_06' },
                { text: 'House of Wisdom', link: '/en/cards/wonders/wonder_07' },
                { text: "Hunters' Shrine", link: '/en/cards/wonders/wonder_08' },
                { text: 'Geothermal Spring', link: '/en/cards/wonders/wonder_09' },
                { text: 'Dragons Cemetery', link: '/en/cards/wonders/wonder_10' },
                { text: 'Reed Shanty', link: '/en/cards/wonders/wonder_11' },
                { text: 'Logging Cabin', link: '/en/cards/wonders/wonder_12' },
                { text: 'Glazed Pagoda', link: '/en/cards/wonders/wonder_13' },
                { text: 'Grand Bathhouse', link: '/en/cards/wonders/wonder_14' },
                { text: 'Castle', link: '/en/cards/wonders/wonder_15' },
                { text: 'Ditch', link: '/en/cards/wonders/wonder_16' },
                { text: 'Terracotta Army', link: '/en/cards/wonders/wonder_17' },
                { text: 'Sarnici', link: '/en/cards/wonders/wonder_18' },
                { text: 'Sky Academy', link: '/en/cards/wonders/wonder_19' },
                { text: 'Alchemy Lab', link: '/en/cards/wonders/wonder_20' },
                { text: 'Levitational Gardens', link: '/en/cards/wonders/wonder_21' },
                { text: 'Dragon Shrine', link: '/en/cards/wonders/wonder_22' },
                { text: 'Tree of Life', link: '/en/cards/wonders/wonder_23' },
                { text: 'Dragon Statue', link: '/en/cards/wonders/wonder_24' },
                { text: 'Colosseum', link: '/en/cards/wonders/wonder_25' },
                { text: 'Volcano', link: '/en/cards/wonders/wonder_26' },
                { text: 'Glacial Debris', link: '/en/cards/wonders/wonder_27' },
                { text: 'Armillary Sphere', link: '/en/cards/wonders/wonder_28' },
                { text: 'Troy (WIP)', link: '/en/cards/wonders/wonder_29' },
                { text: 'Petra (WIP)', link: '/en/cards/wonders/wonder_30' },
                { text: 'Great Library (WIP)', link: '/en/cards/wonders/wonder_31' },
                { text: 'Pompeii (WIP)', link: '/en/cards/wonders/wonder_32' }
              ]
            },
            {
              text: 'Monuments',
              link: '/en/cards/monuments/',
              collapsed: true,
              items: []
            },
            {
              text: 'Leader Mini-Expansion',
              link: '/en/cards/abilities/',
              collapsed: true,
              items: []
            }
          ]
        },

        // 英文界面文案（不配置则显示默认英文，按需启用）
        outline: { label: 'On this page' },
        docFooter: { prev: 'Previous page', next: 'Next page' },
        darkModeSwitchLabel: 'Appearance',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Return to top',
        langMenuLabel: 'Change language',

        search: {
          provider: 'local'
        }
      }
    }
  }
})
