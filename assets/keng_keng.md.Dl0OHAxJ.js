import{_ as a,o as n,c as l,a2 as o}from"./chunks/framework.D52qfWmk.js";const d=JSON.parse('{"title":"记录","description":"","frontmatter":{},"headers":[],"relativePath":"keng/keng.md","filePath":"keng/keng.md"}'),p={name:"keng/keng.md"};function e(c,s,t,r,E,i){return n(),l("div",null,[...s[0]||(s[0]=[o(`<h1 id="记录" tabindex="-1">记录 <a class="header-anchor" href="#记录" aria-label="Permalink to &quot;记录&quot;">​</a></h1><ol><li>在使用 <code>node.appendChild(childNode)</code> 时，如果 <code>childNode</code> 是另一个元素的子元素，那么在 append 后，该元素会从其父元素中删除。也就是说在父元素中 <code>forEach</code> 循环时不应该 <code>appendChild</code>。</li><li>在微信小程序中使用 webview 页面跳转链接，链接地址不能使用 <code>http</code> 且不能带有 <code>#</code> 否则页面会跳转两次</li><li><code>Object.assign(a,b)</code> 会将 <code>b</code> 对象的属性覆盖至 <code>a</code> 属性，但是仅会覆盖第一层。</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> objA </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  attrs: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    class: </span><span style="color:#9ECBFF;">&quot;classname&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    style: </span><span style="color:#9ECBFF;">&quot;color: red;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> objB </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  attrs: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    class: </span><span style="color:#9ECBFF;">&quot;this is classname&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> assignObj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">assign</span><span style="color:#E1E4E8;">(objA, objB);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//assignObj = {</span></span>
<span class="line"><span style="color:#6A737D;">//  attrs: {</span></span>
<span class="line"><span style="color:#6A737D;">//    class: &#39;this is classname&#39;</span></span>
<span class="line"><span style="color:#6A737D;">//    }</span></span>
<span class="line"><span style="color:#6A737D;">//}</span></span></code></pre></div><ol start="4"><li>ios 中日期转换不能识别 &#39;-&#39; 连接的日期</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> date</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> &quot;2020-05-21 18:40:03&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 通常写法</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> currentTime</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">(date).</span><span style="color:#B392F0;">getTime</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">// 兼容 ios 写法</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> currentTime</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">(date.</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">-</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">g</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">)).</span><span style="color:#B392F0;">getTime</span><span style="color:#E1E4E8;">();</span></span></code></pre></div>`,5)])])}const F=a(p,[["render",e]]);export{d as __pageData,F as default};
