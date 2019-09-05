/*把code写到#code和style标签里*/
function writeCss(prefix, code, fn) {
  let domCode = document.querySelector('#code')
  let n = 0
  let id = setInterval(() => {
    n += 1
    domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css);
    styleTag.innerHTML = prefix + code.substring(0, n)
    domCode.scrollTop = domCode.scrollHeight
    if (n >= code.length) {
      window.clearInterval(id)
      fn && fn.call()
    }
  }, 0)
}


function writeMarkdown(markdown, fn) {
  let domPaper = document.querySelector('#paper>.content')
  let n = 0
  let id = setInterval(() => {
    n += 1
    domPaper.innerHTML = markdown.substring(0, n)
    domPaper.scrollTop = domPaper.scrollHeight
    if (n >= markdown.length) {
      window.clearInterval(id)
      fn && fn.call()
    }
  }, 0)
}

var css1 = `/* 
 * 面试官您好，我是张帅
 * 只用文字作做我介绍太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */

*{
  transition: all 1s;
}
html{
  background: #eee;
}
#code{
  border: 1px solid #aaa;
  padding: 16px;
}

/* 我需要一点代码高亮 */

.token.selector{ color: #690; }
.token.property{ color: #905; }

/* 加一个呼吸效果 */

#code{
  animation: breath 0.5s infinite alternate-reverse;
}

/* 现在正式开始 */

/* 我需要一张白纸 */

#code-wrapper{
  width: 50%; left: 0; position: fixed; 
  height: 100%;
}

#paper > .content {
 display: block;
}

/* 于是我就可以在白纸上写字了，请看右边 */
`

var css2 = `
/* 接下来用一个优秀的库 marked.js
 * 把 Markdown 变成 HTML
 */
`
var md = `
<h4 style="text-align: center">张帅</h4>
<p style="text-align: center">1998-07-11 | 男 | 郑州</p>
<p style="text-align: center">19届应届毕业生 | 前端开发工程师</p>

## 个人简介

一年左右学习前端经验,熟悉页面架构和布局,对表现与数据分离、Web语义化等有深刻理解,
对HTML5/CSS3等有较好的了解,熟悉JavaScript，CSS，HTML，DOM等前端技术,
熟悉前后端共同开发方式,掌握ECMAScript5核心语法，熟悉ES6语法，
能够使用react，vue进行组件化开发,熟悉微信小程序开发,
了解Node.js后端开发,
会使用 Webpack 打包。

## 专业技能
- HTML5, CSS3 & JavaScript
    - 能够使用原生 JavaScript 独立制作精美网页
    - 掌握 HTML5 如 canvas 、 audio 等语义化标签及 WebStorage API 等
    - 掌握 CSS3 动画、过渡、弹性盒子布局、媒体查询等响应式设计常用技术
- Vue / React
    - Vue 开发经验，掌握组件及组件间数据传递的使用、响应式原理、路由和 Vuex 的使用等
    - React 开发经验，掌握 React Router 和 Ant Design UI库的使用，理解组件通信及生命周期等概念
- 移动端开发
  - 小程序开发经验，已发布上线。熟悉 WXML 模版/事件、 JS 逻辑交互及常用 API 、常用组件的使用等。
  - 会使用 REM 、 vw / vh 、 媒体查询等技术制作适配手机设备的页面
- 其他
    - 熟悉 Git 常用命令、代码仓库协同工作流程等
    - 熟悉 jQuery 常用 API ，如 DOM 操作、特效、事件等。
    - 了解 Scss 、 Less 的使用，理解嵌套规则、父选择器 & 、变量、混合等的使用
    - 理解 MVC 、 MVVM 思想
    - 了解 Node.js 服务端开发
    - 了解 Webpack 打包项目的

# 项目介绍

#### H5宣传页
+ 关键词: jquery, jquery.fullpage.js, 宣传页
+ 项目介绍: 该项目通过jquery实现了一个购物车宣传页面, 利用 jquerye二次封装的库jquery.fullpage.js 和 CSS3 实现过渡和动画实现。
+ [源码链接](https://github.com/shuaizi-a/H5-) | [预览链接](https://shuaizi-a.github.io/H5-/index.html)

#### 简历生成器
+ 关键词: JavaScript, 过渡动画, 盒阴影
+ 项目介绍: 该项目实现了一个 Markdown 简历的制作过程，利用 CSS3 实现过渡、动画、阴影和弹性布局等。
+ [源码链接](https://github.com/shuaizi-a/jianli/tree/master) | [预览链接](https://shuaizi-a.github.io/jianli/index.html)

#### 涂鸦画板
+ 关键词: HTML5, Canvas, ES6, JavaScript
+ 项目介绍: 用 HTML5 的 Canvas 元素及其相关 API ，实现支持多指同时画图（可选色/粗细）、橡皮擦、一键清空、保存至本地的功能。
+ [源码链接](https://github.com/shuaizi-a/Graffiti-board) | [预览链接](https://shuaizi-a.github.io/Graffiti-board/index.html)

#### 花式点名
+ 关键词: html, 定时器, Math.API
+ 项目介绍: 使用 javascript定时器 和 Math API 随机生成数字, 通过生成的数字获取数组内对应的数据并弹出来
+ [源码链接](https://github.com/shuaizi-a/Fancy-Roll-Call) | [预览链接](https://shuaizi-a.github.io/Fancy-Roll-Call/index.html)

# 联系方式
- QQ: 77367582
- Email: 77367582@qq.com
- 手机: 18637143638
- 博客: [CSDN](https://blog.csdn.net/qq_44777678)

## 教育经历
##### 郑州科技学院
2014/9 - 2019/7
- 专业学历：机械制造与自动化
- 荣誉：优秀学生干部（校级荣誉） 优秀实习生（校级荣誉） 优秀实习生（企业级荣誉）

# 个人评价
1.对待工作认真负责、善于沟通、协调，有较强的集体荣誉感和团队精神;                                                 
2.兴趣广泛、积极向上、能吃苦耐劳、敢于迎接新挑战                                                                      
3.遇到不懂的问题，能耐心思考或者主动请教别人                                                            
4.为人吃苦耐劳，乐于助人，团队协作能力比较强。                                                  
5.有较强的适应力，能迅速适应公司的环境。                                    
6.痴迷新技术, 喜欢承担有技术难度的工作, 爱分享, 善于知识总结梳理, 有轻微的代码洁癖                                
`
let css3 = `
/*
 * 这就是我的会动的简历
 * 谢谢观看
 */
`

// 回调函数 关键数据
writeCss('', css1, () => { // writeCss call the function
  createPaper(() => {
    writeMarkdown(md, () => {
      writeCss(css1, css2, () => {
        convertMarkdownToHtml(() => {
          writeCss(css1 + css2, css3, () => {
            console.log('完成')
          })
        })
      })
    })
  })
})


function createPaper(fn) {
  var paper = document.createElement('div')
  paper.id = 'paper'
  var content = document.createElement('pre')
  content.className = 'content'
  paper.appendChild(content)
  document.body.appendChild(paper)
  fn && fn.call()
}

// 把marked变成html
function convertMarkdownToHtml(fn) {
  // 获取白纸div
  var div = document.createElement('div')

  // 把字符串 变成 marked
  div.className = 'html markdown-body' // 样式
  div.innerHTML = marked(md)

  // 把marked 变成 字符串
  let markdownContainer = document.querySelector('#paper > .content')
  markdownContainer.replaceWith(div)
  fn && fn.call()
}

