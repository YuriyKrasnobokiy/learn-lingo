import{u as r,r as l,a as u,o as x,j as o,d as p}from"./index-J_wLJHvM.js";const g="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let i=(e=21)=>{let s="",n=crypto.getRandomValues(new Uint8Array(e));for(;e--;)s+=g[n[e]&63];return s};const m=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${e=>e.theme.colors.teachersBGColor};
`,b=r.div`
  position: relative;
`,f=r.li`
  background-color: ${e=>e.theme.colors.teacherCardBGC};
  border: 1px solid ${e=>e.theme.colors.teacherCardBorderColor};
`,v=r.img`
  width: 96px;
  border-radius: 100%;
  border: 3px solid ${e=>e.theme.colors.thirdAccentColor};
  padding: 12px;
`,j=r.img`
  top: 20px;
  left: 86px;
  position: absolute;
`,w=r.button`
  margin: 0;
  padding: 16px 48px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.55;
  color: ${e=>e.theme.colors.teachersButtonColor};
  background-color: ${e=>e.theme.colors.accentColor};
  transition: background-color 0.3s linear;

  &:hover {
    background-color: ${e=>e.theme.colors.secondAccentColor};
  }
`,C="data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='6'%20cy='6'%20r='6'%20fill='white'/%3e%3ccircle%20cx='6'%20cy='6'%20r='4'%20fill='%2338CD3E'/%3e%3c/svg%3e",A=()=>{const[e,s]=l.useState([]),[n,d]=l.useState(!1);return l.useEffect(()=>{const t=u(p),a=x(t,h=>{const c=h.val();c&&(console.log("Updated data:",c),s(Object.values(c)))});return()=>{a(),d(!1)}},[]),o.jsxs(m,{children:[o.jsx("ul",{children:e.slice(0,4).map(t=>o.jsxs(f,{children:[o.jsxs(b,{children:[o.jsx(v,{src:t.avatar_url,alt:"avatar"}),o.jsx(j,{src:C,alt:"online"})]}),o.jsxs("h2",{children:[t.name," ",t.surname]}),o.jsx("ul",{children:t.languages.map(a=>o.jsx("li",{children:a},i()))})]},i()))}),o.jsx(w,{type:"button",children:"Load More"})]})};export{A as default};
