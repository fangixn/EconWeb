# 反爬虫保护机制说明

## 🛡️ 保护层级

### 1. 服务器层面保护 (middleware.ts)

#### 用户代理检测
- 检测常见爬虫用户代理：`bot`, `crawler`, `spider`, `scraper`, `wget`, `curl`, `python-requests`, `scrapy`, `selenium`, `phantomjs`, `headless`
- 自动阻止可疑用户代理访问

#### 速率限制
- 每个IP每分钟最多100次请求
- 超出限制返回429状态码
- 自动清理过期记录

#### 请求模式检测
- 检查缺少的浏览器头部（Accept, Accept-Language, Accept-Encoding）
- 检测异常长的查询参数
- 验证请求的合法性

#### 安全头部
- `X-Frame-Options: DENY` - 防止点击劫持
- `X-Content-Type-Options: nosniff` - 防止MIME类型嗅探
- `X-XSS-Protection: 1; mode=block` - XSS保护
- `Referrer-Policy: strict-origin-when-cross-origin` - 引用者策略
- `Content-Security-Policy` - 内容安全策略

### 2. 客户端层面保护 (AntiBot.tsx)

#### 多维度检测
1. **用户代理检测** - 客户端二次验证
2. **WebGL支持检测** - 大多数爬虫不支持WebGL
3. **屏幕尺寸检测** - 爬虫通常没有真实屏幕尺寸
4. **插件数量检测** - 真实浏览器通常有插件
5. **鼠标移动检测** - 10秒内鼠标移动少于5次触发验证

#### 人机验证
- 简单数学题验证（加法运算）
- 答错重新生成题目
- 通过验证后正常访问

### 3. API层面保护 (app/api/security/route.ts)

#### 行为分析
- 访问频率分析
- 请求头部完整性检查
- 可疑行为记录和报告

#### 蜜罐机制
- 生成诱饵链接：`/admin/login`, `/wp-admin/`, `/phpmyadmin/` 等
- 访问蜜罐自动记录IP和行为
- 用于识别恶意扫描

### 4. 路由层面保护 (next.config.js)

#### 重定向陷阱
常见爬虫目标路径自动重定向到蜜罐：
- `/wp-admin/*` → `/admin`
- `/administrator/*` → `/admin`
- `/phpmyadmin/*` → `/admin`
- `/backup/*` → `/admin`
- `/config/*` → `/admin`
- `/database/*` → `/admin`
- `/private/*` → `/admin`

#### 安全头部强化
- 强制HTTPS传输
- 禁用危险权限（摄像头、麦克风、地理位置）
- 严格的引用者策略

### 5. 搜索引擎控制 (robots.txt)

#### 允许的爬虫
- Googlebot (延迟2秒)
- Bingbot (延迟2秒)
- DuckDuckBot (延迟2秒)
- Baiduspider (延迟3秒)

#### 禁止的爬虫
- SEO工具：SemrushBot, AhrefsBot, MJ12bot
- AI训练：ChatGPT-User, GPTBot, CCBot
- 社交媒体：FacebookExternalHit, Twitterbot, LinkedInBot
- 其他商业爬虫

#### 路径限制
- 禁止访问：`/api/`, `/_next/`, `/admin/`, `/private/`
- 其他路径延迟5秒

## 🔧 配置参数

### 环境变量
```env
ANTI_CRAWLER_ENABLED=true
RATE_LIMIT_WINDOW=60000  # 速率限制窗口（毫秒）
RATE_LIMIT_MAX=100       # 最大请求数
```

### 可调整参数
- **速率限制**：每分钟100次请求（可调整）
- **验证触发**：10秒内鼠标移动少于5次
- **数学题难度**：1-10的加法运算
- **蜜罐重定向延迟**：3秒

## 📊 监控和日志

### 自动记录
- 可疑用户代理访问
- 速率限制触发
- 蜜罐页面访问
- 验证失败次数

### 日志格式
```
Blocked suspicious user agent: [USER_AGENT] from IP: [IP]
Rate limit exceeded for IP: [IP]
Suspicious behavior reported from IP: [IP]
```

## 🚀 部署建议

### 生产环境优化
1. **使用Redis**：替换内存存储，支持分布式部署
2. **CDN配置**：在CDN层面配置额外的安全规则
3. **监控告警**：设置异常访问告警
4. **日志分析**：定期分析访问日志，优化规则

### Vercel部署
- 自动启用Edge Functions
- 全球CDN分发
- 自动HTTPS证书
- 内置DDoS保护

### 性能影响
- 中间件检测：< 1ms
- 客户端检测：< 100ms
- 数学验证：用户交互时间
- 总体影响：最小化

## ⚠️ 注意事项

### 误判处理
- 提供人工验证机制
- 联系邮箱：fangin1230@gmail.com
- 白名单机制（可扩展）

### 合规性
- 符合GDPR要求
- 不收集个人敏感信息
- 仅记录必要的安全日志

### 维护更新
- 定期更新爬虫特征库
- 监控新型爬虫技术
- 调整检测阈值

## 📈 效果评估

### 预期效果
- 阻止90%以上的自动化爬虫
- 保护网站资源和带宽
- 维护正常用户体验
- 提升网站安全性

### 监控指标
- 爬虫阻止率
- 误判率
- 页面加载时间
- 用户投诉数量

---

**最后更新**: 2025年1月
**维护者**: fangxin
**联系方式**: fangin1230@gmail.com 