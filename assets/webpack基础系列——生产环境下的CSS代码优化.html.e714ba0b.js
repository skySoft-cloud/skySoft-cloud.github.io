import{d as n}from"./app.cf9c1b8d.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h3 id="webpack\u7CFB\u5217\u2014\u2014\u751F\u4EA7\u73AF\u5883\u4E0B\u7684css\u4EE3\u7801\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#webpack\u7CFB\u5217\u2014\u2014\u751F\u4EA7\u73AF\u5883\u4E0B\u7684css\u4EE3\u7801\u4F18\u5316" aria-hidden="true">#</a> webpack\u7CFB\u5217\u2014\u2014\u751F\u4EA7\u73AF\u5883\u4E0B\u7684CSS\u4EE3\u7801\u4F18\u5316</h3><blockquote><p><strong>\u8FD9\u6B21\u6211\u4EEC\u6765\u5B66\u4E60\u4E00\u4E0B\u9879\u76EE\u5F00\u53D1\u4E2D\uFF0C\u751F\u4EA7\u73AF\u5883\u4E0B\u7684CSS\u4EE3\u7801\u4F18\u5316\uFF0C\u90A3\u4E48\u6211\u4EEC\u5E94\u8BE5\u4ECE\u54EA\u4E9B\u65B9\u9762\u53BB\u8003\u8651\u5462\uFF1F</strong></p></blockquote><ol><li>\u5355\u6587\u4EF6\u5165\u53E3\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u7684 CSS \u8D44\u6E90\u4F1A\u6253\u5305\u5230 JS \u6587\u4EF6\u4E2D\uFF0C\u6B64\u65F6\uFF0C\u5982\u679C\u6211\u4EEC\u7684 CSS\u8D44\u6E90\u592A\u5927\uFF0C\u90A3\u5C31\u4F1A\u5927\u5927\u589E\u52A0 bundle.js \u6587\u4EF6\u7684\u4F53\u79EF\uFF0C\u4ECE\u800C\u5728\u9875\u9762\u52A0\u8F7D\u65F6\uFF0C\u589E\u52A0\u9996\u5C4F\u52A0\u8F7D\u7684\u65F6\u95F4\uFF0C<strong>\u6240\u4EE5\u6211\u4EEC\u5982\u4F55\u5728\u6253\u5305\u7684\u65F6\u5019\u5206\u79BB\u51FA CSS \u4EE3\u7801\u5462?</strong></li><li>\u5728\u5F00\u53D1\u4E2D\uFF0C\u6211\u4EEC\u4F1A\u4F7F\u7528\u4E00\u4E9B\u6BD4\u524D\u536B\u7684 CSS \u5C5E\u6027\uFF0C\u6BD4\u5982 <code>display:flex</code>\u8FD9\u6837\u7684\u5C5E\u6027\uFF0C\u90A3\u5F53\u6211\u4EEC\u7684\u4EE3\u7801\u8FD0\u884C\u5728\u4F4E\u7248\u672C\u6D4F\u89C8\u5668\u8FD0\u884C\u65F6\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u6D4F\u89C8\u5668\u65E0\u6CD5\u8BC6\u522B\u7684CSS\u5C5E\u6027\uFF0C<strong>\u6240\u4EE5\u6211\u4EEC\u5982\u4F55\u5728\u6253\u5305\u7684\u65F6\u5019\u5BF9 CSS \u4EE3\u7801\u505A\u517C\u5BB9\u5462\uFF1F</strong></li></ol><hr><p>\u9488\u5BF9\u4E0A\u8FF0\u7684\u95EE\u9898\u4E00\uFF0C\u6211\u4EEC\u53EF\u4EE5\u505A2\u4E2A\u4E8B\u60C5\uFF1A</p><ul><li>\u6253\u5305\u65F6\u63D0\u53D6 CSS \u4EE3\u7801\u5230\u5355\u72EC\u7684\u6587\u4EF6\u4E2D\uFF0C\u5E76\u81EA\u52A8\u5F15\u5165\u5230\u5165\u53E3\u7684HTML\u6587\u4EF6\u4E2D;</li><li>\u6253\u5305\u65F6\u538B\u7F29 CSS \u4EE3\u7801;</li></ul><p>\u63D0\u53D6 CSS \u4EE3\u7801\u9700\u8981\u4F7F\u7528\u5230\u63D2\u4EF6\uFF1Amini-css-extract-plugin,\u538B\u7F29CSS\u4EE3\u7801\u9700\u8981\u4F7F\u7528\u63D2\u4EF6\uFF1AOptimizeCssAssetsWebpackPlugin\uFF0C\u4F7F\u7528\u65B9\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5148\u5B89\u88C5\u63D2\u4EF6</span>
npm i mini<span class="token operator">-</span>css<span class="token operator">-</span>extract<span class="token operator">-</span>plugin optimize<span class="token operator">-</span>css<span class="token operator">-</span>assets<span class="token operator">-</span>webpack<span class="token operator">-</span>plugin <span class="token operator">-</span><span class="token constant">D</span>

