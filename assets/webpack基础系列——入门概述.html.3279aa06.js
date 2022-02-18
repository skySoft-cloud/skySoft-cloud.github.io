import{d as n}from"./app.cf9c1b8d.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="webpack\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#webpack\u662F\u4EC0\u4E48" aria-hidden="true">#</a> webpack\u662F\u4EC0\u4E48\uFF1F</h2><p><img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180125%2F1f5e8e881e364ef5b2f37e14cdbae7ba.jpeg&amp;refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&amp;app=2002&amp;size=f9999,10000&amp;q=a80&amp;n=0&amp;g=0n&amp;fmt=jpeg?sec=1618390077&amp;t=5f583fd7b2ead56f2fed29bc520159f6" alt=""></p><p><strong>webpack</strong> \u662F\u4E00\u6B3E<strong>\u524D\u7AEF\u6784\u5EFA\u5DE5\u5177</strong>\uFF0C\u4E3B\u8981\u529F\u80FD\u662F\u5BF9\u6A21\u5757\u6253\u5305\uFF0C\u6240\u4EE5\u4E5F\u53EB<strong>\u6A21\u5757\u6253\u5305\u5668</strong>\uFF1B\u5B83\u57FA\u4E8E\u6A21\u5757\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u6309\u7167\u4E00\u5B9A\u7684\u89C4\u5219\u5C06\u6A21\u5757\u6253\u5305\u5408\u5E76\u4E3A\u4E00\u4E2A** JavaScript **\u6587\u4EF6;</p><hr><h2 id="webpack-\u4E94\u5927\u6838\u5FC3\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#webpack-\u4E94\u5927\u6838\u5FC3\u6982\u5FF5" aria-hidden="true">#</a> webpack \u4E94\u5927\u6838\u5FC3\u6982\u5FF5</h2><ol><li>Entry <ul><li>\u6307\u5B9A\u9879\u76EE\u7684\u7684\u5165\u53E3\u6587\u4EF6\uFF0C\u544A\u8BC9 webpack \u57FA\u4E8E\u54EA\u4E2A\u6587\u4EF6\u6765\u5206\u6790\u4F9D\u8D56\u5173\u7CFB\u8FDB\u884C\u6253\u5305</li></ul></li><li>Output <ul><li>\u544A\u8BC9 webpack \u6253\u5305\u540E\u7684\u6587\u4EF6\u8F93\u51FA\u5B58\u653E\u5728\u54EA\u4E2A\u76EE\u5F55</li></ul></li><li>Loader <ul><li>\u7531\u4E8E webpack \u53EA\u80FD\u5904\u7406 JavaScript \u6587\u4EF6\u548C JSON \u6587\u4EF6\uFF0C\u800C\u5176\u5B83\u7684\u6587\u4EF6\u5982\uFF1ACSS \u6587\u4EF6\u548C HTML\u6587\u4EF6\u5219\u65E0\u6CD5\u5904\u7406\uFF0C\u6240\u4EE5 webpack \u9700\u8981\u5BF9\u5E94\u7684 Loader\u8FDB\u884C\u5904\u7406</li></ul></li><li>Plugin <ul><li>Plugin \u53EF\u4EE5\u505A\u66F4\u591A\u7684\u4E8B\u60C5\uFF0C\u5982 \u4EE3\u7801\u538B\u7F29 \uFF0C\u6E05\u7406\u6587\u4EF6\u5939\uFF0C\u590D\u5236\u8D44\u6E90\u7B49\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A Plugin \u662F\u589E\u5F3A\uFF0C\u8FD9\u4E9B\u90FD\u662F Loader \u4E0D\u80FD\u505A\u5230\u7684</li></ul></li><li>Mode <ul><li>webpack \u5206\u4E3A 2 \u4E2A\u6A21\u5F0F\uFF0Cdevelopment \u6A21\u5F0F\u548C production \u6A21\u5F0F</li></ul></li></ol><h2 id="\u4E00\u4EFD\u57FA\u7840\u7684-webpack-\u914D\u7F6E\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4EFD\u57FA\u7840\u7684-webpack-\u914D\u7F6E\u4EE3\u7801" aria-hidden="true">#</a> \u4E00\u4EFD\u57FA\u7840\u7684 webpack \u914D\u7F6E\u4EE3\u7801</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u4ECEnode\u5185\u90E8\u5BFC\u5165\u7528\u6765\u62FC\u63A5\u7EDD\u5BF9\u8DEF\u5F84\u7684resolve\u7684\u65B9\u6CD5(\u4F7F\u7528commonjs\u8BED\u6CD5)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u5F15\u5165html-webpack-plugin\u63D2\u4EF6</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// webpack\u76845\u5927\u6838\u5FC3\u914D\u7F6E\u5C5E\u6027</span>
  <span class="token comment">// 1.\u5165\u53E3\u6587\u4EF6</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 2.\u8F93\u51FA\u6587\u4EF6</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8F93\u51FA\u6587\u4EF6\u540D</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5982\u679C\u8981\u60F3\u8FDB\u884C\u5206\u7C7B\uFF0C\u5C31\u8981\u5728\u6587\u4EF6\u540D\u524D\u9762\u52A0\u4E0A\u4E00\u4E2Ajs\u6587\u4EF6\u5939</span>
    <span class="token comment">// filename: &#39;js/bundle.js&#39;,</span>
    <span class="token comment">// \u8F93\u51FA\u8DEF\u5F84:\u4E00\u822C\u662F\u7EDD\u5BF9\u8DEF\u5F84</span>
    <span class="token comment">// __dirname: nodejs\u7684\u53D8\u91CF\uFF0C\u4EE3\u8868\u5F53\u524D\u6587\u4EF6\u76EE\u5F55\u7684\u7EDD\u5BF9\u8DEF\u5F84</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;bundle&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 3.loader\u7684\u914D\u7F6E</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// \u8BE6\u7EC6\u7684loader\u914D\u7F6E</span>
      <span class="token comment">// \u4E0D\u540C\u7684\u6587\u4EF6\u9700\u8981\u914D\u7F6E\u4E0D\u540C\u7684loader</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// test \u5339\u914D\u7684\u6587\u4EF6\uFF08\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5.css\u7ED3\u5C3E\uFF09</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// use \u4F7F\u7528\u54EA\u4E9Bloader\u8FDB\u884C\u5904\u7406</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token comment">// use\u6570\u7EC4\u4E2D\u7684\u6267\u884C\u987A\u5E8F\uFF1A\u4ECE\u53F3\u5230\u5DE6\uFF0C\u4ECE\u4E0B\u5230\u4E0A</span>
          <span class="token comment">// \u521B\u5EFAstyle\u6807\u7B7E\uFF0C\u5C06js\u4E2D\u7684\u6837\u5F0F\u8D44\u6E90\u6DFB\u52A0\u5230head\u6807\u7B7E\u4E2D\u751F\u6548</span>
          <span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token comment">// \u5C06css\u6587\u4EF6\u53D8\u6210commonjs\u6A21\u5757\u52A0\u8F7Djs\u4E2D\uFF0C\u91CC\u9762\u5185\u5BB9\u662F\u6837\u5F0F\u5B57\u7B26\u4E32</span>
          <span class="token string">&#39;css-loader&#39;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token comment">// \u5C06less\u6587\u4EF6\u7F16\u8BD1\u6210css\u6587\u4EF6</span>
          <span class="token comment">// \u9700\u8981\u5B89\u88C5less\u548Cless-loader\u5305</span>
          <span class="token string">&#39;less-loader&#39;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// \u914D\u7F6E\u56FE\u7247loader</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpg|gif|jpeg)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// \u914D\u7F6E\u4E00\u4E2Aloader\u65F6\uFF0C\u7528loader\u5C5E\u6027\u3002\u914D\u7F6E\u591A\u4E2Aloader\u65F6\uFF0C\u4F7F\u7528use</span>
        <span class="token comment">// \u4E0B\u8F7Durl-loader\u548Cfile-loader</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;url-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// options \u5BF9\u56FE\u7247\u8FDB\u884C\u4E00\u4E9B\u9009\u62E9\u6027\u914D\u7F6E</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token comment">// limit \u9650\u5236\u56FE\u7247\u5927\u5C0F,</span>
          <span class="token comment">// \u5982\u679C\u56FE\u7247\u5C0F\u4E8E8Kb,\u5C31\u4F1A\u88ABbase64\u5904\u7406</span>
          <span class="token comment">//    \u4F18\u70B9:\u51CF\u5C11\u8BF7\u6C42\u6570\u91CF(\u51CF\u8F7B\u670D\u52A1\u5668\u538B\u529B)  \u7F3A\u70B9:\u56FE\u7247\u4F53\u79EF\u4F1A\u66F4\u5927(\u6587\u4EF6\u8BF7\u6C42\u901F\u5EA6\u4F1A\u66F4\u6162)</span>
          <span class="token comment">// \u5927\u4E8E\u9650\u5236\u503C\u65F6\uFF0C\u5C31\u4F1A\u63D0\u793A\u5B89\u88C5\u4E00\u4E2Afile-loader</span>
          <span class="token comment">//    \u5B89\u88C5\u5B8C\u4E4B\u540E\u518D\u6253\u5305\uFF0C\u4F1A\u5BF9\u5927\u4E8Elimit\u7684\u56FE\u7247\u8FDB\u884C\u6253\u5305\uFF0C\u4E4B\u540E\u4F1A\u4EE5\u54C8\u5E0C\u503C(\u9632\u6B62\u540D\u5B57\u91CD\u590D)\u547D\u540D</span>
          <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">8</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span>
          <span class="token comment">// \u95EE\u9898:\u56E0\u4E3Aurl-loader\u9ED8\u8BA4\u4F7F\u7528ES6\u6A21\u5757\u5316\u89E3\u6790,\u800Chtml-loader\u5F15\u5165\u56FE\u7247\u662Fcommonjs\u6A21\u5757</span>
          <span class="token comment">// \u89E3\u6790\u65F6\u4F1A\u51FA\u95EE\u9898: [object Module]</span>
          <span class="token comment">// \u89E3\u51B3:\u5173\u95EDurl-loader\u7684ES6\u6A21\u5757\u5316,\u4F7F\u7528commonjs\u89E3\u6790</span>
          <span class="token literal-property property">esModule</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token comment">// \u7ED9\u56FE\u7247\u8FDB\u884C\u91CD\u547D\u540D</span>
          <span class="token comment">// [hash:10] \u53D6\u56FE\u7247hash\u503C\u7684\u524D10\u4F4D</span>
          <span class="token comment">// [ext] \u53D6\u6587\u4EF6\u7684\u539F\u6765\u7684\u6269\u5C55\u540D</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;[hash:10].[ext]&#39;</span><span class="token punctuation">,</span>
          <span class="token comment">// \u5982\u679C\u60F3\u8BA9\u56FE\u7247\u653E\u5728\u540C\u4E00\u4E2A\u6587\u4EF6\u5939\u4E2D\uFF0C\u4F7F\u7528outputPath</span>
          <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">&#39;imgs&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.html$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// \u5904\u7406html\u6587\u4EF6\u7684img\u56FE\u7247(\u8D1F\u8D23\u5F15\u5165img,\u4ECE\u800C\u80FD\u88ABurl-loader\u8FDB\u884C\u5904\u7406)</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;html-loader&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// \u6253\u5305\u5176\u5B83\u8D44\u6E90\uFF08\u9664\u4E86js\u3001html\u3001css\u8D44\u6E90\u4EE5\u5916\u7684\u8D44\u6E90\uFF09</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// exclude \u6392\u9664css\u3001js\u3001html\u8D44\u6E90</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(js|html|css|less)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;file-loader&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 4.plugins\u7684\u914D\u7F6E</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// \u8BE6\u7EC6\u7684plugin\u914D\u7F6E</span>
    <span class="token comment">// html-webpack-plugin</span>
    <span class="token comment">// \u529F\u80FD\uFF1A\u9ED8\u8BA4\u521B\u5EFA\u4E00\u4E2A\u7A7A\u7684html\u6587\u4EF6\uFF0C\u81EA\u52A8\u5F15\u5165\u6253\u5305\u8F93\u51FA\u7684\u6240\u6709\u8D44\u6E90\uFF08js\u3001json\uFF09</span>
    <span class="token comment">// \u9700\u6C42\uFF1A\u9700\u8981\u6709\u7ED3\u6784\u7684html\u6587\u4EF6</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// \u590D\u5236 &#39;./src/index.html&#39; \u6587\u4EF6\uFF0C\u5E76\u81EA\u52A8\u5F15\u5165\u6253\u5305\u8F93\u51FA\u7684\u6240\u6709\u8D44\u6E90\uFF08js\u3001json\uFF09</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.html&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// 5.mode\u914D\u7F6E(\u6A21\u5F0F\u914D\u7F6E)</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span> <span class="token comment">// \u5F00\u53D1\u6A21\u5F0F</span>
  <span class="token comment">// mode: &#39;production&#39; // \u751F\u4EA7\u6A21\u5F0F</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br></div></div>`,8);function e(l,t){return p}var c=s(a,[["render",e]]);export{c as default};
