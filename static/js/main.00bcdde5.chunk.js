(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(n,e,t){n.exports=t(38)},32:function(n,e,t){},38:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),i=t(19),a=t.n(i),c=(t(32),t(11)),l=t(8),s=t(1),u=t(2);function d(){var n=Object(s.a)(["\n  font-size: 25px;\n  font-weight: 600;\n  color: ",";\n\n"]);return d=function(){return n},n}var p=u.c.div(d(),function(n){return n.white?"#fff":"#000"});function m(){var n=Object(s.a)(["\ncolor: ",";\n  text-transform: uppercase;\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 1.6em;\n  padding: 10px;\n  display: inline-block;\n  margin-left: 20px;\n  transition: color 200ms;\n  :hover {\n    color: #939393;\n  }\n\n"]);return m=function(){return n},n}function f(){var n=Object(s.a)(["\n  \n"]);return f=function(){return n},n}var h=u.c.div(f()),b=[{name:"Home",path:"/"},{name:"About Us",path:"/about-us"},{name:"Services",path:"/services"}],g=Object(u.c)(c.b)(m(),function(n){return n.white?"#fff":"#000"}),x=function(n){var e=n.white;return o.a.createElement(h,null,b.map(function(n){return o.a.createElement(g,{white:e,key:n.path,to:n.path},n.name)}))};function v(){var n=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 0\n\n"]);return v=function(){return n},n}var w=u.c.div(v()),y=function(n){return o.a.createElement(w,null,o.a.createElement(p,null,"LOGO"),o.a.createElement(x,null))};function E(){var n=Object(s.a)(["\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 15px\n"]);return E=function(){return n},n}var k=u.c.div(E());function z(){var n=Object(s.a)(["\n  padding: 50px 0;\n  font-size: 38px;\n  font-weight: 500;\n  line-height: 46px;\n  color: #fff;\n  background-color: #000;\n  text-align: center;\n"]);return z=function(){return n},n}var O=u.c.div(z()),j=function(n){var e=n.children,t=n.title;return o.a.createElement(o.a.Fragment,null,o.a.createElement(k,null,o.a.createElement(y,null)),t&&o.a.createElement(O,null,t),e)},C=t(26);function S(){var n=Object(s.a)(["\ncolor: #000;\n    font-size: 16px;\n"]);return S=function(){return n},n}function I(){var n=Object(s.a)(["\n    color: #000;\n\n"]);return I=function(){return n},n}function R(){var n=Object(s.a)(["\n  text-align: center;\n  box-shadow: 0px 10px 35px 0px rgba(0,0,0,.1);\n  transition: background .3s,border .3s,border-radius .3s,box-shadow .3s;\n  margin: 0 15px;\n  padding: 62px 30px 58px;\n  background-color: #fff;\n  min-height: 304px;\n"]);return R=function(){return n},n}var A=u.c.div(R()),F=u.c.h4(I()),_=u.c.p(S()),T=function(n){var e=n.title,t=n.content;Object(C.a)(n,["title","content"]);return o.a.createElement(A,null,o.a.createElement(F,null,e),o.a.createElement(_,null,t))},L=t(7),W=t.n(L);function B(){var n=Object(s.a)(["\n        & > div {\n          padding-left: ","px;\n          padding-right: ","px;\n          &:first-child {\n            padding-left: 0;\n          }\n          &:last-child {\n            padding-right: 0;\n          }\n        }\n      "]);return B=function(){return n},n}function G(){var n=Object(s.a)(["\n  display: flex;\n  align-items: ",";\n  ","\n"]);return G=function(){return n},n}var M=u.c.div(G(),function(n){return n.align},function(n){var e=n.gutter,t=e/2;return e&&Object(u.b)(B(),t,t)});M.propTypes={gutter:W.a.number};var P=M;function Y(){var n=Object(s.a)(["\n      flex-basis: ","%;\n    "]);return Y=function(){return n},n}function q(){var n=Object(s.a)(["\n  flex-grow: 1;\n  ","\n"]);return q=function(){return n},n}var N=u.c.div(q(),function(n){return n.span&&Object(u.b)(Y(),n.span/24*100)});N.propTypes={span:W.a.number};var D=N;function H(){var n=Object(s.a)(["\nwidth: 100%;\n  padding: 16px 0 16px 16px;\n    margin: 5px 0 20px;\n    border-style: solid;\n    border-width: 1px;\n    border-color: rgba(0,0,0,.1);\n    border-radius: 5px;\n"]);return H=function(){return n},n}var J=u.c.input(H());function U(){var n=Object(s.a)(["\nwidth: 100%;\n  padding: 16px 0 16px 16px;\n    margin: 5px 0 10px;\n    border-style: solid;\n    border-width: 1px;\n    border-color: rgba(0,0,0,.1);\n    border-radius: 5px;\n"]);return U=function(){return n},n}var V=u.c.textarea(U());function $(){var n=Object(s.a)(["\n    color: #9798a5;\n    font-size: 14px;\n    letter-spacing: .1px;\n    margin-top: 20px;\n    margin-bottom: 10px;\n"]);return $=function(){return n},n}var K=u.c.label($());function Q(){var n=Object(s.a)(["\n    display: inline-block;\n    max-width: 100%;\n\n    cursor: pointer;\n    text-align: center;\n    white-space: nowrap;\n    text-transform: uppercase;\n    text-overflow: ellipsis;\n    text-decoration: none;\n    border-radius: 4px;\n    box-shadow: none;\n    transition: all .3s ease;\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 14px;\n    letter-spacing: 1px;\n    background-color: #000;\n    color: #fff;\n    padding: 16px 37px;\n    border-style: solid;\n    border-width: 1px;\n    margin: 5px 0 0;\n    :hover {\n      background-color: #fff;\n      color: #000;\n      text-decoration: none;\n    }\n"]);return Q=function(){return n},n}var X=u.c.input(Q());function Z(){var n=Object(s.a)(["\ndisplay: flex;\njustify-content: space-between;\n"]);return Z=function(){return n},n}function nn(){var n=Object(s.a)(["\n  background-color: black;\n  padding: 72px 0px 63px;\n"]);return nn=function(){return n},n}var en=u.c.div(nn()),tn=Object(u.c)(k)(Z()),rn=function(n){return o.a.createElement(en,null,o.a.createElement(tn,null,o.a.createElement(p,{white:!0},"Logo"),o.a.createElement(x,{white:!0}),o.a.createElement("div",null)))};function on(){var n=Object(s.a)(["\n  text-align: center;\n  & p {\n  max-width: 50%;\n  display: inline-block;\n  }\n"]);return on=function(){return n},n}function an(){var n=Object(s.a)(["\n    text-align: center;\n    font-size: 38px;\n    font-style: normal;\n    line-height: 46px;\n    padding: 0;\n    margin-bottom: 0;\n"]);return an=function(){return n},n}function cn(){var n=Object(s.a)(["\n  padding: 30px 0 80px;\n"]);return cn=function(){return n},n}function ln(){var n=Object(s.a)(["\n  font-size: 16px;\n  font-weight: 300;\n  font-style: normal;\n  line-height: 26px;\n  letter-spacing: .1px;\n"]);return ln=function(){return n},n}function sn(){var n=Object(s.a)(["\n  color: #fff;\n  font-size: 38px;\n  font-weight: 500;\n  font-style: normal;\n  line-height: 46px;\n\n"]);return sn=function(){return n},n}function un(){var n=Object(s.a)(["\n  background-color: black;\n  padding: 189px 0 79px;\n  color: #fff\n"]);return un=function(){return n},n}function dn(){var n=Object(s.a)(["\n  padding-top: 20px;\n  margin-bottom: -105px;\n"]);return dn=function(){return n},n}function pn(){var n=Object(s.a)(["\n  font-size: 19px;\n  max-width: 475px;\n  line-height: 28px;\n"]);return pn=function(){return n},n}function mn(){var n=Object(s.a)(["\n  width: calc(100% - 600px);\n  margin-top: 70px;\n"]);return mn=function(){return n},n}function fn(){var n=Object(s.a)(["\n  display: flex;\n"]);return fn=function(){return n},n}function hn(){var n=Object(s.a)(["\n font-size: 40px;\n line-height: 60px;\n  \n"]);return hn=function(){return n},n}function bn(){var n=Object(s.a)(['\n  background-image: url("https://ld-wp.template-help.com/wordpress_prod-24034/v1/wp-content/uploads/2019/05/undraw_voice_interface_eckp-600x501.png");\n  width: 600px;\n  height: 501px;\n']);return bn=function(){return n},n}function gn(){var n=Object(s.a)(["\n\nimg {\nheight: auto;\n    max-width: 100%;\n    border: none;\n    -webkit-border-radius: 0;\n    border-radius: 0;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    vertical-align: middle;\n    display: inline-block;\n}\n"]);return gn=function(){return n},n}var xn=u.c.div(gn()),vn=u.c.div(bn()),wn=u.c.h1(hn()),yn=u.c.div(fn()),En=u.c.div(mn()),kn=u.c.div(pn()),zn=u.c.div(dn()),On=u.c.div(un()),jn=u.c.h1(sn()),Cn=u.c.p(ln()),Sn=Object(u.c)(k)(cn()),In=u.c.h2(an()),Rn=u.c.div(on()),An={path:"/",component:function(n){return o.a.createElement(j,null,o.a.createElement(xn,null,o.a.createElement(k,null,o.a.createElement(yn,null,o.a.createElement(En,null,o.a.createElement(wn,null,"Making Your Business Ideas Come True"),o.a.createElement(kn,null,"Getting started is simple. We need a little information about your business, product, and or service. Then we put together a plan on how many agents, what services you need, and availability.")),o.a.createElement(vn,null)),o.a.createElement(zn,null,o.a.createElement(P,null,o.a.createElement(D,{span:8},o.a.createElement(T,{content:"Get Dedicated live chat agents(operators) 24/7 to conduct live chat support for your website. Increase sales and lead for your business and build real costumer relationships",title:"Live Chat Support"})),o.a.createElement(D,{span:8},o.a.createElement(T,{content:"We provide Business process outsourcing services for clients who know and understand their needs. Leverage our cost efficient agents to handle anyp part of your business",title:"Full BPO Service"})),o.a.createElement(D,{span:8},o.a.createElement(T,{content:"Phone and voice agents for outbound and inbound call center, live answering service, order verification, telemarketing, customer support and virtual assistant",title:"Call Center Solutions"}))))),o.a.createElement(On,null,o.a.createElement(k,null,o.a.createElement(P,{gutter:30},o.a.createElement(D,{span:11},o.a.createElement(jn,null,"Our Results"),o.a.createElement(Cn,null,"We work and play nicely with all the major live chat software, helpdesk and ticket support software, and email software. Our agents who become your employees work on your business with dedication. We offer agents for live chat, ticket & email support, phone and voice support, telemarketing, customer support, virtual assistants, and much more. Get real people who work for your business and boost your revenue and increase customer satisfaction.")),o.a.createElement(D,{span:13},o.a.createElement("img",{src:"https://ld-wp.template-help.com/wordpress_prod-24034/v1/wp-content/uploads/2019/05/undraw_finance_0bdk.png",alt:""}))))),o.a.createElement(Sn,null,o.a.createElement(In,null,"Get In Touch"),o.a.createElement(Rn,null,o.a.createElement("p",null,"You can contact us here to begin having the experts at \u201cSWNTG\u201d LLC do customer support for your business. View our case studies to see what we have done for other companies.")),o.a.createElement(P,null,o.a.createElement(D,{span:10},o.a.createElement("img",{src:"https://ld-wp.template-help.com/wordpress_prod-24034/v1/wp-content/uploads/2019/05/undraw_resume_folder_2_arse.png",alt:""})),o.a.createElement(D,{span:14},o.a.createElement(K,null,"Your Name (required)"),o.a.createElement(J,null),o.a.createElement(K,null,"Your Email (required)"),o.a.createElement(J,null),o.a.createElement(K,null,"Subject"),o.a.createElement(J,null),o.a.createElement(K,null,"Your Message"),o.a.createElement(V,{rows:"6"}),o.a.createElement(X,{type:"submit",value:"Send"})))),o.a.createElement(rn,null)))}};function Fn(){var n=Object(s.a)(["\ncolor: #000;\n    font-size: 16px;\n"]);return Fn=function(){return n},n}function _n(){var n=Object(s.a)(["\n    color: #000;\n\n"]);return _n=function(){return n},n}function Tn(){var n=Object(s.a)(["\n  text-align: center;\n  box-shadow: 0px 10px 35px 0px rgba(0,0,0,.1);\n  transition: background .3s,border .3s,border-radius .3s,box-shadow .3s;\n  margin: 0 15px;\n  padding: 62px 30px 58px;\n  background-color: #fff;\n\n"]);return Tn=function(){return n},n}var Ln=u.c.div(Tn()),Wn=u.c.h4(_n()),Bn=u.c.p(Fn()),Gn=function(n){return o.a.createElement(Ln,null,o.a.createElement(Wn,null,"Branding"),o.a.createElement(Bn,null,"Regular Business Law Assistance service includes monitoring the legal sphere of your business."))};function Mn(){var n=Object(s.a)(["\n  padding-top: 20px;\n  margin-bottom: -105px;\n"]);return Mn=function(){return n},n}function Pn(){var n=Object(s.a)(["\n  font-size: 19px;\n  max-width: 475px;\n  line-height: 28px;\n"]);return Pn=function(){return n},n}function Yn(){var n=Object(s.a)(["\n  width: calc(100% - 600px);\n  margin-top: 70px;\n"]);return Yn=function(){return n},n}function qn(){var n=Object(s.a)(["\n  display: flex;\n"]);return qn=function(){return n},n}function Nn(){var n=Object(s.a)(["\n font-size: 40px;\n line-height: 60px;\n  \n"]);return Nn=function(){return n},n}function Dn(){var n=Object(s.a)(['\n  background-image: url("https://ld-wp.template-help.com/wordpress_prod-24034/v1/wp-content/uploads/2019/05/undraw_voice_interface_eckp-600x501.png");\n  width: 600px;\n  height: 501px;\n']);return Dn=function(){return n},n}function Hn(){var n=Object(s.a)(["\n\nimg {\nheight: auto;\n    max-width: 100%;\n    border: none;\n    -webkit-border-radius: 0;\n    border-radius: 0;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    vertical-align: middle;\n    display: inline-block;\n}\n"]);return Hn=function(){return n},n}var Jn=u.c.div(Hn()),Un=u.c.div(Dn()),Vn=u.c.h1(Nn()),$n=u.c.div(qn()),Kn=u.c.div(Yn()),Qn=u.c.div(Pn()),Xn=u.c.div(Mn()),Zn={path:"/services",component:function(n){return o.a.createElement(j,{title:"Services"},o.a.createElement(Jn,null,o.a.createElement(k,null,o.a.createElement($n,null,o.a.createElement(Kn,null,o.a.createElement(Vn,null,"Making Your Business Ideas Come True"),o.a.createElement(Qn,null,"We provide businesses with all financial services including financial analysis of the enterprise.")),o.a.createElement(Un,null)),o.a.createElement(Xn,null,o.a.createElement(P,null,o.a.createElement(D,{span:8},o.a.createElement(Gn,null)),o.a.createElement(D,{span:8},o.a.createElement(Gn,null)),o.a.createElement(D,{span:8},o.a.createElement(Gn,null))))),o.a.createElement(rn,null)))}};function ne(){var n=Object(s.a)(["\ncolor: #000;\n    font-size: 16px;\n"]);return ne=function(){return n},n}function ee(){var n=Object(s.a)(["\n    color: #000;\n\n"]);return ee=function(){return n},n}function te(){var n=Object(s.a)(["\n  text-align: center;\n  box-shadow: 0px 10px 35px 0px rgba(0,0,0,.1);\n  transition: background .3s,border .3s,border-radius .3s,box-shadow .3s;\n  margin: 0 15px;\n  padding: 62px 30px 58px;\n  background-color: #fff;\n\n"]);return te=function(){return n},n}u.c.div(te()),u.c.h4(ee()),u.c.p(ne());function re(){var n=Object(s.a)(["\n    font-size: 38px;\n    color: #fff;\n    font-style: normal;\n    line-height: 46px;\n"]);return re=function(){return n},n}function oe(){var n=Object(s.a)(["\n  padding-top: 20px;\n  padding-bottom: 50px;\n  background-color: #282828;\n  color: #fff;\n  text-align: center;\n    font-size: 19px;\n    font-weight: 300;\n    font-style: normal;\n    line-height: 29px;\n    letter-spacing: .1px;\n"]);return oe=function(){return n},n}function ie(){var n=Object(s.a)(["\ncolor: #000;\n  font-size: 19px;\n  margin-bottom: 18px;\n    font-style: normal;\n    line-height: 26px;\n    padding: 0;\n    margin-top: 0;\n"]);return ie=function(){return n},n}function ae(){var n=Object(s.a)(["\n\nimg {\nheight: auto;\n    max-width: 100%;\n    border: none;\n    -webkit-border-radius: 0;\n    border-radius: 0;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    vertical-align: middle;\n    display: inline-block;\n}\n"]);return ae=function(){return n},n}var ce=u.c.div(ae()),le=u.c.h5(ie()),se=u.c.div(oe()),ue=u.c.h2(re()),de=[An,Zn,{path:"/about-us",component:function(n){return o.a.createElement(j,{title:"About Us"},o.a.createElement(ce,null,o.a.createElement(k,null,o.a.createElement(P,{align:"center"},o.a.createElement(D,{span:12},o.a.createElement("img",{src:"https://ld-wp.template-help.com/wordpress_prod-24034/v1/wp-content/uploads/2019/05/undraw_site_stats_l57q.png",alt:""})),o.a.createElement(D,{span:12,align:!0},o.a.createElement(le,null,"One of the top outsourcing firms in the industry"),o.a.createElement(le,null,"English-speaking agents with a wide range of skills and expertise"),o.a.createElement(le,null,"Hire our agents as employees for your business 24/7"),o.a.createElement(le,null,"Over 100+ clients choose us to do support for their company."),o.a.createElement(le,null,"Increased conversion rates 20-55% per company"),o.a.createElement(le,null,"Cut costs and wages by using our agents as employees")))),o.a.createElement(se,null,o.a.createElement(k,null,o.a.createElement(ue,null,"Who we are?"),"The main activities of the company is: development and support of software of different levels and complexity, a full range of services for the development and creation of sites with a control system, the development of mobile applications of any complexity, the service of outsourcing call center and customer support, the creation of bots for messengers. \xabSWNTG\xbb LLC help businesses hire employees remotely. We specialize in managing customer support, increasing sales, and processing orders.",o.a.createElement("br",null),o.a.createElement("br",null),"All customers of \u201cSWNTG\u201d LLC be pleased to cooperate with our company and warmly about us. After all, we take into account all the requirements and wishes of our customers.")),o.a.createElement(rn,null)))}}],pe=function(n){return de.map(function(n,e){return o.a.createElement(l.a,Object.assign({key:e},n,{exact:!0}))})};function me(){var n=Object(s.a)(['\n  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n  /* Document\n     ========================================================================== */\n  \n  /**\n   * 1. Correct the line height in all browsers.\n   * 2. Prevent adjustments of font size after orientation changes in iOS.\n   */\n   \n  * {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  \n  html {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n  \n  /* Sections\n     ========================================================================== */\n  \n  /**\n   * Remove the margin in all browsers.\n   */\n  \n  body {\n    margin: 0;\n  }\n  \n  /**\n   * Render the `main` element consistently in IE.\n   */\n  \n  main {\n    display: block;\n  }\n  \n  /**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n  \n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n  \n  /* Grouping content\n     ========================================================================== */\n  \n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n  \n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /* Text-level semantics\n     ========================================================================== */\n  \n  /**\n   * Remove the gray background on active links in IE 10.\n   */\n  \n  a {\n    background-color: transparent;\n    color: inherit;\n    text-decoration: none;\n  }\n  \n  /**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n  \n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n  \n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n  \n  b,\n  strong {\n    font-weight: bolder;\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /**\n   * Add the correct font size in all browsers.\n   */\n  \n  small {\n    font-size: 80%;\n  }\n  \n  /**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n  \n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  \n  sub {\n    bottom: -0.25em;\n  }\n  \n  sup {\n    top: -0.5em;\n  }\n  \n  /* Embedded content\n     ========================================================================== */\n  \n  /**\n   * Remove the border on images inside links in IE 10.\n   */\n  \n  img {\n    border-style: none;\n  }\n  \n  /* Forms\n     ========================================================================== */\n  \n  /**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n  \n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n  \n  button,\n  input { /* 1 */\n    overflow: visible;\n  }\n  \n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n  \n  button,\n  select { /* 1 */\n    text-transform: none;\n  }\n  \n  /**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n  \n  button,\n  [type="button"],\n  [type="reset"],\n  [type="submit"] {\n    -webkit-appearance: button;\n  }\n  \n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n  \n  button::-moz-focus-inner,\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n  \n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n  \n  button:-moz-focusring,\n  [type="button"]:-moz-focusring,\n  [type="reset"]:-moz-focusring,\n  [type="submit"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n  \n  /**\n   * Correct the padding in Firefox.\n   */\n  \n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n  \n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n  \n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n  \n  /**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n  \n  progress {\n    vertical-align: baseline;\n  }\n  \n  /**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n  \n  textarea {\n    overflow: auto;\n  }\n  \n  /**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n  \n  [type="checkbox"],\n  [type="radio"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n  \n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n  \n  [type="number"]::-webkit-inner-spin-button,\n  [type="number"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n  \n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n  \n  [type="search"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n  \n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n  \n  [type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  \n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n  \n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n  \n  /* Interactive\n     ========================================================================== */\n  \n  /*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n  \n  details {\n    display: block;\n  }\n  \n  /*\n   * Add the correct display in all browsers.\n   */\n  \n  summary {\n    display: list-item;\n  }\n  \n  /* Misc\n     ========================================================================== */\n  \n  /**\n   * Add the correct display in IE 10+.\n   */\n  \n  template {\n    display: none;\n  }\n  \n  /**\n   * Add the correct display in IE 10.\n   */\n  \n  [hidden] {\n    display: none;\n  }\n'],['\n  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n  /* Document\n     ========================================================================== */\n  \n  /**\n   * 1. Correct the line height in all browsers.\n   * 2. Prevent adjustments of font size after orientation changes in iOS.\n   */\n   \n  * {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  \n  html {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n  \n  /* Sections\n     ========================================================================== */\n  \n  /**\n   * Remove the margin in all browsers.\n   */\n  \n  body {\n    margin: 0;\n  }\n  \n  /**\n   * Render the \\`main\\` element consistently in IE.\n   */\n  \n  main {\n    display: block;\n  }\n  \n  /**\n   * Correct the font size and margin on \\`h1\\` elements within \\`section\\` and\n   * \\`article\\` contexts in Chrome, Firefox, and Safari.\n   */\n  \n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n  \n  /* Grouping content\n     ========================================================================== */\n  \n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n  \n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd \\`em\\` font sizing in all browsers.\n   */\n  \n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /* Text-level semantics\n     ========================================================================== */\n  \n  /**\n   * Remove the gray background on active links in IE 10.\n   */\n  \n  a {\n    background-color: transparent;\n    color: inherit;\n    text-decoration: none;\n  }\n  \n  /**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n  \n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n  \n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n  \n  b,\n  strong {\n    font-weight: bolder;\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd \\`em\\` font sizing in all browsers.\n   */\n  \n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /**\n   * Add the correct font size in all browsers.\n   */\n  \n  small {\n    font-size: 80%;\n  }\n  \n  /**\n   * Prevent \\`sub\\` and \\`sup\\` elements from affecting the line height in\n   * all browsers.\n   */\n  \n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  \n  sub {\n    bottom: -0.25em;\n  }\n  \n  sup {\n    top: -0.5em;\n  }\n  \n  /* Embedded content\n     ========================================================================== */\n  \n  /**\n   * Remove the border on images inside links in IE 10.\n   */\n  \n  img {\n    border-style: none;\n  }\n  \n  /* Forms\n     ========================================================================== */\n  \n  /**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n  \n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n  \n  button,\n  input { /* 1 */\n    overflow: visible;\n  }\n  \n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n  \n  button,\n  select { /* 1 */\n    text-transform: none;\n  }\n  \n  /**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n  \n  button,\n  [type="button"],\n  [type="reset"],\n  [type="submit"] {\n    -webkit-appearance: button;\n  }\n  \n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n  \n  button::-moz-focus-inner,\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n  \n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n  \n  button:-moz-focusring,\n  [type="button"]:-moz-focusring,\n  [type="reset"]:-moz-focusring,\n  [type="submit"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n  \n  /**\n   * Correct the padding in Firefox.\n   */\n  \n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n  \n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from \\`fieldset\\` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    \\`fieldset\\` elements in all browsers.\n   */\n  \n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n  \n  /**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n  \n  progress {\n    vertical-align: baseline;\n  }\n  \n  /**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n  \n  textarea {\n    overflow: auto;\n  }\n  \n  /**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n  \n  [type="checkbox"],\n  [type="radio"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n  \n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n  \n  [type="number"]::-webkit-inner-spin-button,\n  [type="number"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n  \n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n  \n  [type="search"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n  \n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n  \n  [type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  \n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to \\`inherit\\` in Safari.\n   */\n  \n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n  \n  /* Interactive\n     ========================================================================== */\n  \n  /*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n  \n  details {\n    display: block;\n  }\n  \n  /*\n   * Add the correct display in all browsers.\n   */\n  \n  summary {\n    display: list-item;\n  }\n  \n  /* Misc\n     ========================================================================== */\n  \n  /**\n   * Add the correct display in IE 10+.\n   */\n  \n  template {\n    display: none;\n  }\n  \n  /**\n   * Add the correct display in IE 10.\n   */\n  \n  [hidden] {\n    display: none;\n  }\n']);return me=function(){return n},n}var fe=Object(u.a)(me());var he=function(){return o.a.createElement(c.a,null,o.a.createElement(fe,null),o.a.createElement(pe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.00bcdde5.chunk.js.map