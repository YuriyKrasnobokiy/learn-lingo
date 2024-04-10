import{u as t,G as g,j as e,F as $,E as R,c as F,a as x,b as M,r as a,M as z,d as S,e as A,f as E,g as W,t as _,h as P,o as G,i as H}from"./index-KUIj6dHJ.js";import{s as q}from"./teachersSelectors-D-WLWeuv.js";const N=t.div`
  display: flex;
  max-width: 1312px;
  flex-direction: column;
  padding: 96px 0;
  align-items: center;
  margin: 0 auto;
  background-color: ${o=>o.theme.colors.teachersBGColor};
`,O=t.button`
  margin: 0;
  padding: 16px 48px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.55;
  color: ${o=>o.theme.colors.teachersButtonColor};
  background-color: ${o=>o.theme.colors.accentColor};
  transition: background-color 0.3s linear;
  margin-top: 64px;

  &:hover {
    background-color: ${o=>o.theme.colors.secondAccentColor};
  }
`,Z=t.li`
  max-width: 1136px;
  display: flex;
  border-radius: 24px;
  padding: 24px;
  background-color: ${o=>o.theme.colors.teacherCardBGC};
  &:not(:last-child) {
    margin-bottom: 32px;
  }
`,V=t.div`
  position: relative;
  margin-right: 48px;
`,D=t.img`
  width: 96px;
  border-radius: 100%;
  border: 3px solid ${o=>o.theme.colors.thirdAccentColor};
  padding: 12px;
`,U=t.img`
  top: 20px;
  left: 86px;
  position: absolute;
`,Y=t.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${o=>o.theme.colors.teacherPretitleColor};
  margin-right: 176px;
`,J=t.div`
  display: flex;
  margin-bottom: 8px;
  align-items: center;
`,K=t.ul`
  display: flex;
  margin-right: 64px;
`,p=t.li`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;

  &:not(:last-child) {
    padding-right: 16px;
    margin-right: 16px;
    border-right: 1px solid
      ${o=>o.theme.colors.teachersLiBorderColor};
  }
`,w=t.div`
  display: flex;
  align-items: center;
`,Q=t.img`
  margin-right: 12px;
`,X=t.span`
  color: ${o=>o.theme.colors.teacherPriceColor};
`,ee=t.button`
  font-size: 26px;
  background-color: transparent;
  color: currentColor;
  transition: color 0.3s linear;

  &:hover {
    color: ${o=>o.theme.colors.teacherHeartHoverColor};
  }
`,oe=t.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  color: ${o=>o.theme.colors.textColor};
  margin-bottom: 32px;
`,te=t.ul`
  margin-bottom: 16px;
`,v=t.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`,C=t.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`,ne=t.span`
  text-decoration: underline;
`,b=t.span`
  color: ${o=>o.theme.colors.teacherInfoTextAccent};
`,re=t.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  margin: 0;
  background-color: transparent;
  transition: color 0.3s linear;
  margin-bottom: 32px;
  color: ${o=>o.theme.colors.textColor};

  &:hover {
    color: ${o=>o.theme.colors.secondAccentColor};
  }
