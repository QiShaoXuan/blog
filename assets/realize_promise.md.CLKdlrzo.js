import{_ as n,o as a,c as l,a2 as p}from"./chunks/framework.D52qfWmk.js";const i=JSON.parse('{"title":"Promise","description":"","frontmatter":{},"headers":[],"relativePath":"realize/promise.md","filePath":"realize/promise.md"}'),o={name:"realize/promise.md"};function e(c,s,t,r,E,y){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h1 id="promise" tabindex="-1">Promise <a class="header-anchor" href="#promise" aria-label="Permalink to &quot;Promise&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>难点：</p><ol><li>异步处理</li><li>兼容不同 <code>Promise</code> 的 <code>resolvePromise</code> 函数</li></ol></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">interface</span><span style="color:#B392F0;"> MyPromise</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#FFAB70;">  status</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;"> &#39;pendding&#39;</span><span style="color:#F97583;"> |</span><span style="color:#9ECBFF;"> &#39;resloved&#39;</span><span style="color:#F97583;"> |</span><span style="color:#9ECBFF;"> &#39;rejected&#39;</span></span>
<span class="line"><span style="color:#FFAB70;">  data</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> any</span></span>
<span class="line"><span style="color:#FFAB70;">  onResolvedCallback</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">Function</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#FFAB70;">  onRejectedCallback</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">Function</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  then</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">onFulfill</span><span style="color:#F97583;">?:</span><span style="color:#79B8FF;"> any</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">onReject</span><span style="color:#F97583;">?:</span><span style="color:#79B8FF;"> any</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> void</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  catch</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">reason</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> any</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> void</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  resolve</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">val</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> any</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> Promise</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  reject</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">reason</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> any</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> Promise</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  all</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">promises</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> Promise</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  race</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">promises</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> Promise</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> Promise</span><span style="color:#F97583;"> implements</span><span style="color:#B392F0;"> MyPromise</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  private</span><span style="color:#FFAB70;"> status</span></span>
<span class="line"><span style="color:#F97583;">  private</span><span style="color:#FFAB70;"> data</span></span>
<span class="line"><span style="color:#F97583;">  private</span><span style="color:#FFAB70;"> onResolvedCallback</span></span>
<span class="line"><span style="color:#F97583;">  private</span><span style="color:#FFAB70;"> onRejectedCallback</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">executor</span><span style="color:#F97583;">?:</span><span style="color:#B392F0;"> Function</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.status </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;pendding&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.onResolvedCallback </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.onRejectedCallback </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#B392F0;"> resolve</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (value </span><span style="color:#F97583;">instanceof</span><span style="color:#B392F0;"> Promise</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> value.</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(resolve, reject)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">      setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.status </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;pendding&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.status </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;resloved&#39;</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> value</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.onResolvedCallback.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">fn</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> fn</span><span style="color:#E1E4E8;">(value))</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#B392F0;"> reject</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">reason</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.status </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;pendding&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.status </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;rejected&#39;</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> reason</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.onRejectedCallback.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">fn</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> fn</span><span style="color:#E1E4E8;">(reason))</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      executor</span><span style="color:#E1E4E8;">(resolve, reject)</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (e) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(e)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  public</span><span style="color:#B392F0;"> then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">onFulfill</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">onReject</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> self</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> this</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> promise2</span></span>
<span class="line"><span style="color:#E1E4E8;">    onFulfill </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> typeof</span><span style="color:#E1E4E8;"> onFulfill </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;function&#39;</span><span style="color:#F97583;"> ?</span><span style="color:#E1E4E8;"> onFulfill </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">v</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> v</span></span>
<span class="line"><span style="color:#E1E4E8;">    onReject </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> typeof</span><span style="color:#E1E4E8;"> onReject </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;function&#39;</span><span style="color:#F97583;"> ?</span><span style="color:#E1E4E8;"> onReject </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">v</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      throw</span><span style="color:#E1E4E8;"> v</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (self.status </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;resolved&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> promise2 </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">          var</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> onFulfill</span><span style="color:#E1E4E8;">(self.data)</span></span>
<span class="line"><span style="color:#F97583;">          if</span><span style="color:#E1E4E8;"> (x </span><span style="color:#F97583;">instanceof</span><span style="color:#B392F0;"> Promise</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            x.</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(resolve, reject)</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#B392F0;">          resolve</span><span style="color:#E1E4E8;">(x)</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (e) {</span></span>
<span class="line"><span style="color:#B392F0;">          reject</span><span style="color:#E1E4E8;">(e)</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (self.status </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;rejected&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> promise2 </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">        try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">          var</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> onReject</span><span style="color:#E1E4E8;">(self.data)</span></span>
<span class="line"><span style="color:#F97583;">          if</span><span style="color:#E1E4E8;"> (x </span><span style="color:#F97583;">instanceof</span><span style="color:#B392F0;"> Promise</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            x.</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(resolve, reject)</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (e) {</span></span>
<span class="line"><span style="color:#B392F0;">          reject</span><span style="color:#E1E4E8;">(e)</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (self.status </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;pendding&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      promise2 </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        self.onResolvedCallback.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">          try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">            let</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> onFulfill</span><span style="color:#E1E4E8;">(value)</span></span>
<span class="line"><span style="color:#B392F0;">            resolvePromise</span><span style="color:#E1E4E8;">(promise2, x, resolve, reject)</span></span>
<span class="line"><span style="color:#E1E4E8;">          } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (e) {</span></span>
<span class="line"><span style="color:#B392F0;">            reject</span><span style="color:#E1E4E8;">(e)</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        self.onRejectedCallback.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">          try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">            let</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> onReject</span><span style="color:#E1E4E8;">(value)</span></span>
<span class="line"><span style="color:#B392F0;">            resolvePromise</span><span style="color:#E1E4E8;">(promise2, x, resolve, reject)</span></span>
<span class="line"><span style="color:#E1E4E8;">          } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (e) {</span></span>
<span class="line"><span style="color:#B392F0;">            reject</span><span style="color:#E1E4E8;">(e)</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> promise2</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  public</span><span style="color:#B392F0;"> catch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">reason</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, onRejected)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  public</span><span style="color:#B392F0;"> resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      resolve</span><span style="color:#E1E4E8;">(val)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  public</span><span style="color:#B392F0;"> reject</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">reason</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      reject</span><span style="color:#E1E4E8;">(reason)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  public</span><span style="color:#B392F0;"> all</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">promises</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> datas </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> len </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    function</span><span style="color:#B392F0;"> processData</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      len </span><span style="color:#F97583;">+=</span><span style="color:#79B8FF;"> 1</span></span>
<span class="line"><span style="color:#E1E4E8;">      datas[index] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> data</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (len </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> promises.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">        resolve</span><span style="color:#E1E4E8;">(datas)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      promises.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">promise</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (promise </span><span style="color:#F97583;">instanceof</span><span style="color:#B392F0;"> Promise</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          promise.</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> processData</span><span style="color:#E1E4E8;">(data, index, resolve))</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(promise).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> processData</span><span style="color:#E1E4E8;">(data, index, resolve))</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  public</span><span style="color:#B392F0;"> race</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">promises</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      promises.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">promise</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        if</span><span style="color:#E1E4E8;"> (promise </span><span style="color:#F97583;">instanceof</span><span style="color:#B392F0;"> Promise</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          promise.</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(resolve, reject)</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">          this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(promise).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(resolve, reject)</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> resolvePromise</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">promise2</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> Function</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">x</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> Function</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">resolve</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> Function</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">reject</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> Function</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> void</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  var</span><span style="color:#E1E4E8;"> then</span></span>
<span class="line"><span style="color:#F97583;">  var</span><span style="color:#E1E4E8;"> thenCalledOrThrow </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (promise2 </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> x) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#B392F0;"> reject</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> TypeError</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Chaining cycle detected for promise!&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (x </span><span style="color:#F97583;">instanceof</span><span style="color:#B392F0;"> Promise</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (x.status </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;pendding&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      x.</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">v</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">        resolvePromise</span><span style="color:#E1E4E8;">(promise2, v, resolve, reject)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, reject)</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      x.</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(resolve, reject)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> ((x </span><span style="color:#F97583;">!==</span><span style="color:#79B8FF;"> null</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> ((</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;object&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;function&#39;</span><span style="color:#E1E4E8;">))) {</span></span>
<span class="line"><span style="color:#F97583;">    try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      then </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> x.then</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> then </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;function&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        then.</span><span style="color:#B392F0;">call</span><span style="color:#E1E4E8;">(x, </span><span style="color:#F97583;">function</span><span style="color:#B392F0;"> rs</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">y</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">          if</span><span style="color:#E1E4E8;"> (thenCalledOrThrow) </span><span style="color:#F97583;">return</span></span>
<span class="line"><span style="color:#E1E4E8;">          thenCalledOrThrow </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span></span>
<span class="line"><span style="color:#F97583;">          return</span><span style="color:#B392F0;"> resolvePromise</span><span style="color:#E1E4E8;">(promise2, y, resolve, reject)</span></span>
<span class="line"><span style="color:#E1E4E8;">        }, </span><span style="color:#F97583;">function</span><span style="color:#B392F0;"> rj</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">r</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">          if</span><span style="color:#E1E4E8;"> (thenCalledOrThrow) </span><span style="color:#F97583;">return</span></span>
<span class="line"><span style="color:#E1E4E8;">          thenCalledOrThrow </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span></span>
<span class="line"><span style="color:#F97583;">          return</span><span style="color:#B392F0;"> reject</span><span style="color:#E1E4E8;">(r)</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">        resolve</span><span style="color:#E1E4E8;">(x)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (e) {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (thenCalledOrThrow) </span><span style="color:#F97583;">return</span></span>
<span class="line"><span style="color:#E1E4E8;">      thenCalledOrThrow </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> true</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#B392F0;"> reject</span><span style="color:#E1E4E8;">(e)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    resolve</span><span style="color:#E1E4E8;">(x)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h3><p><a href="https://juejin.im/post/5b32f552f265da59991155f0?tdsourcetag=s_pctim_aiomsg" target="_blank" rel="noreferrer">Promise之你看得懂的Promise</a></p><p><a href="https://github.com/xieranmaya/blog/issues/3" target="_blank" rel="noreferrer">剖析Promise内部结构</a></p>`,6)])])}const B=n(o,[["render",e]]);export{i as __pageData,B as default};
