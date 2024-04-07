import{u as o,r as n,a as L,o as b,j as e,d as k}from"./index-ZT5HD0Oz.js";const T="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let p=(t=21)=>{let r="",i=crypto.getRandomValues(new Uint8Array(t));for(;t--;)r+=T[i[t]&63];return r};const y=o.div`
  display: flex;
  max-width: 1312px;
  flex-direction: column;
  padding: 96px 0;
  align-items: center;
  margin: 0 auto;
  background-color: ${t=>t.theme.colors.teachersBGColor};
`,I=o.li`
  max-width: 1136px;
  display: flex;
  border-radius: 24px;
  padding: 24px;
  background-color: ${t=>t.theme.colors.teacherCardBGC};
  &:not(:last-child) {
    margin-bottom: 32px;
  }
`,$=o.div`
  position: relative;
  margin-right: 48px;
`,B=o.img`
  width: 96px;
  border-radius: 100%;
  border: 3px solid ${t=>t.theme.colors.thirdAccentColor};
  padding: 12px;
`,S=o.img`
  top: 20px;
  left: 86px;
  position: absolute;
`,A=o.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${t=>t.theme.colors.teacherPretitleColor};
  margin-right: 180px;
`,P=o.div`
  display: flex;
  margin-bottom: 8px;
`,_=o.ul`
  display: flex;
  margin-right: 64px;
`,c=o.li`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;

  &:not(:last-child) {
    padding-right: 16px;
    margin-right: 16px;
    border-right: 1px solid
      ${t=>t.theme.colors.teachersLiBorderColor};
  }
`,m=o.div`
  display: flex;
`,C=o.img`
  margin-right: 12px;
`,M=o.span`
  color: ${t=>t.theme.colors.teacherPriceColor};
`,V=o.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
`,F=o.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  color: ${t=>t.theme.colors.textColor};
  margin-bottom: 32px;
`,H=o.ul`
  margin-bottom: 16px;
`,h=o.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`,x=o.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`,R=o.span`
  text-decoration: underline;
`,g=o.span`
  color: ${t=>t.theme.colors.teacherInfoTextAccent};
`,z=o.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  margin: 0;
  background-color: transparent;
  transition: color 0.3s linear;
  margin-bottom: 32px;
  color: ${t=>t.theme.colors.textColor};

  &:hover {
    color: ${t=>t.theme.colors.secondAccentColor};
  }
`,E=o.ul`
  display: flex;
`,W=o.li`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  border-radius: 35px;
  padding: 8px 12px;
  border: ${t=>t.theme.colors.levelsListItemBorder};

  &:not(:last-child) {
    margin-right: 8px;
  }

  &:first-child {
    background-color: ${t=>t.theme.colors.levelsListItemBGC};
    /* border: 1px solid transparent; */
  }
`,Z=o.button`
  margin: 0;
  padding: 16px 48px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.55;
  color: ${t=>t.theme.colors.teachersButtonColor};
  background-color: ${t=>t.theme.colors.accentColor};
  transition: background-color 0.3s linear;
  margin-top: 64px;

  &:hover {
    background-color: ${t=>t.theme.colors.secondAccentColor};
  }