`,se="data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='6'%20cy='6'%20r='6'%20fill='white'/%3e%3ccircle%20cx='6'%20cy='6'%20r='4'%20fill='%2338CD3E'/%3e%3c/svg%3e";function ie(o){return g({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(o)}const T="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_44_287)'%3e%3cpath%20d='M6.20021%204.69703L8%201.28579L9.79979%204.69703C9.95896%204.9987%2010.2491%205.20947%2010.5851%205.26762L14.3856%205.92519L11.6975%208.69103C11.4598%208.93563%2011.3489%209.27666%2011.3975%209.61427L11.9465%2013.4319L8.48537%2011.7301C8.17929%2011.5795%207.82071%2011.5795%207.51463%2011.7301L4.05348%2013.4319L4.6025%209.61427C4.65105%209.27666%204.54024%208.93563%204.30252%208.69103L1.6144%205.92519L5.41486%205.26762C5.75095%205.20947%206.04104%204.9987%206.20021%204.69703Z'%20fill='%23FFC531'%20stroke='%23FFC531'%20stroke-width='1.2'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_44_287'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";function le(o){return g({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M14.88 4.78079C14.7993 4.46498 14.6748 4.16202 14.51 3.88077C14.3518 3.58819 14.1493 3.3217 13.91 3.09073C13.563 2.74486 13.152 2.46982 12.7 2.28079C11.7902 1.90738 10.7698 1.90738 9.85999 2.28079C9.43276 2.46163 9.04027 2.71541 8.70002 3.03079L8.65003 3.09073L8.00001 3.74075L7.34999 3.09073L7.3 3.03079C6.95975 2.71541 6.56726 2.46163 6.14002 2.28079C5.23018 1.90738 4.20984 1.90738 3.3 2.28079C2.84798 2.46982 2.43706 2.74486 2.09004 3.09073C1.85051 3.32402 1.64514 3.59002 1.48002 3.88077C1.32258 4.1644 1.20161 4.46682 1.12 4.78079C1.03522 5.10721 0.994861 5.44358 1.00001 5.78079C1.00053 6.09791 1.04084 6.41365 1.12 6.72073C1.20384 7.03078 1.32472 7.32961 1.48002 7.61075C1.64774 7.89975 1.85285 8.16542 2.09004 8.40079L8.00001 14.3108L13.91 8.40079C14.1471 8.16782 14.3492 7.90169 14.51 7.61075C14.6729 7.33211 14.7974 7.03272 14.88 6.72073C14.9592 6.41365 14.9995 6.09791 15 5.78079C15.0052 5.44358 14.9648 5.10721 14.88 4.78079Z"},child:[]}]})(o)}function ae(o){return g({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M14.88 4.78a3.489 3.489 0 0 0-.37-.9 3.24 3.24 0 0 0-.6-.79 3.78 3.78 0 0 0-1.21-.81 3.74 3.74 0 0 0-2.84 0 4 4 0 0 0-1.16.75l-.05.06-.65.65-.65-.65-.05-.06a4 4 0 0 0-1.16-.75 3.74 3.74 0 0 0-2.84 0 3.78 3.78 0 0 0-1.21.81 3.55 3.55 0 0 0-.97 1.69 3.75 3.75 0 0 0-.12 1c0 .317.04.633.12.94a4 4 0 0 0 .36.89 3.8 3.8 0 0 0 .61.79L8 14.31l5.91-5.91c.237-.233.44-.5.6-.79A3.578 3.578 0 0 0 15 5.78a3.747 3.747 0 0 0-.12-1zm-1 1.63a2.69 2.69 0 0 1-.69 1.21l-5.21 5.2-5.21-5.2a2.9 2.9 0 0 1-.44-.57 3 3 0 0 1-.27-.65 3.25 3.25 0 0 1-.08-.69A3.36 3.36 0 0 1 2.06 5a2.8 2.8 0 0 1 .27-.65c.12-.21.268-.4.44-.57a2.91 2.91 0 0 1 .89-.6 2.8 2.8 0 0 1 2.08 0c.33.137.628.338.88.59l1.36 1.37 1.36-1.37a2.72 2.72 0 0 1 .88-.59 2.8 2.8 0 0 1 2.08 0c.331.143.633.347.89.6.174.165.32.357.43.57a2.69 2.69 0 0 1 .35 1.34 2.6 2.6 0 0 1-.06.72h-.03z"},child:[]}]})(o)}const ce=t.div`
  max-width: 964px;
`,de=t.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 32px;
`,he=t.ul`
  margin-bottom: 32px;
`,xe=t.li`
  &:not(:last-child) {
    margin-bottom: 32px;
  }
`,pe=t.div`
  display: flex;
  margin-bottom: 16px;
`,me=t.div`
  font-size: 44px;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  background-color: transparent;
  margin-right: 12px;
`,ge=t.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #8a8a89;
`,ue=t.div`
  display: flex;
`,fe=t.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
  margin-left: 8px;
`,je=t.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`,ve=t.button`
  margin: 0;
  margin-top: 32px;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.55;
  border-radius: 12px;
  padding: 16px 48px;
  background-color: ${o=>o.theme.colors.trialLessonBtnBGC};
  transition: background-color 0.3s linear;

  &:hover {
    background-color: ${o=>o.theme.colors.trialLessonBtnBGHover};
  }
`,Ce="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let y=(o=21)=>{let n="",i=crypto.getRandomValues(new Uint8Array(o));for(;o--;)n+=Ce[i[o]&63];return n};function be(o){return g({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor"},child:[]}]})(o)}const Le=t.ul`
  display: flex;
