(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},102:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),s=a(16),i=a(36),l=a(7),m=a.n(l),d=a(14),u=a(9),p=a(10),f=a(12),h=a(11),g=a(13),E=a(37),v=a(3),b=a(17),w=(a(62),a(20)),y=a(38),_={key:"AIzaSyAgpAKlEmeZ8RHVfpzhaxELJp9gEAy8Yds"},k={key:"AIzaSyAgpAKlEmeZ8RHVfpzhaxELJp9gEAy8Yds"},A={},N=a.n(y).a.create({});A.getCity=function(){var e=Object(d.a)(m.a.mark(function e(t,a){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N.get("https://maps.googleapis.com/maps/api/geocode/json",{params:Object(w.a)({},k,{latlng:"".concat(t,", ").concat(a)})}));case 1:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),A.representatives=function(){var e=Object(d.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N.get("".concat("https://www.googleapis.com/civicinfo/v2","/representatives"),{params:Object(w.a)({},_,t)}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),A.voterInfo=function(){var e=Object(d.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N.get("".concat("https://www.googleapis.com/civicinfo/v2","/voterinfo"),{params:Object(w.a)({},_,t)}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();var S=A,O=["New York, NY","Los Angeles, CA","Chicago, IL"];function L(e){var t=new URLSearchParams(window.location.search);return r.a.createElement("nav",{id:"navbar",className:"navbar sticky-top navbar-expand-lg navbar-dark bg-dark animate__animated animate__slideInDown"},r.a.createElement("button",{className:"navbar-brand navbar-title btn btn-link animate__animated animate__slideInLeft"},r.a.createElement(v.a,{icon:"gavel"}),r.a.createElement("span",{className:"icon-text"},"Who Governs Me?")),r.a.createElement("div",{id:"navbarMenu",className:"collapse navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav ml-auto animate__animated animate__slideInRight"},O.map(function(e){return r.a.createElement("li",{key:e,className:"nav-item ".concat(t.get("address")===e?"active":"")},r.a.createElement("a",{className:"nav-link btn btn-link",href:"?address=".concat(e)},r.a.createElement(v.a,{icon:"city"}),r.a.createElement("span",{style:{marginLeft:"10px"}},e)))}))))}var C=a(39);function I(e){return r.a.createElement(C.a,{size:e.size||128})}var j=a(18),x=a.n(j),P=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={address:null},a.handleChange=function(e){(e=""!==e?e:null)||localStorage.removeItem("address"),a.setState({address:e})},a.handleSelect=function(e){if(a.setState({address:e}),localStorage.setItem("address",e),window.history.pushState){var t=window.location.origin+"?address=".concat(e);window.history.pushState({path:t},"",t)}Object(j.geocodeByAddress)(e).then(function(e){return Object(j.getLatLng)(e[0])}).then(function(t){return a.props.onChange(e,t)}).catch(function(e){return console.error(e)})},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=new URLSearchParams(window.location.search);return e.get("address")?this.handleSelect(e.get("address")):localStorage.getItem("address")?this.handleSelect(localStorage.getItem("address")):void 0}},{key:"render",value:function(){return r.a.createElement(x.a,{value:this.state.address||localStorage.getItem("address")||"",onChange:this.handleChange,onSelect:this.handleSelect,searchOptions:{componentRestrictions:{country:"us"}},classNames:{input:"places-search-input form-control",autocompleteContainer:"search-autocomplete-container"}},function(e){var t=e.getInputProps,a=e.suggestions,n=e.getSuggestionItemProps,c=e.loading;return r.a.createElement("div",null,r.a.createElement("input",t({placeholder:"What's your address?",className:"location-search-input"})),r.a.createElement("p",{className:"text-muted text-right"},r.a.createElement("em",null,"Or, just your City and State if you prefer.")),r.a.createElement("div",{className:"autocomplete-dropdown-container"},c&&r.a.createElement("div",null,"Loading..."),a.map(function(e){var t=e.active?"suggestion-item--active":"suggestion-item",a=e.active?{backgroundColor:"#ddd",cursor:"pointer",borderRadius:"4px",padding:"2px"}:{backgroundColor:"#ffffff",cursor:"pointer"};return r.a.createElement("div",Object.assign({key:Math.random().toString(36)},n(e,{className:t,style:a})),r.a.createElement("span",null,e.description))})))})}}]),t}(n.Component),R=a(27),U=a.n(R),z=a(42),G=a.n(z),T=a(19),B=a.n(T),D=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).mapAddress=function(e){var t="".concat(e.line1||""," ").concat(e.line2||""," ").concat(e.line3||""," ").concat(e.city||""," ").concat(e.state||""," ").concat(e.zip||""),a=encodeURIComponent(t),n="https://www.google.com/maps/search/?api=1&query=".concat(a);window.open(n)},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e,t=this,a=this.props,n=a.office,c=a.official;switch(c.name){case"Donald J. Trump":e="Donald Trump";break;default:e=c.name}var o=c.party?"Unknown"===c.party?"Unknown Party":c.party:"Unknown Party",s=n.name;switch(n.name){case"governmentOfficer":s="Government Officer";break;case"legislatorUpperBody":s="Legislator, Upper Body";break;case"headofGovernment":s="Head of Government"}var i,l=c.photoUrl;"https://www.whitehouse.gov/sites/whitehouse.gov/files/images/45/PE%20Color.jpg"===l&&(l="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKx6EYhhB26AqqnnfUHX5B3HuLPilvjkKXzWR8-C8G29fOtoUN"),"https://www.whitehouse.gov/sites/whitehouse.gov/files/images/45/VPE%20Color.jpg"===l&&(l="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Mike_Pence_official_Vice_Presidential_portrait.jpg/1200px-Mike_Pence_official_Vice_Presidential_portrait.jpg"),l&&l.includes("http://")&&(l=l.replace("http://","https://"),i="https://http-securifier.herokuapp.com/?url=".concat(c.photoUrl)),l&&l.includes("bioguide.congress.gov")&&(l=i);var m=l?[l]:B.a;return i&&m.push(i),Array.isArray(m)&&m.push(B.a),r.a.createElement("div",{className:"official-card card mb-4"},r.a.createElement("div",{className:"card-header"},r.a.createElement(G.a,null,r.a.createElement(U.a,{className:"img-thumbnail official-profile-image float-left",src:m,loader:r.a.createElement(U.a,{className:"img-thumbnail official-profile-image float-left",src:B.a})})),r.a.createElement("p",{className:"text-right"},r.a.createElement("span",{className:"official-name"},c.name),r.a.createElement("br",null),r.a.createElement("span",{className:"office-name"},s),r.a.createElement("br",null),r.a.createElement("span",{className:"office-party"},o.includes("Republican")&&r.a.createElement(v.a,{icon:"republican",color:"#E91D0E"}),o.includes("Democrat")&&r.a.createElement(v.a,{icon:"democrat",color:"#232066"}),r.a.createElement("span",{className:"icon-text"},o)))),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("address",null,c.address&&c.address.length>0&&r.a.createElement("p",null,""!==c.address[0].line1&&r.a.createElement("span",null,c.address[0].line1,r.a.createElement("br",null)),""!==c.address[0].line2&&r.a.createElement("span",null,c.address[0].line2,r.a.createElement("br",null)),""!==c.address[0].line3&&r.a.createElement("span",null,c.address[0].line3,r.a.createElement("br",null),">"),r.a.createElement("span",null,c.address[0].city,", ",c.address[0].state," ",c.address[0].zip,r.a.createElement("br",null))),c.phones&&c.phones.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{icon:"phone"}),r.a.createElement("a",{className:"icon-text",href:"tel:".concat(c.phones[0])},c.phones[0]),r.a.createElement("br",null)))))),r.a.createElement("div",{className:"card-footer"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{title:"Search on Ballotpedia",className:"btn btn-link",href:"https://ballotpedia.org/wiki/index.php?search=".concat(e),target:"_blank",rel:"noopener noreferrer"},r.a.createElement(v.a,{icon:"vote-yea",size:"2x"})),c.emails&&c.emails.length>0&&r.a.createElement("a",{title:"Send Email",className:"btn btn-link",href:"mailto:".concat(c.emails[0])},r.a.createElement(v.a,{icon:"envelope",size:"2x"})),c.phones&&c.phones.length>0&&r.a.createElement("a",{title:"Call: ".concat(c.phones[0]),className:"btn btn-link",href:"tel://".concat(c.phones[0])},r.a.createElement(v.a,{icon:"phone",size:"2x"})),c.address&&c.address.length>0&&r.a.createElement("span",{title:"View on Map",className:"btn btn-link",onClick:function(){return t.mapAddress(c.address[0])}},r.a.createElement(v.a,{icon:"map-marker-alt",size:"2x"})),c.urls&&c.urls.length>0&&r.a.createElement("a",{title:"Visit website: ".concat(c.urls[0]),className:"btn btn-link",href:c.urls[0],target:"_blank",rel:"noopener noreferrer"},r.a.createElement(v.a,{icon:"link",size:"2x"})),c.channels&&c.channels.length>0&&c.channels.map(function(e){var t=null,a=null,n=null;switch(e.type){case"Facebook":t=r.a.createElement(v.a,{icon:["fab","facebook"],size:"2x"}),n=a="https://fb.me/".concat(e.id);break;case"Twitter":t=r.a.createElement(v.a,{icon:["fab","twitter"],size:"2x"}),a="https://twitter.com/".concat(e.id),n="twitter://user?screen_name=".concat(e.id);break;case"YouTube":t=r.a.createElement(v.a,{icon:["fab","youtube"],size:"2x"}),n=a="https://youtube.com/user/".concat(e.id);break;default:t=null}return r.a.createElement("span",{key:e.type+e.id},t&&r.a.createElement("a",{title:"".concat(e.type,": ").concat(e.id),className:"btn btn-link",key:e.type+e.id,href:/Mobi|Android/i.test(navigator.userAgent)?n:a,target:"_blank",rel:"noopener noreferrer"},t))}))))}}]),t}(n.Component),Y="https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyAgpAKlEmeZ8RHVfpzhaxELJp9gEAy8Yds","&libraries=places"),V=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!1,showAddressBar:!1,representatives:null},a.componentDidMount=function(){var e;e=setInterval(function(){window.google&&(a.setState({showAddressBar:!0},function(){document.querySelector(".location-search-input").focus(),document.querySelector(".location-search-input").addEventListener("focus",function(e){e.target.select()})}),clearInterval(e))},100),fetch("https://json.geoiplookup.io").then(function(e){return e.json()}).then(function(e){"US"!==e.country_code&&window.alert("Please note that this app only provides data for the United States")}).catch(function(e){console.log(e)}),setInterval(a.checkFABState,200)},a.checkFABState=function(){var e=document.querySelector(".rtf");e.classList.contains("open")&&document.querySelector(".rtf--mb").classList.remove("animate__animated","animate__infinite","animate__slower","animate__bounce"),e.classList.contains("closed")&&document.querySelector(".rtf--mb").classList.add("animate__animated","animate__infinite","animate__slower","animate__bounce")},a.onChange=function(){var e=Object(d.a)(m.a.mark(function e(t,n){var r,c,o;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.setState({isLoading:!0,representatives:null}),e.next=4,S.representatives({address:t});case 4:r=e.sent,c=[],Object.values(r.data.divisions).forEach(function(e){c.push({name:e.name,offices:e.officeIndices})}),o=c.find(function(e){return"United States"===e.name}),(c=c.filter(function(e){return"United States"!==e.name})).unshift(o),a.setState({isLoading:!1,representatives:{divisions:c,offices:r.data.offices,officials:r.data.officials}}),document.querySelector(".address-search-container").classList.add("done"),document.querySelector(".location-search-input").blur(),document.title="Who Governs Me? \u2022 ".concat(t),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.error(e.t0);case 19:case"end":return e.stop()}},e,null,[[0,16]])}));return function(t,a){return e.apply(this,arguments)}}(),a.scrollToTop=function(){window.scrollTo(0,0)},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t={backgroundColor:"#2222aa"};return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.Helmet,null,r.a.createElement("script",{src:Y}),Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_GOOGLE_API_KEY:"AIzaSyAgpAKlEmeZ8RHVfpzhaxELJp9gEAy8Yds"}).REACT_APP_GOOGLE_ANALYTICS_ID&&r.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_GOOGLE_API_KEY:"AIzaSyAgpAKlEmeZ8RHVfpzhaxELJp9gEAy8Yds"}).REACT_APP_GOOGLE_ANALYTICS_ID)}),Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_GOOGLE_API_KEY:"AIzaSyAgpAKlEmeZ8RHVfpzhaxELJp9gEAy8Yds"}).REACT_APP_GOOGLE_ANALYTICS_ID&&r.a.createElement("script",null,"window.dataLayer = window.dataLayer || [];\n                function gtag(){dataLayer.push(arguments);}\n                gtag('js', new Date());\n                gtag('config', '".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_GOOGLE_API_KEY:"AIzaSyAgpAKlEmeZ8RHVfpzhaxELJp9gEAy8Yds"}).REACT_APP_GOOGLE_ANALYTICS_ID,"');\n              "))),r.a.createElement(L,null),r.a.createElement("div",{className:"container address-search-container"},r.a.createElement("h1",{className:"address-bar-title"},"Research the people you're supposed to trust:"),!this.state.showAddressBar&&r.a.createElement(I,{size:64}),this.state.showAddressBar&&r.a.createElement("div",{className:"animate__animated animate__fadeInDownBig"},r.a.createElement(P,{onChange:this.onChange}))),r.a.createElement("div",{className:"container search-results-wrapper"},r.a.createElement("h3",{className:"quote animate__animated animate__backInUp animate__delay-1s"},"\"It's not the voting that's democracy; it's the counting.\" ",r.a.createElement("small",null,"\u2014 Tom Stoppard")),this.state.isLoading&&r.a.createElement(I,null),this.state.representatives&&r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},this.state.representatives.divisions.map(function(t){if(!t.offices||0===t.offices.length)return null;var a=t.name.replace(/([' | ])+/g,"_");return r.a.createElement("section",{key:t.name,id:"SECTION_"+a},r.a.createElement("div",{className:"card mt-4"},r.a.createElement("div",{className:"card-header bg-dark text-white"},r.a.createElement("h3",null,r.a.createElement(v.a,{icon:"landmark"}),r.a.createElement("span",{style:{marginLeft:"20px"}},"United States"!==t.name?t.name:"Federal"))),r.a.createElement("div",{id:a,className:"card-body collapse show"},r.a.createElement("div",{className:"card-deck"},t.offices&&t.offices.map(function(t){var a=e.state.representatives.offices[t],n=a.officialIndices.map(function(t){return e.state.representatives.officials[t]});return r.a.createElement(r.a.Fragment,{key:t},n.map(function(e){return r.a.createElement(D,{key:e.name+Math.random(),office:a,official:e})}))})))))})))),r.a.createElement("footer",{className:"footer mt-auto py-3 animate__animated animate__slideInUp"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"https://github.com/sponsors/mathiscode",target:"_blank",rel:"noopener noreferrer"},"Made with ",r.a.createElement(v.a,{icon:"heart",color:"#d00"})," by ",r.a.createElement("span",{style:{textDecoration:"underline"}},"Jay Mathis")),r.a.createElement("small",{className:"float-right"},r.a.createElement("em",null,"Data provided by ",r.a.createElement("a",{href:"https://developers.google.com/civic-information",target:"_blank",rel:"noopener noreferrer"},"Google Civic Information"))))),r.a.createElement(b.b,{alwaysShowTitle:!0,event:"click",icon:r.a.createElement(v.a,{icon:"bars"}),mainButtonStyles:{backgroundColor:"#aa0000"},children:[r.a.createElement(b.a,{text:"Search",style:t,onClick:function(){e.scrollToTop(),document.querySelector(".location-search-input").focus()}},r.a.createElement(v.a,{icon:"search"})),r.a.createElement(b.a,{text:"Register to Vote",style:t,onClick:function(){return window.open("https://www.vote.org/register-to-vote/","_blank")}},r.a.createElement(v.a,{icon:"vote-yea"})),r.a.createElement(b.a,{text:"Buy me a beer",style:t,onClick:function(){return window.open("https://github.com/sponsors/mathiscode","_blank")}},r.a.createElement(v.a,{icon:"beer"}))]}))}}]),t}(n.Component),q=(a(99),a(100),a(101),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function K(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var M=a(4);s.b.add(i.a,M.a,M.b,M.f,M.g,M.i,M.k,M.l,M.m,M.h,M.e,M.n,M.p,M.q,M.c,M.o,M.j,M.d),o.a.render(r.a.createElement(V,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/wgm-worker.js");q?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):K(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("WhoGoverns.me Service Worker ready!")})):K(t,e)})}}()},19:function(e,t,a){e.exports=a.p+"static/media/default-photo.447bb7f2.jpg"},44:function(e,t,a){e.exports=a(102)}},[[44,1,2]]]);
//# sourceMappingURL=main.78e0b8e0.chunk.js.map