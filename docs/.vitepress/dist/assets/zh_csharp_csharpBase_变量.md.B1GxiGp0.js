import{_ as i,o as a,c as n,ak as l}from"./chunks/framework.CLmQc1tu.js";const c=JSON.parse('{"title":"什么是变量","description":"","frontmatter":{},"headers":[],"relativePath":"zh/csharp/csharpBase/变量.md","filePath":"zh/csharp/csharpBase/变量.md"}'),p={name:"zh/csharp/csharpBase/变量.md"};function h(k,s,t,e,r,d){return a(),n("div",null,[...s[0]||(s[0]=[l(`<h1 id="什么是变量" tabindex="-1">什么是变量 <a class="header-anchor" href="#什么是变量" aria-label="Permalink to “什么是变量”">​</a></h1><p>变量通俗来讲就是一个用于存储数据的容器，而这个容器的数据可以发生变化，所以叫变量。与之相对的还有<a href="./常量.html">常量</a> 。</p><h2 id="变量的声明" tabindex="-1">变量的声明 <a class="header-anchor" href="#变量的声明" aria-label="Permalink to “变量的声明”">​</a></h2><p>变量声明的语法如下：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-12" id="tab-13" checked><label data-title="C#" for="tab-13">C#</label></div><div class="blocks"><div class="language-cs active"><button title="Copy Code" class="copy"></button><span class="lang">cs</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 方式1：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &lt;variableType&gt; &lt;variableName&gt; = &lt;variableValue&gt;;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> age</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 25</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 方式2：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 在学习了类以后，还会学到一种变量的声明方式</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &lt;ClassTypeName&gt; &lt;ClassName&gt; = new &lt;ClassTypeName&gt;();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Person</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> person</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 方式3：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 也可以使用 var 关键字让编译器根据初始化表达式来自动推导类型</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;John&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// string 类型</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> person</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Person 类型</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 其余方式...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Person</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> person</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 由于前面已经声明了类型，所以编译器可以直接推导出后边new的类型（无法用于里氏替换原则）</span></span></code></pre></div></div></div><h2 id="变量的命名规则" tabindex="-1">变量的命名规则 <a class="header-anchor" href="#变量的命名规则" aria-label="Permalink to “变量的命名规则”">​</a></h2><p>在现实世界中，文字普遍都有自己的书写规则。同样的，变量的命名也有自己的命名规则。</p><p>C# 语言的变量命名规则如下：</p><ul><li>变量名只能包含字母、数字和下划线。</li><li>变量名必须以字母或下划线开头。</li><li>变量名不能以数字开头。</li><li>可以用中文作为变量名，但是不推荐。</li></ul><h3 id="推荐的命名规范" tabindex="-1">推荐的命名规范 <a class="header-anchor" href="#推荐的命名规范" aria-label="Permalink to “推荐的命名规范”">​</a></h3><ul><li><p>声明局部变量或类的字段时使用小驼峰命名法 （camelCase），即首字母小写，后续单词首字母大写。</p><ul><li>在声明类的私有字段时，推荐使用 “_” 作为开头。</li></ul></li><li><p>定义命名空间名、类名、接口名、结构体名、枚举名、类方法名、委托名、事件名、属性名等时使用帕斯卡命名法 （PascalCase），即每个单词的首字母大写。</p><ul><li>其中定义接口名时，推荐使用 “I” 作为开头。</li></ul></li></ul><p>具体示例：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-78" id="tab-79" checked><label data-title="C#" for="tab-79">C#</label></div><div class="blocks"><div class="language-cs active"><button title="Copy Code" class="copy"></button><span class="lang">cs</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 命名空间名定义</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyNamespace</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    internal</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Program</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // 局部变量定义</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> myInt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 命名空间名定义</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyNamespace2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 类定义</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    internal</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyClass</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 字段定义</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> myField</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 私有字段定义</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> _myPrivateField</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 方法定义</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyMethod</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            //...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyPrivateMethod</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            //...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 接口定义</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    internal</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IMyInterface</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 枚举定义</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> enum</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyEnum</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 结构体定义</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> struct</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyStruct</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用帕斯卡命名法的并不止上述几种，在类的章节里会提到更多</span></span></code></pre></div></div></div>`,13)])])}const y=i(p,[["render",h]]);export{c as __pageData,y as default};
