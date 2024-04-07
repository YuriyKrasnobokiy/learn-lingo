import{u as r,r as s,a as g,o as m,j as o,d as b}from"./index-BpVsz4pD.js";const f="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let d=(e=21)=>{let a="",c=crypto.getRandomValues(new Uint8Array(e));for(;e--;)a+=f[c[e]&63];return a};const v=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${e=>e.theme.colors.teachersBGColor};
`,j=r.div`
  position: relative;
`,C=r.li`
  background-color: ${e=>e.theme.colors.teacherCardBGC};
  border: 1px solid ${e=>e.theme.colors.teacherCardBorderColor};
`,w=r.img`
  width: 96px;
  border-radius: 100%;
  border: 3px solid ${e=>e.theme.colors.thirdAccentColor};
  padding: 12px;
`,y=r.img`
  top: 20px;
  left: 86px;
  position: absolute;
`,A=r.button`
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
`,k="data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='6'%20cy='6'%20r='6'%20fill='white'/%3e%3ccircle%20cx='6'%20cy='6'%20r='4'%20fill='%2338CD3E'/%3e%3c/svg%3e",T=()=>{const[e,a]=s.useState([]),[c,h]=s.useState([]),[n,u]=s.useState(4);s.useEffect(()=>{const t=g(b),l=m(t,p=>{const i=p.val();i&&(console.log("Updated data:",i),a(Object.values(i)))});return()=>{l()}},[]),s.useEffect(()=>{h(e.slice(0,n))},[e,n]);const x=()=>{u(t=>t+4)};return o.jsxs(v,{children:[o.jsx("ul",{children:c.map(t=>o.jsxs(C,{children:[o.jsxs(j,{children:[o.jsx(w,{src:t.avatar_url,alt:"avatar"}),o.jsx(y,{src:k,alt:"online"})]}),o.jsxs("h2",{children:[t.name," ",t.surname]}),o.jsx("ul",{children:t.languages.map(l=>o.jsx("li",{children:l},d()))})]},d()))}),n<=c.length&&o.jsx(A,{type:"button",onClick:x,children:"Load More"})]})};export{T as default};
