(this["webpackJsonpreact-deploy"]=this["webpackJsonpreact-deploy"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var a=c(1),i=c.n(a),n=c(7),s=c.n(n),r=(c(12),c(2)),o=c(3),l=c(5),d=c(4),h=c.p+"static/media/logo.6ce24c58.svg",j=(c(13),c(14),c(0)),u=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(e){return Object(r.a)(this,c),t.call(this,e)}return Object(o.a)(c,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"cert-card",children:[Object(j.jsx)("div",{className:"cert-title",children:this.props.title}),Object(j.jsxs)("div",{className:"cert-body",children:[Object(j.jsx)("img",{src:this.props.image}),Object(j.jsx)("p",{children:this.props.date})]})]})}}]),c}(i.a.Component),b=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;return Object(r.a)(this,c),(e=t.call(this)).state={certList:[{title:"Progate Go",image:"/about-me/certs/go.png",date:"2021-03-04"},{title:"Progate HTML & CSS",image:"/about-me/certs/html&css.png",date:"2021-03-21"},{title:"Progate Java",image:"/about-me/certs/java.png",date:"2021-03-26"},{title:"Progate jQuery",image:"/about-me/certs/jquery.png",date:"2021-03-23"},{title:"Progate JavaScript",image:"/about-me/certs/js.png",date:"2021-03-21"},{title:"Progate Node.js",image:"/about-me/certs/node.png",date:"2021-03-04"},{title:"Progate PHP",image:"/about-me/certs/php.png",date:"2021-03-04"},{title:"Progate Python",image:"/about-me/certs/python.png",date:"2021-02-26"},{title:"Progate React",image:"/about-me/certs/react.png",date:"2021-03-24"},{title:"Progate Ruby",image:"/about-me/certs/ruby.png",date:"2021-03-04"},{title:"Progate Ruby on Rails5",image:"/about-me/certs/ruby_rails5.png",date:"2021-03-25"},{title:"Progate SASS",image:"/about-me/certs/sass.png",date:"2021-03-24"},{title:"Progate SQL",image:"/about-me/certs/sql.png",date:"2021-03-21"}],itemsToShow:4,expanded:!1,bodyProperties:null},e.ref_top=i.a.createRef(),e.ref_certifications=i.a.createRef(),e.ref_contact=i.a.createRef(),e.ref_showBtn=i.a.createRef(),e}return Object(o.a)(c,[{key:"componentDidMount",value:function(){this.setState({bodyProperties:document.body.getBoundingClientRect()})}},{key:"handleOpenCert",value:function(){var e=this;4===this.state.itemsToShow?(this.setState({itemsToShow:this.state.certList.length,expanded:!0}),setTimeout((function(){return e.scrollTo(e.ref_showBtn,"end")}),500)):(this.setState({itemsToShow:4,expanded:!1}),setTimeout((function(){return e.scrollTo(e.ref_certifications)}),100))}},{key:"scrollTo",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"start",c=e.current;c&&c.scrollIntoView({behavior:"smooth",block:t})}},{key:"render",value:function(){var e,t,c=this;return e=this.state.certList.slice(0,this.state.itemsToShow).map((function(e,t){return Object(j.jsx)(u,{title:e.title,image:e.image,date:e.date})})),t=Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Kenny Susanto"}),Object(j.jsx)("h3",{children:"Powered by react.js"})]}),Object(j.jsxs)("div",{className:"app",children:[Object(j.jsxs)("div",{className:"content",ref:this.ref_top,children:[Object(j.jsx)("div",{className:"title",children:t}),Object(j.jsxs)("div",{className:"cert-container",ref:this.ref_certifications,children:[Object(j.jsx)("h2",{children:"Certifications"}),Object(j.jsx)("div",{className:"cert-sub-container",children:e}),Object(j.jsx)("div",{onClick:function(){return c.handleOpenCert()},className:"showBtn",ref:this.ref_showBtn,children:this.state.expanded?Object(j.jsx)("span",{children:"Show less"}):Object(j.jsx)("span",{children:"Show more"})})]}),Object(j.jsxs)("div",{className:"logo",children:[Object(j.jsx)("div",{className:"ripple"}),Object(j.jsx)("img",{src:h,className:"content-logo",alt:"logo"})]}),Object(j.jsxs)("div",{className:"contact-container",ref:this.ref_contact,children:[Object(j.jsx)("h2",{children:"Contact"}),Object(j.jsx)("p",{children:"here"})]})]}),Object(j.jsx)("div",{className:"vertical-buttons",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{onClick:function(){return c.scrollTo(c.ref_top)},children:"Top"}),Object(j.jsx)("li",{onClick:function(){return c.scrollTo(c.ref_certifications)},children:"Certifications"}),Object(j.jsx)("li",{onClick:function(){return c.scrollTo(c.ref_contact)},children:"Contact"})]})})]})}}]),c}(i.a.Component),m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,s=t.getTTFB;c(e),a(e),i(e),n(e),s(e)}))};s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.5d0f4252.chunk.js.map