<span class="token comment">// \u63D0\u53D6 CSS \u4EE3\u7801\u5230\u5355\u72EC\u7684\u6587\u4EF6\u4E2D\uFF0C\u5E76\u4E14\u81EA\u52A8\u5F15\u5165\u6253\u5305\u540E\u7684 HTML \u6587\u4EF6</span>
<span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;mini-css-extract-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u538B\u7F29 CSS \u4EE3\u7801</span>
<span class="token keyword">const</span> OptimizeCssAssetsWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;optimize-css-assets-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token comment">// \u4F7F\u7528\u63D0\u53D6 CSS \u4EE3\u7801\u5230\u5355\u72EC\u6587\u4EF6\u7684 loader</span>
          	MiniCssExtractPlugin<span class="token punctuation">.</span>loader
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token comment">// \u5B9E\u4F8B\u5316\u63D0\u53D6CSS\u4EE3\u7801\u7684\u63D2\u4EF6</span>
    	<span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      		<span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;[name].css&quot;</span>
   			 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// \u538B\u7F29 CSS \u4EE3\u7801\u7684\u63D2\u4EF6</span>
    	<span class="token keyword">new</span> <span class="token class-name">OptimizeCssAssetsWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u914D\u7F6E\u597D\u540E\uFF0C\u5373\u53EF\u5BF9CSS\u4EE3\u7801\u8FDB\u884C\u63D0\u53D6\u548C\u538B\u7F29\u5566\u3002</p><hr><p>\u9488\u5BF9\u4E0A\u8FF0\u95EE\u9898\u4E8C\uFF0C\u6211\u4EEC\u540C\u6837\u53EF\u4EE5\u505A2\u4E2A\u4E8B\u60C5\uFF1A</p><ul><li>\u5BF9CSS\u4EE3\u7801\u505A\u517C\u5BB9\u5904\u7406\uFF0C\u6BD4\u5982\u81EA\u52A8\u4E3A\u9700\u8981\u5904\u7406\u7684CSS\u5C5E\u6027\u6DFB\u52A0\u524D\u7F00</li><li>\u6307\u5B9A\u9700\u8981\u505A\u517C\u5BB9\u7684\u6D4F\u89C8\u5668</li></ul><p>\u9700\u8981\u4F7F\u7528\u5230\u7684\u63D2\u4EF6\u6709\uFF1Apostcss-loader \u548C postcss-loader-env\uFF0Cwebpack.config.js \u5982\u4E0B\u914D\u7F6E\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5148\u5B89\u88C5\u63D2\u4EF6</span>