`,we=t.li`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  border-radius: 35px;
  padding: 8px 12px;
  border: ${o=>o.theme.colors.levelsListItemBorder};

  &:not(:last-child) {
    margin-right: 8px;
  }

  &:first-child {
    background-color: ${o=>o.theme.colors.levelsListItemBGC};
  }
`,k=({teacher:o})=>e.jsx(Le,{children:o.levels.map(n=>e.jsxs(we,{children:["#",n]},y()))}),Te=t.h2`
  font-weight: 500;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
`,ye=t.p`
  font-size: 16px;
  line-height: 1.37;
  color: ${o=>o.theme.colors.trialLessonDescrColor};
  margin-bottom: 20px;
`,ke=t.div`
  display: flex;
  margin-bottom: 40px;
`,Be=t.img`
  border-radius: 50%;
  height: 44px;
  width: 44px;
  margin-right: 14px;
`,Ie=t.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: ${o=>o.theme.colors.teacherNameTextColor};
  margin-bottom: 4px;
`,$e=t.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`,Re=t.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.33;
  margin-bottom: 20px;
`,Fe=t($)`
  display: flex;
  flex-direction: column;
`,Me=t.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`,c=t.label`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 1.37;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`,d=t.input`
  margin: 0;
  margin-right: 8px;
  width: 24px;
  height: 24px;
`,ze=t.div`
  max-width: 438px;
  margin-bottom: 40px;
`,L=t.input`
  font-size: 16px;
  line-height: 1.375;
  width: 100%;
  max-width: 400px;
  border: ${o=>o.theme.colors.trialLessonTextInputBorder};
  border-radius: 12px;
  padding: 16px 18px;
  color: ${o=>o.theme.colors.modalTrialTextInputColor};

  &::placeholder {
    color: ${o=>o.theme.colors.modalTrialTextInputColor};
  }

  &:not(:last-child) {
    margin-bottom: 18px;
  }
`,Se=t.button`
  margin: 0;
  width: 100%;
  border-radius: 12px;
  padding: 16px;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.55;
  color: ${o=>o.theme.colors.modalTrialLessonBtnColor};
  background-color: ${o=>o.theme.colors.modalTrialLessonBtnBGC};

  &:hover {
    background-color: ${o=>o.theme.colors.modalTrialLessonBtnBGHover};
  }
`,m=t(R)`
  color: ${o=>o.theme.colors.ErrorMessageColor};
