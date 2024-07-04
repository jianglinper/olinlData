"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[6258],{6258:(t,e,s)=>{s.r(e);var a=s(9549),i=s(5051),n=s(3297),d=s(7404);class c extends a.C{onAttach(t){t.style.pointerEvents||(0,a.a)(t,"pointer-events","auto")}}class o extends a.C{constructor(){super(),new i.F}onConnect(t){(0,a.q)((0,n.r)((()=>{if(!this.connectScope)return;this.xb();const t=(0,a.u)(i.t);(0,a.q)((()=>{const e=this.Bd();e&&t._e(e)}))})))}xb(){const t=this.Bd(),e=(0,a.u)(i.t);t&&e.Ze(t)}Bd(){const t=this.el.firstElementChild;return"button"===t?.localName||"button"===t?.getAttribute("role")?t:this.el}}var r=s(2473),l=s(1029),h=s(2027),m=s(2177);class u extends((0,a.H)(HTMLElement,i.at)){static{this.tagName="media-captions"}}class p extends((0,a.H)(HTMLElement,i.as)){static{this.tagName="media-gesture"}}class g extends((0,a.H)(HTMLElement,i.J)){static{this.tagName="media-announcer"}}class H extends((0,a.H)(HTMLElement,i.K)){static{this.tagName="media-controls"}}class x extends((0,a.H)(HTMLElement,c)){static{this.tagName="media-controls-group"}}class C extends a.C{}class E extends((0,a.H)(HTMLElement,C)){static{this.tagName="media-title"}onSetup(){this.a=(0,d.u)()}onConnect(){(0,a.g)(this.td.bind(this))}td(){const{title:t}=this.a.$state;this.textContent=t()}}class N extends a.C{static{this.props={defaultText:""}}}class T extends((0,a.H)(HTMLElement,N)){static{this.tagName="media-chapter-title"}onSetup(){this.a=(0,d.u)(),this.bn=(0,a.f)("")}onConnect(){const t=this.a.textTracks;(0,r.c)(t,"chapters",this.bn.set),(0,a.g)(this.pn.bind(this))}pn(){const{defaultText:t}=this.$props;this.textContent=this.bn()||t()}}class L extends a.C{static{this.props={size:96,trackWidth:8,fillPercent:50}}onConnect(t){(0,n.r)((()=>{if(!this.connectScope)return;const e=t.querySelector("svg"),s=e.firstElementChild,i=s.nextElementSibling;(0,a.g)(this.Ha.bind(this,e,s,i))}))}Ha(t,e,s){const{size:i,trackWidth:n,fillPercent:d}=this.$props;(0,a.s)(t,"width",i()),(0,a.s)(t,"height",i()),(0,a.s)(e,"stroke-width",n()),(0,a.s)(s,"stroke-width",n()),(0,a.s)(s,"stroke-dashoffset",100-d())}}class b extends((0,a.H)(h.L,L)){static{this.tagName="media-spinner"}render(){return l.x`
      <svg fill="none" viewBox="0 0 120 120" aria-hidden="true" data-part="root">
        <circle cx="60" cy="60" r="54" stroke="currentColor" data-part="track"></circle>
        <circle
          cx="60"
          cy="60"
          r="54"
          stroke="currentColor"
          pathLength="100"
          stroke-dasharray="100"
          data-part="track-fill"
        ></circle>
      </svg>
    `}}class M extends a.C{static{this.props={when:!1}}}class f extends((0,a.H)(HTMLElement,M)){static{this.tagName="media-layout"}onSetup(){this.a=(0,d.u)()}onConnect(){(0,a.g)(this.qn.bind(this))}qn(){const t=this.firstElementChild,e="template"===t?.localName,s=this.$props.when();((0,a.b)(s)?s:(0,a.o)((()=>s(this.a.player.state)))())?e?this.append(t.content.cloneNode(!0)):(0,n.i)(t)&&(t.style.display=""):e?(this.textContent="",this.appendChild(t)):(0,n.i)(t)&&(t.style.display="none")}}class y extends((0,a.H)(HTMLElement,i.U)){static{this.tagName="media-google-cast-button"}}class k extends((0,a.H)(HTMLElement,i.Q)){static{this.tagName="media-toggle-button"}}class v extends((0,a.H)(HTMLElement,i.N)){static{this.tagName="media-tooltip"}}class S extends((0,a.H)(HTMLElement,o)){static{this.tagName="media-tooltip-trigger"}onConnect(){this.style.display="contents"}}class q extends((0,a.H)(HTMLElement,i.O)){static{this.tagName="media-tooltip-content"}}class w extends((0,a.H)(HTMLElement,i.af)){static{this.tagName="media-menu-portal"}static{this.attrs={disabled:{converter:t=>(0,a.i)(t)?t:null!==t}}}}class Y extends((0,a.H)(HTMLElement,i.ak)){static{this.tagName="media-chapters-radio-group"}onConnect(){(0,m.w)(this,((t,e)=>{const{cue:s,startTime:i,duration:n}=e,d=t.querySelector(".vds-thumbnail,media-thumbnail"),c=t.querySelector('[data-part="start-time"]'),o=t.querySelector('[data-part="duration"]');c&&(c.textContent=i),o&&(o.textContent=n),d&&(d.setAttribute("time",s.startTime+""),(0,a.g)((()=>{const t=this.$props.thumbnails();"src"in d?d.src=t:(0,a.i)(t)&&d.setAttribute("src",t)})))}))}}class $ extends((0,a.H)(HTMLElement,i.an)){static{this.tagName="media-audio-gain-radio-group"}onConnect(){(0,m.w)(this)}}class A extends((0,a.H)(HTMLElement,i.aj)){static{this.tagName="media-radio"}}class B extends((0,a.H)(HTMLElement,i.ai)){static{this.tagName="media-radio-group"}}class P extends((0,a.H)(HTMLElement,i.S)){static{this.tagName="media-slider"}}const Z=(0,n.a)('<video muted playsinline preload="none" style="max-width: unset;"></video>');class _ extends((0,a.H)(HTMLElement,i.a4)){constructor(){super(...arguments),this.m=this.an()}static{this.tagName="media-slider-video"}onSetup(){this.a=(0,d.u)(),this.$state.video.set(this.m)}onConnect(){const{canLoad:t}=this.a.$state,{src:e,crossOrigin:s}=this.$state;this.m.parentNode!==this&&this.prepend(this.m),(0,a.g)((()=>{(0,a.s)(this.m,"crossorigin",s()),(0,a.s)(this.m,"preload",t()?"auto":"none"),(0,a.s)(this.m,"src",e())}))}an(){return(0,n.c)(Z)}}class j extends((0,a.H)(HTMLElement,i.a9)){static{this.tagName="media-audio-gain-slider"}}class z extends((0,a.H)(HTMLElement,i.aa)){static{this.tagName="media-speed-slider"}}class O extends((0,a.H)(HTMLElement,i.ab)){static{this.tagName="media-quality-slider"}}class W extends((0,a.H)(HTMLElement,i.ad)){constructor(){super(...arguments),this.Ym=null}static{this.tagName="media-slider-chapters"}onConnect(){(0,n.r)((()=>{if(!this.connectScope)return;const t=this.querySelector("template");t&&(this.Ym=t,(0,a.g)(this.un.bind(this)))}))}un(){if(!this.Ym)return;const t=(0,n.f)(this.Ym,this.cues.length||1);this.setRefs(t)}}class F extends a.C{}class J extends((0,a.H)(HTMLElement,F)){constructor(){super(...arguments),this.Ym=null}static{this.tagName="media-slider-steps"}onConnect(t){(0,n.r)((()=>{this.connectScope&&(this.Ym=t.querySelector("template"),this.Ym&&(0,a.g)(this.Zm.bind(this)))}))}Zm(){if(!this.Ym)return;const{min:t,max:e,step:s}=(0,a.L)(i.a2),d=(e()-t())/s();(0,n.f)(this.Ym,Math.floor(d)+1)}}var K=s(7618);(0,a.d)(f),(0,a.d)(H),(0,a.d)(x),(0,a.d)(K.MediaPosterElement),(0,a.d)(g),(0,a.d)(v),(0,a.d)(S),(0,a.d)(q),(0,a.d)(m.h),(0,a.d)(m.f),(0,a.d)(m.c),(0,a.d)(m.d),(0,a.d)(m.g),(0,a.d)(m.i),(0,a.d)(m.b),(0,a.d)(y),(0,a.d)(k),(0,a.d)(P),(0,a.d)(j),(0,a.d)(m.v),(0,a.d)(m.t),(0,a.d)(z),(0,a.d)(O),(0,a.d)(W),(0,a.d)(J),(0,a.d)(m.u),(0,a.d)(m.s),(0,a.d)(m.r),(0,a.d)(_),(0,a.d)(m.l),(0,a.d)(m.m),(0,a.d)(w),(0,a.d)(m.o),(0,a.d)(m.n),(0,a.d)(m.j),(0,a.d)(m.k),(0,a.d)(m.p),(0,a.d)($),(0,a.d)(m.q),(0,a.d)(Y),(0,a.d)(B),(0,a.d)(A),(0,a.d)(p),(0,a.d)(m.M),(0,a.d)(u),(0,a.d)(m.e),(0,a.d)(m.a),(0,a.d)(E),(0,a.d)(T),(0,a.d)(b)}}]);