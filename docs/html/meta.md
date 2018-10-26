# 常见 meta 标签

## 网页相关信息

### 网页关键字 (SEO)
```html
<meta name="keywords"  content="bolg"/>
```

### 网页描述 (SEO)
```html
<meta name="description"  content="blog from Qi"/>
```

### 标注网页的作者或制作组
```html
<meta name="author"  content="Qi"/>
```

### 编辑器的说明
```html
<meta name="generator" content="webstrom"/> 
```

### 标注版权
```html
 <meta name='Copyright'  content='zhoulujun'/>
```
 
### 通知搜索引擎多少天访问一次
```html
 <meta name="revisit-after"  content="7days"/>
```

## http-equiv

### 设定网页的到期时间。一旦网页过期，必须到服务器上重新传输
```html
<meta http-equiv="expires" content="Fri,12Jan200118:18:18GMT"/> 
```
### 禁止浏览器从本地计算机的缓存中访问页面内容
```html
<meta http-equiv="Pragma" content="no-cache"/> 
```

### 自动刷新并指向新页面。其中的1是指停留1秒钟后自动刷新到URL网址
```html
<meta http-equiv="Refresh" content="1;URL=https://github.com/QiShaoXuan"/>
```

### 如果网页过期，那么存盘的cookie将被删除
必须使用GMT的时间格式
```html
<meta http-equiv="Set-Cookie" content="cookie value=xxx;expires=Friday,12-Jan-200118:18:18GMT；path=/"/>
```

###  设定页面使用的字符集
```html
<meta http-equiv=" content-Type" content="text/html;charset=gb2312"/> 
```

### 设定显示语言
```html
<meta http-equiv=" content-Language" content="zh-cn"/> 
```

### 页面中脚本的类型
```html
<meta http-equiv=" content-Script-Type"  content="text/javascript"/>
```

## IOS

### 添加到主屏后的标题
```html
<meta name="apple-mobile-web-app-title" content="blog from Qi"/>
```

### 是否启用 WebApp 全屏模式，删除苹果默认的工具栏和菜单栏
```html
<meta name="apple-mobile-web-app-capable" content="yes"/>
```

### 添加智能 App 广告条 Smart App Banner
```html
<meta name="apple-itunes-app" content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=https://github.com/QiShaoXuan"/>
```

### 设置苹果工具栏颜色
```html
<meta name="apple-mobile-web-app-status-bar-style" content="#00adb5"/>
```

## windows

### 网页主题颜色
目前只发现 chrome 的 app 顶部工具栏会根据该色值变色

<a href="https://qishaoxuan.github.io/blog/">在移动端使用 chrome app 打开</a>

```html
<meta name="msapplication-TileColor" content="#000"/>    
```
### Windows 8 磁贴图标 (即开始栏的icon)

```html
<meta name="msapplication-TileImage" content="icon.png"/> 
```

## QQ

### QQ强制竖屏
```html
<meta name="x5-orientation" content="portrait"/>
```

### QQ强制全屏
```html
<meta name="x5-fullscreen" content="true"/>
```

### QQ应用模式
```html
<meta name="x5-page-mode" content="app"/>
```

## UC

### UC强制竖屏
```html
<meta name="screen-orientation" content="portrait"/>
```
### UC强制全屏
```html
<meta name="full-screen" content="yes"/>
```
### UC应用模式
```html
<meta name="browsermode" content="application"/>
```


## 其他

### 双内核浏览器优先加载webkit内核
```html
<meta name="renderer" content="webkit">
```

### 双内核浏览器优先加载IE兼容模式
```html
<meta name="renderer" content="ie-comp">
```
