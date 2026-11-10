import{_ as n,o as a,c as l,a2 as p}from"./chunks/framework.D52qfWmk.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"leetcode/13.md","filePath":"leetcode/13.md"}'),o={name:"leetcode/13.md"};function e(t,s,c,r,E,y){return a(),l("div",null,[...s[0]||(s[0]=[p(`<ol start="13"><li>罗马数字转整数</li></ol><p>罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。</p><p>字符 数值 I 1 V 5 X 10 L 50 C 100 D 500 M 1000 例如， 罗马数字 2 写做 II ，即为两个并列的 1 。12 写做 XII ，即为 X + II 。 27 写做 XXVII, 即为 XX + V + II 。</p><p>通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：</p><p>I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。 X 可以放在 L (50) 和 C (100)的左边，来表示 40 和 90。 C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。 给定一个罗马数字，将其转换成整数。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> getNum</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">s</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  switch</span><span style="color:#E1E4E8;"> (s) {</span></span>
<span class="line"><span style="color:#F97583;">    case</span><span style="color:#9ECBFF;">&quot;I&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> 1</span></span>
<span class="line"><span style="color:#F97583;">    case</span><span style="color:#9ECBFF;">&quot;V&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> 5</span></span>
<span class="line"><span style="color:#F97583;">    case</span><span style="color:#9ECBFF;"> &quot;X&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> 10</span></span>
<span class="line"><span style="color:#F97583;">    case</span><span style="color:#9ECBFF;">&quot;L&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> 50</span></span>
<span class="line"><span style="color:#F97583;">    case</span><span style="color:#9ECBFF;">&quot;C&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> 100</span></span>
<span class="line"><span style="color:#F97583;">    case</span><span style="color:#9ECBFF;">&quot;D&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> 500</span></span>
<span class="line"><span style="color:#F97583;">    case</span><span style="color:#9ECBFF;">&quot;M&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> 1000</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#B392F0;"> {string}</span><span style="color:#E1E4E8;"> s</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@return</span><span style="color:#B392F0;"> {number}</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> romanToInt</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">s</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  let</span><span style="color:#E1E4E8;"> num </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> s.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">getNum</span><span style="color:#E1E4E8;">(s[i]) </span><span style="color:#F97583;">&lt;</span><span style="color:#B392F0;"> getNum</span><span style="color:#E1E4E8;">(s[i </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">])) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      num </span><span style="color:#F97583;">-=</span><span style="color:#B392F0;"> getNum</span><span style="color:#E1E4E8;">(s[i])</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      num </span><span style="color:#F97583;">+=</span><span style="color:#B392F0;"> getNum</span><span style="color:#E1E4E8;">(s[i])</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> num</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div>`,6)])])}const u=n(o,[["render",e]]);export{i as __pageData,u as default};
