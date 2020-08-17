(this["webpackJsonpcanvas-react"]=this["webpackJsonpcanvas-react"]||[]).push([[0],{32:function(e,a,t){e.exports=t.p+"static/media/nounRedo.29731122.svg"},33:function(e,a,t){e.exports=t.p+"static/media/nounSave.ad82d4d9.svg"},34:function(e,a,t){e.exports=t.p+"static/media/nounNext.3384c7b3.svg"},37:function(e,a,t){e.exports=t(60)},59:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),f=t(17),o=t.n(f),i=t(2),s=t(3),c=t(5),l=t(4),d=t(8),u=t(10),m=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return null}}]),t}(r.a.Component),h=Object(u.e)(m),g=t(31),w=t.n(g),p=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,f=new Array(n),o=0;o<n;o++)f[o]=arguments[o];return(e=a.call.apply(a,[this].concat(f))).instructionsModal=function(){w()(r.a.createElement("ul",{className:"howToPlayModal"},r.a.createElement("h4",null,"How to play"),r.a.createElement("li",null,"Draw the word that appears at the very top of the canvas."),r.a.createElement("li",null,"Use the buttons on the far left to change colors, clear the canvas or get a different word to draw."),r.a.createElement("li",null,"Once you're ready, click save to post it to the gallery and share it with the entire world."),r.a.createElement("li",null,"Click gallery to see what other users drew or click guess to get a random drawing chosen for you.")))},e}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",null,r.a.createElement("h1",null,"Draw It"),r.a.createElement("span",{"aria-hidden":"true",className:"divider"},"|"),r.a.createElement("ul",{className:"navbarLinks"},r.a.createElement("li",null,r.a.createElement(d.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/",className:"instructionsLink",onClick:this.instructionsModal},"Instructions")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/gallery"},"Gallery")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/guess/".concat(this.props.randomDrawingObj.drawingId),onClick:this.props.onClick},"Guess")))))}}]),t}(n.Component),b=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"navbarContainer wrapper"},r.a.createElement(p,{randomDrawingObj:this.props.randomDrawingObj,onClick:this.props.getRandomId})))}}]),t}(n.Component),v=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),f=0;f<n;f++)r[f]=arguments[f];return(e=a.call.apply(a,[this].concat(r))).getHexColor=function(a){var t=a.currentTarget.value;e.props.colorFn(t)},e}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{onClick:this.props.colorFn,className:"canvasButton","aria-label":"change color"},r.a.createElement("span",{className:"showText"},r.a.createElement("label",{htmlFor:"colorSelection"},"Color",r.a.createElement("span",{"aria-hidden":"true"},"\u2002|\u2002")),r.a.createElement("input",{name:"colorSelection",id:"colorSelection",type:"color",className:"colorSelection",onChange:this.getHexColor})))}}]),t}(n.Component),E=t(32),y=t.n(E),k=function(e){return r.a.createElement("button",{onClick:e.clearFn,className:"canvasButton","aria-label":"clear canvas"},r.a.createElement("span",{className:"showText"},"Clear",r.a.createElement("span",{"aria-hidden":"true"},"\u2002|\u2002"),r.a.createElement("img",{src:y.a,alt:"",className:"clearImg"})))},I=t(33),x=t.n(I),S=function(e){return r.a.createElement("button",{onClick:e.disabled?e.checkSaveFn:e.saveFn,className:"canvasButton","aria-label":"change color"},r.a.createElement("span",{className:"showText"},"Save",r.a.createElement("span",{"aria-hidden":"true"},"\u2002|\u2002"),r.a.createElement("img",{src:x.a,alt:""})))},D=t(34),O=t.n(D),j=function(e){return r.a.createElement("button",{onClick:e.nextWordFn,className:"canvasButton","aria-label":"get next drawing word"},r.a.createElement("span",{className:"showText"},"Next",r.a.createElement("span",{"aria-hidden":"true"},"\u2002|\u2002"),r.a.createElement("img",{src:O.a,alt:"",className:"nextImg"})))},C=function(e){return r.a.createElement("div",{className:"buttonContainer"},r.a.createElement(v,{colorFn:e.colorFn}),r.a.createElement(k,{clearFn:e.clearFn}),r.a.createElement(j,{nextWordFn:e.nextWordFn}),r.a.createElement(S,{saveFn:e.saveFn,checkSaveFn:e.checkSaveFn,disabled:e.disabled}))},N=function(){return r.a.createElement("ul",{className:"howToPlay"},r.a.createElement("h4",null,"How to play"),r.a.createElement("li",null,"Draw the word that appears at the very top of the canvas."),r.a.createElement("li",null,"Use the buttons on the far left to change colors, clear the canvas or get a new word to draw."),r.a.createElement("li",null,"Once you're ready, click save to post it to the gallery."),r.a.createElement("li",null,"Click gallery to see what other users drew or click guess to get a random drawing chosen for you."))},W=["dignity","lady bug","lamp","brain","computer","owl","facebook","zombie","eel","stairs","pirate","space","cucumber","mask","kiss","mermaid","tire","rainbow","giraffe","eiffel tower","twitter","junk mail","north pole","ferris wheel","selfie","bikini","angry","hat","bottle","cup","foot","music","mouse","safe","bed","pillow","helmet","chicken","exercise","beard","hoodie","coffee","cannonball","pool","eggplant","escape room","beer","spoon","video games","knife","gun","rocket","quarantine","virus","lemonade","frog","stockings","high heels","garbage can","bubble gum","cabin","canoe","ocean","castle","mountain","life","death","board game","monopoly","capitalism"],T=t(20),M=t.n(T);t(57);M.a.initializeApp({apiKey:"AIzaSyDJMPBCvkt5jm42SNAKITYsqY9VuKJgZ0k",authDomain:"drawitreact.firebaseapp.com",databaseURL:"https://drawitreact.firebaseio.com",projectId:"drawitreact",storageBucket:"drawitreact.appspot.com",messagingSenderId:"1045921778796",appId:"1:1045921778796:web:794f48bdd9dd8474cc5c49"});var F=M.a,A=t(35),R=t.n(A),U=["#ffffff","#fffffe","#fffffd","#fffffc","#fffffa","#fffff8","#fffff7","#fffff6","#fffff5","#fffff3","#fffff2","#fffff1","#fffff0","#feffff","#fdffff","#fcffff","#fbffff","#faffff","#f9ffff","#f8ffff","#f7ffff","#f6ffff","#f5ffff","#f4ffff","#f3ffff","#f2ffff","#f1ffff","#f0ffff","#fffeff","#fffdff","#fffcff","#fffbff","#fffaff","#fdfdfd","#fcfcfc","#fefefe","#fbfbfb","##f9f9f9","#fefeff","#fefdff","#fefcff","#fefbff","#fefaff","#fefffe","#fefffd","#fefffc","#fefffb","#fefffa","#fefff9","#fefff8","#fefff7","#fefff6","#fefff5","#fefff4","#fefff3","#fefff2","#fefff1","#fefff0","#feffef","#fcfffe","#fdfffe","##fbfffe","##fafffe","#f9fffe","#f8fffe","#f7fffe","#f6fffe","#f5fffe","#f4fffe","#f3fffe","#fefefd","#fefdfd","#fefcfd","#fdfcfd","#fdfcfc","#fcfbfc","#fcfbfb","#fbfafb","#fafafb","#fafafa","#fafaf9","#fafaf8","#fafaf7","#fafaf6","#fafaf5","#fafaf4","#fafaf3","#fafaf2","#fafaf1","#fafaf0","#ffffef","#ffffee","#ffffed","#ffffec","#ffffeb","#ffffea","#ffffe9","#ffffe8","#ffffe7","#ffffe6","#fdfffa","#fdfffd","#fdfdfe","#fffdfd","#fffafd","#fdfefd","#fdfdff","#fafdff","#fafdfc","#fcfcfe","#fcfefd","#fffffb","#f9f9f9","#fcfdfe","fcfbff","#fefefb","#fdfafc","#fafcff","#fffcf9","#fafbff","#fffefc","#fcfbfd","#fcfef9","#fffbfb","#fdfcff","#fcfbff","#fefdfe","#fffef8","#fcfef8","#fcfdf8","#fcfcf8","#fbfafb","#fcfdff","#fcfcfd","#fefdfa","#fefbfc","#fcfdfc","#faf9f8","#fbfdff","#fbfeff","#f8feff"],H=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).handleResize=function(){window.innerWidth>525?e.setState({width:450,height:500}):window.innerWidth<=525&&window.innerWidth>471?e.setState({width:400,height:500}):window.innerWidth<=471&&window.innerWidth>412?e.setState({width:350,height:500}):window.innerWidth<=412&&window.innerWidth>374?e.setState({width:320,height:500}):window.innerWidth<=374&&window.innerWidth>350?e.setState({width:300,height:500}):window.innerWidth<=350&&e.setState({width:275,height:500})},e.startDrawing=function(a){if(e.isDrawing=!0,e.draw(a),"touchstart"===a.type){e.isDrawing=!0;var t=a.touches[0];e.swipe={x:t.clientX,y:t.clientY}}},e.draw=function(a){e.ctx=e.canvas.current.getContext("2d"),e.ctx.lineWidth=7,e.ctx.lineJoin="round",e.ctx.lineCap="round";var t=e.canvas.current.getBoundingClientRect(),n=t.left,r=t.top,f=parseInt(a.nativeEvent.clientX-n),o=parseInt(a.nativeEvent.clientY-r);if("mousemove"===a.type&&e.isDrawing)e.ctx.lineTo(f,o),e.ctx.stroke(),e.ctx.beginPath(),e.ctx.moveTo(f,o);else if("touchmove"===a.type&&e.isDrawing){var i=a.changedTouches[0],s=parseInt(i.clientX-n),c=parseInt(i.clientY-r);e.ctx.lineTo(s,c),e.ctx.stroke(),e.ctx.beginPath(),e.ctx.moveTo(s,c)}},e.stopDrawing=function(a){e.isDrawing=!1,e.ctx.beginPath(),"touchend"===a.type&&(e.isDrawing=!1,e.ctx.beginPath())},e.changeColor=function(a){-1===U.indexOf(a)?e.ctx.strokeStyle=a:e.setState({showModal:!0,modalText:"Please pick another color. Do not be a troll and save a blank drawing.",modalHeader:"Troll alert!"})},e.clearCanvas=function(){e.ctx.clearRect(0,0,450,500)},e.nextWord=function(){e.setState({drawingWord:e.getRandomWord(W)})},e.getRandomWord=function(e){return e[Math.floor(Math.random()*e.length)]},e.saveDrawing=function(){var a=e.canvas.current.toDataURL(),t=e.state.drawingWord,n=F.database().ref();e.isCanvasBlank(e.canvas.current)?e.setState({showModal:!0,modalText:"Please draw something before saving your work to the gallery.",modalHeader:"Oops..."}):(n.push({drawingUrl:a,drawingWord:t}),e.clearCanvas(),e.setState({showModal:!0,modalText:"Your drawing has been saved to the gallery. Go check it out!",modalHeader:"Success!",isDisabled:!0,submissionTime:new Date}))},e.isCanvasBlank=function(a){return!new Uint32Array(e.ctx.getImageData(0,0,a.width,a.height).data.buffer).some((function(e){return 0!==e}))},e.checkIfUserCanSave=function(){e.setState({reSubmissionTime:new Date}),e.state.reSubmissionTime-e.state.submissionTime<6e4?e.setState({showModal:!0,modalText:"In order to prevent spamming of the gallery, please wait a minute to save another drawing.",modalHeader:"Please wait!"}):(e.setState({isDisabled:!1}),e.saveDrawing())},e.isDrawing=!1,e.canvas=r.a.createRef(),e.state={drawingWord:"",showModal:!1,modalText:"",modalHeader:"",height:500,width:450,isDisabled:!1,submissionTime:null,reSubmissionTime:null},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.handleResize(),window.addEventListener("resize",this.handleResize.bind(this)),this.setState({drawingWord:this.getRandomWord(W)})}},{key:"render",value:function(){var e=this;return r.a.createElement("main",null,r.a.createElement("section",null,r.a.createElement("h2",{className:"drawItHeading"},"Draw It ",r.a.createElement("span",{"aria-hidden":"true"},"\u270f\ufe0f")),r.a.createElement("div",{className:"drawItContainer wrapper"},r.a.createElement(C,{colorFn:this.changeColor,clearFn:this.clearCanvas,nextWordFn:this.nextWord,saveFn:this.saveDrawing,disabled:this.state.isDisabled,checkSaveFn:this.checkIfUserCanSave}),r.a.createElement(R.a,{show:this.state.showModal,title:this.state.modalHeader,text:this.state.modalText,onOutsideClick:function(){return e.setState({showModal:!1})},onConfirm:function(){return e.setState({showModal:!1})}}),r.a.createElement("div",{className:"canvasAndHowTo"},r.a.createElement("h3",null,this.state.drawingWord),r.a.createElement("canvas",{ref:this.canvas,className:"canvas",onMouseDown:this.startDrawing,onMouseMove:this.draw,onMouseUp:this.stopDrawing,onTouchStart:this.startDrawing,onTouchMove:this.draw,onTouchEnd:this.stopDrawing,width:this.state.width,height:this.state.height}),r.a.createElement(N,null)))))}}]),t}(n.Component),B=t(36),P=t.n(B),G=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).checkUserInput=function(a){a.preventDefault();var t=e.state.userInput,n=e.state.correctGuess;t.toLowerCase().replace(/\s/g,"")===n.replace(/\s/g,"")?(e.guessModal("Correct!","You are a guessing master. Great job!"),e.setState({userInput:""})):(e.guessModal("Wrong!","Sorry that was the incorrect answer. Please guess again."),e.setState({userInput:""}))},e.guessModal=function(e,a){P.a.fire({title:e,text:a})},e.getUserInput=function(a){e.setState({userInput:a.target.value})},e.setMatchingImgAndWord=function(a){var t=a.filter((function(a){return a.drawingId===e.props.match.params.imgId}));t.length>0&&e.setState({correctGuess:t[0].drawingWord,drawingUrl:t[0].drawingUrl})},e.state={userInput:"",correctGuess:""},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setMatchingImgAndWord(this.props.drawings)}},{key:"componentDidUpdate",value:function(e){e.match.params.imgId!==this.props.match.params.imgId&&this.setMatchingImgAndWord(this.props.drawings)}},{key:"render",value:function(){return r.a.createElement("section",{className:"guessSection"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"guessContainer"},r.a.createElement("h2",{className:"guessItHeading"},"Guess It ",r.a.createElement("span",{"aria-hidden":"true"},"\ud83e\udd14")),r.a.createElement("div",{className:"guessDrawing"},r.a.createElement("span",{className:"showText"},r.a.createElement("img",{src:this.state.drawingUrl,alt:""}))),r.a.createElement("p",null,"Type your guess into the input bar below."),r.a.createElement("form",{action:"submit",onSubmit:this.checkUserInput},r.a.createElement("input",{type:"text",value:this.state.userInput,onChange:this.getUserInput,className:"guessInput"}),r.a.createElement("button",{type:"submit",className:"guessButton"},"Submit")))))}}]),t}(n.Component),z=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"gallery"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("h2",{className:"seeItHeading"},"See It ",r.a.createElement("span",{"aria-hidden":"true"},"\ud83d\udc40")),r.a.createElement("p",null,"A collection of drawings done by other users around the globe!"),r.a.createElement("p",null,"Marvel at their beauty or click the drawing to play along and try to guess what"),r.a.createElement("p",null,"you think the user was trying to draw."),r.a.createElement("ul",{className:"galleryGrid"},this.props.drawings.map((function(e){return r.a.createElement("li",{className:"userDrawing",key:e.drawingId},r.a.createElement("span",{className:"showText"},r.a.createElement(d.b,{to:"/guess/".concat(e.drawingId)},r.a.createElement("img",{src:e.drawingUrl,alt:"drawn by an anonymous online user"}))))})))))}}]),t}(n.Component),Y=(t(59),function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).setInitialRandomDrawingObj=function(a){a.length>0&&e.setState({randomDrawingObj:e.getRandomArrayItem(e.state.drawingsArray)})},e.getRandomArrayItem=function(e){return e[Math.floor(Math.random()*e.length)]},e.setRandomIdStr=function(){e.setState({randomDrawingObj:e.getRandomArrayItem(e.state.drawingsArray)})},e.state={drawingsArray:[],randomDrawingObj:void 0},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;F.database().ref().on("value",(function(a){var t=a.val(),n=[];for(var r in t)n.push({drawingWord:t[r].drawingWord,drawingUrl:t[r].drawingUrl,drawingId:r});e.setState({drawingsArray:n}),e.setInitialRandomDrawingObj(n)}))}},{key:"render",value:function(){var e=this;return this.state.drawingsArray.length>0&&void 0!==this.state.randomDrawingObj?r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(b,{randomDrawingObj:this.state.randomDrawingObj,getRandomId:this.setRandomIdStr}),r.a.createElement(u.a,{exact:!0,path:"/",component:H}),r.a.createElement(u.a,{path:"/gallery",render:function(a){return r.a.createElement(z,Object.assign({},a,{drawings:e.state.drawingsArray}))}}),r.a.createElement(u.a,{path:"/guess/:imgId",render:function(a){return r.a.createElement(G,Object.assign({},a,{drawings:e.state.drawingsArray}))}}))):null}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.f240e36f.chunk.js.map