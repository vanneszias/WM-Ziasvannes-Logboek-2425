import{d as C,r as A,i as w,o as u,j as c,b as a,c as O,k as b,F as z,u as e,l as B,m as E,a as t,g as N,n as i,E as L,I as P,e as d,t as f,q as _,s as m,v as T,x as $,z as I,A as g,B as h,C as D,D as F}from"./index-o_nXWqzU.js";import{a as v}from"./axios-BsqOtiWN.js";const S=C({__name:"authors",setup(k){const p=async n=>{try{await v.post("https://wm.ziasserver.com/api/delete/author",{body:n.id}),l.value=l.value.filter(r=>r.id!==n.id)}catch(r){console.error("Error deleting author:",r)}},o=n=>{n.popup=!n.popup},l=A([]),x=async()=>{try{const n=await v.get("https://wm.ziasserver.com/api/list/authors");l.value=n.data}catch(n){console.error("Error fetching authors:",n)}};return w(()=>{x()}),(n,r)=>(u(),c(e(B),null,{default:a(()=>[(u(!0),O(z,null,b(l.value,s=>(u(),c(e(E),{key:s.id},{default:a(()=>[t(e(N),null,{default:a(()=>[t(e(i),{icon:e(L),slot:"start"},null,8,["icon"]),t(e(P),null,{default:a(()=>[d(f(s.firstName)+" "+f(s.lastName),1)]),_:2},1024)]),_:2},1024),t(e(_),{side:"start"},{default:a(()=>[t(e(m),{onClick:y=>p(s),color:"danger"},{default:a(()=>[t(e(i),{icon:e(T)},null,8,["icon"])]),_:2},1032,["onClick"])]),_:2},1024),t(e(_),{side:"end"},{default:a(()=>[t(e(m),{onClick:y=>o(s)},{default:a(()=>[t(e(i),{icon:e($)},null,8,["icon"])]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1}))}}),q=C({__name:"AuthorsPage",setup(k){return(p,o)=>(u(),c(e(F),null,{default:a(()=>[t(e(h),null,{default:a(()=>[t(e(I),null,{default:a(()=>[t(e(g),null,{default:a(()=>o[0]||(o[0]=[d("Authors")])),_:1})]),_:1})]),_:1}),t(e(D),{fullscreen:!0},{default:a(()=>[t(e(h),{collapse:"condense"},{default:a(()=>[t(e(I),null,{default:a(()=>[t(e(g),{size:"large"},{default:a(()=>o[1]||(o[1]=[d("Authors")])),_:1})]),_:1})]),_:1}),t(S)]),_:1})]),_:1}))}});export{q as default};