import{_ as a,o as n,c as p,a2 as l}from"./chunks/framework.D52qfWmk.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"leetcode/9.md","filePath":"leetcode/9.md"}'),e={name:"leetcode/9.md"};function o(t,s,c,r,i,y){return n(),p("div",null,[...s[0]||(s[0]=[l(`<ol start="9"><li>回文数</li></ol><p>给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。</p><p>回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。</p><p>示例 ：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>输入：x = 121</span></span>
<span class="line"><span>输出：true</span></span>
<span class="line"><span>示例 2：</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>输入：x = -121</span></span>
<span class="line"><span>输出：false</span></span>
<span class="line"><span>解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。</span></span>
<span class="line"><span>示例 3：</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>输入：x = 10</span></span>
<span class="line"><span>输出：false</span></span>
<span class="line"><span>解释：从右向左读, 为 01 。因此它不是一个回文数。</span></span>
<span class="line"><span>示例 4：</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span>输入：x = -101</span></span>
<span class="line"><span>输出：false</span></span></code></pre></div><h2 id="解" tabindex="-1">解 <a class="header-anchor" href="#解" aria-label="Permalink to &quot;解&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#B392F0;"> {number}</span><span style="color:#E1E4E8;"> x</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@return</span><span style="color:#B392F0;"> {boolean}</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> isPalindrome</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">x</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (x </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#79B8FF;"> false</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> str</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> String</span><span style="color:#E1E4E8;">(x)</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> str.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;"> (str[i] </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> str[str.</span><span style="color:#79B8FF;">length</span><span style="color:#F97583;"> -</span><span style="color:#79B8FF;"> 1</span><span style="color:#F97583;"> -</span><span style="color:#E1E4E8;"> i]) {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> false</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#79B8FF;"> true</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div>`,10)])])}const F=a(e,[["render",o]]);export{d as __pageData,F as default};
