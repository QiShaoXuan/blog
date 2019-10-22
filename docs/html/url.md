# 从用户输入URL到浏览器呈现页面经过了哪些过程

### DNS 解析
1. 浏览器根据地址去本身缓存中查找dns解析记录，如果有，则直接返回IP地址，否则浏览器会查找操作系统中（hosts文件）是否有该域名的dns解析记录，如果有则返回。
2. 如果浏览器缓存和操作系统hosts中均无该域名的dns解析记录，或者已经过期，此时就会向域名服务器发起请求来解析这个域名。
3. 请求会先到LDNS（本地域名服务器），让它来尝试解析这个域名，如果LDNS也解析不了，则直接到根域名解析器请求解析
4. 根域名服务器给LDNS返回一个所查询余的主域名服务器（gTLDServer）地址。
5. 此时LDNS再向上一步返回的gTLD服务器发起解析请求。
6. gTLD服务器接收到解析请求后查找并返回此域名对应的Name Server域名服务器的地址，这个Name Server通常就是你注册的域名服务器（比如阿里dns、腾讯dns等）
7. Name Server域名服务器会查询存储的域名和IP的映射关系表，正常情况下都根据域名得到目标IP记录，连同一个TTL值返回给DNS Server域名服务器
8. 返回该域名对应的IP和TTL值，Local DNS Server会缓存这个域名和IP的对应关系，缓存的时间有TTL值控制。
9. 把解析的结果返回给用户，用户根据TTL值缓存在本地系统缓存中，域名解析过程结束。

### HTTP请求发起和响应

1. 用户输入URL，浏览器获取到URL
2. 浏览器(应用层)进行DNS解析（如果输入的是IP地址，此步骤省略）
3. 根据解析出的IP地址+端口，浏览器（应用层）发起HTTP请求，请求中携带（请求头header（也可细分为请求行和请求头）、请求体body），

> header包含：
>
> > 请求的方法（get、post、put..）
> > 协议（http、https、ftp、sftp…）
> > 目标url（具体的请求路径已经文件名）
> > 一些必要信息（缓存、cookie之类）
> >
> > body包含：
> >
> > 请求的内容

4. 请求到达传输层，tcp协议为传输报文提供可靠的字节流传输服务，它通过三次握手等手段来保证传输过程中的安全可靠。通过对大块数据的分割成一个个报文段的方式提供给大量数据的便携传输。
5. 到网络层， 网络层通过ARP寻址得到接收方的Mac地址，IP协议把在传输层被分割成一个个数据包传送接收方。
6. 数据到达数据链路层，请求阶段完成
7. 接收方在数据链路层收到数据包之后，层层传递到应用层，接收方应用程序就获得到请求报文。
8. 接收方收到发送方的HTTP请求之后，进行请求文件资源（如HTML页面）的寻找并响应报文
9. 发送方收到响应报文后，如果报文中的状态码表示请求成功，则接受返回的资源（如HTML文件），进行页面渲染。

### 网页渲染

1. 浏览器通过HTMLParser根据深度遍历的原则把HTML解析成DOM Tree。
2. 将CSS解析成CSS Rule Tree（CSSOM Tree）。
3. 根据DOM树和CSSOM树来构造render Tree。
4. layout：根据得到的render tree来计算所有节点在屏幕的位置。
5. paint：遍历render树，并调用硬件图形API来绘制每个节点。
6. 当遇到 `script` 标签时会等待其中 `js` 代码执行完成后继续执行上述步骤(会造成阻塞)

> [参考](https://juejin.im/post/5bbaa549e51d450e827b6b13)