`,G="data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='6'%20cy='6'%20r='6'%20fill='white'/%3e%3ccircle%20cx='6'%20cy='6'%20r='4'%20fill='%2338CD3E'/%3e%3c/svg%3e",O="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.6667%204.13333C14.6667%203.3866%2014.6667%203.01323%2014.5213%202.72801C14.3935%202.47713%2014.1895%202.27316%2013.9387%202.14532C13.6534%202%2013.2801%202%2012.5333%202H12.2667C10.7732%202%2010.0265%202%209.45603%202.29065C8.95426%202.54631%208.54631%202.95426%208.29065%203.45603C8%204.02646%208%204.77319%208%206.26667V14L8.0667%2013.8999C8.5298%2013.2053%208.76135%2012.858%209.06727%2012.6065C9.33809%2012.3839%209.65016%2012.2169%209.9856%2012.1151C10.3645%2012%2010.7819%2012%2011.6168%2012H12.5333C13.2801%2012%2013.6534%2012%2013.9387%2011.8547C14.1895%2011.7268%2014.3935%2011.5229%2014.5213%2011.272C14.6667%2010.9868%2014.6667%2010.6134%2014.6667%209.86667V4.13333Z'%20stroke='black'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M1.33325%204.13333C1.33325%203.3866%201.33325%203.01323%201.47858%202.72801C1.60641%202.47713%201.81038%202.27316%202.06126%202.14532C2.34648%202%202.71985%202%203.46659%202H3.73325C5.22673%202%205.97346%202%206.54389%202.29065C7.04566%202.54631%207.45361%202.95426%207.70927%203.45603C7.99992%204.02646%207.99992%204.77319%207.99992%206.26667V14L7.93322%2013.8999C7.47012%2013.2053%207.23857%2012.858%206.93265%2012.6065C6.66182%2012.3839%206.34976%2012.2169%206.01432%2012.1151C5.63542%2012%205.21799%2012%204.38313%2012H3.46659C2.71985%2012%202.34648%2012%202.06126%2011.8547C1.81038%2011.7268%201.60641%2011.5229%201.47858%2011.272C1.33325%2010.9868%201.33325%2010.6134%201.33325%209.86667V4.13333Z'%20stroke='black'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",U="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_44_287)'%3e%3cpath%20d='M6.20021%204.69703L8%201.28579L9.79979%204.69703C9.95896%204.9987%2010.2491%205.20947%2010.5851%205.26762L14.3856%205.92519L11.6975%208.69103C11.4598%208.93563%2011.3489%209.27666%2011.3975%209.61427L11.9465%2013.4319L8.48537%2011.7301C8.17929%2011.5795%207.82071%2011.5795%207.51463%2011.7301L4.05348%2013.4319L4.6025%209.61427C4.65105%209.27666%204.54024%208.93563%204.30252%208.69103L1.6144%205.92519L5.41486%205.26762C5.75095%205.20947%206.04104%204.9987%206.20021%204.69703Z'%20fill='%23FFC531'%20stroke='%23FFC531'%20stroke-width='1.2'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_44_287'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",D="data:image/svg+xml,%3csvg%20width='26'%20height='26'%20viewBox='0%200%2026%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.5766%204.99419C22.0233%204.44061%2021.3663%204.00147%2020.6433%203.70187C19.9202%203.40226%2019.1452%203.24805%2018.3625%203.24805C17.5798%203.24805%2016.8047%203.40226%2016.0817%203.70187C15.3586%204.00147%2014.7016%204.44061%2014.1483%204.99419L13%206.14252L11.8516%204.99419C10.734%203.87652%209.21809%203.24863%207.63747%203.24863C6.05685%203.24863%204.54097%203.87652%203.4233%204.99419C2.30563%206.11186%201.67773%207.62774%201.67773%209.20836C1.67773%2010.789%202.30563%2012.3049%203.4233%2013.4225L4.57163%2014.5709L13%2022.9992L21.4283%2014.5709L22.5766%2013.4225C23.1302%2012.8692%2023.5693%2012.2122%2023.869%2011.4892C24.1686%2010.7661%2024.3228%209.99105%2024.3228%209.20836C24.3228%208.42566%2024.1686%207.65064%2023.869%206.92756C23.5693%206.20448%2023.1302%205.54751%2022.5766%204.99419Z'%20stroke='%23121417'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",q=()=>{const[t,r]=n.useState([]),[i,u]=n.useState([]),[l,f]=n.useState(4),j=4;n.useEffect(()=>{const s=L(k),a=b(s,v=>{const d=v.val();d&&(console.log("Updated data:",d),r(Object.values(d)))});return()=>{a()}},[]),n.useEffect(()=>{u(t.slice(0,l))},[t,l]);const w=()=>{f(s=>s+j)};return e.jsx(e.Fragment,{children:e.jsxs(y,{children:[e.jsx("ul",{children:i.map(s=>e.jsxs(I,{children:[e.jsxs($,{children:[e.jsx(B,{src:s.avatar_url,alt:"avatar"}),e.jsx(S,{src:G,alt:"online"})]}),e.jsxs("div",{children:[e.jsxs(P,{children:[e.jsx(A,{children:"Langueges"}),e.jsxs(_,{className:"teacher-info",children:[e.jsx(c,{children:e.jsxs(m,{children:[e.jsx(C,{src:O,alt:"book"}),"Lessons online"]})}),e.jsxs(c,{children:["Lessons done: ",s.lessons_done]}),e.jsx(c,{children:e.jsxs(m,{children:[e.jsx(C,{src:U,alt:"star"}),"Rating: ",s.rating]})}),e.jsxs(c,{children:["Price / 1 hour:"," ",e.jsxs(M,{children:[s.price_per_hour,"$"]})]})]}),e.jsx(V,{type:"button",children:e.jsx("img",{src:D,alt:"heart"})})]}),e.jsxs(F,{children:[s.name," ",s.surname]}),e.jsxs(H,{children:[e.jsx(h,{children:e.jsxs(x,{children:[e.jsx(g,{children:"Speaks: "}),e.jsx(R,{children:s.languages.join(", ")})]})}),e.jsx(h,{children:e.jsxs(x,{children:[e.jsx(g,{children:"Lesson Info: "}),s.lesson_info]})}),e.jsx(h,{children:e.jsxs(x,{children:[e.jsx(g,{children:"Conditions: "}),s.conditions]})})]}),e.jsx(z,{type:"button",children:"Read more"}),e.jsx(E,{children:s.levels.map(a=>e.jsxs(W,{children:["#",a]},p()))})]})]},p()))}),l<=i.length&&e.jsx(Z,{type:"button",onClick:w,children:"Load More"})]})})};export{q as default};
