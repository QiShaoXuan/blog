import{_ as n,o as a,c as p,a2 as l}from"./chunks/framework.D52qfWmk.js";const F=JSON.parse('{"title":"深拷贝 & 浅拷贝","description":"","frontmatter":{},"headers":[],"relativePath":"js/copy.md","filePath":"js/copy.md"}'),o={name:"js/copy.md"};function e(c,s,t,E,r,y){return a(),p("div",null,[...s[0]||(s[0]=[l(`<h1 id="深拷贝-浅拷贝" tabindex="-1">深拷贝 &amp; 浅拷贝 <a class="header-anchor" href="#深拷贝-浅拷贝" aria-label="Permalink to &quot;深拷贝 &amp; 浅拷贝&quot;">​</a></h1><p>众所周知，Object是引用数据类型，存储在内存的堆中，浅拷贝只是拷贝了另一个对象的内存地址，所以在修改时会同时修改另一个对象，而深拷贝会开辟新的内存地址，所以不会影响另一个对象</p><h3 id="浅拷贝" tabindex="-1">浅拷贝 <a class="header-anchor" href="#浅拷贝" aria-label="Permalink to &quot;浅拷贝&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> obj1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {a:</span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">,b:{c:</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">}}</span></span>
<span class="line"><span style="color:#6A737D;">// 直接赋值</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> obj2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> obj1</span></span>
<span class="line"><span style="color:#6A737D;">// 使用Object.assign</span></span>
<span class="line"><span style="color:#6A737D;">//Object.assign()拷贝的是属性值。假如源对象的属性值是一个指向对象的引用，它也只拷贝那个引用值</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> obj3 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">assign</span><span style="color:#E1E4E8;">({},obj1)</span></span></code></pre></div><h3 id="深拷贝" tabindex="-1">深拷贝 <a class="header-anchor" href="#深拷贝" aria-label="Permalink to &quot;深拷贝&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">//  JSON.parse &amp;&amp; JSON.stringify</span></span>
<span class="line"><span style="color:#6A737D;">// 性能最高，速度最快，但是只能拷贝纯json</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> deepClone</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">obj</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> str, newobj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> obj.</span><span style="color:#79B8FF;">constructor</span><span style="color:#F97583;"> ===</span><span style="color:#E1E4E8;"> Array </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> [] </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> obj </span><span style="color:#F97583;">!==</span><span style="color:#9ECBFF;"> &#39;object&#39;</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#F97583;"> if</span><span style="color:#E1E4E8;">(window.</span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        str </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(obj)</span></span>
<span class="line"><span style="color:#E1E4E8;">        newobj </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(str)</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">        for</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> obj){</span></span>
<span class="line"><span style="color:#E1E4E8;">            newobj[i] </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> typeof</span><span style="color:#E1E4E8;"> obj[i] </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;object&#39;</span><span style="color:#F97583;"> ?</span><span style="color:#B392F0;"> cloneObj</span><span style="color:#E1E4E8;">(obj[i]) </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> obj[i]</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> newobj</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 递归</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> deepClone</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">initalObj</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">finalObj</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;">{}) {</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> initalObj) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> prop </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> initalObj[i]</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;">(prop </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> finalObj) {</span></span>
<span class="line"><span style="color:#F97583;">      continue</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> prop </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;object&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      finalObj[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (prop.</span><span style="color:#79B8FF;">constructor</span><span style="color:#F97583;"> ===</span><span style="color:#E1E4E8;"> Array) </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> [] </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"><span style="color:#79B8FF;">      arguments</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">callee</span><span style="color:#E1E4E8;">(prop, finalObj[i]);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      finalObj[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> prop</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> finalObj</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//  Object.create()</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> deepClone</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">initalObj</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">finalObj</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> finalObj </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> initalObj) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> prop </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> initalObj[i]</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;">(prop </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> obj) {</span></span>
<span class="line"><span style="color:#F97583;">      continue</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> prop </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &#39;object&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      obj[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (prop.</span><span style="color:#79B8FF;">constructor</span><span style="color:#F97583;"> ===</span><span style="color:#E1E4E8;"> Array) </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> [] </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">(prop)</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      obj[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> prop</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> obj</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//  History API</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> deepClone</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">obj</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> oldState</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> history.state</span></span>
<span class="line"><span style="color:#E1E4E8;">  history.</span><span style="color:#B392F0;">replaceState</span><span style="color:#E1E4E8;">(obj, document.title)</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> copy</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> history.state</span></span>
<span class="line"><span style="color:#E1E4E8;">  history.</span><span style="color:#B392F0;">replaceState</span><span style="color:#E1E4E8;">(oldState, document.title)</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> copy</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//MessageChannel</span></span>
<span class="line"><span style="color:#6A737D;">//异步方法，用时需注意</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> obj</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> ...</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> clone</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> await</span><span style="color:#B392F0;"> deepClone</span><span style="color:#E1E4E8;">(obj)</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> deepClone</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">obj</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#F97583;"> new</span><span style="color:#79B8FF;"> Promise</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">resolve</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#E1E4E8;"> {</span><span style="color:#79B8FF;">port1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">port2</span><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> MessageChannel</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    port2.</span><span style="color:#B392F0;">onmessage</span><span style="color:#F97583;"> =</span><span style="color:#FFAB70;"> ev</span><span style="color:#F97583;"> =&gt;</span><span style="color:#B392F0;"> resolve</span><span style="color:#E1E4E8;">(ev.data)</span></span>
<span class="line"><span style="color:#E1E4E8;">    port1.</span><span style="color:#B392F0;">postMessage</span><span style="color:#E1E4E8;">(obj)</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// lodash 中的方法</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> deepClone</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">obj</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  var</span><span style="color:#E1E4E8;"> copy;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">null</span><span style="color:#F97583;"> ==</span><span style="color:#E1E4E8;"> obj </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;"> &quot;object&quot;</span><span style="color:#F97583;"> !=</span><span style="color:#F97583;"> typeof</span><span style="color:#E1E4E8;"> obj) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> obj;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (obj </span><span style="color:#F97583;">instanceof</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    copy </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Date</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    copy.</span><span style="color:#B392F0;">setTime</span><span style="color:#E1E4E8;">(obj.</span><span style="color:#B392F0;">getTime</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> copy;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (obj </span><span style="color:#F97583;">instanceof</span><span style="color:#B392F0;"> Array</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    copy </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">    for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">, len </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> obj.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> len; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        copy[i] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> deepClone</span><span style="color:#E1E4E8;">(obj[i]);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> copy;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (obj </span><span style="color:#F97583;">instanceof</span><span style="color:#B392F0;"> Function</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#B392F0;">    copy</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> obj.</span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">arguments</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> copy;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (obj </span><span style="color:#F97583;">instanceof</span><span style="color:#B392F0;"> Object</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      copy </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#F97583;">      for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> attr </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> obj) {</span></span>
<span class="line"><span style="color:#F97583;">          if</span><span style="color:#E1E4E8;"> (obj.</span><span style="color:#B392F0;">hasOwnProperty</span><span style="color:#E1E4E8;">(attr)) copy[attr] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> deepClone</span><span style="color:#E1E4E8;">(obj[attr]);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> copy;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  throw</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Unable to copy obj as type isn&#39;t supported &quot;</span><span style="color:#F97583;"> +</span><span style="color:#E1E4E8;"> obj.</span><span style="color:#79B8FF;">constructor</span><span style="color:#E1E4E8;">.name);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div>`,6)])])}const b=n(o,[["render",e]]);export{F as __pageData,b as default};
