import{u as s,c as o,h as n,j as e}from"./index-CwvqhJLA.js";import{s as c,T as m,a as p,b as l}from"./TeacherCard-WW3S_phS.js";const h="/learn-lingo/assets/empty-favorite-S6TsBk7o.svg",x=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1312px;
  margin: 0 auto;
  padding: 100px 0;
`,d=s.img`
  border-radius: 50%;
  width: 520px;
`,g=s.h2`
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-top: 20px;
`,j=()=>{const a=o(c),i=n.currentUser,r=a.filter(t=>t.owner===i.uid);return e.jsx(e.Fragment,{children:r.length>0?e.jsx(m,{children:e.jsx(p,{children:r.map(t=>e.jsx(l,{teacher:t,owner:t.owner},t.id))})}):e.jsx(e.Fragment,{children:e.jsxs(x,{children:[e.jsx(d,{src:h,alt:"empty"}),e.jsx(g,{children:"Oops! It looks like this section is empty at the moment..."})]})})})};export{j as default};
