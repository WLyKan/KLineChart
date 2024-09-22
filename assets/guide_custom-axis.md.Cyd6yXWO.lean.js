import{_ as p,B as l,c as h,j as a,a as i,G as k,w as t,a9 as e,o as r}from"./chunks/framework.D8hn8QXq.js";const u=JSON.parse('{"title":"自定义坐标轴 ^9.8.0","description":"","frontmatter":{},"headers":[],"relativePath":"guide/custom-axis.md","filePath":"guide/custom-axis.md","lastUpdated":1712423256000}'),d={name:"guide/custom-axis.md"},g={id:"自定义坐标轴-9-8-0",tabindex:"-1"};function y(c,s,A,D,o,B){const n=l("Badge");return r(),h("div",null,[a("h1",g,[s[1]||(s[1]=i("自定义坐标轴 ")),k(n,null,{default:t(()=>s[0]||(s[0]=[i("^9.8.0")])),_:1}),s[2]||(s[2]=i()),s[3]||(s[3]=a("a",{class:"header-anchor",href:"#自定义坐标轴-9-8-0","aria-label":'Permalink to "自定义坐标轴 <Badge>^9.8.0</Badge>"'},"​",-1))]),s[4]||(s[4]=e(`<p>图表支持自定义坐标轴，可以通过图表方法 <a href="./chart-api#registerxaxis-axis">registerXAxis(axis)</a> 和 <a href="./chart-api#registeryaxis-axis">registerYAxis(axis)</a> 来实现。</p><h2 id="入参说明" tabindex="-1">入参说明 <a class="header-anchor" href="#入参说明" aria-label="Permalink to &quot;入参说明&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // 坐标轴名字</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> string</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // 创建分割文字方法实现</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  createTicks</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">params</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 区间相关的信息</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    range</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      // 起点</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">      from</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      // 终点</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">      to</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      // 区间长度</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">      range</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      // 真实起点</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">      realFrom</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      // 真实终点</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">      realTo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      // 真实区间长度</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">      realRange</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 窗口尺寸信息</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    bounding</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      // 宽</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">      width</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      // 高</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">      height</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      // 距离左边距离</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">      left</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      // 距离右边距离</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">      right</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      // 距离顶部距离</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">      top</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      // 距离底部距离</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">      bottom</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 默认生成的分割文字信息</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    defaultTicks</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Array</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;{</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      // 坐标位置</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">      coord</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      // 值</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">      value</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      // 展示的文字</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">      text</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  })</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Array</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;{</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 坐标位置</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    coord</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 值</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    value</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 展示的文字</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    text</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre></div><h2 id="使用说明" tabindex="-1">使用说明 <a class="header-anchor" href="#使用说明" aria-label="Permalink to &quot;使用说明&quot;">​</a></h2><p>当注册完成之后，即可使用图表方法 <a href="./chart-api#init-ds-options">init(ds, options)</a> 参数 <code>options.layout</code> 中的子项 <code>options.axisOptions.name</code> 来指定坐标轴，或者使用实例方法 <a href="./instance-api#createindicator-value-isstack-paneoptions-callback">createIndicator(value, isStack, paneOptions, callback)</a> 和 <a href="./instance-api#setpaneoptions-options">setPaneOptions(paneOptions)</a> 参数 <code>paneOptions.axisOptions.name</code> 来指定。</p><h3 id="使用-init-方法" tabindex="-1">使用 init 方法 <a class="header-anchor" href="#使用-init-方法" aria-label="Permalink to &quot;使用 init 方法&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">init</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // 这里的 domId 使用自己定义的容器id代替</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">  \`</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">\${</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">domId</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">\`</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    layout</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        type</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">candle</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        options</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">          axisOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">            // 这里的 customYAxisName 使用自定义y轴时的 name 代替</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">            name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">\`</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">\${</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">customYAxisName</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">\`</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">          }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        type</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">xAxis</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        options</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">          position</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">bottom</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">          axisOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">            // 这里的 customXAxisName 使用自定义x轴时的 name 代替</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">            name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">\`</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">\${</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">customXAxisName</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">\`</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">          }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    ]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><h3 id="使用-createindicator-方法" tabindex="-1">使用 createIndicator 方法 <a class="header-anchor" href="#使用-createindicator-方法" aria-label="Permalink to &quot;使用 createIndicator 方法&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">createIndicator</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">  &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">MA</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">  false</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    axisOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      // 这里的 customYAxisName 使用自定义y轴时的 name 代替</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">\`</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">\${</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">customYAxisName</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">\`</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><h3 id="使用-setpaneoptions-方法" tabindex="-1">使用 setPaneOptions 方法 <a class="header-anchor" href="#使用-setpaneoptions-方法" aria-label="Permalink to &quot;使用 setPaneOptions 方法&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">setPaneOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  id</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">candle_pane</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  axisOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 这里的 customYAxisName 使用自定义y轴时的 name 代替</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">\`</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">\${</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">customYAxisName</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">\`</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">})</span></span></code></pre></div>`,11))])}const b=p(d,[["render",y]]);export{u as __pageData,b as default};
