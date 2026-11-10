import{_ as n,o as a,c as l,a2 as p}from"./chunks/framework.D52qfWmk.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"leetcode/20.md","filePath":"leetcode/20.md"}'),o={name:"leetcode/20.md"};function e(t,s,c,r,E,y){return a(),l("div",null,[...s[0]||(s[0]=[p(`<ol start="20"><li>有效的括号</li></ol><p>给定一个只包括 &#39;(&#39;，&#39;)&#39;，&#39;{&#39;，&#39;}&#39;，&#39;[&#39;，&#39;]&#39; 的字符串 s ，判断字符串是否有效。</p><p>有效字符串需满足：</p><p>左括号必须用相同类型的右括号闭合。 左括号必须以正确的顺序闭合。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#B392F0;"> {string}</span><span style="color:#E1E4E8;"> s</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@return</span><span style="color:#B392F0;"> {boolean}</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> isValid</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">s</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> map</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;(&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;)&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;{&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;}&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;[&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;]&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> arr</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> s.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (s[i] </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> map) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      arr.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(s[i])</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (s[i] </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> map[arr.</span><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;">()]) {</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#79B8FF;"> false</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">arr.</span><span style="color:#79B8FF;">length</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div>`,5)])])}const u=n(o,[["render",e]]);export{F as __pageData,u as default};
