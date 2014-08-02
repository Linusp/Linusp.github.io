---
layout     : post
title      : 自定义Git
categories : Linux
tags       :
- Git
---

<div id="outline-container-sec-1" class="outline-2">
<h2 id="sec-1">配置及配置文件</h2>
<div class="outline-text-2" id="text-1">
<p>
Git可以使用命令
</p>
<div class="org-src-container">

<pre class="src src-shell-script">git config
</pre>
</div>
<p>
来进行自定义设置，而这些设置，最终都会被写入对应的配置文件中，然后在适当的时候加载这些配置文件，来确定Git被使用时的一些表现。
</p>

<p>
Git会在三个可能的地方寻找配置文件
</p>
<ol class="org-ol">
<li>系统级全局配置文件:/etc/gitconfig，对操作系统上所有用户都起作用
</li>
<li>用户级全局配置文件:~/.gitconfig，对用户的所有代码仓库起作用
</li>
<li>代码仓库级配置文件:&lt;repo&gt;/.git/confg，只对当前对应的代码仓库起作用
</li>
</ol>


<p>
Git按照上面的顺序依次寻找配置文件并用其设置Git。
</p>

<p>
第一个配置文件可能存在也可能不存在，在我的Debian上它是不存在的，可以通过命令:
</p>
<div class="org-src-container">

<pre class="src src-shell-script">git config --system
</pre>
</div>
<p>
来进行读写。
</p>

<p>
第二个配置文件可以通过命令:
</p>
<div class="org-src-container">

<pre class="src src-shell-script">git config --global
</pre>
</div>
<p>
来进行读写。
</p>

<p>
第三个配置文件可以在相应的代码仓库目录下，通过命令:
</p>
<div class="org-src-container">

