import{_ as a,a as i,b as p}from"./assertThisInitialized-yxL75rf1.js";function c(t){try{return Function.toString.call(t).indexOf("[native code]")!==-1}catch{return typeof t=="function"}}function f(t,e,o){if(a())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,e);var n=new(t.bind.apply(t,r));return o&&i(n,o.prototype),n}function u(t){var e=typeof Map=="function"?new Map:void 0;return u=function(r){if(r===null||!c(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(e!==void 0){if(e.has(r))return e.get(r);e.set(r,n)}function n(){return f(r,arguments,p(this).constructor)}return n.prototype=Object.create(r.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),i(n,r)},u(t)}export{u as _};