`,Ae=F().shape({option:x().required("Please select an option"),name:x().min(2).required("Required"),email:x().email("Invalid email").required("Required"),phone:x().min(10,"Invalid phone number").required("Required")}),Ee=({openModal:o})=>{const n={option:"",name:"",email:"",phone:""},i=(l,{resetForm:s})=>{console.log("Form values: ",l),s(),o()};return e.jsxs(e.Fragment,{children:[e.jsx(Re,{children:"What is your main reason for learning English?"}),e.jsx(M,{initialValues:n,validationSchema:Ae,onSubmit:i,children:e.jsxs(Fe,{children:[e.jsxs(Me,{children:[e.jsx(m,{component:"p",name:"option"}),e.jsxs(c,{children:[e.jsx(d,{type:"radio",name:"option",value:"Career and business"}),"Career and business"]}),e.jsxs(c,{children:[e.jsx(d,{type:"radio",name:"option",value:"Lesson for kids"}),"Lesson for kids"]}),e.jsxs(c,{children:[e.jsx(d,{type:"radio",name:"option",value:"Living abroad"}),"Living abroad"]}),e.jsxs(c,{children:[e.jsx(d,{type:"radio",name:"option",value:"Exams and coursework"}),"Exams and coursework"]}),e.jsxs(c,{children:[e.jsx(d,{type:"radio",name:"option",value:"Culture, travel or hobby"}),"Culture, travel or hobby"]})]}),e.jsxs(ze,{children:[e.jsx(m,{component:"p",name:"name"}),e.jsx(L,{type:"text",name:"name",placeholder:"Full Name"}),e.jsx(m,{component:"p",name:"email"}),e.jsx(L,{type:"email",name:"email",placeholder:"Email"}),e.jsx(m,{component:"p",name:"phone"}),e.jsx(L,{type:"tel",name:"phone",placeholder:"Phone number"})]}),e.jsx(Se,{type:"submit",children:"Book"})]})})]})},We=({teacher:o,openModal:n})=>e.jsxs(e.Fragment,{children:[e.jsx(Te,{children:"Book trial lesson"}),e.jsx(ye,{children:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."}),e.jsxs(ke,{children:[e.jsx(Be,{src:o.avatar_url,alt:"avatar"}),e.jsxs("div",{children:[e.jsx(Ie,{children:"Your teacher"}),e.jsxs($e,{children:[o.name," ",o.surname]})]})]}),e.jsx(Ee,{openModal:n})]}),_e=({teacher:o})=>{const[n,i]=a.useState(!1),l=()=>{i(s=>!s)};return e.jsx(e.Fragment,{children:e.jsxs(ce,{children:[e.jsx(de,{children:o.experience}),e.jsx(he,{children:o.reviews.map(s=>e.jsxs(xe,{children:[e.jsxs(pe,{children:[e.jsx(me,{children:e.jsx(be,{})}),e.jsxs("div",{children:[e.jsx(ge,{children:s.reviewer_name}),e.jsxs(ue,{children:[e.jsx("img",{src:T,alt:"star"}),e.jsx(fe,{children:s.reviewer_rating.toFixed(1)})]})]})]}),e.jsx(je,{children:s.comment})]},y()))}),e.jsx(k,{teacher:o}),e.jsx(ve,{type:"button",onClick:l,children:"Book trial lesson"}),n&&e.jsx(z,{openModal:l,children:e.jsx(We,{teacher:o})})]})})},Pe=({teacher:o})=>{const[n,i]=a.useState(null),l=S(),h=A(q).includes(o.id),u=r=>{l(h?E(r):W(r)),l(_(r.id))},f=r=>{i(r===n?null:r)};return e.jsx(e.Fragment,{children:e.jsxs(Z,{children:[e.jsxs(V,{children:[e.jsx(D,{src:o.avatar_url,alt:"avatar"}),e.jsx(U,{src:se,alt:"online"})]}),e.jsxs("div",{children:[e.jsxs(J,{children:[e.jsx(Y,{children:"Langueges"}),e.jsxs(K,{className:"teacher-info",children:[e.jsx(p,{children:e.jsxs(w,{children:[e.jsx(ie,{style:{marginRight:"12px"}}),"Lessons online"]})}),e.jsxs(p,{children:["Lessons done: ",o.lessons_done]}),e.jsx(p,{children:e.jsxs(w,{children:[e.jsx(Q,{src:T,alt:"star"}),"Rating: ",o.rating]})}),e.jsxs(p,{children:["Price / 1 hour:"," ",e.jsxs(X,{children:[o.price_per_hour,"$"]})]})]}),e.jsx(ee,{type:"button",onClick:()=>u(o),children:h?e.jsx(le,{}):e.jsx(ae,{})})]}),e.jsxs(oe,{children:[o.name," ",o.surname]}),e.jsxs(te,{children:[e.jsx(v,{children:e.jsxs(C,{children:[e.jsx(b,{children:"Speaks: "}),e.jsx(ne,{children:o.languages.join(", ")})]})}),e.jsx(v,{children:e.jsxs(C,{children:[e.jsx(b,{children:"Lesson Info: "}),o.lesson_info]})}),e.jsx(v,{children:e.jsxs(C,{children:[e.jsx(b,{children:"Conditions: "}),o.conditions]})})]}),n!==o.id&&e.jsxs(e.Fragment,{children:[e.jsx(re,{type:"button",onClick:()=>f(o.id),children:"Read more"}),e.jsx(k,{teacher:o})]}),n===o.id&&e.jsx(_e,{teacher:o})]})]},o.id)})},qe=()=>{const[o,n]=a.useState([]),[i,l]=a.useState([]),[s,h]=a.useState(4),u=4;a.useEffect(()=>{const r=P(H),B=G(r,I=>{const j=I.val();j&&(console.log("Updated data:",j),n(Object.values(j)))});return()=>{B()}},[]),a.useEffect(()=>{l(o.slice(0,s))},[o,s]);const f=()=>{h(r=>r+u)};return e.jsx(e.Fragment,{children:e.jsxs(N,{children:[e.jsx("ul",{children:i.map(r=>e.jsx(Pe,{teacher:r},r.id))}),s<=i.length&&e.jsx(O,{type:"button",onClick:f,children:"Load More"})]})})};export{qe as default};
