(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7281)}])},7281:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return z}});var a=n(5893),t=n(9008),r=n.n(t),i=n(7160),l=n.n(i),c=n(7856),o=n(7294),d=n(748),m=n.n(d),h=n(5084),u=n(6515),p=n(7056),g=n(8316),x=n(2722),j=n(8661),v=n(3055),b=n(3967),f=n(6757),y=n(3619),_=n(1508),N=n(1664),C=n.n(N),w=n(2152),P=n(1163),S=n(1869),k=n(4360),E=n(1893),F=n(9242);let I=e=>{let{setOpen:s,addUser:n,user_details:t,removeUser:r,setDiscountCoupon:i,onChangeValue:l,stadium_details:c,onEndEditing:d,setVolunteer:h}=e,u=(0,P.useRouter)(),[p,g]=(0,o.useState)(!1),[x,j]=(0,o.useState)({grandTotal:0,processFee:0,taxFee:0,discount:0,discount_amount:0}),[v,b]=(0,o.useState)({open:!1,message:"",alertType:""}),[f,y]=(0,o.useState)([]),[N,I]=(0,o.useState)({}),[T,R]=(0,o.useState)({emergency_contact_name:"",emergency_contact_number:"",pan:"",isAcceptedTerms:!1}),[A,O]=(0,o.useState)({pending:!0,failed:!1,data:{},isRegistered:!1}),{generateEventOrders:Z,processEventOrder:B,applyDiscountCoupon:M}=(0,w.Z)();(0,o.useEffect)(()=>{void 0==A.data||A.failed?ei("Failed to generate order",F.FF.Error):Object.keys(A.data).length>0&&(!A.isRegistered&&A.data.amount>0?K():Y())},[A]),(0,o.useEffect)(()=>{let e=document.createElement("script");e.type="application/javascript",e.src="https://checkout.razorpay.com/v1/checkout.js",e.onload=()=>{},document.body.appendChild(e)},[]),(0,o.useEffect)(()=>{L()},[x.discount]);let U=["O+","O-","A+","A-","B+","B-","AB+","AB-"],W=["Male","Female","Other"],z=["XS","S","M","L","XL","XXL"],G=e=>{var s,n,a,t,r;switch(e){case"Tax":return void 0!=c.tax?c.tax:0;case"ProcessFee":return null!==(s=c.processing_fee)&&void 0!==s?s:0;default:if("21K"===e){if("Virtual"===c.event_type)return null!==(n=c.vir_registartion_amount.HM)&&void 0!==n?n:0;return null!==(a=c.phy_registartion_amount.HM)&&void 0!==a?a:0}if("Virtual"===c.event_type)return null!==(t=c.vir_registartion_amount[e])&&void 0!==t?t:0;return null!==(r=c.phy_registartion_amount[e])&&void 0!==r?r:0}},L=()=>{let e=0;t.users.map((s,n)=>{"Run Category"===s.choose?e+=0:e+=G(s.choose)});let s=G("ProcessFee"),n=G("Tax");if(void 0!=s&&void 0!=n){let a=e*x.discount/100,r=e-e*x.discount/100,i=r*s/100,l=i*n/100;j({...x,grandTotal:r+i+l,processFee:i,taxFee:l,discount_amount:a})}},D=(e,s)=>{l(e,s)},V=()=>{for(let e=0;e<t.users.length;e++){let{name:s,bgroup:n,gender:a,choose:r,bibname:i,shirt:l,mobile:c,email:o}=t.users[e],d=et(s,n,a,r,i,l,c,o),m=f;if(m[e]=d.error,y(m),""!=d.message){ei(d.message,F.FF.Error);return}}let{emergency_contact_name:h,emergency_contact_number:u,isAcceptedTerms:p}=T,g=er(h,u,p);if(I(g.error),""!=g.message||""!=g.message){ei(g.message,F.FF.Error);return}q()},H=e=>{switch(e){case"Male":return"M";case"Female":return"F";case"Other":return"O"}},q=()=>{let e=t.users.map(e=>{let s="21K"===e.choose?"HM":e.choose;return{selected_category:s,name:e.name,bib_name:e.bibname,email_address:e.email,phone:e.mobile,blood_group:e.bgroup,sex:H(e.gender),tshirt_size:e.shirt,emergency_contact_name:T.emergency_contact_name,emergency_contact_number:"".concat(T.emergency_contact_number),is_primary:e.is_primary,is_up_for_volunteer:t.isVolunteer,identity_number:T.pan}}),s={eventName:"GENERATE_EVENT_ORDERS",org_id:"runfit-pro",event_id:c.event_id,participants:e};t.discount_coupon.length>0&&(s.discount_code=t.discount_coupon),Z(O,s,g)},K=()=>{let e={key:F.bE,amount:100*A.data.amount_due,currency:A.data.currency,name:"SevaBharathi",description:"SevaBharathi Transaction",image:"https://d6xcmfyh68wv8.cloudfront.net/assets/razorpay-glyph.svg",order_id:A.data.order_id,handler:function(e){X(e)},prefill:{name:t.users[0].name,email:t.users[0].email,contact:t.users[0].mobile},notes:{address:"Seva bharathi"},theme:{color:"#3399cc"},modal:{ondismiss:function(){J()}}};try{let s=new Razorpay(e);s.on("payment.failed",function(e){ei("Payment failed",F.FF.Error)}),s.open()}catch(n){J()}},X=e=>{B(e,Y,$,g)},Y=()=>{let e={users_info:t,order_details:A.data};window.localStorage.setItem("order_info",JSON.stringify(e)),u.push("/orderSuccess"),ei("Order placed successfully",F.FF.Success),Q()},$=e=>{let s={users_info:t,order_details:A.data,razorPayResponse:e};window.localStorage.setItem("order_info",JSON.stringify(s)),u.push("/orderFailed"),Q(),ei("Order failed",F.FF.Error)},J=e=>{ei(e,F.FF.error)},Q=()=>{s(!1)},ee=e=>{if(e.preventDefault(),0===e.target.discount.value.length){ei("Please enter discount code",F.FF.Error);return}M(e,c.event_id,es,en,g)},es=(e,s)=>{j({...x,discount:e}),i(s)},en=()=>{j({...x,discount:0}),i("")};function ea(e){return void 0!==e&&!!e.match(/^\d{10}$/)}let et=(e,s,n,a,t,r,i,l)=>{let c="",o={};return(""===e||""===e.trim())&&(c="Please enter name",o.name="Please enter name"),""===s&&(c="Please select blood group",o.bgroup="Please select blood group"),""===n&&(c="Please select gender",o.gender="Please select gender"),""===a&&(c="Please select run",o.choose="Please select run"),""===t&&(c="Please enter bib name",o.bibname="Please enter bib name"),""===r&&(c="Please select T-shirt size",o.shirt="Please select T-shirt size"),ea(i)||(c="Please enter 10 digit mobile number",o.mobile="Please enter 10 digit mobile number"),/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(l)||(c="Please enter valid email",o.email="Please enter valid email"),{message:c=c.length>0?"All fields are mandetory":c,error:o}},er=(e,s,n)=>{let a="",t={};return""===e||""===e.trim()?(a="Please enter emergency contact name",t.emergency_contact_name="Please enter emergency contact name"):ea(s)?n||(a="Please accept Terms & Conditions",t.isAcceptedTerms="Please accept Terms & Conditions"):(a="Please enter 10 digit emergency contact number",t.emergency_contact_number="Please enter 10 digit emergency contact number"),{message:a,error:t}},ei=(e,s)=>{b({...v,open:!0,message:e,alertType:s})},el=e=>{let s=c.category&&c.category.map(s=>{let n="HM"===s?"21K":s;if("KR"!==s||!e)return(0,a.jsx)("option",{value:n,children:n},n)});return s},ec=e=>{let s=e.map((e,s)=>(0,a.jsx)("option",{children:e},s+2));return s};return(0,a.jsxs)("div",{className:m().stadiumRun,children:[(0,a.jsx)("div",{className:m().breadcrumb,children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{onClick:()=>Q(),children:(0,a.jsx)(C(),{href:"/",children:"Go Back "})})}),(0,a.jsxs)("li",{children:["/ ",c.event_name]})]})}),(0,a.jsxs)("div",{className:m().locationDetails,children:[(0,a.jsx)("div",{className:m().locationSubDetails,children:(0,a.jsx)("ul",{children:(0,a.jsxs)("li",{children:[(0,a.jsx)("img",{src:(0,_.a)("calendar.png"),style:{width:"20px",height:"20px",paddingRight:"6px"},alt:"calendar"}),c.phy_event_date,(0,a.jsx)("img",{src:(0,_.a)("location.png"),style:{width:"28px",height:"22px",paddingRight:"6px",marginLeft:"10px"},alt:"location"}),c.phy_event_address]})})}),(0,a.jsx)("div",{className:m().locationSubDetails,children:(0,a.jsx)("ul",{children:(0,a.jsxs)("li",{children:[(0,a.jsx)("img",{src:(0,_.a)("clock.png"),style:{width:"20px",height:"20px",paddingRight:"6px"},alt:"clock"}),(()=>{let e=Object.keys(c.phy_event_timing),s="";return e&&e.map((n,a)=>{s+="".concat("HM"===n?"HM(21.1K)":n," - ").concat(c.phy_event_timing[n]),s+=e.length-1===a?"":"\xa0\xa0\xa0\xa0|\xa0\xa0\xa0\xa0"}),s})()]})})})]}),(0,a.jsx)("div",{className:m().participants,children:(0,a.jsx)("table",{children:(0,a.jsxs)("tbody",{children:[t.users&&t.users.map((e,s)=>{let n=void 0!=f[s]?f[s]:{};return(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:s+1}),(0,a.jsx)("td",{children:(0,a.jsx)("input",{type:"text",name:"name",value:e.name,onChange:e=>D(e,s),onBlur:e=>d(e,s),placeholder:"Participant Name *",style:{borderColor:void 0!=n.name?"red":"",borderWidth:n.name?1.5:1}})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("div",{className:m().bibnameInput,children:(0,a.jsx)("input",{type:"text",name:"bibname",value:e.bibname,onChange:e=>D(e,s),placeholder:"Display Name",style:{borderColor:void 0!=n.bibname?"red":"",borderWidth:n.bibname?1.5:1}})}),(0,a.jsx)("div",{className:m().bgroupInput,children:(0,a.jsxs)("select",{name:"bgroup",value:e.bgroup,onChange:e=>D(e,s),style:{borderColor:void 0!=n.bgroup?"red":"",borderWidth:n.bgroup?1.5:1},children:[(0,a.jsx)("option",{value:"",children:"Blood Group"}),ec(U)]})})]}),(0,a.jsx)("td",{children:(0,a.jsxs)("div",{style:{width:"100%"},children:[(0,a.jsx)("div",{className:m().gender1,children:(0,a.jsxs)("select",{name:"gender",value:e.gender,onChange:e=>D(e,s),style:{borderColor:void 0!=n.gender?"red":"",borderWidth:n.gender?1.5:1},children:[(0,a.jsx)("option",{value:"",children:"Gender"}),ec(W)]})}),(0,a.jsx)("div",{className:m().choose1,children:(0,a.jsxs)("select",{name:"choose",value:e.choose,onChange(e){D(e,s),L()},style:{borderColor:void 0!=n.choose?"red":"",borderWidth:n.choose?1.5:1},children:[(0,a.jsx)("option",{value:"",children:"Run Category"}),el(e.is_primary)]})}),(0,a.jsx)("div",{className:m().shirtInput,children:(0,a.jsxs)("select",{name:"shirt",value:e.shirt,onChange:e=>D(e,s),style:{borderColor:void 0!=n.shirt?"red":"",borderWidth:n.shirt?1.5:1},children:[(0,a.jsx)("option",{value:"",children:"T-Shirt Size"}),ec(z)]})})]})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("div",{className:m().emailInput,children:(0,a.jsx)("input",{type:"text",name:"email",value:e.email,onChange:e=>D(e,s),placeholder:"Enter Your Email *",style:{borderColor:void 0!=n.email?"red":"",borderWidth:n.email?1.5:1}})}),(0,a.jsx)("div",{className:m().mobileInput,children:(0,a.jsx)("input",{type:"text",placeholder:"Mobile Number *",name:"mobile",value:e.mobile,onChange:e=>D(e,s),style:{borderColor:void 0!=n.mobile?"red":"",borderWidth:n.mobile?1.5:1}})}),(0,a.jsx)("span",{style:{color:"#dd4069",border:"2px solid #dd4069",padding:"5px",display:"inline-flex",cursor:"pointer",margin:"5px 4px 2px 3px"},onClick(){y([]),r(s)},children:(0,a.jsx)("i",{className:"fa fa-trash"})})]})]},s)}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:(0,a.jsx)("input",{type:"text",name:"emergency_contact_name",placeholder:"Emergency Contact Name *",value:T.emergency_contact_name,onChange(e){R({...T,emergency_contact_name:e.target.value})},style:{borderColor:N.emergency_contact_name?"red":"",borderWidth:N.emergency_contact_name?1.5:1}})}),(0,a.jsx)("td",{children:(0,a.jsx)("input",{type:"text",placeholder:"Emergency Contact No *",name:"emergency_contact_number",value:T.emergency_contact_number,onChange(e){R({...T,emergency_contact_number:e.target.value})},style:{borderColor:N.emergency_contact_number?"red":"",borderWidth:N.emergency_contact_number?1.5:1}})}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:(0,a.jsxs)("button",{className:m().addParticipant,onClick(){n()},children:[(0,a.jsx)("img",{src:(0,_.a)("add_circle.png"),alt:"add circle"}),"Add Participant"]})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"\xa0"}),(0,a.jsxs)("td",{colSpan:"2",children:[(0,a.jsx)("div",{className:m().panInput,children:(0,a.jsx)("input",{type:"text",placeholder:"PAN Number",value:T.pan,onChange(e){R({...T,pan:e.target.value})}})}),(0,a.jsx)(E.Z,{title:"Pan Number",placement:"right",children:(0,a.jsx)("img",{src:(0,_.a)("info-red.png"),style:{width:"26px",height:"26px",float:"left",margin:"10px 0 0 0"},alt:"inforced"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:(0,a.jsxs)("form",{onSubmit:ee,children:[(0,a.jsx)("input",{type:"text",name:"discount",onChange:e=>i(e.target.value),placeholder:"Discount Code",style:{width:"calc(100% - 130px)"}}),(0,a.jsx)("button",{className:m().apply,children:"Apply"})]})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsxs)("td",{colSpan:"2",children:[(0,a.jsx)("input",{type:"checkbox",checked:T.isAcceptedTerms,onChange(){R({...T,isAcceptedTerms:!T.isAcceptedTerms})},name:"t&c",style:{margin:"5px 10px 0 0",width:"auto",verticalAlign:"middle"}}),"I Accept The",(0,a.jsx)("a",{href:"https://www.runfit.pro/privacy#terms",target:"_blank",style:{color:"#A72F50",fontWeight:300,textDecoration:"none"},children:" T & C"})]}),(0,a.jsxs)("td",{children:[(0,a.jsx)("input",{type:"checkbox",checked:t.isVolunteer,onChange(){h()},name:"volunteer",style:{margin:"5px 10px 0 0",width:"auto",verticalAlign:"middle"}}),"Interested In Volunteer"]}),(0,a.jsx)("td",{children:(0,a.jsxs)("div",{className:m().coupon,children:[(0,a.jsxs)("span",{children:["Discount : Rs.",x.discount_amount," "]}),"\xa0",(0,a.jsxs)("span",{children:["Processing Fees : Rs.",x.processFee]}),"\xa0 ",(0,a.jsxs)("span",{children:["Tax : Rs.",x.taxFee]}),(0,a.jsxs)("p",{children:["Grand Total : Rs.",x.grandTotal]})]})}),(0,a.jsxs)("td",{style:{textAlign:"right"},children:[(0,a.jsx)(C(),{href:"/",children:(0,a.jsxs)("button",{className:m().greyButton,onClick:()=>Q(),children:["Go Back ",(0,a.jsx)("img",{src:(0,_.a)("arrow_forward_ios.png"),alt:"afi"})]})}),(0,a.jsxs)("button",{className:m().redButton,onClick:()=>V(),children:["Pay & Finish ",(0,a.jsx)("img",{style:{paddingleft:"10px"},src:(0,_.a)("arrow_forward_ios.png"),alt:"afi"})]})]})]})]})})}),(0,a.jsx)(S.Z,{open:p,handleCloseLoader(){g(!1)}}),(0,a.jsx)(k.Z,{closeAlert:function(){b({...v,open:!1})},snackInfo:v})]})},T=()=>{let e={name:"",age:"",bgroup:"",gender:"",choose:"",bibname:"",shirt:"",mobile:"",email:"",is_primary:!0,is_up_for_volunteer:""},{getEvent:s,getEvents:n,getStadiumObject:t}=(0,w.Z)(),[r,i]=o.useState(0),[l,c]=(0,o.useState)(""),[d,N]=(0,o.useState)(""),[C,E]=(0,o.useState)(!1),[T,R]=(0,o.useState)({}),[A,O]=(0,o.useState)({}),[Z,B]=(0,o.useState)({users:[],discount_coupon:"",isVolunteer:!1}),[M,U]=(0,o.useState)({open:!1,message:"",alertType:""}),[W,z]=(0,o.useState)({pending:!1,failed:!1,data:[]}),[G,L]=(0,o.useState)({pending:!1,failed:!1,data:{}}),D=(0,P.useRouter)();(0,o.useEffect)(()=>{D.query.event_id?c(D.query.event_id):c("")},[D]),(0,o.useEffect)(()=>{null!==l&&""!==l?s(L,l):n(z),0===Z.users.length&&V()},[l]),(0,o.useEffect)(()=>{G.pending||G.failed||""===l||null===l||(O(G.data),E(!0))},[G.pending]),(0,o.useEffect)(()=>{if(!W.pending&&!W.failed&&W.data&&W.data.length>0&&0===r){let e=t(W&&W.data,"Physical");e.event_id?N(e.event_id):(N(""),es("Unable to fetch stadium run details",F.FF.Error))}},[W.pending]);let V=()=>{let s=e;Z.users.length>0&&(s.is_primary=!1),Z.users.length<6&&B({...Z,users:[...Z.users,s]})},H=e=>{if(Z.users.length>1&&e>0){let s=[...Z.users];s.splice(e,1),B({...Z,users:s})}},q=e=>{B({...Z,discount_coupon:e})},K=()=>{B({...Z,isVolunteer:!Z.isVolunteer})},X=(e,s)=>{let n=Z.users.map((n,a)=>(s===a&&("bibname"===e.target.name?Object.assign(n,{[e.target.name]:e.target.value.slice(0,10)}):Object.assign(n,{[e.target.name]:e.target.value})),n));B({...Z,users:n})},Y=(e,s)=>{let n=Z.users.map((n,a)=>{if(s===a&&"name"===e.target.name&&0===n.bibname.length){let t=e.target.value.split(" ");Object.assign(n,{bibname:t[0].slice(0,10)})}return n});B({...Z,users:n})},$=(e,s,n)=>{let a={},t="";return(""===e||""===e.trim())&&(a.name="Name field is mandatory*",t="Please enter name"),/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(s)||(a.email="Email field is mandatory*",t=t.length>0?t:"Please enter email"),""!==n&&n.match(/^\d{10}$/)||(a.contact="Please enter 10 digit mobile number",t=t.length>0?t:"Please enter 10 digit mobile number"),t.length>0&&es(t,F.FF.Error),a},J=e=>{N(e.target.value)},Q=(e,s)=>{switch(i(s),s){case 0:{let n=t(W&&W.data,"Physical");n.event_id?N(n.event_id):(N(""),es("Unable to fetch stadium run details",F.FF.Error));break}case 2:{let a=t(W&&W.data,"Virtual");a.event_id?N(a.event_id):(N(""),es("Unable to fetch virtual run details",F.FF.Error));break}default:N("")}},ee=async e=>{e.preventDefault();let s=Z.users.length>0&&Z.users[0],n=$(s.name,s.email,s.mobile);if(R(n),0!==Object.keys(n).length)E(!1);else{if(""===d||null===d){es("Please select run",F.FF.Error);return}let a=function(e){let s=W.data.filter(s=>s.event_id===e);return s.length>0?s[0]:{}}(d);Object.keys(a).length>0?(O(a),E(!0)):es("Unable to fetch details",F.FF.Error)}},es=(e,s)=>{U({...M,open:!0,message:e,alertType:s})};return(0,a.jsxs)("div",{className:m().banner,children:[(0,a.jsxs)("h2",{children:["RUN FOR",(0,a.jsx)("span",{style:{fontWeight:" normal"},children:" A CAUSE."})]}),C?(0,a.jsx)(I,{stadium_details:A,setOpen:E,addUser:V,removeUser:H,user_details:Z,setUsers:B,setDiscountCoupon:q,onChangeValue:X,onEndEditing:Y,setVolunteer:K}):(0,a.jsxs)("div",{className:m().emailContact,children:[(0,a.jsx)(S.Z,{open:W.pending||G.pending}),(0,a.jsxs)(x.Z,{value:r,onChange:Q,indicatorColor:"primary",textColor:"inherit",variant:"fullWidth","aria-label":"full width tabs example",children:[(0,a.jsx)(j.Z,{icon:(0,a.jsx)(b.Z,{}),label:"STADIUM RUN"}),(0,a.jsx)(j.Z,{icon:(0,a.jsx)(f.Z,{}),label:"COMMUNITY RUN"}),(0,a.jsx)(j.Z,{icon:(0,a.jsx)(v.Z,{}),label:"VIRTUAL RUN"})]}),(0,a.jsx)("br",{}),(0,a.jsx)("div",{children:1===r?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(g.Z,{id:"demo-simple-select-standard-label",style:{fontFamily:"inherit",color:"inherit"},children:"Select Event *"}),(0,a.jsxs)(u.Z,{name:"community",size:"small",fullWidth:!0,displayEmpty:!0,inputProps:{"aria-label":"Without label"},onChange(e){J(e)},children:[(0,a.jsx)(p.Z,{value:"",disabled:!0,children:"SELECT RUN"}),W.data.map((e,s)=>{if(!e.is_timed&&"Physical"===e.event_type)return(0,a.jsx)(p.Z,{value:e.event_id,children:e.event_name},s)})]})]}):null}),(0,a.jsxs)("form",{onSubmit:ee,children:[(0,a.jsxs)("div",{className:m().formLabel,children:[(0,a.jsx)("label",{children:"Name"}),(0,a.jsx)("input",{type:"text",name:"name",value:Z&&Z.users.length>0&&Z.users[0].name,onChange:e=>X(e,0),onBlur:e=>Y(e,0),placeholder:"Your Name *",required:!0,style:{borderColor:T.name?"red":"",borderWidth:T.name?1.5:1}})]}),(0,a.jsxs)("div",{className:m().formLabel,children:[(0,a.jsx)("label",{children:"Email"}),(0,a.jsx)("input",{type:"email",name:"email",value:Z&&Z.users.length>0&&Z.users[0].email,required:!0,onChange:e=>X(e,0),placeholder:"Youremail@domain.com *",style:{borderColor:T.email?"red":"",borderWidth:T.email?1.5:1}})]}),(0,a.jsxs)("div",{className:m().formLabel,children:[(0,a.jsx)("label",{children:"Contact"}),(0,a.jsx)("input",{type:"tel",name:"mobile",required:!0,value:Z&&Z.users.length>0&&Z.users[0].mobile,onChange:e=>X(e,0),placeholder:"Mobile Number *",style:{borderColor:T.contact?"red":"",borderWidth:T.contact?1.5:1}})]}),(0,a.jsxs)("div",{className:m().formLabel,children:[(0,a.jsx)("label",{children:"Number Of Participants"}),(0,a.jsxs)("div",{className:m().numberIncrease,children:[(0,a.jsx)("span",{style:{cursor:"pointer"},onClick:()=>H(1),children:(0,a.jsx)("img",{src:(0,_.a)("remove.png"),alt:"Image"})}),(0,a.jsx)("input",{type:"text",style:{height:"40px"},value:Z.users.length,name:"newCount"}),(0,a.jsx)("span",{style:{cursor:"pointer"},onClick:()=>V(),children:(0,a.jsx)("img",{src:(0,_.a)("add.png"),alt:"Image"})})]}),(0,a.jsx)("p",{children:"Minimum 1 , maximum upto 6."}),T.participants&&(0,a.jsx)("p",{style:{color:"red"},children:T.participants})]}),(0,a.jsxs)(h.Z,{type:"submit",variant:"contained",size:"small",style:{backgroundColor:"#a72f50",display:"inline",float:"right",marginRight:10,paddingLeft:"5px"},children:["Continue ",(0,a.jsx)(y.Z,{})]})]}),(0,a.jsx)(k.Z,{closeAlert:function(){U({...M,open:!1})},snackInfo:M})]}),(0,a.jsx)("div",{})]})},R=()=>(0,a.jsxs)("div",{className:m().contentBlock,children:[(0,a.jsxs)("div",{className:m().leftBlock,children:[(0,a.jsx)("span",{children:"One Mission"}),(0,a.jsx)("h4",{children:"Empower 10k + Girl Child"}),(0,a.jsx)("p",{children:"Run For A Girl Child is an flagship event by Kishori Vikas of Seva Bharathi , Telangana, it is an effort to enable, equip and empower girl children with quality education, good health, adequate skills, and above all a lot of self-confidence to help them live their lives to their fullest potential. And also relentlessly being organized for the past 5 years, made Run For A Girl Child a notable event for girl child empowerment in our state & caring societies around."})]}),(0,a.jsx)("div",{className:m().rightBlock,children:(0,a.jsx)("img",{src:(0,_.a)("runFor.png"),alt:"Image"})})]}),A=()=>(0,a.jsx)("div",{className:m().count,children:(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("div",{className:m().imageCircle,children:(0,a.jsx)("img",{src:(0,_.a)("roller_skating.png"),alt:"Image"})}),(0,a.jsxs)("div",{className:m().imageCount,children:[(0,a.jsx)("span",{children:"One Mission"}),(0,a.jsx)("p",{children:"Girl Empowerment"})]})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("div",{className:m().imageCircle,children:(0,a.jsx)("img",{src:(0,_.a)("settings_accessibility.png"),alt:"Image"})}),(0,a.jsxs)("div",{className:m().imageCount,children:[(0,a.jsx)("span",{children:"6233"}),(0,a.jsx)("p",{children:"Girls Everyday"})]})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("div",{className:m().imageCircle,children:(0,a.jsx)("img",{src:(0,_.a)("volunteer_activism.png"),alt:"Image"})}),(0,a.jsxs)("div",{className:m().imageCount,children:[(0,a.jsx)("span",{children:"263"}),(0,a.jsx)("p",{children:"Slums"})]})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("div",{className:m().imageCircle,children:(0,a.jsx)("img",{src:(0,_.a)("diversity_1.png"),alt:"Image"})}),(0,a.jsxs)("div",{className:m().imageCount,children:[(0,a.jsx)("span",{children:"302"}),(0,a.jsx)("p",{children:"Volunteers"})]})]})]})});var O=n(9804);let Z=()=>(0,a.jsx)("div",{className:m().contentBlock,children:(0,a.jsxs)("div",{className:m().eventGallery,children:[(0,a.jsx)("span",{children:"Snapshots"}),(0,a.jsx)("h4",{children:"Event Gallery"}),(0,a.jsx)("div",{className:m().leftBlock,children:(0,a.jsx)("img",{src:(0,_.a)("rectangle_60.png"),alt:"Image"})}),(0,a.jsxs)("div",{className:m().rightBlock,children:[(0,a.jsx)("img",{src:(0,_.a)("rectangle_61.png"),alt:"Image"}),(0,a.jsx)("img",{src:(0,_.a)("rectangle_62.png"),alt:"Image"}),(0,a.jsx)("img",{src:(0,_.a)("rectangle_63.png"),alt:"Image"}),(0,a.jsx)("img",{src:(0,_.a)("rectangle_65.png"),className:m().last,alt:"Image"}),(0,a.jsx)("a",{children:"View All"})]})]})}),B=()=>(0,a.jsxs)("div",{className:m().astraBlock,children:[(0,a.jsxs)("p",{children:["Run For A Girl Child 6th Edition can be tracked using ",(0,a.jsx)("b",{children:"Runfit.Pro"})," ","and ",(0,a.jsx)("b",{children:"Strava."})]}),(0,a.jsxs)("div",{className:m().right,children:[(0,a.jsx)("img",{src:(0,_.a)("runFit.png"),alt:"Image"}),(0,a.jsx)("img",{src:(0,_.a)("strava.png"),alt:"Image"})]})]}),M=()=>(0,a.jsxs)("div",{className:m().joinMission,children:[(0,a.jsxs)("div",{className:m().left,children:[(0,a.jsx)("p",{children:"Join our mission to empower 10,000+ Girls"}),(0,a.jsx)("button",{children:"Donate Now"})]}),(0,a.jsx)("div",{className:m().right,children:(0,a.jsx)("img",{src:(0,_.a)("girl.png"),alt:"Image"})})]}),U=()=>(0,a.jsxs)("div",{className:m().sponsors,children:[(0,a.jsx)("span",{children:"Sponsors, Supporters and Partners"}),(0,a.jsx)("h4",{children:"Sponsors"}),(0,a.jsxs)("ul",{id:m().sponserList,children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{children:"PREMIUM PARTNER"}),(0,a.jsx)("img",{src:(0,_.a)("genpact.png"),alt:"Image"})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{children:"TITLE SPONSORS"}),(0,a.jsx)("img",{src:(0,_.a)("capgemini.png"),alt:"Image"})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{children:"Medical pARTNER"}),(0,a.jsx)("img",{src:(0,_.a)("eto.png"),alt:"Image"})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{children:"SPorts partner"}),(0,a.jsx)("img",{src:(0,_.a)("gep.png"),alt:"Image"})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{children:"sUPPORTED BY"}),(0,a.jsx)("img",{src:(0,_.a)("unibic.png"),alt:"Image"})]})]}),(0,a.jsxs)("div",{className:m().sponserPatners,children:[(0,a.jsx)("span",{children:"it SPonsors and paRTners"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("img",{src:(0,_.a)("mahaCement.png"),alt:"Image"})}),(0,a.jsx)("li",{children:(0,a.jsx)("img",{src:(0,_.a)("itelligence.png"),alt:"Image"})}),(0,a.jsx)("li",{children:(0,a.jsx)("img",{src:(0,_.a)("tripGeo.png"),alt:"Image"})}),(0,a.jsx)("li",{children:(0,a.jsx)("img",{src:(0,_.a)("unibic.png"),alt:"Image"})}),(0,a.jsx)("li",{children:(0,a.jsx)("img",{src:(0,_.a)("velji.png"),alt:"Image"})})]})]}),(0,a.jsxs)("div",{className:m().powerdBy,children:[(0,a.jsxs)("div",{className:m().leftPatner,children:[(0,a.jsx)("span",{children:"Hospatality patners"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("img",{src:(0,_.a)("wipro.png"),alt:"Image"})}),(0,a.jsx)("li",{children:(0,a.jsx)("img",{src:(0,_.a)("ss&C.png"),alt:"Image"})}),(0,a.jsx)("li",{children:(0,a.jsx)("img",{src:(0,_.a)("corteva.png"),alt:"Image"})})]})]}),(0,a.jsxs)("div",{className:m().rightPatner,children:[(0,a.jsx)("span",{children:"Powered by"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("img",{src:(0,_.a)("mahaCement.png"),alt:"Image"})}),(0,a.jsx)("li",{children:(0,a.jsx)("img",{src:(0,_.a)("itelligence.png"),alt:"Image"})})]})]})]})]});var W=n(4508);function z(){return(0,a.jsxs)("div",{className:l().container,children:[(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:"Seva Bharathi"}),(0,a.jsx)("meta",{name:"description",content:"Kinding Hope & Happiness Around"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(c.Z,{}),(0,a.jsx)(T,{}),(0,a.jsx)(R,{}),(0,a.jsx)(A,{}),(0,a.jsx)(O.Z,{}),(0,a.jsx)(Z,{}),(0,a.jsx)(B,{}),(0,a.jsx)(M,{}),(0,a.jsx)(U,{}),(0,a.jsx)(W.Z,{})]})]})}},9804:function(e,s,n){"use strict";var a=n(5893);n(7294);var t=n(748),r=n.n(t),i=n(1508);let l=()=>(0,a.jsxs)("div",{className:r().contentBlock,children:[(0,a.jsxs)("div",{className:r().leftBlock,children:[(0,a.jsx)("span",{children:"About US"}),(0,a.jsx)("h4",{children:"Seva Bharathi"}),(0,a.jsx)("p",{children:"Seva Bharathi came into being in 1984. Over the years, it has come a long way in servicing its avowed objective. The modest move has culminated into a massive movement. The humble foundation has flowered into a mammoth institution. Today, Seva Bharathi has its presence spread across the entire country with an extensive range of charitable and community development activities. Set up in 1989 with moderate means and a canvas of activities, it has grown into an expansive network across Telangana. There are around 1,57,000 activities in all the 602 districts of the country."})]}),(0,a.jsx)("div",{className:r().rightBlock,children:(0,a.jsx)("img",{src:(0,i.a)("count.png"),alt:"Image"})})]});s.Z=l},1869:function(e,s,n){"use strict";var a=n(5893);n(7294);var t=n(8735),r=n(754);let i=e=>{let{open:s,handleCloseLoader:n}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.Z,{sx:{color:"#a72f50",zIndex:e=>e.zIndex.drawer+1},open:s,onClick:n,children:(0,a.jsx)(r.Z,{color:"inherit"})})})};s.Z=i},4360:function(e,s,n){"use strict";n.d(s,{Z:function(){return i}});var a=n(5893);n(7294);var t=n(9243),r=n(2853);function i(e){let{closeAlert:s,snackInfo:n}=e;return(0,a.jsx)(t.Z,{open:n.open,autoHideDuration:8e3,onClose:s,anchorOrigin:{vertical:"top",horizontal:"right"},children:(0,a.jsx)(r.Z,{onClick:s,severity:n.alertType,sx:{width:"100%"},variant:"filled",children:n.message})})}},4508:function(e,s,n){"use strict";var a=n(5893);n(7294);var t=n(748),r=n.n(t),i=n(1508);let l=()=>(0,a.jsxs)("div",{className:r().footer,children:[(0,a.jsx)("p",{children:"@RUNFORAGIRLCHILD 2022. All rights reserved"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{title:"facebook",children:(0,a.jsx)("img",{src:(0,i.a)("facebook.png"),alt:"facebook"})})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{title:"insta",children:(0,a.jsx)("img",{src:(0,i.a)("insta.png"),alt:"insta"})})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{title:"twitter",children:(0,a.jsx)("img",{src:(0,i.a)("twitter.png"),alt:"twitter"})})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{title:"link",children:(0,a.jsx)("img",{src:(0,i.a)("linkdin.png"),alt:"link"})})})]})]});s.Z=l},9242:function(e,s,n){"use strict";n.d(s,{FF:function(){return r},HU:function(){return t},bE:function(){return a}});let a="rzp_test_QbOKMuPLoigzpp",t="https://seva.runfit.pro/",r=Object.freeze({Error:"error",Warning:"warning",Info:"info",Success:"success"})},7160:function(){}},function(e){e.O(0,[110,966,542,856,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);