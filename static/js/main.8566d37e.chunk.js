(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,a,t){},102:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),o=t.n(c),s=t(16),l=t(36),i=t(7),d=t.n(i),m=t(14),u=t(9),p=t(10),f=t(12),h=t(11),g=t(13),v=t(37),E=t(3),b=t(17),w=t(20),k=t(38),y=t.n(k),N={key:b.CIVIC_API_KEY},j={key:b.GEOCODE_API_KEY},O={},C=y.a.create({});O.getCity=function(){var e=Object(m.a)(d.a.mark(function e(a,t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",C.get("https://maps.googleapis.com/maps/api/geocode/json",{params:Object(w.a)({},j,{latlng:"".concat(a,", ").concat(t)})}));case 1:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}(),O.representatives=function(){var e=Object(m.a)(d.a.mark(function e(a){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",C.get("".concat("https://www.googleapis.com/civicinfo/v2","/representatives"),{params:Object(w.a)({},N,a)}));case 1:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),O.voterInfo=function(){var e=Object(m.a)(d.a.mark(function e(a){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",C.get("".concat("https://www.googleapis.com/civicinfo/v2","/voterinfo"),{params:Object(w.a)({},N,a)}));case 1:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}();var x=O;function A(e){return r.a.createElement("nav",{id:"navbar",className:"navbar sticky-top navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("button",{className:"navbar-brand navbar-title btn btn-link animated slideInLeft"},r.a.createElement(E.a,{icon:"gavel"}),r.a.createElement("span",{className:"icon-text"},"Who Governs Me?")),r.a.createElement("ul",{className:"navbar-nav ml-auto animated slideInRight"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link btn btn-link",href:"https://github.com/mathiscode/whogoverns.me",target:"_blank",rel:"noopener noreferrer"},"Made with ",r.a.createElement(E.a,{icon:"heart",color:"#d00"})," by J.R. Mathis"))))}var I=t(39);function S(e){return r.a.createElement(I.a,{size:e.size||128})}var L=t(18),_=t.n(L),z=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(f.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).state={address:null},t.handleChange=function(e){(e=""!==e?e:null)||localStorage.removeItem("address"),t.setState({address:e})},t.handleSelect=function(e){t.setState({address:e}),localStorage.setItem("address",e),Object(L.geocodeByAddress)(e).then(function(e){return Object(L.getLatLng)(e[0])}).then(function(a){return t.props.onChange(e,a)}).catch(function(e){return console.error(e)})},t}return Object(g.a)(a,e),Object(p.a)(a,[{key:"componentDidMount",value:function(){localStorage.getItem("address")&&this.handleSelect(localStorage.getItem("address"))}},{key:"render",value:function(){return r.a.createElement(_.a,{value:this.state.address||localStorage.getItem("address")||"",onChange:this.handleChange,onSelect:this.handleSelect,searchOptions:{componentRestrictions:{country:"us"}},classNames:{input:"places-search-input form-control",autocompleteContainer:"search-autocomplete-container"}},function(e){var a=e.getInputProps,t=e.suggestions,n=e.getSuggestionItemProps,c=e.loading;return r.a.createElement("div",null,r.a.createElement("input",a({placeholder:"What's your address?",className:"location-search-input"})),r.a.createElement("div",{className:"autocomplete-dropdown-container"},c&&r.a.createElement("div",null,"Loading..."),t.map(function(e){var a=e.active?"suggestion-item--active":"suggestion-item",t=e.active?{backgroundColor:"#ddd",cursor:"pointer",borderRadius:"4px",padding:"2px"}:{backgroundColor:"#ffffff",cursor:"pointer"};return r.a.createElement("div",n(e,{className:a,style:t}),r.a.createElement("span",null,e.description))})))})}}]),a}(n.Component),P=t(27),G=t.n(P),W=t(42),M=t.n(W),T=t(19),U=t.n(T),B=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(f.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).mapAddress=function(e){var a="".concat(e.line1," ").concat(e.line2," ").concat(e.line3," ").concat(e.city," ").concat(e.state," ").concat(e.zip),t=encodeURIComponent(a),n="https://www.google.com/maps/search/?api=1&query=".concat(t);window.open(n)},t}return Object(g.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e,a=this,t=this.props,n=t.office,c=t.official;switch(c.name){case"Donald J. Trump":e="Donald Trump";break;default:e=c.name}var o=c.party?"Unknown"===c.party?"Unknown Party":c.party:"Unknown Party",s=n.name;switch(n.name){case"governmentOfficer":s="Government Officer";break;case"legislatorUpperBody":s="Legislator, Upper Body";break;case"headofGovernment":s="Head of Government"}var l=c.photoUrl;return l&&l.includes("http://")&&(l="https://http-securifier.herokuapp.com/?url=".concat(l)),r.a.createElement("div",{className:"official-card card mb-4"},r.a.createElement("div",{className:"card-header"},r.a.createElement(M.a,null,r.a.createElement(G.a,{className:"img-thumbnail official-profile-image float-left",src:l?[l,U.a]:U.a,loader:r.a.createElement(G.a,{className:"img-thumbnail official-profile-image float-left",src:U.a})})),r.a.createElement("p",{className:"text-right"},r.a.createElement("span",{className:"official-name"},c.name),r.a.createElement("br",null),r.a.createElement("span",{className:"office-name"},s),r.a.createElement("br",null),r.a.createElement("span",{className:"office-party"},o.includes("Republican")&&r.a.createElement(E.a,{icon:"republican",color:"#E91D0E"}),o.includes("Democrat")&&r.a.createElement(E.a,{icon:"democrat",color:"#232066"}),r.a.createElement("span",{className:"icon-text"},o)))),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("address",null,c.address&&c.address.length>0&&r.a.createElement("p",null,""!==c.address[0].line1&&r.a.createElement("span",null,c.address[0].line1,r.a.createElement("br",null)),""!==c.address[0].line2&&r.a.createElement("span",null,c.address[0].line2,r.a.createElement("br",null)),""!==c.address[0].line3&&r.a.createElement("span",null,c.address[0].line3,r.a.createElement("br",null),">"),r.a.createElement("span",null,c.address[0].city,", ",c.address[0].state," ",c.address[0].zip,r.a.createElement("br",null))),c.phones&&c.phones.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{icon:"phone"}),r.a.createElement("a",{className:"icon-text",href:"tel:".concat(c.phones[0])},c.phones[0]),r.a.createElement("br",null)))))),r.a.createElement("div",{className:"card-footer"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{title:"Search on Ballotpedia",className:"btn btn-link",href:"https://ballotpedia.org/wiki/index.php?search=".concat(e),target:"_blank",rel:"noopener noreferrer"},r.a.createElement(E.a,{icon:"vote-yea",size:"2x"})),c.emails&&c.emails.length>0&&r.a.createElement("a",{title:"Send Email",className:"btn btn-link",href:"mailto:".concat(c.emails[0])},r.a.createElement(E.a,{icon:"envelope",size:"2x"})),c.phones&&c.phones.length>0&&r.a.createElement("a",{title:"Call: ".concat(c.phones[0]),className:"btn btn-link",href:"tel://".concat(c.phones[0])},r.a.createElement(E.a,{icon:"phone",size:"2x"})),c.address&&c.address.length>0&&r.a.createElement("span",{title:"View on Map",className:"btn btn-link",onClick:function(){return a.mapAddress(c.address[0])}},r.a.createElement(E.a,{icon:"map-marker-alt",size:"2x"})),c.urls&&c.urls.length>0&&r.a.createElement("a",{title:"Visit website: ".concat(c.urls[0]),className:"btn btn-link",href:c.urls[0],target:"_blank",rel:"noopener noreferrer"},r.a.createElement(E.a,{icon:"link",size:"2x"})),c.channels&&c.channels.length>0&&c.channels.map(function(e){var a=null,t=null,n=null;switch(e.type){case"Facebook":a=r.a.createElement(E.a,{icon:["fab","facebook"],size:"2x"}),n=t="https://fb.me/".concat(e.id);break;case"Twitter":a=r.a.createElement(E.a,{icon:["fab","twitter"],size:"2x"}),t="https://twitter.com/".concat(e.id),n="twitter://user?screen_name=".concat(e.id);break;case"YouTube":a=r.a.createElement(E.a,{icon:["fab","youtube"],size:"2x"}),n=t="https://youtube.com/user/".concat(e.id);break;default:a=null}return r.a.createElement("span",{key:e.type+e.id},a&&r.a.createElement("a",{title:"".concat(e.type,": ").concat(e.id),className:"btn btn-link",key:e.type+e.id,href:/Mobi|Android/i.test(navigator.userAgent)?n:t,target:"_blank",rel:"noopener noreferrer"},a))}))))}}]),a}(n.Component),D="https://maps.googleapis.com/maps/api/js?key=".concat(b.PLACES_API_KEY,"&libraries=places"),R=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(f.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).state={isLoading:!1,showAddressBar:!1,representatives:null},t.handleHashChange=function(){},t.componentDidMount=function(){var e;window.addEventListener("hashchange",t.handleHashChange),window.addEventListener("scroll",function(e){});e=setInterval(function(){window.google&&(t.setState({showAddressBar:!0},function(){document.querySelector(".location-search-input").focus(),document.querySelector(".location-search-input").addEventListener("focus",function(e){e.target.select()})}),clearInterval(e))},100)},t.onChange=function(){var e=Object(m.a)(d.a.mark(function e(a,n){var r,c;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.setState({isLoading:!0,representatives:null}),e.next=4,x.representatives({address:a});case 4:r=e.sent,c=[],Object.values(r.data.divisions).forEach(function(e){c.push({name:e.name,offices:e.officeIndices})}),t.setState({isLoading:!1,representatives:{divisions:c,offices:r.data.offices,officials:r.data.officials}}),document.querySelector(".address-search-container").classList.add("done"),document.querySelector(".location-search-input").blur(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}},e,null,[[0,12]])}));return function(a,t){return e.apply(this,arguments)}}(),t.anchorClick=function(e){},t.scrollToTop=function(){window.scrollTo(0,0)},t}return Object(g.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.Helmet,null,r.a.createElement("title",null,"Who Governs Me?"),r.a.createElement("script",{src:D})),r.a.createElement(A,null),r.a.createElement("div",{className:"container address-search-container"},this.state.showAddressBar&&r.a.createElement(r.a.Fragment,null,r.a.createElement(z,{onChange:this.onChange}))),r.a.createElement("div",{className:"container search-results-wrapper"},this.state.isLoading&&r.a.createElement(S,null),this.state.representatives&&r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},this.state.representatives.divisions.map(function(a){return a.offices&&0!==a.offices.length?r.a.createElement("section",{key:a.name,id:a.name.toLowerCase().replace(/%[0-9A-F]{2}/gi,"").replace(/\s/g,"_").replace(/'/g,"")},r.a.createElement("div",{className:"card mt-4"},r.a.createElement("div",{className:"card-header bg-dark text-white"},r.a.createElement("h3",null,"United States"!==a.name?a.name:"Federal",r.a.createElement("span",{title:"Go to Top",className:"float-right",style:{cursor:"pointer"},onClick:e.scrollToTop},r.a.createElement(E.a,{icon:"angle-double-up"})))),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-deck"},a.offices&&a.offices.map(function(a){var t=e.state.representatives.offices[a],n=t.officialIndices.map(function(a){return e.state.representatives.officials[a]});return r.a.createElement(r.a.Fragment,{key:a},n.map(function(e){return r.a.createElement(B,{key:e.name+Math.random(),office:t,official:e})}))}))))):null}))),!this.state.isLoading&&r.a.createElement("small",{className:"float-right"},r.a.createElement("em",null,"Data provided by ",r.a.createElement("a",{href:"https://developers.google.com/civic-information",target:"_blank",rel:"noopener noreferrer"},"Google Civic Information")))))}}]),a}(n.Component),q=(t(99),t(100),t(101),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function Y(e,a){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var F=t(4);s.b.add(l.a,F.a,F.b,F.d,F.e,F.g,F.h,F.i,F.j,F.f,F.c,F.k,F.l),o.a.render(r.a.createElement(R,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var a="".concat("","/wgm-worker.js");q?(function(e,a){fetch(e).then(function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Y(e,a)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(function(){console.log("WhoGoverns.me Service Worker ready!")})):Y(a,e)})}}()},17:function(e){e.exports={PLACES_API_KEY:"AIzaSyAgpAKlEmeZ8RHVfpzhaxELJp9gEAy8Yds",CIVIC_API_KEY:"AIzaSyDjHqzqi8jfGkzQAtTlbEfZ1IC0xMcX7og",GEOCODE_API_KEY:"AIzaSyAjxi_5qrwbEHzNcWOP5X3kBnOGjlsZ5iM"}},19:function(e,a,t){e.exports=t.p+"static/media/default-photo.447bb7f2.jpg"},44:function(e,a,t){e.exports=t(102)}},[[44,1,2]]]);
//# sourceMappingURL=main.8566d37e.chunk.js.map