npm i postcss<span class="token operator">-</span>loader postcss<span class="token operator">-</span>loader<span class="token operator">-</span>env <span class="token operator">-</span><span class="token constant">D</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
          <span class="token comment">// \u4F7F\u7528\u63D0\u53D6 CSS \u4EE3\u7801\u5230\u5355\u72EC\u6587\u4EF6\u7684 loader</span>
          MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
          <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token comment">// \u4F7F\u7528 postcss-loader</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;postcss-loader&quot;</span>
          <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF1A</p><ul><li><p>postcss-loader \u9700\u8981\u653E\u5230 css-loader \u548C MiniCssExtractPlugin.loader \u4E4B\u540E\u4F7F\u7528</p></li><li><p>\u9700\u8981\u5728\u6839\u76EE\u5F55\u521B\u5EFA\u4E00\u4E2A\u540D\u5B57\u4E3A postcss.config.js \u6587\u4EF6\uFF0C\u5728\u5176\u4E2D\u5F15\u5165postcss-preset-env\uFF0Cpostcss.config.js \u5982\u4E0B\u914D\u7F6E\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports  <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token comment">// \u5F15\u5165 postcss-preset-env \u63D2\u4EF6</span>
    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;postcss-preset-env&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li><li><p>\u9700\u8981\u5728 package.json \u4E2D\u6307\u5B9A browserlist \u5C5E\u6027\uFF0C\u5E76\u5BF9\u5F00\u53D1\u73AF\u5883\u548C\u751F\u4EA7\u73AF\u5883\u505A\u4E0D\u540C\u7684\u914D\u7F6E\uFF0Cpackage.json \u5982\u4E0B\u914D\u7F6E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    /* 
     * \u9700\u8981\u5BF9 CSS \u4EE3\u7801\u505A\u517C\u5BB9\u5904\u7406\uFF0C\u9700\u8981\u505A2\u4EF6\u4E8B\u60C5\uFF1A
     * 1. \u9700\u8981\u5728\u6839\u76EE\u5F55\u65B0\u5EFA postcss.config.js \u6587\u4EF6\uFF0C\u914D\u7F6Eplugins \u5E76 \u4F7F\u7528 require(&quot;postcss-preset-env&quot;)
     * 2. \u9700\u8981\u5728 package.json \u4E2D\u914D\u7F6E browserslist \u5C5E\u6027
     *   &quot;browserslist&quot;: {
     *     // \u5F00\u53D1\u73AF\u5883
     *     &quot;development&quot;: [
     *                       &quot;last 1 chrome version&quot;,  // \u517C\u5BB9\u8C37\u6B4C\u6D4F\u89C8\u5668\u6700\u8FD1\u4E00\u4E2A\u7248\u672C
     *                       &quot;last 1 firefox version&quot;, // \u517C\u5BB9\u706B\u72D0\u6D4F\u89C8\u5668\u6700\u8FD1\u4E00\u4E2A\u7248\u672C
     *                       &quot;last 1 safari version&quot;   // \u517C\u5BB9\u82F9\u679C\u6D4F\u89C8\u5668\u6700\u8FD1\u4E00\u4E2A\u7248\u672C
     *                    ],
     *     // \u751F\u4EA7\u73AF\u5883
     *     &quot;production&quot;: [
     *                         &quot;&gt;0.2%&quot;,                // \u517C\u5BB9\u5168\u7403\u5E02\u573A\u4F7F\u7528\u7387\u8D85\u8FC7 0.2% \u7684\u6D4F\u89C8\u5668
     *                         &quot;not dead&quot;,             // \u4E0D\u662F\u672A\u88AB\u4F7F\u7528\u7684\u6D4F\u89C8\u5668
     *                         &quot;not op_mini all&quot;       // \u4E0D\u662F Opera mini \u6D4F\u89C8\u5668
     *                   ]
     */
  &quot;browserslist&quot;: {
    &quot;development&quot;: [
      &quot;last 1 chrome version&quot;,
      &quot;last 1 firefox version&quot;,
      &quot;last 1 safari version&quot;
    ],
    &quot;production&quot;: [
      &quot;&gt;0.2%&quot;,
      &quot;not dead&quot;,
      &quot;not op_mini all&quot;
    ]
  }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div></li></ul><p>\u5230\u6B64\u6211\u4EEC\u7684 CSS \u4EE3\u7801\u5C31\u80FD\u591F\u505A\u5230\u517C\u5BB9\u5904\u7406\u5566\uFF0C\u6253\u5305\u540E\u7684\u4EE3\u7801\u4F1A\u81EA\u52A8\u4E3A\u9700\u8981\u505A\u517C\u5BB9\u7684CSS\u5C5E\u6027\u6DFB\u52A0\u7279\u5B9A\u6D4F\u89C8\u5668\u7684\u524D\u7F00\u3002</p><hr><p>webpack.config.js \u8BE6\u7EC6\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;html-webpack-plugin&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// \u63D0\u53D6 CSS \u4EE3\u7801\u5230\u5355\u72EC\u7684\u6587\u4EF6\u4E2D\uFF0C\u5E76\u4E14\u81EA\u52A8\u5F15\u5165\u6253\u5305\u540E\u7684 HTML \u6587\u4EF6</span>
