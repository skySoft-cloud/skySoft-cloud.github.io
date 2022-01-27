import{d as n}from"./app.b0619f69.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="link\u4E0E-import\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#link\u4E0E-import\u7684\u533A\u522B" aria-hidden="true">#</a> link\u4E0E@import\u7684\u533A\u522B?</h2><ul><li>link\u662FHTML\u65B9\u5F0F\uFF0C @import\u662FCSS\u65B9\u5F0F(@import + \u7A7A\u683C+ url(CSS\u6587\u4EF6\u8DEF\u5F84\u5730\u5740)\u{1F609}</li><li>link\u6700\u5927\u9650\u5EA6\u652F\u6301\u5E76\u884C\u4E0B\u8F7D\uFF0C@import\u8FC7\u591A\u5D4C\u5957\u5BFC\u81F4\u4E32\u884C\u4E0B\u8F7D\uFF0C\u51FA\u73B0FOUC</li><li>link\u53EF\u4EE5\u901A\u8FC7rel=&quot;alternate stylesheet&quot;\u6307\u5B9A\u5019\u9009\u6837\u5F0F</li><li>\u6D4F\u89C8\u5668\u5BF9link\u652F\u6301\u65E9\u4E8E@import\uFF0C\u53EF\u4EE5\u4F7F\u7528@import\u5BF9\u8001\u6D4F\u89C8\u5668\u9690\u85CF\u6837\u5F0F</li><li>@import\u5FC5\u987B\u5728\u6837\u5F0F\u89C4\u5219\u4E4B\u524D\uFF0C\u53EF\u4EE5\u5728css\u6587\u4EF6\u4E2D\u5F15\u7528\u5176\u4ED6\u6587\u4EF6</li><li>\u603B\u4F53\u6765\u8BF4\uFF1Alink\u4F18\u4E8E@import</li></ul><h2 id="\u5982\u4F55\u6C34\u5E73\u5C45\u4E2D\u4E00\u4E2A\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u6C34\u5E73\u5C45\u4E2D\u4E00\u4E2A\u5143\u7D20" aria-hidden="true">#</a> \u5982\u4F55\u6C34\u5E73\u5C45\u4E2D\u4E00\u4E2A\u5143\u7D20?</h2><ul><li>\u5982\u679C\u9700\u8981\u5C45\u4E2D\u7684\u5143\u7D20\u4E3A\u5E38\u89C4\u6D41\u4E2Dinline\u5143\u7D20\uFF0C\u4E3A\u7236\u5143\u7D20\u8BBE\u7F6Etext-align: center;\u5373\u53EF\u5B9E\u73B0</li><li>\u5982\u679C\u9700\u8981\u5C45\u4E2D\u7684\u5143\u7D20\u4E3A\u5E38\u89C4\u6D41\u4E2Dblock\u5143\u7D20 <ul><li>\u4E3A\u5143\u7D20\u8BBE\u7F6E\u5BBD\u5EA6,\u8BBE\u7F6E\u5DE6\u53F3margin\u4E3Aauto,IE6\u4E0B\u9700\u5728\u7236\u5143\u7D20\u4E0A\u8BBE\u7F6E<code>text-align: center;</code>,\u518D\u7ED9\u5B50\u5143\u7D20\u6062\u590D\u9700\u8981\u7684\u503C</li></ul></li><li>\u5982\u679C\u9700\u8981\u5C45\u4E2D\u7684\u5143\u7D20\u4E3A\u6D6E\u52A8\u5143\u7D20,1\uFF09\u4E3A\u5143\u7D20\u8BBE\u7F6E\u5BBD\u5EA6\uFF0C2\uFF09position: relative;\uFF0C3\uFF09\u6D6E\u52A8\u65B9\u5411\u504F\u79FB\u91CF\uFF08left\u6216\u8005right\uFF09\u8BBE\u7F6E\u4E3A50%\uFF0C4\uFF09\u6D6E\u52A8\u65B9\u5411\u4E0A\u7684margin\u8BBE\u7F6E\u4E3A\u5143\u7D20\u5BBD\u5EA6\u4E00\u534A\u4E58\u4EE5-1</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.content</span> <span class="token punctuation">{</span>
<span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
<span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token property">margin-left</span><span class="token punctuation">:</span> -250px<span class="token punctuation">;</span>
<span class="token property">background-color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>\u82E5\u5B50\u5143\u7D20\u5305\u542B float:left \u5C5E\u6027, \u4E3A\u4E86\u8BA9\u5B50\u5143\u7D20\u6C34\u5E73\u5C45\u4E2D, \u5219\u53EF\u8BA9\u7236\u5143\u7D20\u5BBD\u5EA6\u8BBE\u7F6E\u4E3Afit-content,\u5E76\u4E14\u914D\u5408margin, \u4F5C\u5982\u4E0B\u8BBE\u7F6E:</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.parent</span><span class="token punctuation">{</span>
<span class="token property">width</span><span class="token punctuation">:</span> -moz-fit-content<span class="token punctuation">;</span>
<span class="token property">width</span><span class="token punctuation">:</span> -webkit-fit-content<span class="token punctuation">;</span>
<span class="token property">width</span><span class="token punctuation">:</span>fit-content<span class="token punctuation">;</span>
<span class="token property">margin</span><span class="token punctuation">:</span>0 auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>\u5982\u679C\u9700\u8981\u5C45\u4E2D\u7684\u5143\u7D20\u4E3A\u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20\uFF0C1\uFF09\u4E3A\u5143\u7D20\u8BBE\u7F6E\u5BBD\u5EA6\uFF0C2\uFF09\u504F\u79FB\u91CF\u8BBE\u7F6E\u4E3A50%\uFF0C3\uFF09\u504F\u79FB\u65B9\u5411\u5916\u8FB9\u8DDD\u8BBE\u7F6E\u4E3A\u5143\u7D20\u5BBD\u5EA6\u4E00\u534A\u4E58\u4EE5-1</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.content</span> <span class="token punctuation">{</span>
<span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
<span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token property">margin-left</span><span class="token punctuation">:</span> -400px<span class="token punctuation">;</span>
<span class="token property">background-color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="css\u5B9E\u73B0\u5782\u76F4\u5C45\u4E2D\u6C34\u5E73\u5C45\u4E2D\u7684\u7EDD\u5BF9\u5B9A\u4F4D\u5C45\u4E2D\u6280\u672F" tabindex="-1"><a class="header-anchor" href="#css\u5B9E\u73B0\u5782\u76F4\u5C45\u4E2D\u6C34\u5E73\u5C45\u4E2D\u7684\u7EDD\u5BF9\u5B9A\u4F4D\u5C45\u4E2D\u6280\u672F" aria-hidden="true">#</a> CSS\u5B9E\u73B0\u5782\u76F4\u5C45\u4E2D\u6C34\u5E73\u5C45\u4E2D\u7684\u7EDD\u5BF9\u5B9A\u4F4D\u5C45\u4E2D\u6280\u672F?</h2><ol><li>\u7EDD\u5BF9\u5B9A\u4F4D\u5C45\u4E2D(Absolute Centering)\u6280\u672F</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.Absolute-Center</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="2"><li>\u5F39\u6027\u5E03\u5C40\u5C45\u4E2D</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">diplay</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span>
<span class="token property">justify-content</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span>
<span class="token property">align-items</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="3"><li>\u53D8\u5F62\u5C45\u4E2D</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.is-Transformed</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span> <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">-ms-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="4"><li>\u8D1F\u5916\u8FB9\u8DDD(Negative Margins)</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.is-Negative</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span> <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> -170px<span class="token punctuation">;</span> <span class="token comment">/* (width + padding)/2 */</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> -120px<span class="token punctuation">;</span> <span class="token comment">/* (height + padding)/2 */</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u4E0D\u5B9A\u5BBD\u9AD8\u7684-div-\u5782\u76F4\u6C34\u5E73\u5C45\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u5B9A\u5BBD\u9AD8\u7684-div-\u5782\u76F4\u6C34\u5E73\u5C45\u4E2D" aria-hidden="true">#</a> \u4E0D\u5B9A\u5BBD\u9AD8\u7684 DIV\uFF0C\u5782\u76F4\u6C34\u5E73\u5C45\u4E2D?</h2><ul><li>CSS3 transform <ul><li><code>transform: translate(-50%\uFF0C-50%);position: absolute;top: 50%;left: 50%;</code></li></ul></li><li>Flex <ul><li><code>display: flex; justify-content: center;align-items: center;</code></li></ul></li></ul>`,20);function t(e,l){return p}var i=s(a,[["render",t]]);export{i as default};
