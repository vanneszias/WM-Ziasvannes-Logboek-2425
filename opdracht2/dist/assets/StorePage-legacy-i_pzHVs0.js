System.register(["./index-legacy-CobQT4M9.js","./ProductStorage-legacy-BQo4W4OZ.js","./_plugin-vue_export-helper-legacy-DgAO6S8O.js"],(function(e,t){"use strict";var l,u,o,n,d,r,a,c,i,_,p,s,f,g,m,v,y,P,S,I;return{setters:[e=>{l=e.d,u=e.I,o=e.a,n=e.b,d=e.r,r=e.o,a=e.c,c=e.e,i=e.w,_=e.f,p=e.F,s=e.g,f=e.u,g=e.h,m=e.i,v=e.j,y=e.k,P=e.l},e=>{S=e.P},e=>{I=e._}],execute:function(){const t=l({components:{IonInput:u,IonItem:o,IonList:n},methods:{async addProduct(){var e,t,l;const u={name:null===(e=document.querySelector("#product__name"))||void 0===e?void 0:e.value,price:parseFloat(null===(t=document.querySelector("#product__price"))||void 0===t?void 0:t.value),category:null===(l=document.querySelector("#product__category"))||void 0===l?void 0:l.value};S.addProduct(u)}}}),h=I(t,[["render",function(e,t,l,u,o,n){const s=d("ion-input"),f=d("ion-item"),g=d("ion-select-option"),m=d("ion-select"),v=d("ion-list"),y=d("ion-button");return r(),a(p,null,[c(v,null,{default:i((()=>[c(f,null,{default:i((()=>[c(s,{type:"text",placeholder:"Product name",id:"product__name"})])),_:1}),c(f,null,{default:i((()=>[c(s,{type:"number",placeholder:"Product price",id:"product__price"})])),_:1}),c(f,null,{default:i((()=>[c(m,{label:"Category",id:"product__category"},{default:i((()=>[c(g,{value:"fruit"},{default:i((()=>t[0]||(t[0]=[_("Fruit")]))),_:1}),c(g,{value:"groenten"},{default:i((()=>t[1]||(t[1]=[_("Groenten")]))),_:1})])),_:1})])),_:1})])),_:1}),c(y,{onClick:e.addProduct},{default:i((()=>t[2]||(t[2]=[_("Add product")]))),_:1},8,["onClick"])],64)}]]);e("default",l({__name:"StorePage",setup:e=>(e,t)=>(r(),s(f(P),null,{default:i((()=>[c(f(v),null,{default:i((()=>[c(f(g),null,{default:i((()=>[c(f(m),null,{default:i((()=>t[0]||(t[0]=[_("Store")]))),_:1})])),_:1})])),_:1}),c(f(y),{fullscreen:!0},{default:i((()=>[c(f(v),{collapse:"condense"},{default:i((()=>[c(f(g),null,{default:i((()=>[c(f(m),{size:"large"},{default:i((()=>t[1]||(t[1]=[_("Store")]))),_:1})])),_:1})])),_:1}),c(h)])),_:1})])),_:1}))}))}}}));
