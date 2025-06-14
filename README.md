# 经济学导航网站 / Economics Navigation Website

这是一个现代化的经济学资源导航网站，整合了经济学研究的各类工具和资源。

## 功能特性

- 🌐 **多语言支持**：英语、中文、韩语、日语
- 🔍 **智能搜索**：快速找到需要的资源
- 📊 **双重导航**：功能导向 + 资源分类
- 🎯 **德国专题**：专门的德国经济学资源板块
- 📱 **响应式设计**：适配各种设备

## 技术栈

- **框架**: Next.js 13 (App Router)
- **样式**: Tailwind CSS + shadcn/ui
- **语言**: TypeScript
- **部署**: Vercel

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 部署到 Vercel

### 方法一：GitHub 集成（推荐）

1. 将代码推送到 GitHub 仓库
2. 在 [Vercel](https://vercel.com) 创建账户
3. 连接 GitHub 仓库
4. 自动部署完成

### 方法二：CLI 部署

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录 Vercel
vercel login

# 部署项目
vercel

# 部署到生产环境
vercel --prod
```

## 项目结构

```
├── app/                    # Next.js App Router 页面
├── components/            # React 组件
├── lib/                   # 工具函数和数据
├── hooks/                 # 自定义 React Hooks
├── econ_resources.json    # 经济学资源数据
├── econ_nav_resources.json # 导航资源数据
└── vercel.json           # Vercel 部署配置
```

## 数据源

项目整合了两个主要数据源：
- `econ_resources.json`: 功能导向的资源分类
- `econ_nav_resources.json`: 传统的资源类型分类

## 贡献指南

欢迎贡献！请遵循以下步骤：

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 许可证

MIT License

## 联系方式

如有问题或建议，请通过 GitHub Issues 联系我们。 