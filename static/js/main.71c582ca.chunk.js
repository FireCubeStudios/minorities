(this.webpackJsonpethnic=this.webpackJsonpethnic||[]).push([[0],{365:function(e,t,a){e.exports=a(581)},370:function(e,t,a){},581:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(39),o=a.n(r),c=(a(370),a(84)),s=a(703),l=a(702),m=a(695),d=a(176),h=a(700),p=a(694),u=(a(371),a(123)),g=a(266),f=a(319),w=a(690),y=a(689),b=a(706),k=[{message:n.createElement(b.a.Message,{content:"how evident was discrimination in South Africa?",author:"Interviewer"}),attached:"top",key:"message-id-1"},{message:n.createElement(b.a.Message,{content:"During the period of Apartheid in South Africa, discrimination was very evident between black and white population groups.\r ",author:"Interviewee",mine:!0}),contentPosition:"end",attached:!0,key:"message-id-2"},{message:n.createElement(b.a.Message,{content:"What was it like growing up during Apartheid?",author:"Interviewer"}),attached:"top",key:"message-id-1"},{message:n.createElement(b.a.Message,{content:"It was a very difficult situation to grow up in as it created a divide within the nation and there was also tremendous pressure applied from the rest of the World to change South Africa\u2019s legislation.",author:"Interviewee",mine:!0}),contentPosition:"end",attached:!0,key:"message-id-2"},{message:n.createElement(b.a.Message,{content:"What were some of the restrictions back then?",author:"Interviewer"}),attached:"top",key:"message-id-1"},{message:n.createElement(b.a.Message,{content:"The World imposed sanctions on South Africa in an attempt to force the elimination of apartheid. This too made it very difficult as it limited access to worldly goods and services as well as travel restrictions in the World.",author:"Interviewee",mine:!0}),contentPosition:"end",attached:!0,key:"message-id-2"},{message:n.createElement(b.a.Message,{content:"What did you feel when apartheid was going to end?",author:"Interviewer"}),attached:"top",key:"message-id-1"},{message:n.createElement(b.a.Message,{content:"In 1994 we were all excited at the possibilities of the newfound legislation eliminating apartheid and allowing South Africans to grow and develop as a united nation.\r ",author:"Interviewee",mine:!0}),contentPosition:"end",attached:!0,key:"message-id-2"},{message:n.createElement(b.a.Message,{content:"Is there still discrimination today?",author:"Interviewer"}),attached:"top",key:"message-id-1"},{message:n.createElement(b.a.Message,{content:"What population groups suffer from today is basically apartheid in reverse. Whilst all best efforts were taken to positively move forward there has been a total failure in this. There is still discrimination at the worst levels its just the population groups effected are rotated, unfortunately.\r ",author:"Interviewee",mine:!0}),contentPosition:"end",attached:!0,key:"message-id-2"},{message:n.createElement(b.a.Message,{content:"Which group is the most affected by workplace discrimination?",author:"Interviewer"}),attached:"top",key:"message-id-1"},{message:n.createElement(b.a.Message,{content:"The youth and young adults are extremely affected by this as it greatly hinders their opportunities for growth and development and implements an unjust selection process in future education and or the workplace.\r ",author:"Interviewee",mine:!0}),contentPosition:"end",attached:!0,key:"message-id-2"}],E=function(){return n.createElement(b.a,{items:k})},v=a(701),x=a(692),C=a(109),T=Object(x.a)().domain([.29,.68]).range(["#f7f7f7","#5ca7e0"]),I=Object(n.memo)((function(e){var t=e.setTooltipContent,a=e.setTooltipText,r=e.setTooltipContentText,o=Object(n.useState)([]),s=Object(c.a)(o,2),l=s[0],m=s[1];return Object(n.useEffect)((function(){Object(v.a)("https://raw.githubusercontent.com/FireCubeStudios/colorrangedata/master/ColorRange.csv").then((function(e){m(e)}))}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(C.ComposableMap,{"data-tip":"",projectionConfig:{scale:147}},i.a.createElement(C.Graticule,{stroke:"#f7f7f7",strokeWidth:.5}),i.a.createElement(C.Sphere,{stroke:"#f7f7f7",strokeWidth:.5}),l.length>0&&i.a.createElement(C.Geographies,{geography:"https://raw.githubusercontent.com/FireCubeStudios/colorrangedata/master/world-110m.json"},(function(e){return e.geographies.map((function(e){var n=l.find((function(t){return t.ISO3===e.properties.ISO_A3}));return i.a.createElement(C.Geography,{fill:n?T(n.color):"#f7f7f7",onClick:function(){var n=e.properties,i=n.NAME,o=n.MINORITIES;t(),a("".concat(i)),r("".concat(o))},key:e.rsmKey,geography:e,onMouseDown:function(){var n=e.properties,i=n.NAME,o=n.MINORITIES;t(),a("".concat(i)),r("".concat(o))},onMouseLeave:function(){},style:{default:{outline:"#f7f7f7",outlineWidth:"1.5"},hover:{fill:"#45c443",outline:"none"},pressed:{fill:"#45c443",outline:"none"}}})}))}))))})),A=a(712),j=a(693),O=a(697),S=a(273),W=a(274),M=a(323),D=a(320),P=a(698),z=a(709),F=function(e){Object(M.a)(a,e);var t=Object(D.a)(a);function a(){var e;Object(S.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={activeIndex:0},e.handleClick=function(t,a){var n=a.index,i=e.state.activeIndex===n?-1:n;e.setState({activeIndex:i})},e}return Object(W.a)(a,[{key:"render",value:function(){var e=this.state.activeIndex;return i.a.createElement(P.a,{fluid:!0,styled:!0,inverted:!0,style:{backgroundColor:"#121212"}},i.a.createElement(P.a.Title,{active:0===e,index:0,onClick:this.handleClick},i.a.createElement(z.a,{name:"dropdown"}),"What is discrimination?"),i.a.createElement(P.a.Content,{active:0===e},i.a.createElement("p",null,"Ethnic discrimination is when someone is judged or discriminated against based on their background, color and ethnicity.")),i.a.createElement(P.a.Title,{active:1===e,index:1,onClick:this.handleClick},i.a.createElement(z.a,{name:"dropdown"}),"What are ethnic minorities?"),i.a.createElement(P.a.Content,{active:1===e},i.a.createElement("p",null,"Ethnic minorities are a group of whoms belief and culture differs from the majority especially if they have migrated to a new country which is different from their country of origin.")),i.a.createElement(P.a.Title,{active:2===e,index:2,onClick:this.handleClick},i.a.createElement(z.a,{name:"dropdown"}),"Where does discrimination happen?"),i.a.createElement(P.a.Content,{active:2===e},i.a.createElement("p",null,"Discrimination happens in every country. It can take many forms such as wokplace discirmination, racism, police brutality and more.")))}}]),a}(n.Component);Object(d.t)({palette:{themePrimary:"#45c443",themeLighterAlt:"#030803",themeLighter:"#0b1f0b",themeLight:"#153b14",themeTertiary:"#297628",themeSecondary:"#3dad3b",themeDarkAlt:"#54ca52",themeDark:"#6bd269",themeDarker:"#8dde8c",neutralLighterAlt:"#1c1c1c",neutralLighter:"#252525",neutralLight:"#343434",neutralQuaternaryAlt:"#3d3d3d",neutralQuaternary:"#454545",neutralTertiaryAlt:"#656565",neutralTertiary:"#fdfcfa",neutralSecondary:"#fefcfb",neutralPrimaryAlt:"#fefdfc",neutralPrimary:"#fcfaf7",neutralDark:"#fefefd",black:"#fffefe",white:"#121212"}});d.c.themePrimary,d.c.white;var N={bounce:{animation:"x 7s",animationName:f.a.keyframes(g.bounce,"bounce")}};d.c.themeDarker,d.c.white;var B=Object(d.r)(),G=Object(d.u)({container:{display:"flex",flexFlow:"column nowrap",alignItems:"stretch"},header:[B.fonts.xLargePlus,{flex:"1 1 auto",borderTop:"4px solid ".concat(B.palette.themePrimary),color:B.palette.neutralPrimary,display:"flex",alignItems:"center",fontWeight:d.d.semibold,padding:"12px 12px 14px 24px"}],body:{flex:"4 4 auto",padding:"0 24px 24px 24px",overflowY:"hidden",selectors:{p:{margin:"14px 0"},"p:first-child":{marginTop:0},"p:last-child":{marginBottom:0}}}}),R=(B.palette.neutralPrimary,B.palette.neutralDark,function(){var e={moveMenuItemText:"Move",closeMenuItemText:"Close",menu:j.a},t=Object(A.a)(!1),a=Object(c.a)(t,2),r=a[0],o=a[1],d=o.setTrue,g=o.setFalse,f=Object(A.a)(!1),b=Object(c.a)(f,2),k=b[0],v=(b[1].toggle,Object(n.useState)("")),x=Object(c.a)(v,2),C=x[0],T=x[1],S=Object(n.useState)(""),W=Object(c.a)(S,2),M=W[0],D=W[1];return i.a.createElement("div",{className:"App"},i.a.createElement(w.a,{theme:{siteVariables:{colors:{brand:{50:"white",100:"white",200:"white",300:"pink",400:"lightpink",500:"hotpink",600:"deeppink",700:"palevioletred",800:"black",900:"black"},grey:{50:"#F2F2F2",100:"#E6E6E6",200:"#CCCCCC",300:"#B3B3B3",400:"#999999",500:"#737373",600:"#666666",700:"#4D4D4D",800:"#333333",900:"#1A1A1A"},white:"#FFF"}}}}),i.a.createElement(O.a,{applyThemeToBody:!0,horizontalAlign:"center"},i.a.createElement(h.a,{horizontalAlign:"center",tokens:{childrenGap:8}},i.a.createElement(h.a,{horizontalAlign:"center",tokens:{childrenGap:8},style:{width:window.outerWidth,boxShadow:u.a.depth64,backgroundColor:"#242222",padding:"12px 12px 14px 12px"}},i.a.createElement("h1",{style:N.bounce},"Discrimination of ethnic minorities"),i.a.createElement(h.a,{horizontalAlign:"center",tokens:{childrenGap:8},style:{width:900}},i.a.createElement(F,{style:{backgroundColor:"#121212"}}))),i.a.createElement("h1",null,"Click on a blue country to view more information:"),i.a.createElement(I,{setTooltipContent:d,setTooltipContentText:D,setTooltipText:T}),i.a.createElement(h.a,{tokens:{childrenGap:25},horizontalAlign:"center",style:{backgroundColor:"#201f1f",marginTop:"5px"}},i.a.createElement(h.a,{horizontal:!0,wrap:!0,style:{boxShadow:u.a.depth64},horizontalAlign:"center",maxWidth:"1200px"},i.a.createElement(h.a,{style:{margin:"20px 50px 20px 50px",backgroundColor:"#201f1f"}},i.a.createElement(h.a,null,i.a.createElement(s.a,{style:{marginTop:"10px",fontWeight:500},variant:"xLarge"},"We interviewed a friend who lived in South Africa during the Apartheid period:")),i.a.createElement(w.a,{theme:y.a},i.a.createElement(E,null))))),i.a.createElement(h.a,{tokens:{childrenGap:8},horizontalAlign:"Center",style:{boxShadow:u.a.depth64,maxWidth:1e3,backgroundColor:"#030104"}},i.a.createElement("iframe",{width:window.innerWidth,frameBorder:"0",height:"800px",src:"https://forms.office.com/Pages/ResponsePage.aspx?id=Zh5BzQUCQkicysRYqbingmOo7xK38ZNOmzgm9sitxqpURFNVVFZaS0ZDRkNQQjBERFpENDlDUTNOTy4u&embed=true"})),i.a.createElement(h.a,{tokens:{childrenGap:8,maxWidth:300},style:{boxShadow:u.a.depth64,backgroundColor:"#242222",padding:"12px 12px 14px 24px",margin:"10px 10px 10px 20px"}},i.a.createElement("h3",null,"Sources:"),i.a.createElement(l.a,{href:"https://www.theguardian.com/world/2019/jan/17/minority-ethnic-britons-face-shocking-job-discrimination ",target:"_blank"},"Britain discrimination - TheGuardian"),i.a.createElement(l.a,{href:"https://www.bbc.com/news/world-europe-53055857 ",target:"_blank"},"Racism in Russia"),i.a.createElement(l.a,{href:"https://www.theguardian.com/commentisfree/2019/jan/22/racism-britain-workplaces-diversity-training-employers-sanctions",target:"_blank"},"Workplace discrimination - TheGuardian"),i.a.createElement(l.a,{href:"https://www.bbc.co.uk/programmes/p0160mtw",target:"_blank"},"South Africa - Apartheid programme"),i.a.createElement(l.a,{href:"https://www.youtube.com/watch?v=qc4hwH0TmSo",target:"_blank"},"Uyghur muslims forced sterilization and concentration camps in China - video"),i.a.createElement(l.a,{href:"https://www.theguardian.com/world/2018/aug/31/detention-of-uighurs-must-end-un-tells-china-amid-claims-of-mass-prison-camps",target:"_blank"},"Uyghur muslims forced sterilization and concentration camps in China - theGuardian"),i.a.createElement(l.a,{href:"https://www.bbc.co.uk/news/resources/idt-sh/China_hidden_camps",target:"_blank"},"Uyghur muslims forced sterilization and concentration camps in China -  bbc"),i.a.createElement(l.a,{href:"https://www.aljazeera.com/news/2018/07/ways-israeli-law-discriminates-palestinians-180719120357886.html",target:"_blank"},"Israel palestine discrimination"))),i.a.createElement(m.a,{isOpen:r,onDismiss:g,isBlocking:!1,containerClassName:G.container,dragOptions:k?e:void 0},i.a.createElement("div",{className:G.header},i.a.createElement("span",null,C),i.a.createElement(p.a,{onClick:g,horizontalAlign:"Right",style:{margin:"10px 10px 10px 10px"}},"Close")),i.a.createElement("div",{className:G.body},i.a.createElement("p",null,M)))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[365,1,2]]]);
//# sourceMappingURL=main.71c582ca.chunk.js.map