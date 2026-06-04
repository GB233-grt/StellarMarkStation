# 星痕空间站

> 蛰伏宇宙，置身黑暗森林

一个基于Vue3的三体主题互动游戏平台。

## 技术栈

- **框架**: Vue 3 + TypeScript
- **构建工具**: Vite 5
- **样式**: TailwindCSS 3
- **容器**: Docker

## 功能特性

### 趣味互动专区

1. **黑暗森林坐标模拟器** - 自定义文明坐标、文明体量，随机生成三种结局
2. **面壁计划推演器** - 输入自研面壁策略，AI模拟破壁人逻辑判定计划成功/失败
3. **文明等级测评** - 选择题问卷，自动计算卡尔达肖夫文明等级分数
4. **执剑人压力测试** - 限时选择威慑开关，二选一跳转人类不同走向结局
5. **三体行星生存试炼** - 模拟三星乱纪元，多选生存方案，随机判定存活或覆灭
6. **随机星际身份抽签** - 一键抽取角色并显示角色简介

### 附加功能

- **星际留言墙** - 访客在线留言，前端临时缓存
- **首页轮播** - 古筝行动、水滴战役、太阳系二维化三张插画

## 项目结构

```
src/
├── components/          # 组件目录
│   ├── StarBackground.vue    # 星空背景动画
│   ├── Navigation.vue        # 导航组件
│   ├── HeroCarousel.vue      # 首页轮播
│   ├── GameCard.vue          # 游戏卡片
│   ├── DarkForestGame.vue    # 黑暗森林坐标模拟器
│   ├── WallfacerGame.vue     # 面壁计划推演器
│   ├── CivilizationTest.vue  # 文明等级测评
│   ├── DeterrenceGame.vue    # 执剑人压力测试
│   ├── SurvivalGame.vue      # 三体行星生存试炼
│   ├── IdentityGame.vue      # 随机星际身份抽签
│   └── MessageWall.vue       # 星际留言墙
├── utils/               # 工具函数
│   └── gameLogic.ts     # 游戏逻辑工具函数
├── assets/              # 静态资源
├── App.vue              # 主应用组件
├── main.ts              # 入口文件
└── style.css            # 全局样式
```

## 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

### Docker部署

```bash
# 构建Docker镜像
docker build -t stellar-station .

# 运行容器
docker run -p 80:80 stellar-station
```

### 使用start.sh脚本

```bash
# Linux/Mac
chmod +x start.sh
./start.sh

# Windows (PowerShell)
bash start.sh
```

### GitHub Pages部署

#### 自动部署（推荐）

项目已配置GitHub Actions自动部署工作流，每次推送到`main`或`master`分支时自动构建并部署到GitHub Pages。

**配置步骤：**

1. 在GitHub仓库中，进入 **Settings > Pages**
2. 在 **Source** 部分，选择 **GitHub Actions**
3. 确保工作流文件 `.github/workflows/deploy.yml` 已存在

**触发条件：**
- 每次推送到 `main` 或 `master` 分支时自动触发部署
- 也可以在Actions页面手动触发部署

#### 手动部署

```bash
# 安装依赖
npm install

# 构建项目
npm run build

# 部署到GitHub Pages
npm run deploy
```

## 访问地址

- 开发环境: http://localhost:5173
- 生产环境: http://localhost (Docker)
- GitHub Pages: https://GB233-grt.github.io/StellarMarkStation/

## License

MIT