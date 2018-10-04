# jquery跨域头部配置

```javascript
$.ajax({
          type: "GET",
          crossOrigin: true,
          xhrFields: {withCredentials: true},
          url: url,
          success: function (res) {
            console.log(res)
          }
        });
```

在一个老项目里用的，没有在axios等其他插件中使用过