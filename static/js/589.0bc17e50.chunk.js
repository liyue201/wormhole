"use strict";(self.webpackChunktest_ui=self.webpackChunktest_ui||[]).push([[589],{19589:function(e,n,r){var t,_={};_.__wbindgen_placeholder__=e.exports;var o=r(94498),i=o.TextEncoder,a=o.TextDecoder,c=new Array(32).fill(void 0);function u(e){return c[e]}c.push(void 0,null,!0,!1);var s=0,l=null;function f(){return null!==l&&l.buffer===t.memory.buffer||(l=new Uint8Array(t.memory.buffer)),l}var d=new i("utf-8"),p="function"===typeof d.encodeInto?function(e,n){return d.encodeInto(e,n)}:function(e,n){var r=d.encode(e);return n.set(r),{read:e.length,written:r.length}};function g(e,n,r){if(void 0===r){var t=d.encode(e),_=n(t.length);return f().subarray(_,_+t.length).set(t),s=t.length,_}for(var o=e.length,i=n(o),a=f(),c=0;c<o;c++){var u=e.charCodeAt(c);if(u>127)break;a[i+c]=u}if(c!==o){0!==c&&(e=e.slice(c)),i=r(i,o,o=c+3*e.length);var l=f().subarray(i+c,i+o);c+=p(e,l).written}return s=c,i}var b=null;function w(){return null!==b&&b.buffer===t.memory.buffer||(b=new Int32Array(t.memory.buffer)),b}var h=c.length;function v(e){var n=u(e);return function(e){e<36||(c[e]=h,h=e)}(e),n}var y=new a("utf-8",{ignoreBOM:!0,fatal:!0});function m(e,n){return y.decode(f().subarray(e,e+n))}function x(e){h===c.length&&c.push(c.length+1);var n=h;return h=c[n],c[n]=e,n}function A(e){return void 0===e||null===e}y.decode();var k=null;function C(e){var n=typeof e;if("number"==n||"boolean"==n||null==e)return""+e;if("string"==n)return'"'+e+'"';if("symbol"==n){var r=e.description;return null==r?"Symbol":"Symbol("+r+")"}if("function"==n){var t=e.name;return"string"==typeof t&&t.length>0?"Function("+t+")":"Function"}if(Array.isArray(e)){var _=e.length,o="[";_>0&&(o+=C(e[0]));for(var i=1;i<_;i++)o+=", "+C(e[i]);return o+="]"}var a,c=/\[object ([^\]]+)\]/.exec(toString.call(e));if(!(c.length>1))return toString.call(e);if("Object"==(a=c[1]))try{return"Object("+JSON.stringify(e)+")"}catch(u){return"Object"}return e instanceof Error?e.name+": "+e.message+"\n"+e.stack:a}function S(e,n){var r=n(1*e.length);return f().set(e,r/1),s=e.length,r}function j(e,n){return f().subarray(e/1,e/1+n)}function O(e,n){if(!(e instanceof n))throw new Error("expected instance of "+n.name);return e.ptr}e.exports.post_message_ix=function(e,n,r,_,o,i,a){var c=g(e,t.__wbindgen_malloc,t.__wbindgen_realloc),u=s,l=g(n,t.__wbindgen_malloc,t.__wbindgen_realloc),f=s,d=g(r,t.__wbindgen_malloc,t.__wbindgen_realloc),p=s,b=g(_,t.__wbindgen_malloc,t.__wbindgen_realloc),w=s,h=S(i,t.__wbindgen_malloc),y=s,m=g(a,t.__wbindgen_malloc,t.__wbindgen_realloc),x=s;return v(t.post_message_ix(c,u,l,f,d,p,b,w,o,h,y,m,x))},e.exports.post_vaa_ix=function(e,n,r,_){var o=g(e,t.__wbindgen_malloc,t.__wbindgen_realloc),i=s,a=g(n,t.__wbindgen_malloc,t.__wbindgen_realloc),c=s,u=g(r,t.__wbindgen_malloc,t.__wbindgen_realloc),l=s,f=S(_,t.__wbindgen_malloc),d=s;return v(t.post_vaa_ix(o,i,a,c,u,l,f,d))},e.exports.update_guardian_set_ix=function(e,n,r){var _=g(e,t.__wbindgen_malloc,t.__wbindgen_realloc),o=s,i=g(n,t.__wbindgen_malloc,t.__wbindgen_realloc),a=s,c=S(r,t.__wbindgen_malloc),u=s;return v(t.update_guardian_set_ix(_,o,i,a,c,u))},e.exports.set_fees_ix=function(e,n,r){var _=g(e,t.__wbindgen_malloc,t.__wbindgen_realloc),o=s,i=g(n,t.__wbindgen_malloc,t.__wbindgen_realloc),a=s,c=S(r,t.__wbindgen_malloc),u=s;return v(t.set_fees_ix(_,o,i,a,c,u))},e.exports.transfer_fees_ix=function(e,n,r){var _=g(e,t.__wbindgen_malloc,t.__wbindgen_realloc),o=s,i=g(n,t.__wbindgen_malloc,t.__wbindgen_realloc),a=s,c=S(r,t.__wbindgen_malloc),u=s;return v(t.transfer_fees_ix(_,o,i,a,c,u))},e.exports.upgrade_contract_ix=function(e,n,r,_){var o=g(e,t.__wbindgen_malloc,t.__wbindgen_realloc),i=s,a=g(n,t.__wbindgen_malloc,t.__wbindgen_realloc),c=s,u=g(r,t.__wbindgen_malloc,t.__wbindgen_realloc),l=s,f=S(_,t.__wbindgen_malloc),d=s;return v(t.upgrade_contract_ix(o,i,a,c,u,l,f,d))},e.exports.verify_signatures_ix=function(e,n,r,_,o,i){var a=g(e,t.__wbindgen_malloc,t.__wbindgen_realloc),c=s,u=g(n,t.__wbindgen_malloc,t.__wbindgen_realloc),l=s,f=g(o,t.__wbindgen_malloc,t.__wbindgen_realloc),d=s,p=S(i,t.__wbindgen_malloc),b=s;return v(t.verify_signatures_ix(a,c,u,l,r,x(_),f,d,p,b))},e.exports.guardian_set_address=function(e,n){try{var r=t.__wbindgen_add_to_stack_pointer(-16),_=g(e,t.__wbindgen_malloc,t.__wbindgen_realloc),o=s;t.guardian_set_address(r,_,o,n);var i=w()[r/4+0],a=w()[r/4+1],c=j(i,a).slice();return t.__wbindgen_free(i,1*a),c}finally{t.__wbindgen_add_to_stack_pointer(16)}},e.exports.parse_guardian_set=function(e){var n=S(e,t.__wbindgen_malloc),r=s;return v(t.parse_guardian_set(n,r))},e.exports.state_address=function(e){try{var n=t.__wbindgen_add_to_stack_pointer(-16),r=g(e,t.__wbindgen_malloc,t.__wbindgen_realloc),_=s;t.state_address(n,r,_);var o=w()[n/4+0],i=w()[n/4+1],a=j(o,i).slice();return t.__wbindgen_free(o,1*i),a}finally{t.__wbindgen_add_to_stack_pointer(16)}},e.exports.parse_state=function(e){var n=S(e,t.__wbindgen_malloc),r=s;return v(t.parse_state(n,r))},e.exports.fee_collector_address=function(e){try{var n=t.__wbindgen_add_to_stack_pointer(-16),r=g(e,t.__wbindgen_malloc,t.__wbindgen_realloc),_=s;t.fee_collector_address(n,r,_);var o=w()[n/4+0],i=w()[n/4+1],a=j(o,i).slice();return t.__wbindgen_free(o,1*i),a}finally{t.__wbindgen_add_to_stack_pointer(16)}},e.exports.claim_address=function(e,n){try{var r=t.__wbindgen_add_to_stack_pointer(-16),_=g(e,t.__wbindgen_malloc,t.__wbindgen_realloc),o=s,i=S(n,t.__wbindgen_malloc),a=s;t.claim_address(r,_,o,i,a);var c=w()[r/4+0],u=w()[r/4+1],l=j(c,u).slice();return t.__wbindgen_free(c,1*u),l}finally{t.__wbindgen_add_to_stack_pointer(16)}},e.exports.parse_posted_message=function(e){var n=S(e,t.__wbindgen_malloc),r=s;return v(t.parse_posted_message(n,r))},e.exports.parse_vaa=function(e){var n=S(e,t.__wbindgen_malloc),r=s;return v(t.parse_vaa(n,r))};var N=new Uint32Array(2),W=new BigUint64Array(N.buffer),I=null;function E(e,n){for(var r=n(4*e.length),_=(null!==I&&I.buffer===t.memory.buffer||(I=new Uint32Array(t.memory.buffer)),I),o=0;o<e.length;o++)_[r/4+o]=x(e[o]);return s=e.length,r}function P(e,n){try{return e.apply(this,n)}catch(r){t.__wbindgen_exn_store(x(r))}}e.exports.init=function(){t.init()};var U=function(){function e(n){var r=t.hash_constructor(x(n));return e.__wrap(r)}return e.__wrap=function(n){var r=Object.create(e.prototype);return r.ptr=n,r},e.prototype.__destroy_into_raw=function(){var e=this.ptr;return this.ptr=0,e},e.prototype.free=function(){var e=this.__destroy_into_raw();t.__wbg_hash_free(e)},e.prototype.toString=function(){try{var e=t.__wbindgen_add_to_stack_pointer(-16);t.hash_toString(e,this.ptr);var n=w()[e/4+0],r=w()[e/4+1];return m(n,r)}finally{t.__wbindgen_add_to_stack_pointer(16),t.__wbindgen_free(n,r)}},e.prototype.equals=function(n){return O(n,e),0!==t.hash_equals(this.ptr,n.ptr)},e.prototype.toBytes=function(){try{var e=t.__wbindgen_add_to_stack_pointer(-16);t.hash_toBytes(e,this.ptr);var n=w()[e/4+0],r=w()[e/4+1],_=j(n,r).slice();return t.__wbindgen_free(n,1*r),_}finally{t.__wbindgen_add_to_stack_pointer(16)}},e}();e.exports.Hash=U;var B=function(){function e(){}return e.__wrap=function(n){var r=Object.create(e.prototype);return r.ptr=n,r},e.prototype.__destroy_into_raw=function(){var e=this.ptr;return this.ptr=0,e},e.prototype.free=function(){var e=this.__destroy_into_raw();t.__wbg_instruction_free(e)},e}();e.exports.Instruction=B;var T=function(){function e(){var n=t.instructions_constructor();return e.__wrap(n)}return e.__wrap=function(n){var r=Object.create(e.prototype);return r.ptr=n,r},e.prototype.__destroy_into_raw=function(){var e=this.ptr;return this.ptr=0,e},e.prototype.free=function(){var e=this.__destroy_into_raw();t.__wbg_instructions_free(e)},e.prototype.push=function(e){O(e,B);var n=e.ptr;e.ptr=0,t.instructions_push(this.ptr,n)},e}();e.exports.Instructions=T;var z=function(){function e(){}return e.prototype.__destroy_into_raw=function(){var e=this.ptr;return this.ptr=0,e},e.prototype.free=function(){var e=this.__destroy_into_raw();t.__wbg_message_free(e)},Object.defineProperty(e.prototype,"recent_blockhash",{get:function(){var e=t.__wbg_get_message_recent_blockhash(this.ptr);return U.__wrap(e)},set:function(e){O(e,U);var n=e.ptr;e.ptr=0,t.__wbg_set_message_recent_blockhash(this.ptr,n)},enumerable:!1,configurable:!0}),e}();e.exports.Message=z;var q=function(){function e(n){var r=t.pubkey_constructor(x(n));return e.__wrap(r)}return e.__wrap=function(n){var r=Object.create(e.prototype);return r.ptr=n,r},e.prototype.__destroy_into_raw=function(){var e=this.ptr;return this.ptr=0,e},e.prototype.free=function(){var e=this.__destroy_into_raw();t.__wbg_pubkey_free(e)},e.prototype.toString=function(){try{var e=t.__wbindgen_add_to_stack_pointer(-16);t.pubkey_toString(e,this.ptr);var n=w()[e/4+0],r=w()[e/4+1];return m(n,r)}finally{t.__wbindgen_add_to_stack_pointer(16),t.__wbindgen_free(n,r)}},e.prototype.isOnCurve=function(){return 0!==t.pubkey_isOnCurve(this.ptr)},e.prototype.equals=function(n){return O(n,e),0!==t.pubkey_equals(this.ptr,n.ptr)},e.prototype.toBytes=function(){try{var e=t.__wbindgen_add_to_stack_pointer(-16);t.pubkey_toBytes(e,this.ptr);var n=w()[e/4+0],r=w()[e/4+1],_=j(n,r).slice();return t.__wbindgen_free(n,1*r),_}finally{t.__wbindgen_add_to_stack_pointer(16)}},e.createWithSeed=function(n,r,_){O(n,e);var o=g(r,t.__wbindgen_malloc,t.__wbindgen_realloc),i=s;O(_,e);var a=t.pubkey_createWithSeed(n.ptr,o,i,_.ptr);return e.__wrap(a)},e.createProgramAddress=function(n,r){var _=E(n,t.__wbindgen_malloc),o=s;O(r,e);var i=t.pubkey_createProgramAddress(_,o,r.ptr);return e.__wrap(i)},e.findProgramAddress=function(n,r){var _=E(n,t.__wbindgen_malloc),o=s;return O(r,e),v(t.pubkey_findProgramAddress(_,o,r.ptr))},e}();e.exports.Pubkey=q;var F=function(){function e(){}return e.prototype.__destroy_into_raw=function(){var e=this.ptr;return this.ptr=0,e},e.prototype.free=function(){var e=this.__destroy_into_raw();t.__wbg_systeminstruction_free(e)},e.createAccount=function(e,n,r,_,o){O(e,q),O(n,q),W[0]=r;var i=N[0],a=N[1];W[0]=_;var c=N[0],u=N[1];O(o,q);var s=t.systeminstruction_createAccount(e.ptr,n.ptr,i,a,c,u,o.ptr);return B.__wrap(s)},e.createAccountWithSeed=function(e,n,r,_,o,i,a){O(e,q),O(n,q),O(r,q);var c=g(_,t.__wbindgen_malloc,t.__wbindgen_realloc),u=s;W[0]=o;var l=N[0],f=N[1];W[0]=i;var d=N[0],p=N[1];O(a,q);var b=t.systeminstruction_createAccountWithSeed(e.ptr,n.ptr,r.ptr,c,u,l,f,d,p,a.ptr);return B.__wrap(b)},e.assign=function(e,n){O(e,q),O(n,q);var r=t.systeminstruction_assign(e.ptr,n.ptr);return B.__wrap(r)},e.assignWithSeed=function(e,n,r,_){O(e,q),O(n,q);var o=g(r,t.__wbindgen_malloc,t.__wbindgen_realloc),i=s;O(_,q);var a=t.systeminstruction_assignWithSeed(e.ptr,n.ptr,o,i,_.ptr);return B.__wrap(a)},e.transfer=function(e,n,r){O(e,q),O(n,q),W[0]=r;var _=N[0],o=N[1],i=t.systeminstruction_transfer(e.ptr,n.ptr,_,o);return B.__wrap(i)},e.transferWithSeed=function(e,n,r,_,o,i){O(e,q),O(n,q);var a=g(r,t.__wbindgen_malloc,t.__wbindgen_realloc),c=s;O(_,q),O(o,q),W[0]=i;var u=N[0],l=N[1],f=t.systeminstruction_transferWithSeed(e.ptr,n.ptr,a,c,_.ptr,o.ptr,u,l);return B.__wrap(f)},e.allocate=function(e,n){O(e,q),W[0]=n;var r=N[0],_=N[1],o=t.systeminstruction_allocate(e.ptr,r,_);return B.__wrap(o)},e.allocateWithSeed=function(e,n,r,_,o){O(e,q),O(n,q);var i=g(r,t.__wbindgen_malloc,t.__wbindgen_realloc),a=s;W[0]=_;var c=N[0],u=N[1];O(o,q);var l=t.systeminstruction_allocateWithSeed(e.ptr,n.ptr,i,a,c,u,o.ptr);return B.__wrap(l)},e.createNonceAccount=function(e,n,r,_){O(e,q),O(n,q),O(r,q),W[0]=_;var o=N[0],i=N[1];return v(t.systeminstruction_createNonceAccount(e.ptr,n.ptr,r.ptr,o,i))},e.advanceNonceAccount=function(e,n){O(e,q),O(n,q);var r=t.systeminstruction_advanceNonceAccount(e.ptr,n.ptr);return B.__wrap(r)},e.withdrawNonceAccount=function(e,n,r,_){O(e,q),O(n,q),O(r,q),W[0]=_;var o=N[0],i=N[1],a=t.systeminstruction_withdrawNonceAccount(e.ptr,n.ptr,r.ptr,o,i);return B.__wrap(a)},e.authorizeNonceAccount=function(e,n,r){O(e,q),O(n,q),O(r,q);var _=t.systeminstruction_authorizeNonceAccount(e.ptr,n.ptr,r.ptr);return B.__wrap(_)},e}();e.exports.SystemInstruction=F,e.exports.__wbindgen_json_serialize=function(e,n){var r=u(n),_=g(JSON.stringify(void 0===r?null:r),t.__wbindgen_malloc,t.__wbindgen_realloc),o=s;w()[e/4+1]=o,w()[e/4+0]=_},e.exports.__wbindgen_object_drop_ref=function(e){v(e)},e.exports.__wbindgen_json_parse=function(e,n){return x(JSON.parse(m(e,n)))},e.exports.__wbg_instruction_new=function(e){return x(B.__wrap(e))},e.exports.__wbg_pubkey_new=function(e){return x(q.__wrap(e))},e.exports.__wbindgen_string_get=function(e,n){var r=u(n),_="string"===typeof r?r:void 0,o=A(_)?0:g(_,t.__wbindgen_malloc,t.__wbindgen_realloc),i=s;w()[e/4+1]=i,w()[e/4+0]=o},e.exports.__wbindgen_is_undefined=function(e){return void 0===u(e)},e.exports.__wbindgen_string_new=function(e,n){return x(m(e,n))},e.exports.__wbindgen_number_get=function(e,n){var r=u(n),_="number"===typeof r?r:void 0;(null!==k&&k.buffer===t.memory.buffer||(k=new Float64Array(t.memory.buffer)),k)[e/8+1]=A(_)?0:_,w()[e/4+0]=!A(_)},e.exports.__wbindgen_number_new=function(e){return x(e)},e.exports.__wbg_debug_104e10fa490af5d4=function(e){console.debug(u(e))},e.exports.__wbg_error_009e67eab9c16665=function(e){console.error(u(e))},e.exports.__wbg_info_44b510682aa2cf74=function(e){console.info(u(e))},e.exports.__wbg_log_4989d5b00a0cc297=function(e){console.log(u(e))},e.exports.__wbg_warn_f9b80af3c73d7193=function(e){console.warn(u(e))},e.exports.__wbg_new_693216e109162396=function(){return x(new Error)},e.exports.__wbg_stack_0ddaca5d1abfb52f=function(e,n){var r=g(u(n).stack,t.__wbindgen_malloc,t.__wbindgen_realloc),_=s;w()[e/4+1]=_,w()[e/4+0]=r},e.exports.__wbg_error_09919627ac0992f5=function(e,n){try{console.error(m(e,n))}finally{t.__wbindgen_free(e,n)}},e.exports.__wbg_new_949bbc1147195c4e=function(){return x(new Array)},e.exports.__wbindgen_is_function=function(e){return"function"===typeof u(e)},e.exports.__wbindgen_is_object=function(e){var n=u(e);return"object"===typeof n&&null!==n},e.exports.__wbg_next_c4151d46d5fa7097=function(e){return x(u(e).next)},e.exports.__wbg_next_7720502039b96d00=function(){return P((function(e){return x(u(e).next())}),arguments)},e.exports.__wbg_done_b06cf0578e89ff68=function(e){return u(e).done},e.exports.__wbg_value_e74a542443d92451=function(e){return x(u(e).value)},e.exports.__wbg_iterator_4fc4ce93e6b92958=function(){return x(Symbol.iterator)},e.exports.__wbg_get_4d0f21c2f823742e=function(){return P((function(e,n){return x(Reflect.get(u(e),u(n)))}),arguments)},e.exports.__wbg_call_888d259a5fefc347=function(){return P((function(e,n){return x(u(e).call(u(n)))}),arguments)},e.exports.__wbg_newwithlength_75ee2b96c288e6bc=function(e){return x(new Array(e>>>0))},e.exports.__wbg_set_1820441f7fb79aad=function(e,n,r){u(e)[n>>>0]=v(r)},e.exports.__wbg_isArray_eb7ad55f2da67dde=function(e){return Array.isArray(u(e))},e.exports.__wbg_push_284486ca27c6aa8b=function(e,n){return u(e).push(u(n))},e.exports.__wbg_values_364ae56c608e6824=function(e){return x(u(e).values())},e.exports.__wbg_buffer_397eaa4d72ee94dd=function(e){return x(u(e).buffer)},e.exports.__wbg_new_a7ce447f15ff496f=function(e){return x(new Uint8Array(u(e)))},e.exports.__wbg_set_969ad0a60e51d320=function(e,n,r){u(e).set(u(n),r>>>0)},e.exports.__wbg_length_1eb8fc608a0d4cdb=function(e){return u(e).length},e.exports.__wbg_instanceof_Uint8Array_08a1f3a179095e76=function(e){return u(e)instanceof Uint8Array},e.exports.__wbindgen_debug_string=function(e,n){var r=g(C(u(n)),t.__wbindgen_malloc,t.__wbindgen_realloc),_=s;w()[e/4+1]=_,w()[e/4+0]=r},e.exports.__wbindgen_throw=function(e,n){throw new Error(m(e,n))},e.exports.__wbindgen_rethrow=function(e){throw v(e)},e.exports.__wbindgen_memory=function(){return x(t.memory)};var J=r(53774).join("/","bridge_bg.wasm"),M=r(16477).readFileSync(J),R=new WebAssembly.Module(M),D=new WebAssembly.Instance(R,_);t=D.exports,e.exports.__wasm=t},53774:function(e,n,r){var t=r(54501);function _(e){if("string"!==typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function o(e,n){for(var r,t="",_=0,o=-1,i=0,a=0;a<=e.length;++a){if(a<e.length)r=e.charCodeAt(a);else{if(47===r)break;r=47}if(47===r){if(o===a-1||1===i);else if(o!==a-1&&2===i){if(t.length<2||2!==_||46!==t.charCodeAt(t.length-1)||46!==t.charCodeAt(t.length-2))if(t.length>2){var c=t.lastIndexOf("/");if(c!==t.length-1){-1===c?(t="",_=0):_=(t=t.slice(0,c)).length-1-t.lastIndexOf("/"),o=a,i=0;continue}}else if(2===t.length||1===t.length){t="",_=0,o=a,i=0;continue}n&&(t.length>0?t+="/..":t="..",_=2)}else t.length>0?t+="/"+e.slice(o+1,a):t=e.slice(o+1,a),_=a-o-1;o=a,i=0}else 46===r&&-1!==i?++i:i=-1}return t}var i={resolve:function(){for(var e,n="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var a;i>=0?a=arguments[i]:(void 0===e&&(e=t.cwd()),a=e),_(a),0!==a.length&&(n=a+"/"+n,r=47===a.charCodeAt(0))}return n=o(n,!r),r?n.length>0?"/"+n:"/":n.length>0?n:"."},normalize:function(e){if(_(e),0===e.length)return".";var n=47===e.charCodeAt(0),r=47===e.charCodeAt(e.length-1);return 0!==(e=o(e,!n)).length||n||(e="."),e.length>0&&r&&(e+="/"),n?"/"+e:e},isAbsolute:function(e){return _(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,n=0;n<arguments.length;++n){var r=arguments[n];_(r),r.length>0&&(void 0===e?e=r:e+="/"+r)}return void 0===e?".":i.normalize(e)},relative:function(e,n){if(_(e),_(n),e===n)return"";if((e=i.resolve(e))===(n=i.resolve(n)))return"";for(var r=1;r<e.length&&47===e.charCodeAt(r);++r);for(var t=e.length,o=t-r,a=1;a<n.length&&47===n.charCodeAt(a);++a);for(var c=n.length-a,u=o<c?o:c,s=-1,l=0;l<=u;++l){if(l===u){if(c>u){if(47===n.charCodeAt(a+l))return n.slice(a+l+1);if(0===l)return n.slice(a+l)}else o>u&&(47===e.charCodeAt(r+l)?s=l:0===l&&(s=0));break}var f=e.charCodeAt(r+l);if(f!==n.charCodeAt(a+l))break;47===f&&(s=l)}var d="";for(l=r+s+1;l<=t;++l)l!==t&&47!==e.charCodeAt(l)||(0===d.length?d+="..":d+="/..");return d.length>0?d+n.slice(a+s):(a+=s,47===n.charCodeAt(a)&&++a,n.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(_(e),0===e.length)return".";for(var n=e.charCodeAt(0),r=47===n,t=-1,o=!0,i=e.length-1;i>=1;--i)if(47===(n=e.charCodeAt(i))){if(!o){t=i;break}}else o=!1;return-1===t?r?"/":".":r&&1===t?"//":e.slice(0,t)},basename:function(e,n){if(void 0!==n&&"string"!==typeof n)throw new TypeError('"ext" argument must be a string');_(e);var r,t=0,o=-1,i=!0;if(void 0!==n&&n.length>0&&n.length<=e.length){if(n.length===e.length&&n===e)return"";var a=n.length-1,c=-1;for(r=e.length-1;r>=0;--r){var u=e.charCodeAt(r);if(47===u){if(!i){t=r+1;break}}else-1===c&&(i=!1,c=r+1),a>=0&&(u===n.charCodeAt(a)?-1===--a&&(o=r):(a=-1,o=c))}return t===o?o=c:-1===o&&(o=e.length),e.slice(t,o)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!i){t=r+1;break}}else-1===o&&(i=!1,o=r+1);return-1===o?"":e.slice(t,o)},extname:function(e){_(e);for(var n=-1,r=0,t=-1,o=!0,i=0,a=e.length-1;a>=0;--a){var c=e.charCodeAt(a);if(47!==c)-1===t&&(o=!1,t=a+1),46===c?-1===n?n=a:1!==i&&(i=1):-1!==n&&(i=-1);else if(!o){r=a+1;break}}return-1===n||-1===t||0===i||1===i&&n===t-1&&n===r+1?"":e.slice(n,t)},format:function(e){if(null===e||"object"!==typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,n){var r=n.dir||n.root,t=n.base||(n.name||"")+(n.ext||"");return r?r===n.root?r+t:r+e+t:t}("/",e)},parse:function(e){_(e);var n={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return n;var r,t=e.charCodeAt(0),o=47===t;o?(n.root="/",r=1):r=0;for(var i=-1,a=0,c=-1,u=!0,s=e.length-1,l=0;s>=r;--s)if(47!==(t=e.charCodeAt(s)))-1===c&&(u=!1,c=s+1),46===t?-1===i?i=s:1!==l&&(l=1):-1!==i&&(l=-1);else if(!u){a=s+1;break}return-1===i||-1===c||0===l||1===l&&i===c-1&&i===a+1?-1!==c&&(n.base=n.name=0===a&&o?e.slice(1,c):e.slice(a,c)):(0===a&&o?(n.name=e.slice(1,i),n.base=e.slice(1,c)):(n.name=e.slice(a,i),n.base=e.slice(a,c)),n.ext=e.slice(i,c)),a>0?n.dir=e.slice(0,a-1):o&&(n.dir="/"),n},sep:"/",delimiter:":",win32:null,posix:null};i.posix=i,e.exports=i}}]);
//# sourceMappingURL=589.0bc17e50.chunk.js.map