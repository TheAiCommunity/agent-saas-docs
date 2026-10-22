---
title: 内容 API 参考
description: 鲸芽 Agent 内容 API 的全部接口，按功能分组，由 OpenAPI 规范自动生成。
---

内容 API 是租户应用调用鲸芽 Agent 的入口：登录、管理技能与模板、执行自动化任务并发布到社媒平台。

- 接口根地址：`https://saas.theaicommunity.net`
- 在线调试：[https://saas.theaicommunity.net/swagger/content/index.html](https://saas.theaicommunity.net/swagger/content/index.html)
- OpenAPI JSON：[https://saas.theaicommunity.net/swagger/content/doc.json](https://saas.theaicommunity.net/swagger/content/doc.json)

认证方式、错误格式与通用约定见[开发者概览](overview.md)与[API 约定](conventions.md)。

## 认证

| 方法 | 接口 | 说明 |
| --- | --- | --- |
| `POST` | `/v1/auth/change-password` | 修改本人密码 |
| `POST` | `/v1/auth/login` | 租户密码登录 |
| `POST` | `/v1/auth/logout` | 登出当前租户会话 |
| `GET` | `/v1/auth/me` | 当前租户成员 |
| `GET` | `/v1/auth/permissions` | 当前租户权限 |
| `POST` | `/v1/auth/refresh` | 轮换租户令牌 |

## 模板与文案模型

| 方法 | 接口 | 说明 |
| --- | --- | --- |
| `GET` | `/v1/content-models` | 列出内容任务可用的文案模型 |
| `GET` | `/v1/templates` | 查询当前租户可用内容模板 |
| `GET` | `/v1/templates/{template_id}` | 查看当前租户可用模板详情 |

## 技能

| 方法 | 接口 | 说明 |
| --- | --- | --- |
| `GET` | `/v1/skill-installations` | 列出租户技能安装 |
| `POST` | `/v1/skill-installations` | 安装一个技能 |
| `GET` | `/v1/skill-installations/{installationId}` | 租户技能安装详情 |
| `PUT` | `/v1/skill-installations/{installationId}` | 更新安装设置 |
| `DELETE` | `/v1/skill-installations/{installationId}` | 卸载一个技能 |
| `PUT` | `/v1/skill-installations/{installationId}/scopes` | 确认额外的技能授权 |
| `PUT` | `/v1/skill-installations/{installationId}/version` | 升级锁定的技能版本 |
| `GET` | `/v1/skills` | 浏览可用技能 |
| `GET` | `/v1/skills/{skillId}` | 技能目录详情 |

## 社媒账号与平台连接

| 方法 | 接口 | 说明 |
| --- | --- | --- |
| `GET` | `/v1/platforms` | 列出平台能力 |
| `DELETE` | `/v1/platforms/bilibili/accounts/{accountID}` | 本地断开 Bilibili 账号 |
| `GET` | `/v1/platforms/douyin/h5-share-readiness` | 读取抖音 H5 分享就绪状态 |
| `GET` | `/v1/platforms/wechat/accounts` | 列出已配置的微信公众号 |
| `POST` | `/v1/platforms/wechat/accounts` | 配置租户的微信公众号 |
| `GET` | `/v1/platforms/wechat/accounts/{accountID}` | 获取脱敏的微信账号配置 |
| `PUT` | `/v1/platforms/wechat/accounts/{accountID}` | 更新凭证、名称或启用状态 |
| `POST` | `/v1/platforms/wechat/accounts/{accountID}/check` | 用已保存凭证对微信做连接检查 |
| `POST` | `/v1/platforms/xiaohongshu/accounts` | 注册一个小红书账号槽位 |
| `GET` | `/v1/platforms/xiaohongshu/accounts/{account_key}` | 获取一个小红书账号 |
| `DELETE` | `/v1/platforms/xiaohongshu/accounts/{account_key}` | 移除小红书账号连接 |
| `POST` | `/v1/platforms/xiaohongshu/accounts/{account_key}/browser-identity/reset` | 显式重置小红书账号的浏览器身份 |
| `POST` | `/v1/platforms/xiaohongshu/accounts/{account_key}/cookie-login` | 导入并校验小红书 Cookie |
| `GET` | `/v1/platforms/xiaohongshu/accounts/{account_key}/login-bootstrap` | 下载本地重新登录小红书所需的元数据 |
| `POST` | `/v1/platforms/xiaohongshu/accounts/{account_key}/login-sessions` | 创建扫码登录会话 |
| `POST` | `/v1/platforms/xiaohongshu/accounts/{account_key}/login-sessions/refresh` | 刷新扫码登录会话 |
| `POST` | `/v1/platforms/xiaohongshu/accounts/{account_key}/logout` | 登出小红书账号连接 |
| `GET` | `/v1/platforms/xiaohongshu/login-sessions/{session_id}` | 读取已保存的小红书登录状态 |
| `GET` | `/v1/platforms/xiaohongshu/login-sessions/{session_id}/events` | 通过 WebSocket 订阅小红书登录事件 |
| `GET` | `/v1/platforms/{platform}/capabilities` | 获取平台能力 |
| `GET` | `/v1/platforms/{platform}/connection-readiness` | 检查官方平台连接就绪状态 |
| `GET` | `/v1/social-accounts` | 列出社媒账号 |
| `GET` | `/v1/social-accounts/{accountID}/profile` | 读取账号工作台名称与编码 |
| `PUT` | `/v1/social-accounts/{accountID}/profile` | 更新账号工作台名称与编码，不改变登录身份 |

## 自动化任务

| 方法 | 接口 | 说明 |
| --- | --- | --- |
| `GET` | `/v1/automation-capabilities` | 获取内容自动化能力 |
| `GET` | `/v1/automation-tasks` | 列出自动化任务 |
| `POST` | `/v1/automation-tasks` | 创建自动化任务 |
| `GET` | `/v1/automation-tasks/search` | 检索租户自动化任务 |
| `POST` | `/v1/automation-tasks/validate` | 校验自动化任务 |
| `GET` | `/v1/automation-tasks/{task_id}` | 获取一条自动化任务 |
| `PUT` | `/v1/automation-tasks/{task_id}` | 用当前 ETag 整体替换暂停中的任务 |
| `POST` | `/v1/automation-tasks/{task_id}/analyses` | 排队一次手动 AI 分析 |
| `POST` | `/v1/automation-tasks/{task_id}/cancel` | 取消自动化任务 |
| `GET` | `/v1/automation-tasks/{task_id}/image-generations` | 列出已保存的生图任务及其输出素材 |
| `POST` | `/v1/automation-tasks/{task_id}/image-generations/{generation_id}/retry` | 重试未完成的生图；unknown 需显式 allow_unknown |
| `GET` | `/v1/automation-tasks/{task_id}/metrics` | 获取任务指标 |
| `POST` | `/v1/automation-tasks/{task_id}/pause` | 暂停自动化任务 |
| `GET` | `/v1/automation-tasks/{task_id}/progress` | 任务发布进度、对账结果与下一步动作 |
| `GET` | `/v1/automation-tasks/{task_id}/recommendations` | 列出 AI 建议 |
| `GET` | `/v1/automation-tasks/{task_id}/reports` | 列出 AI 分析报告 |
| `POST` | `/v1/automation-tasks/{task_id}/resume` | 恢复自动化任务 |
| `POST` | `/v1/automation-tasks/{task_id}/retry` | 重试失败或被审核阻塞的任务 |
| `POST` | `/v1/automation-tasks/{task_id}/run-now` | 安排任务立即运行 |
| `GET` | `/v1/automation-tasks/{task_id}/runs` | 列出该任务最近 200 次运行 |

## 运行、报告与建议

| 方法 | 接口 | 说明 |
| --- | --- | --- |
| `GET` | `/v1/automation-dashboard/summary` | 获取内容自动化仪表盘 |
| `GET` | `/v1/automation-runs` | 列出最近 200 条自动化运行 |
| `GET` | `/v1/automation-runs/search` | 检索租户自动化运行 |
| `GET` | `/v1/automation-runs/{run_id}` | 获取一条自动化运行 |
| `GET` | `/v1/operations/{operation_id}` | 获取一条异步操作 |
| `GET` | `/v1/recommendations/{recommendation_id}` | 获取一条 AI 建议 |
| `POST` | `/v1/recommendations/{recommendation_id}/dismiss` | 忽略一条 AI 建议 |
| `GET` | `/v1/reports/{report_id}` | 获取一条 AI 分析报告 |

## 素材

| 方法 | 接口 | 说明 |
| --- | --- | --- |
| `GET` | `/v1/assets` | 列出租户媒体素材 |
| `POST` | `/v1/assets` | 上传租户媒体素材 |
| `GET` | `/v1/assets/groups` | 列出租户素材分组 |
| `POST` | `/v1/assets/groups` | 创建租户素材分组 |
| `PUT` | `/v1/assets/groups/{groupID}` | 重命名租户素材分组 |
| `DELETE` | `/v1/assets/groups/{groupID}` | 删除分组，其媒体归入未分组 |
| `GET` | `/v1/assets/search` | 检索租户媒体素材 |
| `POST` | `/v1/assets/search` | 用 JSON 条件检索媒体素材 |
| `GET` | `/v1/assets/{asset_id}` | 读取租户素材元数据 |
| `PUT` | `/v1/assets/{asset_id}` | 编辑租户媒体元数据 |
| `DELETE` | `/v1/assets/{asset_id}` | 将租户素材移入回收站 |
| `GET` | `/v1/assets/{asset_id}/content` | 下载经鉴权的租户素材内容 |
| `POST` | `/v1/assets/{asset_id}/restore` | 恢复回收站中的租户素材 |

## 草稿、审核与发布

| 方法 | 接口 | 说明 |
| --- | --- | --- |
| `POST` | `/v1/content-drafts/{draftID}/douyin-h5-shares` | 为用户确认的抖音 H5 分享准备当前草稿 |
| `GET` | `/v1/content-drafts/{draft_id}` | 获取一条内容草稿 |
| `POST` | `/v1/content-drafts/{draft_id}/regenerate` | 用 AI 重新生成草稿 |
| `POST` | `/v1/content-drafts/{draft_id}/revisions` | 创建新的草稿版本 |
| `GET` | `/v1/content-reviews` | 列出内容审核 |
| `GET` | `/v1/content-reviews/search` | 检索租户内容审核 |
| `GET` | `/v1/content-reviews/{review_id}` | 获取一条内容审核 |
| `POST` | `/v1/content-reviews/{review_id}/approve` | 通过审核并按原稿提交发布 |
| `POST` | `/v1/content-reviews/{review_id}/changes-requested` | 对审核内容提出修改请求 |
| `POST` | `/v1/content-reviews/{review_id}/reject` | 驳回一条内容审核 |
| `GET` | `/v1/content-reviews/{review_id}/replacement-options` | 获取待定草稿的重新生成选项 |
| `GET` | `/v1/publications` | 列出发布记录 |
| `GET` | `/v1/publications/{publication_id}` | 获取一条发布记录 |
| `POST` | `/v1/publications/{publication_id}/collect-comments` | 请求采集评论（暂不支持） |
| `POST` | `/v1/publications/{publication_id}/collect-metrics` | 立即安排指标采集 |
| `GET` | `/v1/publications/{publication_id}/comments` | 列出已采集的评论 |
| `GET` | `/v1/publications/{publication_id}/metric-collection` | 获取指标采集状态 |
| `GET` | `/v1/publications/{publication_id}/metrics` | 获取发布指标快照 |
| `POST` | `/v1/publications/{publication_id}/reconcile` | 对账一条状态不明的发布 |
| `POST` | `/v1/publications/{publication_id}/resolve` | 人工裁定一条状态不明的发布 |
| `POST` | `/v1/publications/{publication_id}/retry` | 重试一条明确失败的发布 |

## 微信个人号工作台

| 方法 | 接口 | 说明 |
| --- | --- | --- |
| `GET` | `/v1/wechat-personal/accounts` | 列出微信个人号账号 |
| `POST` | `/v1/wechat-personal/accounts` | 创建账号或挂载已有的 GeWe 节点 |
| `GET` | `/v1/wechat-personal/accounts/{accountID}` | 获取租户的微信个人号账号 |
| `GET` | `/v1/wechat-personal/accounts/{accountID}/actions` | 列出手动操作及其结果 |
| `POST` | `/v1/wechat-personal/accounts/{accountID}/actions` | 排队一条手动消息或发布 |
| `GET` | `/v1/wechat-personal/accounts/{accountID}/capabilities` | 读取通道就绪状态 |
| `POST` | `/v1/wechat-personal/accounts/{accountID}/check` | 检查 GeWe 实际在线状态 |
| `GET` | `/v1/wechat-personal/accounts/{accountID}/contacts` | 读取 GeWe 联系人与群目录 |
| `GET` | `/v1/wechat-personal/accounts/{accountID}/finder` | 读取视频号身份与主页 |
| `GET` | `/v1/wechat-personal/accounts/{accountID}/groups/{groupID}/members` | 读取群成员 |
| `POST` | `/v1/wechat-personal/accounts/{accountID}/login-sessions` | 创建 GeWe 扫码登录会话 |
| `GET` | `/v1/wechat-personal/accounts/{accountID}/login-sessions/{sessionID}` | 轮询已保存的 GeWe 扫码登录会话 |
| `GET` | `/v1/wechat-personal/accounts/{accountID}/messages` | 读取已保存的收发消息 |
| `GET` | `/v1/wechat-personal/accounts/{accountID}/moments` | 读取账号朋友圈列表 |
| `GET` | `/v1/wechat-personal/actions/{actionID}` | 获取一条租户操作 |
| `POST` | `/v1/wechat-personal/actions/{actionID}/resolve` | 记录人工核验结果 |
| `POST` | `/v1/wechat-personal/actions/{actionID}/verify` | 读取远端发布证据，不重发 |
| `GET` | `/v1/wechat-personal/connections` | 列出脱敏的 GeWe 服务连接 |
| `POST` | `/v1/wechat-personal/connections` | 创建加密的租户 GeWe 连接 |
| `POST` | `/v1/wechat-personal/connections/{connectionID}/callback` | 配置服务端持有的 GeWe 回调地址 |
| `GET` | `/v1/wechat-personal/workspace` | 打开微信个人号工作台 |
| `GET` | `/v1/wechat-personal/workspace/` | 打开微信个人号工作台（带尾斜杠） |
| `GET` | `/v1/wechat-personal/workspace/app.js` | 读取微信个人号工作台脚本 |
| `GET` | `/v1/wechat-personal/workspace/automation-panel.js` | 读取微信个人号工作台脚本 |
| `GET` | `/v1/wechat-personal/workspace/style.css` | 读取微信个人号工作台样式表 |

## OAuth 与回调

| 方法 | 接口 | 说明 |
| --- | --- | --- |
| `POST` | `/v1/bilibili/oauth/authorize` | 发起租户 Bilibili 官方 OAuth |
| `GET` | `/v1/bilibili/oauth/callback` | 公开的浏览器侧 Bilibili OAuth 回调 |
| `GET` | `/v1/douyin/h5/media/{token}/{filename}` | 读取一张短时效抖音 H5 分享图片 |
| `HEAD` | `/v1/douyin/h5/media/{token}/{filename}` | 读取一张短时效抖音 H5 分享图片 |
| `POST` | `/v1/douyin/oauth/authorize` | 发起租户抖音 OAuth |
| `GET` | `/v1/douyin/oauth/callback` | 公开的浏览器侧抖音 OAuth 回调 |
| `GET` | `/v1/integrations/gewe/media/{leaseID}/{secret}` | 读取带时效和能力保护的媒体对象 |
| `POST` | `/v1/integrations/gewe/webhooks/{connectionID}/{secret}` | 保存经鉴权的 GeWe 事件，不自动回复 |
| `POST` | `/v1/twitter/oauth/authorize` | 发起浏览器侧 X/Twitter OAuth |
| `GET` | `/v1/twitter/oauth/callback` | 公开的浏览器侧 X/Twitter OAuth 回调 |

