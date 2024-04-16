import{u as t,c as o,h as n,j as e}from"./index-Dw4hRFvX.js";import{s as c,T as m,a as p,b as l,c as h}from"./TeacherCard-CxlpIFua.js";const x="/learn-lingo/assets/empty-favorite-S6TsBk7o.svg",d=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1312px;
  margin: 0 auto;
  padding: 100px 0;
`,g=t.img`
  border-radius: 50%;
  width: 520px;
`,u=t.h2`
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-top: 20px;
`,v=()=>{const a=o(c),i=n.currentUser,r=a.filter(s=>s.owner===i.uid);return e.jsx(e.Fragment,{children:r.length>0?e.jsx(m,{children:e.jsx(p,{children:e.jsx(l,{children:r.map(s=>e.jsx(h,{teacher:s,owner:s.owner},s.id))})})}):e.jsx(e.Fragment,{children:e.jsxs(d,{children:[e.jsx(g,{src:x,alt:"empty"}),e.jsx(u,{children:"Oops! It looks like this section is empty at the moment..."})]})})})};export{v as default};
