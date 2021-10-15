var Y=Object.defineProperty,q=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable;var N=(n,t,e)=>t in n?Y(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,k=(n,t)=>{for(var e in t||(t={}))Z.call(t,e)&&N(n,e,t[e]);if(_)for(var e of _(t))tt.call(t,e)&&N(n,e,t[e]);return n},F=(n,t)=>q(n,Q(t));import{D as C,F as I,p as U,v as a,s as y,y as T,g as L,d as x,A as S,_ as et,l as ot,a as it,S as st}from"./vendor.f49ce37a.js";const nt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}};nt();function P(){return P=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},P.apply(this,arguments)}const K=(n,t,e)=>{const o=n._listeners;o[t]?o[t].push(e):o[t]=[e]};class ${constructor(){this._listeners={}}on(t,e){return K(this,t,{listener:e}),this}once(t,e){return K(this,t,{listener:e,once:!0}),this}off(t,e){const o=this._listeners[t];if(!o)return this;if(o.length===1&&e===o[0].listener)return this._listeners[t]=null,this;const i=o.findIndex(s=>s.listener===e);return i!==-1&&o.splice(i,1),this}emit(t,...e){const o=this._listeners[t];if(!o)return;let i=!1;o.forEach(s=>{s.listener(e),s.once&&(i=!0)}),i&&(this._listeners[t]=o.filter(s=>!s.once))}removeAllListeners(){return this._listeners={},this}}function lt(n){return!(typeof n!="object"||!n||n.isIBClipboardData!==!0||"ibContextUUID"in n&&typeof n.ibContextUUID!="string"||!Array.isArray(n.blocksData)||n.blocksData.some(t=>typeof t!="object"||t===null))}const b=()=>function(n){Object.assign(this,n),this.returnValue=!0,this.preventDefault=()=>{this.returnValue=!1}},rt=b(),ct=b(),at=b(),ht=b(),M=(n,t)=>typeof n=="function"?n(t):n;class dt{get activeNumber(){return this._activeNumber}get isActive(){return this._activeNumber!==!1}get ref(){return this.info.ref}setSelectStatus(t){var e,o;return this._activeNumber!==t&&(this._activeNumber=t,(e=(o=this.info).onActiveStatusChange)==null||e.call(o,this),!0)}constructor(t,e,o){this.type="block",this.ctx=void 0,this.ownerSlot=void 0,this.slots=new Set,this.info=void 0,this._activeNumber=!1,this.handlePointerUp=()=>this.ctx.handleBlockPointerUp(this,!1),this.handlePointerUpCapture=()=>this.ctx.handleBlockPointerUp(this,!0),this.ctx=t,this.ownerSlot=e,e&&e.items.add(this),this.info=o}get index(){return M(this.info.index,this)}get data(){return M(this.info.data,this)}createSlot(t){return this.ctx.createSlot(t,this)}dispose(){var t;this.ctx.activeBlocks.has(this)&&(this.ctx.activeBlocks.delete(this),this.ctx.syncActiveElementStatus()),(t=this.ownerSlot)==null||t.items.delete(this),this.slots.forEach(e=>e.dispose()),this.slots.clear(),this.info=ut}}const ut={index:()=>{throw new Error("Accessing a disposed block")},data:()=>{throw new Error("Accessing a disposed block")}};function vt(n,t){let e,o;function i(l=!1){e&&(l&&o&&n(...o),clearTimeout(e),e=null,o=void 0)}const s=function(...l){o=l,e||(e=setTimeout(()=>i(!0),t))};return s.cancel=()=>i(!1),s.flush=()=>i(!0),s}function H(n,t){const e=t.map(o=>n[o]).filter(o=>o!==void 0);return[...t].sort((o,i)=>i-o).forEach(o=>n.splice(o,1)),e}function ft(n,t,e){const o=H(n,t);n.splice(e,0,...o)}function gt(n,t,e,o){const i=H(n,t);e.splice(o,0,...i)}function W(n,t){if(t==="camelCase")return n;const e={};return Object.keys(n).forEach(o=>{var i;let s=o;t==="react"&&(s=`on${(i=s[0])==null?void 0:i.toUpperCase()}${s.substr(1)}`),t==="lowercase"&&(s=s.toLowerCase()),e[s]=n[o]}),e}function j(n,t){if(!n)return;let e=0;for(const o of n){if(t(o,e))return o;e+=1}}function w(n){if(n)return n[Symbol.iterator]().next().value}const p=document.createElement("div");p.style.cssText="position:fixed;pointer-events:none;left:0;top:0;background: #FFF; border: 1px solid #000; padding: 4px 8px;transform:translate(-50%, -50%)";class pt extends ${constructor(t){super(),this.ctx=void 0,this.draggingBlocks=void 0,this.slotOfDraggingBlocks=void 0,this.isHovering=!1,this.hoveringSlot=void 0,this.hoveringBlock=void 0,this.setHoveringSlot=vt(this._originalSetHoveringSlot.bind(this),50),this.ctx=t}dispose(){this.removeAllListeners(),this.setHoveringSlot.cancel()}_originalSetHoveringSlot(t,e){var o;if(t&&typeof e!="number")throw new Error("Cannot setHoveringSlot with indexToDrop unknown");if(t===this.hoveringSlot)return void(t&&t.indexToDrop!==e&&(t.indexToDrop=e,t.info.onDragHoverStatusChange==null||t.info.onDragHoverStatusChange(this.ctx),this.emit("hoverChanged",this.ctx)));const i=this.hoveringSlot;((o=this.hoveringBlock)==null?void 0:o.ownerSlot)!==t&&(this.hoveringBlock=void 0),this.hoveringSlot=t,this.isHovering=!!t,i&&(i.isDragHovering=!1,i.indexToDrop=void 0,i.info.onDragHoverStatusChange==null||i.info.onDragHoverStatusChange(this.ctx)),t&&(t.isDragHovering=!0,t.indexToDrop=e,t.info.onDragHoverStatusChange==null||t.info.onDragHoverStatusChange(this.ctx)),this.emit("hoverChanged",this.ctx)}getDefaultBlockEventHandlers(t,e){return W({dragStart:this.handleBlockDragStart.bind(this,t),dragEnd:this.handleBlockDragEnd.bind(this,t),dragOver:this.handleBlockDragOver.bind(this,t),dragLeave:this.handleBlockDragLeave.bind(this,t)},e)}handleBlockDragStart(t,e){const o=e.dataTransfer;if(!o)return;this.ctx.activeBlocks.has(t)||this.ctx.addBlockToSelection(t,"none"),this.ctx.activeBlocks.size>1&&(document.body.appendChild(p),p.style.left=`${e.clientX}px`,p.style.top=`${e.clientY}px`,setTimeout(()=>p.remove(),100),p.textContent=`${this.ctx.activeBlocks.size} items`,e.dataTransfer.setDragImage(p,p.offsetWidth/2,p.offsetHeight/2)),e.stopPropagation();const i=this.ctx.getTextForClipboard();if(!i)return;o.setData("text/plain",i),o.setData("x-block-context/uuid",this.ctx.uuid),this.draggingBlocks=Array.from(this.ctx.activeBlocks);const s=this.ctx.slotOfActiveBlocks;this.slotOfDraggingBlocks=s||void 0,s&&(this.setHoveringSlot(s,t.index),this.setHoveringSlot.flush())}handleBlockDragEnd(t,e){this.slotOfDraggingBlocks=void 0,this.draggingBlocks=void 0,this.setHoveringSlot(void 0)}handleBlockDragOver(t){this.hoveringBlock!==t&&t.ownerSlot==this.hoveringSlot&&(this.hoveringBlock=t,this.emit("hoverChanged",this.ctx))}handleBlockDragLeave(t){this.hoveringBlock===t&&(this.hoveringBlock=void 0,this.emit("hoverChanged",this.ctx))}getDefaultSlotEventHandlers(t,e){return W({dragOver:o=>{this.handleSlotDragOver(t,o)&&(o.preventDefault(),o.stopPropagation())},dragLeave:o=>{this.handleSlotDragLeave(t),o.preventDefault(),o.stopPropagation()},drop:o=>{this.handleSlotDrop(t,o),o.preventDefault(),o.stopPropagation()}},e)}handleSlotDragOver(t,e){const o=this.computeIndexToDrop(t,e);return o!==!1&&(this.setHoveringSlot(t,o),!0)}handleSlotDrop(t,e){var o;const i=this.computeIndexToDrop(t,e);if(i===!1)return;this.setHoveringSlot(t,i),this.setHoveringSlot.flush();const s=(o=e.dataTransfer)==null?void 0:o.dropEffect,l=this.draggingBlocks,r=this.ctx;if(l&&s!=="copy")if(t===r.slotOfActiveBlocks){const c=i-l.filter(d=>d.index<i).length,h=new at({type:"moveInSlot",blocks:l,ctx:r,slot:t,index:c});if(t.info.onMoveInSlot==null||t.info.onMoveInSlot(h),r.emit("moveInSlot",h),!h.returnValue)return;setTimeout(()=>{r.activeSlot=t,r.activeBlocks.clear(),t.items.forEach(d=>{const v=d.index;v>=c&&v<c+l.length&&r.activeBlocks.add(d)}),r.syncActiveElementStatus(),r.focus()},100)}else{const c=i,h=new ht({type:"moveBetweenSlots",blocks:l,ctx:r,fromSlot:r.slotOfActiveBlocks,toSlot:t,index:c});if(t.info.onMoveToThisSlot==null||t.info.onMoveToThisSlot(h),r.emit("moveBetweenSlots",h),!h.returnValue)return;setTimeout(()=>{r.activeSlot=t,r.activeBlocks.clear(),t.items.forEach(d=>{const v=d.index;v>=c&&v<c+l.length&&r.activeBlocks.add(d)}),r.syncActiveElementStatus(),r.focus()},100)}else try{const c=JSON.parse(e.dataTransfer.getData("text/plain"));r.activeSlot=t,r.activeBlocks.clear(),r.syncActiveElementStatus(),r.pasteWithData(c,i),r.focus()}catch(c){console.error("Failed to drop")}this.setHoveringSlot(void 0)}handleSlotDragLeave(t){this.setHoveringSlot(void 0)}computeIndexToDrop(t,e){var o;if((o=this.draggingBlocks)!=null&&o.some(r=>t.isDescendantOfBlock(r)))return!1;const i=t.info.computeIndexToDrop==null?void 0:t.info.computeIndexToDrop({ctx:this.ctx,slot:t,draggingBlocks:this.draggingBlocks,dataTransfer:e.dataTransfer,currentTarget:e.currentTarget,clientX:e.clientX,clientY:e.clientY,offsetX:e.offsetX,offsetY:e.offsetY});return i!==!1&&(i===void 0?(s=(l=this.hoveringBlock)==null?void 0:l.index)!=null?s:function(r,c,h){if(!r)return 0;let d=0;for(const v of r)d=Math.max(d,v.index+1);return d}(t.items):i);var s,l}}class mt{constructor(t,e,o){this.type="slot",this.ctx=void 0,this.ownerBlock=void 0,this.items=new Set,this.info=void 0,this.handlePointerUp=()=>this.ctx.handleSlotPointerUp(this),this.handlePointerUpCapture=()=>this.ctx.handleSlotPointerUp(this,!0),this._isActive=!1,this.ctx=t,this.ownerBlock=e,e&&e.slots.add(this),this.info=o}createBlock(t){return this.ctx.createBlock(t,this)}get ref(){return this.info.ref}get isActive(){return this._isActive}setActive(t){var e,o;return this._isActive!==t&&(this._isActive=t,(e=(o=this.info).onActiveStatusChange)==null||e.call(o,this),!0)}isDescendantOfBlock(t){let e=this.ownerBlock;for(;e;){var o;if(e===t)return!0;e=(o=e.ownerSlot)==null?void 0:o.ownerBlock}return!1}isDescendantOfSlot(t){var e;let o=(e=this.ownerBlock)==null?void 0:e.ownerSlot;for(;o;){var i;if(o===t)return!0;o=(i=o.ownerBlock)==null?void 0:i.ownerSlot}return!1}dispose(){var t;let e=!1;this.ctx.slotOfActiveBlocks===this&&(this.ctx.activeBlocks.clear(),e=!0),this.ctx.activeSlot===this&&(this.ctx.activeSlot=null,e=!0),e&&this.ctx.syncActiveElementStatus(),(t=this.ownerBlock)==null||t.slots.delete(this),this.items.forEach(o=>o.dispose()),this.items.clear(),this.info={}}}const kt={deactivateHandlersWhenBlur:!0,navigateWithArrowKeys:!0,handleDeleteKey:!0,multipleSelect:!0};class St extends ${constructor(t={}){super(),this.hiddenInput=void 0,this._lastActiveElement=null,this.hasFocus=!1,this.options=void 0,this.uuid=`${Date.now().toString(36)}-${Math.random().toString(36)}`,this.dragging=new pt(this),this.activeBlocks=new Set,this.slotOfActiveBlocks=null,this.activeSlot=null,this.lastActiveSlot=null,this.lastActiveBlocks=void 0,this.isFocusingBlock=void 0,this.isFocusingSlot=void 0,this.handleSlotPointerUp=(i,s)=>{!s&&this.isFocusingSlot||(this.isFocusingSlot=i)},this.handleBlockPointerUp=(i,s)=>{!s&&this.isFocusingBlock||(this.isFocusingBlock=i)},this.handleGlobalPointerUp=i=>{const s=this.isFocusingBlock,l=this.isFocusingSlot;this.isFocusingBlock=void 0,this.isFocusingSlot=void 0,s?(this.activeSlot=l||null,this.addBlockToSelection(s,i.ctrlKey||i.metaKey?"ctrl":i.shiftKey?"shift":"none")):this.options.deactivateHandlersWhenBlur&&this.activeBlocks.size>0&&this.activeBlocks.clear(),this.syncActiveElementStatus()},this.options=P({},kt,t),document.addEventListener("pointerup",this.handleGlobalPointerUp,!1);const e=this.hiddenInput=document.createElement("textarea");e.style.cssText="opacity:0;left:0;top:0;position:fixed;width:2px;height:2px",e.tabIndex=-1,e.inputMode="none",e.ownerDocument.body.appendChild(e);const o=i=>{var s;const l=this.getTextForClipboard();l&&(i.preventDefault(),(s=i.clipboardData)==null||s.setData("text/plain",l))};e.addEventListener("copy",i=>{o(i)},!1),e.addEventListener("cut",i=>{o(i),this.deleteActiveBlocks()},!1),e.addEventListener("paste",i=>{i.preventDefault();try{var s;const l=(s=i.clipboardData)==null?void 0:s.getData("text/plain");if(!l)return;const r=JSON.parse(l);this.pasteWithData(r)}catch(l){console.error("Failed to paste!",l)}},!1),e.addEventListener("focus",()=>{this.hasFocus=!0,this.emit("focus",this)},!1),e.addEventListener("blur",()=>{this.hasFocus=!1,this._lastActiveElement=null,this.emit("blur",this)},!1),e.addEventListener("keydown",i=>{const s=this.options;switch(i.code){case"KeyA":var l;s.multipleSelect&&(i.ctrlKey||i.metaKey)&&(this.activeBlocks.clear(),Array.from(((l=this.slotOfActiveBlocks)==null?void 0:l.items)||[]).sort((r,c)=>r.index-c.index).forEach(r=>this.activeBlocks.add(r)),this.syncActiveElementStatus());break;case"ArrowUp":s.navigateWithArrowKeys&&this.activeNextBlock(-1,i.shiftKey||i.ctrlKey||i.metaKey);break;case"ArrowDown":s.navigateWithArrowKeys&&this.activeNextBlock(1,i.shiftKey||i.ctrlKey||i.metaKey);break;case"ArrowLeft":s.navigateWithArrowKeys&&this.activeParentBlock();break;case"ArrowRight":s.navigateWithArrowKeys&&this.activeChildrenBlocks();break;case"Delete":case"Backspace":s.handleDeleteKey&&this.deleteActiveBlocks();break;case"Tab":{const r=this._lastActiveElement;if(r&&"focus"in r){const c=r.tabIndex===-1&&r.querySelector("[tabIndex], button, textarea, input, select, a, [contentEditable]");c&&"focus"in c?c.focus():r.focus()}i.preventDefault()}}},!1)}focus(){document.activeElement!==this.hiddenInput&&(this._lastActiveElement=document.activeElement,this.hiddenInput.focus())}getTextForClipboard(){const t={isIBClipboardData:!0,ibContextUUID:this.uuid,blocksData:[]};if(this.activeBlocks.forEach(e=>{t.blocksData.push(e.data)}),t.blocksData.length!==0)return JSON.stringify(t)}copy(){this.hiddenInput.focus(),document.execCommand("copy")}pasteWithData(t,e){if(!lt(t))throw new Error("Invalid IBClipboardData");const o=this.activeSlot;if(!o)return;const i=w(this.activeBlocks),s=e!=null?e:o===(i==null?void 0:i.ownerSlot)?i.index:Math.max(0,...Array.from(o.items.values(),r=>1+r.index)),l=new rt({type:"paste",ctx:this,data:t,slot:o,index:s});o.info.onPaste==null||o.info.onPaste(l),this.emit("paste",l),l.returnValue!==!1&&setTimeout(()=>{const r=t.blocksData.length+s-1,c=Array.from(o.items).filter(h=>h.index>=s&&h.index<=r);c.length&&(this.activeSlot=o,this.activeBlocks.clear(),c.forEach(h=>this.activeBlocks.add(h)),this.syncActiveElementStatus())},100)}deleteActiveBlocks(){var t;const e=Array.from(this.activeBlocks.values()),o=(t=e[0])==null?void 0:t.ownerSlot;if(!o)return!1;const i=e[0].index,s=new ct({type:"cut",blocks:e,ctx:this,slot:o});if(o.info.onCut==null||o.info.onCut(s),this.emit("cut",s),s.returnValue){const l=j(o.items,r=>r.index===i);l&&this.addBlockToSelection(l)}return s.returnValue}activeNextBlock(t,e=!1){const o=e&&this.options.multipleSelect;this.focus();let i=!0,s=Array.from(this.activeBlocks);var l;if(!s.length&&(s=Array.from(((l=this.activeSlot)==null?void 0:l.items)||[]),i=!1,!s.length))return;const r=s[0].ownerSlot;let c=s[0].index,h=c,d=s[0],v=d;s.slice(1).forEach(f=>{if(f.ownerSlot!==r)return;const m=f.index;m>c&&(c=m,d=f),m<h&&(h=m,v=f)});const u=t>0?c+t:h+t,g=j(r==null?void 0:r.items,f=>f.index===u);g?(o||this.activeBlocks.clear(),this.activeBlocks.add(g),this.activeSlot=r,this.syncActiveElementStatus()):i?o||(this.activeBlocks.clear(),s.length>1&&this.activeBlocks.add(t>0?d:v),this.syncActiveElementStatus()):(this.activeBlocks.clear(),o?s.forEach(f=>this.activeBlocks.add(f)):this.activeBlocks.add(t>0?v:d),this.syncActiveElementStatus())}activeParentBlock(){var t;const e=(t=this.activeSlot)==null?void 0:t.ownerBlock;this.activeSlot=(e==null?void 0:e.ownerSlot)||null,this.activeBlocks.clear(),e&&this.activeBlocks.add(e),this.syncActiveElementStatus()}activeChildrenBlocks(){const t=w(this.activeBlocks),e=w(t==null?void 0:t.slots);if(e){if(this.activeSlot=e,this.activeBlocks.clear(),this.options.multipleSelect)e.items.forEach(o=>this.activeBlocks.add(o));else{const o=w(e.items);o&&this.activeBlocks.add(o)}this.syncActiveElementStatus()}}syncActiveElementStatus(){var t;let e=!1;const o=this.lastActiveBlocks,i=this.lastActiveSlot,s=Array.from(this.activeBlocks),l=((t=s[0])==null?void 0:t.ownerSlot)||null;var r;s.length>1&&l!==this.activeSlot&&(this.activeSlot=l),!this.activeSlot&&l&&(this.activeSlot=l),s.forEach((c,h)=>{o==null||o.delete(c),e=c.setSelectStatus(h)||e}),o==null||o.forEach(c=>{e=c.setSelectStatus(!1)||e}),this.activeSlot!==i&&(i==null||i.setActive(!1),(r=this.activeSlot)==null||r.setActive(!0),this.lastActiveSlot=this.activeSlot,e=!0),this.lastActiveBlocks=new Set(this.activeBlocks),this.slotOfActiveBlocks=l,e&&this.emit("activeElementChanged",this)}clearSelection(){this.activeBlocks.clear(),this.activeSlot=null,this.syncActiveElementStatus()}addBlockToSelection(t,e="none"){if(typeof e=="object"&&(e=e.ctrlKey||e.metaKey?"ctrl":e.shiftKey?"shift":"none"),this.options.multipleSelect||(e="none"),e==="ctrl")t.ownerSlot!==this.slotOfActiveBlocks&&this.activeBlocks.clear(),this.activeBlocks.add(t),this.activeSlot=t.ownerSlot||null;else if(e==="shift"){const o=t.ownerSlot;o!==this.slotOfActiveBlocks&&this.activeBlocks.clear();const i=t.index;let s=i,l=i;this.activeBlocks.forEach(r=>{const c=r.index;s>c&&(s=c),l<c&&(l=c)}),o?(this.activeBlocks.clear(),o.items.forEach(r=>{const c=r.index;c>=s&&c<=l&&this.activeBlocks.add(r)}),this.activeSlot=o):(this.activeBlocks.add(t),this.activeSlot=null)}else this.activeBlocks.clear(),this.activeBlocks.add(t);this.syncActiveElementStatus()}dispose(){var t;this.dragging.dispose(),(t=this.hiddenInput.parentElement)==null||t.removeChild(this.hiddenInput),document.removeEventListener("pointerup",this.handleGlobalPointerUp,!1)}createBlock(t,e=null){return new dt(this,e,t)}createSlot(t,e=null){return new mt(this,e,t)}}const Bt=()=>[{name:"aaa"},{name:"bbb",children:[{name:"b1"},{name:"b2"}]},{name:"ccc"}],xt=n=>{const t=[...n],e={};return{root:t,copiedBlocks:e,getSlotAndBlock(o){let i=t,s=null,l="";return o.forEach(r=>{if(l+=`/${r}`,!(l in e)){const c=i[r],h=F(k({},c),{children:[...c.children||[]]});i[r]=h,e[l]=h}s=e[l],i=s.children}),{slot:i,block:s}}}},yt=(n,t)=>{if("__demo_wholeReplace__"in t)return t.__demo_wholeReplace__;const e=xt(n),{slot:o,block:i}=e.getSlotAndBlock(t.path);if(t.rename&&i&&(i.name=t.rename.name),t.insert&&o.splice(t.insert.index,0,...t.insert.items),t.remove&&H(o,t.remove.indexes),t.moveInSlot){const{fromIndexes:s,toIndex:l}=t.moveInSlot;ft(o,s,l)}if(t.moveBetweenSlots){const{fromPath:s,fromIndexes:l,toIndex:r}=t.moveBetweenSlots,c=e.getSlotAndBlock(s).slot;gt(c,l,o,r)}return console.log("store reducer called",t,e),e.root},V=C(null),bt=n=>{const t=U(yt,null,Bt);return a(V.Provider,{value:t},n.children)},D=()=>I(V),J=C(null),R=()=>I(J),wt=J.Provider,A=C(null);A.displayName="OwnerSlot";const Dt=()=>I(A),At=A.Provider;A.Consumer;const O=n=>{const t=y(n);t.current=n,T(()=>()=>t.current(),[])},X=()=>{const[,n]=U(t=>(t+1)%16777215,0);return n},Et=n=>k({},n),Ct=n=>k({},n),B=n=>{const t=[];for(;n;)t.unshift(n.index),n=n.ownerSlot.ownerBlock;return t},E=(...n)=>n.filter(t=>!!t).map(t=>Array.isArray(t)?E(t):String(t)).join(" "),z=L(function(t){var v;const e=t.ownerBlock||null,[,o]=D(),i=X(),s=R(),l=x(()=>s.createSlot({onCut:u=>o({path:B(e),remove:{indexes:u.blocks.map(g=>g.index)}}),onPaste:u=>o({path:B(e),insert:{index:u.index,items:u.data.blocksData.map(Et)}}),onActiveStatusChange:()=>i(),onDragHoverStatusChange:()=>i(),onMoveInSlot:u=>o({path:B(e),moveInSlot:{fromIndexes:u.blocks.map(g=>g.index),toIndex:u.index}}),onMoveToThisSlot:u=>{var g;return o({path:B(e),moveBetweenSlots:{fromPath:B((g=u.fromSlot)==null?void 0:g.ownerBlock),fromIndexes:u.blocks.map(f=>f.index),toIndex:u.index}})}},e),[]);O(()=>l.dispose());const r=S(u=>{l.handlePointerUp(),document.activeElement===u.currentTarget&&l.ctx.focus()},[]),c=x(()=>s.dragging.getDefaultSlotEventHandlers(l,"react"),[]),{isActive:h,isDragHovering:d}=l;return a("div",k({className:E("mySlot",h&&"isActive",d&&"isDragHovering"),tabIndex:-1,onPointerUp:r},c),a(At,{value:l},((v=t.children)==null?void 0:v.length)>0?t.children:a("div",{className:"mySlot-emptyPlaceholder"},"Nothing")),l.isDragHovering&&a("div",{className:"mySlot-indexToDrop",key:"indexToDrop",style:{"grid-row-start":l.indexToDrop+1}},`indexToDrop = ${l.indexToDrop}`))}),It=L(function n(t){var g;const{index:e,item:o}=t,i=X(),s=y();et(s,()=>({index:e,item:o}),[e,o]);const l=R(),r=Dt(),c=x(()=>l.createBlock({data:()=>Ct(s.current.item),index:()=>s.current.index,onActiveStatusChange:()=>i()},r),[]);O(()=>c.dispose());const h=S(f=>{c.handlePointerUp(),document.activeElement===f.currentTarget&&c.ctx.focus()},[]),d=x(()=>l.dragging.getDefaultBlockEventHandlers(c,"react"),[]),{activeNumber:v,isActive:u}=c;return a("div",k({className:E("myBlock",u&&"isActive"),tabIndex:-1,onPointerUp:h,draggable:!0},d),u&&a("div",{className:"myBlock-selectIndex"},v+1),a(Tt,{name:o.name,blockHandler:c}),a(z,{ownerBlock:c},((g=o.children)==null?void 0:g.length)?o.children.map((f,m)=>a(n,{key:m,index:m,item:f})):null))}),Tt=n=>{const[,t]=D(),e=S(o=>{const i=n.blockHandler,s=B(i),l=o.currentTarget.value;t({path:s,rename:{name:l}})},[]);return a("input",{className:"blockNameInput",type:"text",value:n.name,onChange:e})},Pt=()=>{const[n,t]=D(),e=y(null);T(()=>{e.current.value=JSON.stringify(n,null,2)},[n]);const o=y(null);o.current=n;const i=S((r=!0)=>{try{const c=JSON.parse(e.current.value);t({path:[],__demo_wholeReplace__:c})}catch(c){r&&(e.current.value=JSON.stringify(o.current,null,2)),console.error("Failed to replace: ",c)}},[]),s=S(()=>i(!0),[]),l=S(()=>i(!1),[]);return a("div",null,a("ul",null,a("li",null,"Click to select block / slot"),a("li",null,"Drag and drop. Also supports cross-window dragging."),a("li",null,"Copy, Cut, Paste with ",a("kbd",null,"Ctrl+C")," / ",a("kbd",null,"Ctrl+X")," / ",a("kbd",null,"Ctrl+V")),a("li",null,"Navigate between blocks with arrow keys"),a("li",null,"Select multiple blocks with ",a("kbd",null,"Ctrl")," or ",a("kbd",null,"Shift"))),a("h3",null,"Current Store"),a("textarea",{class:"demoPage-store",spellcheck:!1,ref:e,onBlur:s,onInput:l}))},Ht=function(){const[n]=D(),[t,e]=ot(!1),o=x(()=>new St,[]);return O(()=>o.dispose()),T(()=>{o.on("focus",()=>e(!0)),o.on("blur",()=>e(!1)),o.on("paste",i=>{console.log("pasting...",i)})},[]),a(wt,{value:o},Ot,a("div",{className:E("demoPage",t&&"hasFocus")},a("div",{className:"demoPage-blockArea"},a(z,null,n.map((i,s)=>a(It,{key:s,index:s,item:i})))),a("div",{className:"demoPage-introductionArea"},a(Pt,null))))},G="https://github.com/lyonbot/interactive-blocks#readme",Ot=a(it,null,a("h2",null,"InteractiveBlocks"),a("p",null,"Just proving the abilities with shabby Slot and Block components here."),a("p",null,"Learn how to integrate with your own components? ",a("a",{href:G,target:"_blank"},"Read the guide on GitHub")),a("a",{className:"demoPage-forkMe",href:G,target:"_blank"},"Fork me on GitHub"));st(a(bt,null,a(Ht,null)),document.getElementById("app"));
