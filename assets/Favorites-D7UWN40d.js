import{u as s,c as o,h as n,j as e}from"./index-O-LMkEQx.js";import{s as c,T as m,a as l}from"./TeacherCard-CbTYhHxG.js";const p="/learn-lingo/assets/empty-favorite-S6TsBk7o.svg",x=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1312px;
  margin: 0 auto;
  padding: 100px 0;
`,d=s.img`
  border-radius: 50%;
  width: 520px;
`,h=s.h2`
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-top: 20px;
`,f=()=>{const i=o(c),a=n.currentUser,r=i.filter(t=>t.owner===a.uid);return e.jsx(e.Fragment,{children:r.length>0?e.jsx(m,{children:e.jsx("ul",{children:r.map(t=>e.jsx(l,{teacher:t,owner:t.owner},t.id))})}):e.jsx(e.Fragment,{children:e.jsxs(x,{children:[e.jsx(d,{src:p,alt:"empty"}),e.jsx(h,{children:"Oops! It looks like this section is empty at the moment..."})]})})})};export{f as default};
