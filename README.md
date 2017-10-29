# hexo-theme-cool
cool是一个简洁美观的hexo主题，上手简单适合博客新手使用

# 使用方法
$ git clone https://github.com/justcoolls/hexo-theme-cool.git themes/cool

# 配置
根据需要选择配置需要展示的社交账号，头像等
```bash
# Header
menu:
  Home: /
  Archives: /archives

# SubNav
subnav:
  github: "#"
  weibo: "#"
  zhihu: "#"
  qq: "#"
  weixin: "#"
  jianshu: "#"
  renren: "#"
  douban: "#"
  bilibili: "#"
  acfun: "#"
  mail: "#"
  facebook: "#"
  google: "#"
  twitter: "#"
  linkedin: "#"
  rss: "#"

# Content
excerpt_link: Read More
fancybox: true

# Sidebar
sidebar: right
widgets:
- category
- tag
- tagcloud
- archive
- recent_posts

# display widgets at the bottom of index pages (pagination == 2)
index_widgets:
# - category
# - tagcloud
# - archive

# widget behavior
archive_type: 'monthly'
show_count: false

#你的头像url
avatar: /img/avatar.jpg

# Miscellaneous
google_analytics:
favicon: /favicon.png
twitter:
google_plus:
fb_admins:
fb_app_id:
```