<pre class="src src-shell-script">git config
</pre>
</div>
<p>
来进行读写(注意，不带 &#x2013;global 选项)。
</p>

<p>
以上命令都是用于在命令行中对Git的某个设置项进行设置，如果需要打开文件直接编辑，除了在编辑器中来直接打开文件，还可以通过命令:
</p>
<div class="org-src-container">

<pre class="src src-shell-script">git config -e
</pre>
</div>
<p>
来进行。在其后加上 <b>&#x2013;system</b> 则会打开/etc/目录下的gitconfig；加上 <b>&#x2013;global</b> 则会打开用户HOME目录下的配置文件.gitconfig；而在某个代码仓库目录下执行且不加 <b>&#x2013;system</b> 也不加 <b>&#x2013;global</b> 选项时，则会打开该代码仓库下的配置文件进行编辑。
</p>

<p>
在配置文件中，以 '#' 或 ';' 开始的的行会被忽视，即这两个符号被用作注释符。
</p>

<p>
配置文件的内容形式如下:
</p>
<div class="org-src-container">

<pre class="src src-shell-script">[user]
    name = linusp
    email = linusp1024@gmail.com
[credential]
    helper = cache --timeout=3600
[color]
    ui = true
</pre>
</div>

<p>
被中括号括起的内容被称为Section，其下有许多
</p>
<pre class="example">
xxx = xxx
</pre>
<p>
的内容，其中等号前面的部分就是实际的配置项，后面的则是该配置项的值。要设置某个Section下面的项的值，以Section user下的name为例，可以通过如下命令:
</p>
<div class="org-src-container">

<pre class="src src-shell-script">git config --global user.name linusp
</pre>
</div>

<p>
Git 提供了很多的可配置项，具体可以执行
</p>
<div class="org-src-container">

<pre class="src src-shell-script">git config --help
</pre>
</div>
<p>
然后到 "Variables" 一节查看。
</p>
</div>
</div>
<div id="outline-container-sec-2" class="outline-2">
<h2 id="sec-2">配置: Section user</h2>
<div class="outline-text-2" id="text-2">
<p>
user下的配置项主要是用于在线认证的，比如说Github。
</p>

<ul class="org-ul">
<li>user.name

<p>
设置用户名，比如我在Github上的用户名是'Linusp'，那么就设置:
</p>
<div class="org-src-container">

<pre class="src src-shell-script">git config --global user.name Linusp
</pre>
</div>
<p>
如果公司使用Git进行代码管理，这一步也是需要的.
</p>
</li>

<li>user.email

<p>
设置邮箱，同上，用于认证。
</p>
</li>
</ul>
</div>
</div>
<div id="outline-container-sec-3" class="outline-2">
<h2 id="sec-3">配置: Section core</h2>
<div class="outline-text-2" id="text-3">
<ul class="org-ul">
<li>core.filemode

<p>
设置是否检查文件权限，其值默认为'true'，对同样内容、名字的文件，如果其文件权限发生了改变，则会认为发生了'修改'。如果要忽略文件权限的检查，可以将该项的值设置为'false':
</p>
<div class="org-src-container">

<pre class="src src-shell-script">git config core.filemode false
</pre>
</div>
</li>

<li>core.ignorecase

<p>
设置是否忽略文件名大小写的区别，默认为'false'，即默认情况下是大小写敏感的。在Windows的文件系统上，将这个项的值设置为'true'可能会比较常见
</p>
</li>

<li>core.autocrlf

<p>
设置Git对行尾的换行符的处理方式。这个设置项主要是为了解决跨平台开发时Windows操作系统与*nix系统上换行符不一致的矛盾。其值有三个可能:
</p>
<ol class="org-ol">
<li>true

<p>
设置为该值时，代码仓库里的代码会保证以*nix的换行符结尾，在用户提交时会把Windows的换行符替换为*nix的换行符，但在用户checkout后将会替换成Windows的换行符。在Windows环境下开发但其合作者中在*nix系统下开发的用户可以将'core.autocrlf'项的值设置为'true':
</p>
<div class="org-src-container">

<pre class="src src-shell-script">git config core.autocrlf true
</pre>
</div>
</li>
<li>input

<p>
设置为该值时，代码仓库里的代码和checkout的结果都会保证以*nix的换行符结尾，如果提交时的文件中存在Windows的换行符，Git会将其替换为*nix的换行符。
</p>
</li>
<li>false

<p>
设置为该值时，Git不对文件行结尾的换行符进行检测和处理。
</p>
</li>
</ol>
</li>

<li>core.excludesfile

<p>
设置一个文件，文件中包含一些文件名或者正则表达式，代码仓库中被匹配到的文件将会被视为不是代码仓库中的文件，既不会检查其改动，在执行'git add'的时候也会自动忽略它们。
</p>

<p>
在代码仓库中建立名为.gitignore的文件能起到相同的作用。
</p>
</li>

<li>core.editor

<p>
设置'git commit'时编辑提交信息的编辑器，如要设置为vim，则:
</p>
<div class="org-src-container">

<pre class="src src-shell-script">git config --global core.editor vim
</pre>
</div>
</li>

<li>core.pager

<p>
设置在执行'git log'等包含大量输出的命令时的分页器，默认为'less'，通过这个项可以将其设置为'more'，或者设置为空以关闭分页输出:
</p>
<div class="org-src-container">

<pre class="src src-shell-script">git config core.pager <span style="color: #25ef29;">''</span>
</pre>
</div>
</li>
</ul>
</div>
</div>
<div id="outline-container-sec-4" class="outline-2">
<h2 id="sec-4">配置: Section color</h2>
<div class="outline-text-2" id="text-4">
<p>
该组配置可以让Git在输出时进行着色——默认情况下都是不着色的，而着色有助于阅读，比如在执行'git diff'和'git log'的时候。
</p>

<p>
以下命令将会使'git diff'、'git log'、'git status'等带输出的命令对输出进行着色。
</p>
<div class="org-src-container">

<pre class="src src-shell-script">git config --global color.ui true
</pre>
</div>
<p>
当然也可以打单独对某个命令的输出进行着色设置:
</p>
<div class="org-src-container">

<pre class="src src-shell-script">git config --global color.diff true
</pre>
</div>
</div>
</div>
