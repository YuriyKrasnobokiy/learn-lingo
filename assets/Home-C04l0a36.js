import{u as n,a as c,j as e}from"./index-D9OO-uyo.js";const l=n.div`
  display: grid;
  /* grid-template-columns: 1fr 568px; */
  grid-template-columns: repeat(auto-fill, minmax(568px, 1fr));
  gap: 24px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`,a=n.div`
  padding: 98px 108px 98px 64px;
  border-radius: 30px;
  background-color: ${t=>t.theme.colors.HomeTextBlkBGC};
`,x=n.h1`
  font-weight: 500;
  font-size: 48px;
  line-height: 1.16667;
  letter-spacing: -0.02em;
  margin-bottom: 32px;
`,d=n.span`
  color: ${t=>t.theme.colors.HomeAccentText};
  border-radius: 14px;
  background-color: ${t=>t.theme.colors.thirdAccentColor};
`,h=n.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.375;
  letter-spacing: -0.02em;
  margin-bottom: 64px;
  max-width: 471px;
`,p=n.button`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.55;
  border-radius: 12px;
  padding: 16px 88px;
  margin: 0;
  color: ${t=>t.theme.colors.textColor};
  background-color: ${t=>t.theme.colors.accentColor};
  transition: background-color 0.3s linear;

  &:hover {
    background-color: ${t=>t.theme.colors.secondAccentColor};
  }
`,g=n.div``,m=n.div`
  padding: 40px 0;
  border: 1.5px dashed ${t=>t.theme.colors.accentColor};
  border-radius: 30px;

  margin-top: 24px;
`,u=n.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 100vw;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`,i=n.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-right: 100px;
  }
`,r=n.p`
  font-weight: 500;
  font-size: 28px;
  line-height: 1.14;
  letter-spacing: -0.02em;
  margin-right: 16px;
`,o=n.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.02em;
  max-width: 92px;
  color: ${t=>t.theme.colors.StatsDescrColor};
`,j="/learn-lingo/assets/smile-C_OMyEqn.svg",b=()=>{const t=c(),s=()=>{t("/teachers")};return e.jsxs("div",{className:"container",children:[e.jsxs(l,{children:[e.jsxs(a,{children:[e.jsxs(x,{children:["Unlock your potential with the best"," ",e.jsx(d,{children:e.jsx("i",{children:"language"})})," ","tutors"]}),e.jsx(h,{children:"Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors."}),e.jsx(p,{type:"button",onClick:s,children:"Get started"})]}),e.jsx(g,{children:e.jsx("img",{src:j,alt:"smilling girl"})})]}),e.jsx(m,{children:e.jsxs(u,{children:[e.jsxs(i,{children:[e.jsx(r,{children:"32,000 + "}),e.jsx(o,{children:"Experienced tutors"})]}),e.jsxs(i,{children:[e.jsx(r,{children:"300,000 + "}),e.jsx(o,{children:"5-star tutor reviews"})]}),e.jsxs(i,{children:[e.jsx(r,{children:"120 + "}),e.jsx(o,{children:"Subjects taught"})]}),e.jsxs(i,{children:[e.jsx(r,{children:"200 + "}),e.jsx(o,{children:"Tutor nationalities"})]})]})})]})};export{b as default};
