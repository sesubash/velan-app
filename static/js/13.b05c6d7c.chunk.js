(window["webpackJsonpvelan-tiles"]=window["webpackJsonpvelan-tiles"]||[]).push([[13],{271:function(t,e,n){"use strict";var a=n(1),r=n(3),i=n(0),o=n.n(i),s=n(8),u=n.n(s),c=n(49);function l(t){var e=function(t){var e=Object(i.useRef)(t);return e.current=t,e}(t);Object(i.useEffect)((function(){return function(){return e.current()}}),[])}var d=Math.pow(2,31)-1;function f(){var t=Object(c.a)(),e=Object(i.useRef)();return l((function(){return clearTimeout(e.current)})),Object(i.useMemo)((function(){var n=function(){return clearTimeout(e.current)};return{set:function(a,r){void 0===r&&(r=0),t()&&(n(),r<=d?e.current=setTimeout(a,r):function t(e,n,a){var r=a-Date.now();e.current=r<=d?setTimeout(n,r):setTimeout((function(){return t(e,n,a)}),d)}(e,a,Date.now()+r))},clear:n}}),[])}var p=n(6),m=n(28),E=n.n(m),h=!1,v=o.a.createContext(null),b=function(t){function e(e,n){var a;a=t.call(this,e,n)||this;var r,i=n&&!n.isMounting?e.enter:e.appear;return a.appearStatus=null,e.in?i?(r="exited",a.appearStatus="entering"):r="entered":r=e.unmountOnExit||e.mountOnEnter?"unmounted":"exited",a.state={status:r},a.nextCallback=null,a}Object(p.a)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&"unmounted"===e.status?{status:"exited"}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(e="entering"):"entering"!==n&&"entered"!==n||(e="exiting")}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,a=this.props.timeout;return t=e=n=a,null!=a&&"number"!==typeof a&&(t=a.exit,e=a.enter,n=void 0!==a.appear?a.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){void 0===t&&(t=!1),null!==e?(this.cancelNextCallback(),"entering"===e?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(t){var e=this,n=this.props.enter,a=this.context?this.context.isMounting:t,r=this.props.nodeRef?[a]:[E.a.findDOMNode(this),a],i=r[0],o=r[1],s=this.getTimeouts(),u=a?s.appear:s.enter;!t&&!n||h?this.safeSetState({status:"entered"},(function(){e.props.onEntered(i)})):(this.props.onEnter(i,o),this.safeSetState({status:"entering"},(function(){e.props.onEntering(i,o),e.onTransitionEnd(u,(function(){e.safeSetState({status:"entered"},(function(){e.props.onEntered(i,o)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),a=this.props.nodeRef?void 0:E.a.findDOMNode(this);e&&!h?(this.props.onExit(a),this.safeSetState({status:"exiting"},(function(){t.props.onExiting(a),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:"exited"},(function(){t.props.onExited(a)}))}))}))):this.safeSetState({status:"exited"},(function(){t.props.onExited(a)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,e.nextCallback=null,t(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:E.a.findDOMNode(this),a=null==t&&!this.props.addEndListener;if(n&&!a){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=r[0],o=r[1];this.props.addEndListener(i,o)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if("unmounted"===t)return null;var e=this.props,n=e.children,a=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,Object(r.a)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return o.a.createElement(v.Provider,{value:null},"function"===typeof n?n(t,a):o.a.cloneElement(o.a.Children.only(n),a))},e}(o.a.Component);function x(){}b.contextType=v,b.propTypes={},b.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:x,onEntering:x,onEntered:x,onExit:x,onExiting:x,onExited:x},b.UNMOUNTED="unmounted",b.EXITED="exited",b.ENTERING="entering",b.ENTERED="entered",b.EXITING="exiting";var O=b,C=n(50);function g(t,e){return function(t){var e=Object(C.a)(t);return e&&e.defaultView||window}(t).getComputedStyle(t,e)}var N=/([A-Z])/g;var j=/^ms-/;function k(t){return function(t){return t.replace(N,"-$1").toLowerCase()}(t).replace(j,"-ms-")}var y=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var T=function(t,e){var n="",a="";if("string"===typeof e)return t.style.getPropertyValue(k(e))||g(t).getPropertyValue(k(e));Object.keys(e).forEach((function(r){var i=e[r];i||0===i?!function(t){return!(!t||!y.test(t))}(r)?n+=k(r)+": "+i+";":a+=r+"("+i+") ":t.style.removeProperty(k(r))})),a&&(n+="transform: "+a+";"),t.style.cssText+=";"+n},S=n(27);function w(t,e,n){void 0===n&&(n=5);var a=!1,r=setTimeout((function(){a||function(t,e,n,a){if(void 0===n&&(n=!1),void 0===a&&(a=!0),t){var r=document.createEvent("HTMLEvents");r.initEvent(e,n,a),t.dispatchEvent(r)}}(t,"transitionend",!0)}),e+n),i=Object(S.a)(t,"transitionend",(function(){a=!0}),{once:!0});return function(){clearTimeout(r),i()}}function R(t,e,n,a){null==n&&(n=function(t){var e=T(t,"transitionDuration")||"",n=-1===e.indexOf("ms")?1e3:1;return parseFloat(e)*n}(t)||0);var r=w(t,n,a),i=Object(S.a)(t,"transitionend",e);return function(){r(),i()}}function D(t,e){var n=T(t,e)||"",a=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*a}function P(t,e){var n=D(t,"transitionDuration"),a=D(t,"transitionDelay"),r=R(t,(function(n){n.target===t&&(r(),e(n))}),n+a)}var L,M=["className","children"],B=((L={}).entering="show",L.entered="show",L),F=o.a.forwardRef((function(t,e){var n=t.className,s=t.children,c=Object(r.a)(t,M),l=Object(i.useCallback)((function(t){!function(t){t.offsetHeight}(t),c.onEnter&&c.onEnter(t)}),[c]);return o.a.createElement(O,Object(a.a)({ref:e,addEndListener:P},c,{onEnter:l}),(function(t,e){return o.a.cloneElement(s,Object(a.a)({},e,{className:u()("fade",n,s.props.className,B[t])}))}))}));F.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},F.displayName="Fade";var H=F,I=n(9),U=n(5),X=n(2),V=n.n(X),G=["label","onClick","className"],J={label:V.a.string.isRequired,onClick:V.a.func},Y=o.a.forwardRef((function(t,e){var n=t.label,i=t.onClick,s=t.className,c=Object(r.a)(t,G);return o.a.createElement("button",Object(a.a)({ref:e,type:"button",className:u()("close",s),onClick:i},c),o.a.createElement("span",{"aria-hidden":"true"},"\xd7"),o.a.createElement("span",{className:"sr-only"},n))}));Y.displayName="CloseButton",Y.propTypes=J,Y.defaultProps={label:"Close"};var Z=Y,$=o.a.createContext({onClose:function(){}}),q=["bsPrefix","closeLabel","closeButton","className","children"],A=o.a.forwardRef((function(t,e){var n=t.bsPrefix,s=t.closeLabel,c=t.closeButton,l=t.className,d=t.children,f=Object(r.a)(t,q);n=Object(U.a)(n,"toast-header");var p=Object(i.useContext)($),m=Object(I.a)((function(t){p&&p.onClose&&p.onClose(t)}));return o.a.createElement("div",Object(a.a)({ref:e},f,{className:u()(n,l)}),d,c&&o.a.createElement(Z,{label:s,onClick:m,className:"ml-2 mb-1","data-dismiss":"toast"}))}));A.displayName="ToastHeader",A.defaultProps={closeLabel:"Close",closeButton:!0};var W=A,z=n(29),K=Object(z.a)("toast-body"),Q=["bsPrefix","className","children","transition","show","animation","delay","autohide","onClose"],_=o.a.forwardRef((function(t,e){var n=t.bsPrefix,s=t.className,c=t.children,l=t.transition,d=void 0===l?H:l,p=t.show,m=void 0===p||p,E=t.animation,h=void 0===E||E,v=t.delay,b=void 0===v?3e3:v,x=t.autohide,O=void 0!==x&&x,C=t.onClose,g=Object(r.a)(t,Q);n=Object(U.a)(n,"toast");var N=Object(i.useRef)(b),j=Object(i.useRef)(C);Object(i.useEffect)((function(){N.current=b,j.current=C}),[b,C]);var k=f(),y=!(!O||!m),T=Object(i.useCallback)((function(){y&&(null==j.current||j.current())}),[y]);Object(i.useEffect)((function(){k.set(T,N.current)}),[k,T]);var S=Object(i.useMemo)((function(){return{onClose:C}}),[C]),w=!(!d||!h),R=o.a.createElement("div",Object(a.a)({},g,{ref:e,className:u()(n,s,!w&&(m?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"}),c);return o.a.createElement($.Provider,{value:S},w&&d?o.a.createElement(d,{in:m,unmountOnExit:!0},R):R)}));_.displayName="Toast";e.a=Object.assign(_,{Body:K,Header:W})}}]);
//# sourceMappingURL=13.b05c6d7c.chunk.js.map