<span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;mini-css-extract-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u538B\u7F29 CSS \u4EE3\u7801</span>
<span class="token keyword">const</span> OptimizeCssAssetsWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;optimize-css-assets-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;./main.js&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;[name].js&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;./build&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token comment">// \u4F7F\u7528\u63D0\u53D6 CSS \u4EE3\u7801\u5230\u5355\u72EC\u6587\u4EF6\u7684 loader</span>
          MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
          <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token comment">/*
            * \u9700\u8981\u5BF9 CSS \u4EE3\u7801\u505A\u517C\u5BB9\u5904\u7406\uFF0C\u9700\u8981\u505A2\u4EF6\u4E8B\u60C5\uFF1A
            * 1. \u9700\u8981\u5728\u6839\u76EE\u5F55\u65B0\u5EFA postcss.config.js \u6587\u4EF6\uFF0C\u914D\u7F6Eplugins \u5E76 \u4F7F\u7528 require(&quot;postcss-preset-env&quot;)
            * 2. \u9700\u8981\u5728 package.json \u4E2D\u914D\u7F6E browserslist \u5C5E\u6027
            *   &quot;browserslist&quot;: {
            *     // \u5F00\u53D1\u73AF\u5883
            *     &quot;development&quot;: [
            *                       &quot;last 1 chrome version&quot;,  // \u517C\u5BB9\u8C37\u6B4C\u6D4F\u89C8\u5668\u6700\u8FD1\u4E00\u4E2A\u7248\u672C
            *                       &quot;last 1 firefox version&quot;, // \u517C\u5BB9\u706B\u72D0\u6D4F\u89C8\u5668\u6700\u8FD1\u4E00\u4E2A\u7248\u672C
            *                       &quot;last 1 safari version&quot;   // \u517C\u5BB9\u82F9\u679C\u6D4F\u89C8\u5668\u6700\u8FD1\u4E00\u4E2A\u7248\u672C
            *                    ],
            *     // \u751F\u4EA7\u73AF\u5883
            *     &quot;production&quot;: [
            *                         &quot;&gt;0.2%&quot;,                // \u517C\u5BB9\u5168\u7403\u5E02\u573A\u4F7F\u7528\u7387\u8D85\u8FC7 0.2% \u7684\u6D4F\u89C8\u5668
            *                         &quot;not dead&quot;,             // \u4E0D\u662F\u672A\u88AB\u4F7F\u7528\u7684\u6D4F\u89C8\u5668
            *                         &quot;not op_mini all&quot;       // \u4E0D\u662F Opera mini \u6D4F\u89C8\u5668
            *                   ]
            */</span>
            <span class="token comment">// \u4F7F\u7528 postcss-loader</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;postcss-loader&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;home.html&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5B9E\u4F8B\u5316\u63D0\u53D6CSS\u4EE3\u7801\u7684\u63D2\u4EF6</span>
    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;[name].css&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// \u538B\u7F29 CSS \u4EE3\u7801\u7684\u63D2\u4EF6</span>
    <span class="token keyword">new</span> <span class="token class-name">OptimizeCssAssetsWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;production&quot;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div>`,20);function e(t,o){return p}var c=s(a,[["render",e]]);export{c as default};
