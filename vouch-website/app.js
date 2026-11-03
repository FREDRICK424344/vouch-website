var P=[
{v:"verified",id:"kwame-plumbing",name:"Kwame Plumbing Works",trade:"Plumber",c:"#0e7a5f",rate:"4.9",n:128,price:"from $25",about:"Eleven years fixing leaks, installing water heaters and clearing drains. Licensed, insured and always cleans up after the job.",svc:[["Leak repair","$25"],["Water heater install","$90"],["Drain unblocking","$40"],["Bathroom fitting","$200"]],rev:[["Abena","Arrived on time and fixed the leak in under an hour. Fair price."],["Daniel","Explained the problem clearly before starting. Would book again."]]},
{v:"verified",id:"brightline-electric",name:"Brightline Electric",trade:"Electrician",c:"#7a4fd1",rate:"4.8",n:94,price:"from $30",about:"Home wiring, fuse box upgrades and lighting installs by a certified two-person team. Emergency call-outs available.",svc:[["Fault finding","$30"],["Socket and switch install","$20"],["Fuse box upgrade","$150"],["Outdoor lighting","$120"]],rev:[["Efua","Found the fault the last electrician missed. Very tidy work."],["Samuel","Quoted upfront and stuck to it. Professional all round."]]},
{v:"verified",feat:true,id:"sparkle-homes",name:"Sparkle Homes Cleaning",trade:"Cleaner",c:"#c2410c",rate:"4.9",n:210,price:"from $35",about:"Regular and deep cleaning for homes and small offices. Eco-friendly products and background-checked staff.",svc:[["Standard clean","$35"],["Deep clean","$80"],["Move-out clean","$110"],["Office clean (weekly)","$60"]],rev:[["Nana","The flat has never looked this good. Booking weekly now."],["Priscilla","Friendly team, brought all supplies, finished early."]]},
{id:"mathwise-tutors",name:"MathWise Tutoring",trade:"Tutor",c:"#1d6fb8",rate:"5.0",n:61,price:"from $15/hr",about:"Maths and science tutoring for primary to senior high, in person or online. Exam-focused lessons with weekly progress notes.",svc:[["1-on-1 lesson (1 hr)","$15"],["Exam prep pack (8 hrs)","$110"],["Small group (per student)","$9"]],rev:[["Mrs. Owusu","My son’s grades went from C to A in one term."],["Kojo","Patient and clear. Makes hard topics easy."]]},
{id:"torque-garage",name:"Torque Mobile Mechanics",trade:"Mechanic",c:"#b4233b",rate:"4.7",n:87,price:"from $20",about:"We come to you. Servicing, brakes, batteries and diagnostics done at your home or workplace, with parts receipts provided.",svc:[["Diagnostic check","$20"],["Full service","$70"],["Brake pad replacement","$55"],["Battery replacement","$35"]],rev:[["Yaw","Saved me a trip to the garage. Honest about what needed fixing."],["Akosua","Quick, cheap and showed me the old parts."]]},
{id:"frame-and-light",name:"Frame & Light Studio",trade:"Photographer",c:"#0f766e",rate:"4.9",n:73,price:"from $60",about:"Portraits, events and product photography. Edited photos delivered within 72 hours through a private online gallery.",svc:[["Portrait session (1 hr)","$60"],["Event coverage (4 hrs)","$250"],["Product shots (10 items)","$90"]],rev:[["Ama","Made everyone at our wedding look amazing."],["Kofi","Great product photos. Sales went up the week I used them."]]},
{v:"premium",feat:true,id:"cornerstone-realty",name:"Cornerstone Realty",trade:"Real Estate",c:"#8a5a14",rate:"4.8",n:56,price:"from $320/mo",about:"Licensed agents helping you rent, buy or sell. Every property is visited and photographed by our team before it is listed, so what you see is what you get.",svc:[["Studio flat, for rent","$320/mo"],["2-bed apartment, for rent","$600/mo"],["3-bed house, for sale","$95,000"],["Land plot (600 sqm), for sale","$18,000"]],props:[{id:"studio-flat",title:"Modern studio flat",kind:"For rent",price:"$320/mo",beds:0,baths:1,size:"32 sqm",area:"City centre",icon:"🏢",desc:"Bright, fully tiled studio on the 3rd floor with a fitted kitchenette, 24-hour water and secure parking. Walking distance to shops and transport."},{id:"two-bed-apartment",title:"2-bed apartment with balcony",kind:"For rent",price:"$600/mo",beds:2,baths:2,size:"85 sqm",area:"East side",icon:"🏙️",desc:"Spacious apartment with two en-suite bedrooms, open living area and a private balcony. Gated compound with a backup generator."},{id:"family-house",title:"3-bed family house",kind:"For sale",price:"$95,000",beds:3,baths:2,size:"160 sqm",area:"Suburbs",icon:"🏡",desc:"Detached house on a fenced plot with a garden, covered garage and a quiet street. Title documents are ready for inspection."},{id:"land-plot",title:"Residential land plot",kind:"For sale",price:"$18,000",beds:0,baths:0,size:"600 sqm",area:"Outskirts",icon:"🌳",desc:"Flat, well-drained plot in a growing neighbourhood, close to the main road with water and power lines nearby. Site visit available."}],rev:[["Esi","Found me a flat in my budget within a week. Viewing was well organised."],["Mr. Tetteh","Honest about the property’s problems. Closed the sale smoothly."]]},
{v:"premium",feat:true,id:"mensah-partners-legal",name:"Mensah & Partners Legal",trade:"Law Firm",c:"#27408b",rate:"4.9",n:84,price:"from $60",about:"A five-lawyer firm covering company formation, contracts, property and disputes. Clear fixed fees agreed before work starts.",svc:[["Initial consultation (45 min)","$60"],["Business registration","$150"],["Contract drafting","$120"],["Property conveyancing","$400"]],rev:[["Kwesi","Registered my company in days and explained every step."],["Linda","Reviewed our lease and caught two clauses that would have cost us."]]},
{v:"verified",id:"adwoa-boateng-attorney",name:"Adwoa Boateng, Attorney",trade:"Lawyer",c:"#6b2d7a",rate:"5.0",n:39,price:"from $40",about:"Independent attorney focused on family, employment and tenancy matters. Calm, practical advice, and a free 15-minute first call.",svc:[["First call (15 min)","Free"],["Legal advice session (1 hr)","$40"],["Employment dispute review","$90"],["Tenancy agreement review","$50"]],rev:[["Naa","She made a stressful situation manageable. Very responsive."],["Joseph","Straight answers and no jargon. Worth every cedi."]]},
{v:"premium",feat:true,id:"smilecare-dental",name:"SmileCare Dental Clinic",trade:"Dentist",c:"#0b7285",rate:"4.9",n:162,price:"from $30",about:"Family dental clinic with modern equipment and gentle, painless care. Open six days a week, with same-day emergency appointments.",svc:[["Check-up and X-ray","$30"],["Scale and polish","$45"],["Filling","$60"],["Teeth whitening","$150"]],rev:[["Maame","Spotless clinic and my kids weren’t scared at all."],["Richard","Got an emergency slot the same afternoon. Pain gone by evening."]]}
];
var $=function(i){return document.getElementById(i)},filter="",cur=null;
function stars(r){r=r||5;return "★★★★★".slice(0,r)+"☆☆☆☆☆".slice(0,5-r)}
function card(p){return '<div class="cw"><button class="card" data-id="'+p.id+'"><div class="avatar" style="background:'+p.c+'">'+p.name[0]+'</div><h3>'+p.name+'</h3><div class="trade">'+p.trade+(p.area?', '+p.area:'')+'</div>'+(p.feat?'<div><span class="badge gold" style="margin-top:6px">Featured</span></div>':'')+'<div class="row"><span><span class="stars">★</span> <b>'+p.rate+'</b> ('+p.n+')</span><span>'+p.price+'</span></div><div class="row">'+vBadge(p)+'</div></button><button class="heart" type="button" data-f="'+p.id+'" aria-pressed="'+(favs.indexOf(p.id)>-1)+'" aria-label="Save to favourites">♥</button></div>'}
function render(){
$("stats").innerHTML=[[P.filter(function(p){return p.v}).length,"verified professionals"],[cats.length,"service categories"],[P.reduce(function(s,p){return s+p.n},0),"customer reviews"]].map(function(x){return '<div class="stat"><b>'+x[0]+'</b><span>'+x[1]+'</span></div>'}).join("");
var q=(filter||$("svc").value),a=$("loc").value.trim().toLowerCase(),l=P.filter(function(p){return (!onlyFav||favs.indexOf(p.id)>-1)&&(!$("vonly").checked||!!p.v)&&(!q||p.trade===q)&&(!a||!p.area||p.area.toLowerCase().indexOf(a)>-1)});
var so=$("sort").value;l=l.slice().sort(function(x,y){if(vr(x)!==vr(y))return vr(y)-vr(x);return so==="rev"?y.n-x.n:(parseFloat(y.rate)||0)-(parseFloat(x.rate)||0)});
$("list").innerHTML=l.map(card).join("");$("empty").hidden=l.length>0;
$("listtitle").textContent=onlyFav?"Your saved professionals":q?(q==="Real Estate"?"Property listings":q+"s")+" near you":"Top-rated this week";
[].forEach.call(document.querySelectorAll("#list .card"),function(b){b.onclick=function(){location.hash="provider-"+b.dataset.id}});
[].forEach.call(document.querySelectorAll("#list .heart"),function(b){b.onclick=function(){var i=favs.indexOf(b.dataset.f);if(i>-1)favs.splice(i,1);else favs.push(b.dataset.f);saveF();if(onlyFav)render();else b.setAttribute("aria-pressed",String(i<0))}});
}
var cats=["Plumber","Electrician","Cleaner","Tutor","Mechanic","Photographer","Real Estate","Law Firm","Lawyer","Dentist"];
$("chips").innerHTML=cats.map(function(c){return '<button class="chip" aria-pressed="false" type="button">'+c+'</button>'}).join("");
[].forEach.call(document.querySelectorAll("#chips .chip"),function(b){b.onclick=function(){var on=b.getAttribute("aria-pressed")==="true";[].forEach.call(document.querySelectorAll("#chips .chip"),function(x){x.setAttribute("aria-pressed","false")});filter=on?"":b.textContent;$("svc").value=filter;if(!on)b.setAttribute("aria-pressed","true");render()}});
$("svc").onchange=function(){filter="";[].forEach.call(document.querySelectorAll("#chips .chip"),function(x){x.setAttribute("aria-pressed",x.textContent===$("svc").value?"true":"false")});render()};
var favs=[],onlyFav=false;try{favs=JSON.parse(localStorage.getItem("vouchF")||"[]")}catch(x){}
function updFav(){$("favb").textContent=onlyFav?"Show all":"\u2665 Saved ("+favs.length+")"}
function saveF(){try{localStorage.setItem("vouchF",JSON.stringify(favs))}catch(x){}updFav()}
$("favb").onclick=function(){onlyFav=!onlyFav;updFav();render();if(location.hash.slice(1)&&location.hash!=="#home")location.hash="home"};
updFav();
function findProp(id){for(var i=0;i<P.length;i++){var ps=P[i].props||[];for(var j=0;j<ps.length;j++)if(ps[j].id===id)return {p:P[i],r:ps[j]}}return null}
function propCard(r){return '<button class="card" data-pr="'+r.id+'"><div class="ph">'+r.icon+'</div><span class="tag">'+r.kind+'</span><h3 style="margin-top:8px">'+r.title+'</h3><div class="row"><b>'+r.price+'</b><span>'+r.area+'</span></div><div class="facts"><span>'+(r.beds?r.beds+' bed':'Land')+'</span>'+(r.baths?'<span>'+r.baths+' bath</span>':'')+'<span>'+r.size+'</span></div></button>'}
$("vf").onsubmit=function(e){e.preventDefault();if(!canSend())return;$("vf").hidden=true;$("vok").hidden=false};
var PL={"Free":"free","Verified":"verified","Premium Verified":"premium","Enterprise":"enterprise"};
function paid(){return !!user&&!!user.plan&&user.plan!=="free"}
function planName(p){return p==="verified"?"Verified":p==="premium"?"Premium Verified":p==="enterprise"?"Enterprise":"Free"}
var payBack="",payWhy=false;
function canSend(){if(!user){location.hash="account";return false}if(!paid()){payBack=location.hash.slice(1);payWhy=true;location.hash="pricing";return false}return true}
[].forEach.call(document.querySelectorAll(".pick"),function(b){b.onclick=function(){var n=$("pnote");n.hidden=false;if(!user){n.textContent="Create a free account or sign in first, then choose your plan.";location.hash="account";return}
var A=accts(),a=A.filter(function(x){return x.email===user.email})[0];if(!a)return;a.plan=PL[b.dataset.p]||"free";try{localStorage.setItem("vouchA",JSON.stringify(A))}catch(x){}setUser(a);
n.textContent="Your plan is now "+planName(a.plan)+". Demo: no payment was taken. On the live site you\u2019d pay through Paystack or Flutterwave first, and Verified badges also need an identity and business review.";if(a.plan!=="free"&&payBack){var pb=payBack;payBack="";setTimeout(function(){location.hash=pb},1500)}}});
function E(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;")}
function keep(k,o){try{var s=JSON.parse(localStorage.getItem(k)||"[]");s.push(o);localStorage.setItem(k,JSON.stringify(s))}catch(x){}}
var J=[
{id:"site-supervisor",co:"Atlas Mining Group",c:"#8a5a14",title:"Site Supervisor",cat:"Operations",type:"Full-time",loc:"Regional site",pay:"$900 to $1,200/mo",desc:"Lead a crew of 25 on a busy site, keep to safety rules and report daily progress to the project manager.",reqs:["5+ years supervising crews","Safety training certificate","Able to work shifts"]},
{id:"customer-service-officer",co:"Meridian Bank",c:"#27408b",title:"Customer Service Officer",cat:"Banking",type:"Full-time",loc:"Main branch",pay:"$450 to $600/mo",desc:"Help customers with accounts, cards and complaints in the branch and by phone.",reqs:["Diploma or degree","Clear spoken English","Friendly and patient"]},
{id:"front-desk-agent",co:"Sunrise Hospitality Group",c:"#c2410c",title:"Hotel Front Desk Agent",cat:"Hospitality",type:"Part-time",loc:"City centre",pay:"$250 to $350/mo",desc:"Greet guests, manage check-in and check-out and handle bookings.",reqs:["1+ year in hotels or customer service","Basic computer skills","Weekend availability"]},
{id:"delivery-driver",co:"Coastline Logistics",c:"#0b7285",title:"Delivery Driver",cat:"Transport",type:"Contract",loc:"Port area",pay:"$20 per delivery day",desc:"Deliver parcels across the city on set routes using a company van.",reqs:["Valid driving licence","2+ years driving","Knows the city well"]},
{id:"network-technician",co:"BrightPath Telecom",c:"#7a4fd1",title:"Network Technician",cat:"Technology",type:"Full-time",loc:"Head office",pay:"$600 to $800/mo",desc:"Install and maintain fibre and wireless equipment at customer sites and towers.",reqs:["Technical diploma or equivalent","Experience with network equipment","Comfortable working at heights"]},
{id:"farm-manager",co:"Greenfield Farms Ltd",c:"#0e7a5f",title:"Farm Manager",cat:"Agriculture",type:"Full-time",loc:"Rural farm",pay:"$500 to $700/mo",desc:"Run daily operations across 200 acres, manage workers and track harvests and costs.",reqs:["Farm management experience","Record keeping skills","Willing to live near the farm"]}
];
var W=[
{name:"Kojo A.",c:"#0e7a5f",skill:"Electrician",exp:6,area:"City centre",avail:"Available now",about:"Wiring, panel upgrades and maintenance for homes and small factories."},
{name:"Efua M.",c:"#7a4fd1",skill:"Accountant",exp:4,area:"Remote or city",avail:"Within 2 weeks",about:"Bookkeeping, payroll and monthly reporting. Uses QuickBooks and Excel."},
{name:"Yaw B.",c:"#c2410c",skill:"Driver",exp:8,area:"Port area",avail:"Available now",about:"Clean licence, trucks and vans, reliable on long routes."},
{name:"Abena K.",c:"#1d6fb8",skill:"Receptionist",exp:3,area:"Main city",avail:"Open to offers",about:"Front desk, phones and scheduling for offices and clinics."}
];
try{J=J.concat(JSON.parse(localStorage.getItem("vouchJ")||"[]"));W=W.concat(JSON.parse(localStorage.getItem("vouchW")||"[]"))}catch(x){}
function jobCard(j){return '<button class="card" data-j="'+j.id+'"><div class="avatar" style="background:'+j.c+'">'+j.co[0]+'</div><h3>'+j.title+'</h3><div class="trade">'+j.co+'</div><div class="facts"><span>'+j.type+'</span><span>'+j.loc+'</span></div><div class="row"><b>'+j.pay+'</b>'+(j.id.indexOf("new-")===0?'<span class="badge" style="background:var(--line);color:var(--muted)">Unverified</span>':'<span class="badge">Verified company</span>')+'</div></button>'}
function renderJobs(){var q=$("jq").value.trim().toLowerCase(),t=$("jty").value;
var l=J.filter(function(j){return (!t||j.type===t)&&(!q||(j.title+" "+j.co+" "+j.cat+" "+j.loc).toLowerCase().indexOf(q)>-1)});
$("jlist").innerHTML=l.map(jobCard).join("");$("jempty").hidden=l.length>0;
[].forEach.call($("jlist").children,function(b){b.onclick=function(){location.hash="job-"+b.dataset.j}})}
function renderWorkers(){var q=$("wq").value.trim().toLowerCase();
var l=W.filter(function(w){return !q||(w.name+" "+w.skill+" "+w.area).toLowerCase().indexOf(q)>-1});
$("wlist").innerHTML=l.map(function(w){return '<div class="card" style="cursor:default"><div class="avatar" style="background:'+w.c+'">'+w.name[0]+'</div><h3><a href="#worker-'+slug(w.name)+'" style="text-decoration:none">'+w.name+'</a></h3><div class="trade">'+w.skill+', '+w.exp+' yrs</div><div class="facts"><span>'+w.area+'</span></div><p style="margin:8px 0;font-size:14px;color:var(--muted)">'+w.about+'</p><div class="row"><span class="badge">'+w.avail+'</span><button class="btn ghost contact" type="button" style="padding:6px 12px">Contact</button></div></div>'}).join("");
$("wempty").hidden=l.length>0;
[].forEach.call(document.querySelectorAll(".contact"),function(b){b.onclick=function(){startChat(E(b.closest(".card").querySelector("h3").textContent),"Worker")}})}
$("jq").oninput=renderJobs;$("jty").onchange=renderJobs;$("wq").oninput=renderWorkers;
var curJob="";
function apps(){try{return JSON.parse(localStorage.getItem("vouchApps")||"[]")}catch(x){return[]}}
function saveApps(a){try{localStorage.setItem("vouchApps",JSON.stringify(a))}catch(x){}}
function cvErr(m){$("cverr").textContent=m;$("cverr").hidden=false}
function maskPh(t){var d=t.replace(/\D/g,"");return d.length>3?"\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 "+d.slice(-3):"\u2022\u2022\u2022"}
$("af").onsubmit=function(e){e.preventDefault();if(!canSend())return;var f=$("acv").files[0];
if(f){if(!/\.(pdf|docx?)$/i.test(f.name))return cvErr("Please attach a PDF or Word file.");if(f.size>2097152)return cvErr("That file is over 2 MB. Please attach a smaller one.")}
var A=apps();A.unshift({job:curJob,name:E($("an").value.trim()),phone:E($("ap").value.trim()),note:E($("ac").value.trim()),cv:f?E(f.name):"",date:new Date().toLocaleDateString(),st:"New",ukey:myKey()});saveApps(A);var jo=J.filter(function(x){return x.id===curJob})[0];if(jo&&jo.own)notify("u:"+hid(jo.own),"apply",myKey(),jo.title+"|"+E($("an").value.trim()));
$("cverr").hidden=true;$("af").hidden=true;$("aok").hidden=false};
function renderApps(){var A=apps();$("apempty").hidden=A.length>0;
$("applist").innerHTML=A.map(function(a,i){var jb=J.filter(function(x){return x.id===a.job})[0]||{title:"a job",co:""},sh=a.st==="Shortlisted",bs=a.st==="New"?' gold':'',st=a.st==="Declined"?' style="background:var(--line);color:var(--muted)"':'';
return '<div class="panel"><div class="row" style="margin-top:0"><h3>'+a.name+'</h3><span class="badge'+bs+'"'+st+'>'+a.st+'</span></div><div style="color:var(--muted);font-size:14px">Applied for '+jb.title+(jb.co?' at '+jb.co:'')+' on '+a.date+'</div><p style="margin:8px 0">'+(a.note||"No cover note.")+'</p><div class="facts"><span>Phone: '+(sh?a.phone:maskPh(a.phone))+'</span><span>'+(a.cv?"CV: "+a.cv:"No CV attached")+'</span></div><div class="row"><span></span><span><button class="btn main pa" data-i="'+i+'" data-s="Shortlisted" type="button" style="padding:8px 14px">Shortlist</button> <button class="btn ghost pa" data-i="'+i+'" data-s="Declined" type="button" style="padding:8px 14px">Decline</button></span></div></div>'}).join("");
[].forEach.call(document.querySelectorAll(".pa"),function(b){b.onclick=function(){var A=apps(),ap=A[b.dataset.i];ap.st=b.dataset.s;saveApps(A);if(ap.ukey){var jj=J.filter(function(x){return x.id===ap.job})[0];notify(ap.ukey,"app",myKey(),(jj?jj.title:"a job")+"|"+ap.st)}renderApps()}})}
$("pjf").onsubmit=function(e){e.preventDefault();var j={id:"new-"+Date.now().toString(36),co:E($("pjco").value.trim()),c:COL[J.length%6],title:E($("pjt").value.trim()),cat:E($("pjc").value),type:$("pjty").value,loc:E($("pjl").value.trim()||"Not stated"),pay:E($("pjp").value.trim()||"Pay not stated"),desc:E($("pjd").value.trim()),reqs:[],own:user?user.email:""};
J.push(j);keep("vouchJ",j);$("pjf").reset();location.hash="job-"+j.id};
$("wf").onsubmit=function(e){e.preventDefault();var w={mine:true,email:user?user.email:"",name:E($("wn").value.trim()),c:COL[W.length%6],skill:E($("ws").value.trim()),exp:parseInt($("we").value,10)||0,area:E($("wl").value.trim()||"Not stated"),avail:$("wa").value,about:E($("wd").value.trim())||"New on Vouch."};
W.push(w);keep("vouchW",w);$("wf").reset();$("wf").parentNode.open=false;renderWorkers()};
function words(t){return t.toLowerCase().split(/[^a-z0-9]+/).filter(function(x){return x.length>2})}
function scoreW(w,q){var s=0,why=[],qs=words(q.skill),sk=w.skill.toLowerCase(),ab=w.about.toLowerCase();
if(qs.length){if(qs.some(function(k){return sk.indexOf(k)>-1})){s+=50;why.push("Skill match: "+w.skill)}else if(qs.some(function(k){return ab.indexOf(k)>-1})){s+=30;why.push("Skill mentioned in their profile")}else return null}else s+=25;
var as=words(q.area),wa=w.area.toLowerCase();
if(as.length){if(as.some(function(k){return wa.indexOf(k)>-1})){s+=20;why.push("Based in "+w.area)}}else s+=10;
if(q.min){if(w.exp>=q.min){s+=20;why.push(w.exp+" years experience (you need "+q.min+"+)")}else s+=Math.round(20*w.exp/q.min)}else{s+=10;if(w.exp>=5)why.push(w.exp+" years experience")}
if(q.av){var ok=q.av==="Available now"?w.avail==="Available now":w.avail!=="Open to offers";if(ok){s+=10;why.push("Availability: "+w.avail)}}else s+=5;
return {w:w,s:Math.min(100,s),why:why}}
function fillJobs(){$("mj").innerHTML='<option value="">Choose a job (optional)</option>'+J.map(function(j){return '<option value="'+j.id+'">'+j.title+' at '+j.co+'</option>'}).join("")}
$("mj").onchange=function(){var j=J.filter(function(x){return x.id===$("mj").value})[0];if(j){$("ms").value=j.title.replace(/&amp;/g,"&");$("ml").value=j.loc==="Not stated"?"":j.loc}};
$("mf").onsubmit=function(e){e.preventDefault();var q={skill:$("ms").value.trim(),area:$("ml").value.trim(),min:parseInt($("mx").value,10)||0,av:$("mv").value};
var r=W.map(function(w){return scoreW(w,q)}).filter(function(x){return x}).sort(function(a,b){return b.s-a.s}).slice(0,5),m=$("mres");m.hidden=false;
if(!r.length){m.innerHTML='<p style="color:var(--muted);margin:0">No close matches yet. Try fewer requirements, or post your job so workers can find you.</p>';return}
m.innerHTML='<h3 style="margin-bottom:10px">Top matches</h3>'+r.map(function(x){var w=x.w,lab=x.s>=80?"Strong match":x.s>=55?"Good match":"Possible match";
return '<div class="card" style="cursor:default;margin-bottom:12px"><div class="row" style="margin-top:0"><h3><a href="#worker-'+slug(w.name)+'" style="text-decoration:none">'+w.name+'</a></h3><span class="badge gold">'+x.s+'% · '+lab+'</span></div><div style="color:var(--muted);font-size:14px">'+w.skill+', '+w.exp+' yrs, '+w.area+'</div><ul style="margin:8px 0;padding-left:18px;font-size:14px">'+x.why.map(function(t){return '<li>'+t+'</li>'}).join("")+'</ul><div class="row"><span class="badge">'+w.avail+'</span><button class="btn ghost contact" type="button" style="padding:6px 12px">Contact</button></div></div>'}).join("");
[].forEach.call(m.querySelectorAll(".contact"),function(b){b.onclick=function(){startChat(E(b.closest(".card").querySelector("h3").textContent),"Worker")}})};
var chatId="";
function convs(){try{return JSON.parse(localStorage.getItem("vouchC")||"[]")}catch(x){return[]}}
function updMsg(){var n=convs().reduce(function(s,c){return s+(c.un||0)},0);$("msgb").textContent=n?"Messages ("+n+")":"Messages"}
function saveC(c){try{localStorage.setItem("vouchC",JSON.stringify(c))}catch(x){}updMsg()}
function slug(t){return t.toLowerCase().replace(/&amp;/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"chat"}
function startChat(name,sub){var C=convs(),id=slug(name);if(!C.some(function(x){return x.id===id})){if(!canSend())return;C.unshift({id:id,name:name,sub:sub,msgs:[],un:0});saveC(C)}location.hash="chat-"+id}
function replyFor(sub){if(sub.indexOf("Employer")===0)return "Thanks for getting in touch. Please send your CV through the Apply form and we’ll review it.";if(sub==="Worker")return "Hi, thanks for reaching out. I’m interested. What are the hours and pay?";return "Thanks for your message! I can help. Could you tell me a bit more about what you need and when?"}
function renderInbox(){var C=convs();$("cempty").hidden=C.length>0;
$("clist").innerHTML=C.map(function(c){var l=c.msgs[c.msgs.length-1];return '<button class="card" data-c="'+c.id+'" style="margin-bottom:10px"><div class="row" style="margin-top:0"><h3>'+c.name+'</h3>'+(c.blocked?'<span class="badge" style="background:var(--line);color:var(--muted)">Blocked</span>':c.un?'<span class="badge gold">'+c.un+' new</span>':'')+'</div><div class="trade">'+c.sub+'</div><p style="margin:6px 0 0;color:var(--muted);font-size:14px">'+(l?l.t:"No messages yet")+'</p></button>'}).join("");
[].forEach.call($("clist").children,function(b){b.onclick=function(){location.hash="chat-"+b.dataset.c}})}
function renderChat(id){var C=convs(),c=C.filter(function(x){return x.id===id})[0];if(!c)return false;chatId=id;if(c.un){c.un=0;saveC(C)}
$("cname").innerHTML=c.name;$("csub").innerHTML=c.sub;$("cblocked").hidden=!c.blocked;$("cf").hidden=!!c.blocked;$("ct").disabled=!paid();$("ct").placeholder=paid()?"Write a message…":"Upgrade your plan to send messages";$("clock").hidden=paid();$("cblk").textContent=c.blocked?"Unblock":"Block";
$("cmsgs").innerHTML=c.msgs.length?c.msgs.map(function(m){return '<div class="bub '+(m.f==="me"?"me":m.f==="sys"?"sys":"them")+'">'+m.t+(m.auto?'<small>Automatic demo reply</small>':'')+'</div>'}).join(""):'<p style="color:var(--muted);text-align:center">Say hello to start the conversation.</p>';
$("cmsgs").scrollTop=$("cmsgs").scrollHeight;return true}
$("cf").onsubmit=function(e){e.preventDefault();if(!canSend())return;var t=$("ct").value.trim();if(!t)return;var C=convs(),c=C.filter(function(x){return x.id===chatId})[0];if(!c||c.blocked)return;
var mk=mask(t);c.msgs.push({f:"me",t:E(mk.t)});if(mk.hit)c.msgs.push({f:"sys",t:"Phone numbers and emails are hidden in chats for your safety."});saveC(C);$("ct").value="";renderChat(chatId);var id=chatId;
setTimeout(function(){var C2=convs(),c2=C2.filter(function(x){return x.id===id})[0];if(!c2||c2.blocked)return;c2.msgs.push({f:"them",t:replyFor(c2.sub),auto:true});var v=location.hash==="#chat-"+id;if(!v){c2.un=(c2.un||0)+1;if(user)notify(myKey(),"msg","",id+"|"+c2.name)}saveC(C2);if(v)renderChat(id)},1500)};
updMsg();
function mask(t){var hit=false,o=t.replace(/[^\s@]+@[^\s@]+\.[^\s@]+/g,function(){hit=true;return "[hidden]"}).replace(/\+?\d[\d\s().\-]{6,}\d/g,function(){hit=true;return "[hidden]"});return {t:o,hit:hit}}
var rtg="";
function openReport(t){rtg=t;$("rtarget").textContent="About: "+t.replace(/&amp;/g,"&");$("rpf").hidden=false;$("rdone").hidden=true;$("rclose").hidden=true;$("rpf").reset();if($("rd").showModal)$("rd").showModal();else $("rd").setAttribute("open","")}
function closeReport(){if($("rd").close)$("rd").close();else $("rd").removeAttribute("open")}
$("rcancel").onclick=closeReport;$("rclose").onclick=closeReport;
$("rpf").onsubmit=function(e){e.preventDefault();keep("vouchRep",{about:rtg,why:$("rr2").value,note:E($("rn2").value.trim()),date:new Date().toLocaleDateString()});$("rpf").hidden=true;$("rdone").hidden=false;$("rclose").hidden=false};
$("crep").onclick=function(){openReport($("cname").textContent)};
$("cblk").onclick=function(){var C=convs(),c=C.filter(function(x){return x.id===chatId})[0];if(!c)return;c.blocked=!c.blocked;saveC(C);renderChat(chatId)};
function renderProfile(){$("pout").hidden=!!user;$("pin").hidden=!user;if(!user)return;
var u=user,biz=u.role==="provider",mine=P.filter(function(p){return p.id.indexOf("new-")===0}),jobs=J.filter(function(j){return j.id.indexOf("new-")===0}),sv=P.filter(function(p){return favs.indexOf(p.id)>-1});
var pa=$("pfav");pa.style.backgroundImage=u.pic?"url("+u.pic+")":"";pa.style.backgroundSize="cover";pa.textContent=u.pic?"":(u.name[0]||"?");$("pfchg").textContent=u.pic?"Change photo":"Add photo";$("pfrm").hidden=!u.pic;if(u.pic){pa.dataset.full=u.picFull||u.pic;pa.tabIndex=0}else{delete pa.dataset.full;pa.removeAttribute("tabindex")}$("pfname").textContent=u.name;$("pfrole").textContent=biz?"Business":"Client";$("pfmeta").textContent=(u.company?u.company+" \u00b7 ":"")+u.email+(u.tel?" \u00b7 "+u.tel:"")+" \u00b7 Plan: "+planName(u.plan);
var st=biz?[[mine.length,"listings"],[jobs.length,"jobs posted"],[apps().length,"applications received"],[convs().length,"conversations"]]:[[sv.length,"saved professionals"],[apps().length,"applications sent"],[convs().length,"conversations"]];
st.push([fcnt(myKey()),"followers"],[gcnt(myKey()),"following"]);$("pfstats").innerHTML=st.map(function(x){return '<div class="stat"><b>'+x[0]+'</b><span>'+x[1]+'</span></div>'}).join("");
$("pa4l").innerHTML='<p style="margin:0 0 12px"><a href="#member-'+hid(u.email)+'">View my public profile</a></p>'+lists(myKey());$("pa1").hidden=!biz;$("pa2").hidden=!biz;
$("pa1l").innerHTML=mine.length?mine.map(function(p){return '<div class="svc"><a href="#provider-'+p.id+'">'+p.name+'</a><span>'+p.trade+'</span></div>'}).join(""):'<p style="margin:0;color:var(--muted)">No listings yet. <a href="#join">List your business</a></p>';
$("pa2l").innerHTML=jobs.length?jobs.map(function(j){return '<div class="svc"><a href="#job-'+j.id+'">'+j.title+'</a><span>'+j.type+'</span></div>'}).join(""):'<p style="margin:0;color:var(--muted)">No jobs yet. <a href="#postjob">Post a job</a></p>';
$("pa3l").innerHTML=sv.length?sv.map(function(p){return '<div class="svc"><a href="#provider-'+p.id+'">'+p.name+'</a><span>'+p.trade+'</span></div>'}).join(""):'<p style="margin:0;color:var(--muted)">Tap the heart on a professional to save them here.</p>';
$("pfco").parentNode.hidden=!biz;$("pfem").value=u.email;$("pfn").value=u.name;$("pft").value=u.tel||"";$("pfco").value=u.company||"";$("pfab").value=u.about||"";$("pfok").hidden=true;$("pferr").hidden=true}
function pfErr(m){$("pferr").textContent=m;$("pferr").hidden=false;$("pfok").hidden=true}
$("pff").onsubmit=function(e){e.preventDefault();if(!user)return;var tel=$("pft").value.trim(),pk=normPh(tel),A=accts();
if(!pk)return pfErr("Enter a valid phone number.");
if(A.some(function(a){return a.email!==user.email&&a.phone===pk}))return pfErr("That phone number belongs to another account.");
var a=A.filter(function(x){return x.email===user.email})[0];if(!a)return;
a.name=$("pfn").value.trim();a.tel=tel;a.phone=pk;a.company=$("pfco").value.trim();a.about=$("pfab").value.trim();
try{localStorage.setItem("vouchA",JSON.stringify(A))}catch(x){}
setUser(a);renderProfile();$("pfok").hidden=false};
$("pfout").onclick=function(){setUser(null);location.hash="home"};
var dbp=null;
function openDB(){return dbp||(dbp=new Promise(function(res){try{var r=indexedDB.open("vouch",1);r.onupgradeneeded=function(){r.result.createObjectStore("m")};r.onsuccess=function(){res(r.result)};r.onerror=function(){res(null)}}catch(x){res(null)}}))}
function mPut(id,b){return openDB().then(function(d){if(!d)return false;return new Promise(function(res){try{var t=d.transaction("m","readwrite");t.objectStore("m").put(b,id);t.oncomplete=function(){res(true)};t.onerror=function(){res(false)}}catch(x){res(false)}})})}
function mGet(id){return openDB().then(function(d){if(!d)return null;return new Promise(function(res){try{var q=d.transaction("m").objectStore("m").get(id);q.onsuccess=function(){res(q.result||null)};q.onerror=function(){res(null)}}catch(x){res(null)}})})}
function mDel(id){openDB().then(function(d){if(d){try{d.transaction("m","readwrite").objectStore("m").delete(id)}catch(x){}}})}
function loadImg(f,fn){return new Promise(function(res){var u=URL.createObjectURL(f),im=new Image();im.onload=function(){URL.revokeObjectURL(u);res(fn(im))};im.onerror=function(){res(null)};im.src=u})}
function shrink(f){return loadImg(f,function(im){var s=Math.min(1,1000/Math.max(im.width,im.height)),c=document.createElement("canvas");c.width=Math.round(im.width*s);c.height=Math.round(im.height*s);c.getContext("2d").drawImage(im,0,0,c.width,c.height);return new Promise(function(r){c.toBlob(function(b){r(b||f)},"image/jpeg",.82)})}).then(function(b){return b||f})}
function avatarData(f){return loadImg(f,function(im){var n=Math.min(im.width,im.height),c=document.createElement("canvas");c.width=c.height=200;c.getContext("2d").drawImage(im,(im.width-n)/2,(im.height-n)/2,n,n,0,0,200,200);var s=Math.min(1,900/Math.max(im.width,im.height)),c2=document.createElement("canvas");c2.width=Math.round(im.width*s);c2.height=Math.round(im.height*s);c2.getContext("2d").drawImage(im,0,0,c2.width,c2.height);return {pic:c.toDataURL("image/jpeg",.8),full:c2.toDataURL("image/jpeg",.85)}})}
$("pfph").onchange=function(){var f=this.files[0];this.value="";if(!f||!user)return;if(!/^image\//.test(f.type))return pfErr("Please choose an image file.");
avatarData(f).then(function(d){if(!d)return pfErr("That image couldn’t be read.");var A=accts(),a=A.filter(function(x){return x.email===user.email})[0];if(!a)return;a.pic=d.pic;a.picFull=d.full;try{localStorage.setItem("vouchA",JSON.stringify(A))}catch(x){return pfErr("Couldn’t save that photo.")}setUser(a);renderProfile();$("pfok").hidden=false})};
var pfl="all";
function posts(){try{return JSON.parse(localStorage.getItem("vouchPosts")||"[]")}catch(x){return[]}}
function liked(){try{return JSON.parse(localStorage.getItem("vouchLk")||"[]")}catch(x){return[]}}
function poErr(m){$("poe").textContent=m;$("poe").hidden=false;$("pob").disabled=false}
function savePosts(l){try{localStorage.setItem("vouchPosts",JSON.stringify(l))}catch(x){poErr("Couldn’t save: browser storage is full.")}}
var SP=[{id:"s1",by:"Sparkle Homes Cleaning",role:"provider",to:"provider-sparkle-homes",cap:"Before and after: a full deep clean of a 3-bedroom flat. Already booked again for next month!",icon:"\u2728",ago:"2 days ago",l:24,sample:1},{id:"s2",by:"Cornerstone Realty",role:"provider",to:"provider-cornerstone-realty",cap:"New listing day. Come and see our 2-bed apartment with balcony.",icon:"\ud83c\udfd9\ufe0f",ago:"4 days ago",l:41,sample:1},{id:"s3",by:"Naa A.",role:"customer",cap:"Our newly painted living room, thanks to the team I found here.",icon:"\ud83c\udfa8",ago:"1 week ago",l:12,sample:1},{id:"s4",by:"Kojo A.",role:"worker",to:"worker-kojo-a",cap:"Finished rewiring a small bakery this week. Safe, tidy and on time.",icon:"⚡",ago:"3 days ago",l:18,sample:1},{id:"s5",by:"Efua M.",role:"worker",to:"worker-efua-m",cap:"Month-end reporting done for three small shops. Clean books make tax season easy.",icon:"📊",ago:"5 days ago",l:9,sample:1}];
var openCom={};
function comAll(){try{return JSON.parse(localStorage.getItem("vouchCom")||"{}")}catch(x){return{}}}
function saveCom(c){try{localStorage.setItem("vouchCom",JSON.stringify(c))}catch(x){}}
var SC={s1:[{by:"Ama",t:"Looks amazing! Do you clean offices too?",ago:"1 day ago"},{by:"Kofi",t:"Booked you for next week.",ago:"1 day ago"}],s2:[{by:"Esi",t:"Is it still available?",ago:"3 days ago"}],s3:[{by:"Yaw",t:"Great colour choice!",ago:"5 days ago"}],s4:[{by:"Abena",t:"Do you take weekend jobs?",ago:"2 days ago"}],s5:[{by:"Daniel",t:"Helpful, thank you for sharing.",ago:"4 days ago"}]};
function pKey(p){if(p.to){if(p.to.indexOf("worker-")===0)return "w:"+p.to.slice(7);if(p.to.indexOf("provider-")===0)return "p:"+p.to.slice(9);return ""}return p.email?"u:"+hid(p.email):""}
function comHTML(p){var L=(SC[p.id]||[]).concat(comAll()[p.id]||[]),all=!!openCom[p.id],sh=all?L:L.slice(-3);
return '<div class="coms"><div class="chd">Comments ('+L.length+')</div>'+(L.length>3?'<button class="back cmore" data-id="'+p.id+'" type="button">'+(all?'Show fewer':'View all '+L.length+' comments')+'</button>':'')+sh.map(function(c){return '<div class="cmt"><b>'+c.by+'</b> '+c.t+'<small>'+(c.ago||new Date(c.at).toLocaleDateString())+'</small></div>'}).join("")+(L.length?'':'<p class="cnone">No comments yet. Be the first.</p>')+'<form class="cform2" data-p="'+p.id+'"><input placeholder="'+(user?'Write a comment\u2026':'Sign in to comment')+'" aria-label="Comment" maxlength="300"><button class="btn main" type="submit">Post</button></form></div>'}
function postHTML(p){var nm=E(p.co||p.by),lnk=p.to||(p.email?"member-"+hid(p.email):""),lk=liked().indexOf(p.id)>-1,ac=(accts().filter(function(x){return x.email===p.email})[0]||p),pc=ac.pic,
av=pc?'<img class="pav" alt="Profile photo" tabindex="0" data-full="'+(ac.picFull||pc)+'" src="'+pc+'">':'<div class="pav" style="background:var(--ink);color:var(--bg)">'+(nm[0]||"?")+'</div>',
k=pKey(p),fo=k&&isF(k),plus=k&&k!==myKey()?'<button class="plus'+(fo?' on':'')+'" data-k="'+k+'" type="button" aria-label="'+(fo?'Unfollow ':'Follow ')+nm+'">'+(fo?'\u2713':'+')+'</button>':'';
return '<article class="panel post"><div class="ph2"><div>'+(lnk?'<a href="#'+lnk+'" style="text-decoration:none"><b>'+nm+'</b></a>':'<b>'+nm+'</b>')+'<div style="color:var(--muted);font-size:13px">'+(p.role==="provider"?"Business":p.role==="worker"?"Worker":"Client")+' \u00b7 '+(p.ago||new Date(p.at).toLocaleDateString())+(p.sample?' \u00b7 sample':'')+'</div></div><div class="avw">'+av+plus+'</div></div>'+(p.cap?'<p style="margin:0 0 10px">'+p.cap+'</p>':'')+(p.icon?'<div class="ph" style="height:200px;font-size:64px">'+p.icon+'</div>':'')+(p.media&&p.media.length?'<div class="pmed">'+p.media.map(function(m){return '<div class="pm" data-m="'+m.id+'" data-k="'+m.k+'">Loading\u2026</div>'}).join("")+'</div>':'')+comHTML(p)+'<div class="row"><button class="btn ghost like" data-id="'+p.id+'" type="button" style="padding:6px 14px'+(lk?';color:#d63a4a;border-color:#d63a4a':'')+'">\u2665 '+((p.l||0)+(lk?1:0))+'</button>'+(user&&p.email===user.email?'<button class="back delp" data-id="'+p.id+'" type="button">Delete</button>':'<button class="back repp" data-by="'+encodeURIComponent(p.co||p.by)+'" type="button">Report</button>')+'</div></article>'}

function renderPosts(){$("poout").hidden=true;$("pof").hidden=false;if(!user)poErr("Sign in to post your work.");else $("poe").hidden=true;
var all=posts().concat(SP).filter(function(p){return pfl==="all"||p.role===pfl});
$("pfeed").innerHTML=all.length?all.map(postHTML).join(""):'<p style="color:var(--muted)">No posts here yet.</p>';
[].forEach.call($("pfeed").querySelectorAll(".pm"),function(d){mGet(d.dataset.m).then(function(b){if(!b){d.textContent="Media unavailable";return}var u=URL.createObjectURL(b);d.textContent="";if(d.dataset.k==="vid"){var v=document.createElement("video");v.controls=true;v.preload="metadata";v.playsInline=true;v.src=u;d.appendChild(v)}else{var i=document.createElement("img");i.alt="Photo shared in a post";i.src=u;d.appendChild(i)}})})}
$("pfeed").onclick=function(e){var b=e.target.closest("button");if(!b)return;
if(b.classList.contains("like")){var k=liked(),i=k.indexOf(b.dataset.id);if(i>-1)k.splice(i,1);else k.push(b.dataset.id);try{localStorage.setItem("vouchLk",JSON.stringify(k))}catch(x){}renderPosts()}
else if(b.classList.contains("delp")){var L=posts(),p=L.filter(function(x){return x.id===b.dataset.id})[0];if(p){(p.media||[]).forEach(function(m){mDel(m.id)});savePosts(L.filter(function(x){return x.id!==p.id}));renderPosts()}}
else if(b.classList.contains("repp")){openReport("Post by "+decodeURIComponent(b.dataset.by))}};
[].forEach.call(document.querySelectorAll("#pfilt .chip"),function(b){b.onclick=function(){pfl=b.dataset.f;[].forEach.call(document.querySelectorAll("#pfilt .chip"),function(x){x.setAttribute("aria-pressed",String(x===b))});renderPosts()}});
$("pof").onsubmit=function(e){e.preventDefault();if(!user){location.hash="account";return}$("poe").hidden=true;var cap=$("poc").value.trim(),fs=[].slice.call($("pom").files).slice(0,4);
if(!cap&&!fs.length)return poErr("Write something or add a photo or video.");
for(var i=0;i<fs.length;i++){var im=/^image\//.test(fs[i].type),vd=/^video\//.test(fs[i].type);if(!im&&!vd)return poErr("Only photos and videos can be added.");if(vd&&fs[i].size>26214400)return poErr("Videos must be under 25 MB.")}
$("pob").disabled=true;
Promise.all(fs.map(function(f,i){var id="m"+Date.now().toString(36)+i,im=/^image\//.test(f.type);return (im?shrink(f):Promise.resolve(f)).then(function(b){return mPut(id,b).then(function(ok){return ok?{id:id,k:im?"img":"vid"}:null})})})).then(function(ms){ms=ms.filter(Boolean);
var L=posts();L.unshift({id:"p"+Date.now().toString(36),by:user.name,co:user.company||"",email:user.email,role:user.role,pic:user.pic||"",cap:E(cap),media:ms,at:Date.now()});savePosts(L);
$("pof").reset();$("pob").disabled=false;if(ms.length<fs.length)poErr("Some files couldn’t be saved in this browser.");renderPosts()})};
$("pfchg").onclick=function(){$("pfph").click()};
$("pfrm").onclick=function(){if(!user)return;var A=accts(),a=A.filter(function(x){return x.email===user.email})[0];if(!a)return;delete a.pic;delete a.picFull;try{localStorage.setItem("vouchA",JSON.stringify(A))}catch(x){}setUser(a);renderProfile();$("pfok").hidden=false};
function vr(p){return p.v==="premium"?2:p.v==="verified"?1:0}
function vBadge(p){if(p.v==="premium")return '<span class="badge gold">\u2713 Premium Verified</span>';if(p.v==="verified")return '<span class="badge">\u2713 Verified</span>';return '<span class="badge" style="background:var(--line);color:var(--muted)">Contact confirmed</span>'}
$("vonly").onchange=render;
var curEnt=null;
function hid(s){var h=5381;for(var i=0;i<s.length;i++)h=((h<<5)+h+s.charCodeAt(i))|0;return "m"+(h>>>0).toString(36)}
function FL(){try{return JSON.parse(localStorage.getItem("vouchFol")||"[]")}catch(x){return[]}}
function myKey(){return user?"u:"+hid(user.email):""}
function seedN(k){var h=0;for(var i=0;i<k.length;i++)h=(h*31+k.charCodeAt(i))>>>0;return [h%40+5,h%20+3]}
function fbase(k){if(k.indexOf("w:")===0){var w=W.filter(function(x){return "w:"+slug(x.name)===k})[0];if(w&&!w.mine)return seedN(k)}
if(k.indexOf("p:")===0){var p=P.filter(function(x){return "p:"+x.id===k})[0];if(p&&p.id.indexOf("new-")!==0)return seedN(k)}return [0,0]}
function fcnt(k){return fbase(k)[0]+FL().filter(function(x){return x.b===k}).length}
function gcnt(k){return fbase(k)[1]+FL().filter(function(x){return x.a===k}).length}
function isF(k){var m=myKey();return !!m&&FL().some(function(x){return x.a===m&&x.b===k})}
function toggleF(k,after){if(!user){location.hash="account";return}var m=myKey();if(k===m)return;var L=FL(),i=-1;L.forEach(function(x,j){if(x.a===m&&x.b===k)i=j});if(i>-1)L.splice(i,1);else{L.push({a:m,b:k});notify(nt(k),"follow",m)}try{localStorage.setItem("vouchFol",JSON.stringify(L))}catch(x){}if(after)after()}
function fbtn(b,k){var on=isF(k);b.textContent=(on?"Following":"Follow")+" \u00b7 "+fcnt(k);b.classList.toggle("main",!on);b.classList.toggle("ghost",on)}
function whoIs(k){if(k.indexOf("u:")===0){var id=k.slice(2),a=accts().filter(function(x){return hid(x.email)===id})[0];return {t:E(a?(a.company||a.name):"Member"),h:"member-"+id}}
if(k.indexOf("w:")===0){var s=k.slice(2),w=W.filter(function(x){return slug(x.name)===s})[0];return {t:w?w.name:"Worker",h:"worker-"+s}}
var i=k.slice(2),p=P.filter(function(x){return x.id===i})[0];return {t:p?p.name:"Business",h:"provider-"+i}}
function colHTML(t,arr,base){return '<div class="panel"><h2>'+t+' ('+(arr.length+base)+')</h2>'+(arr.length?arr.map(function(k){var w=whoIs(k);return '<div class="svc"><a href="#'+w.h+'">'+w.t+'</a></div>'}).join(""):'<p style="margin:0;color:var(--muted)">No one yet.</p>')+(base?'<p style="margin:8px 0 0;font-size:13px;color:var(--muted)">Includes '+base+' sample accounts.</p>':'')+'</div>'}
function lists(k){var a=FL().filter(function(x){return x.b===k}).map(function(x){return x.a}),b=FL().filter(function(x){return x.a===k}).map(function(x){return x.b}),n=fbase(k);return '<div class="two">'+colHTML("Followers",a,n[0])+colHTML("Following",b,n[1])+'</div>'}
function ent(h){if(h.indexOf("worker-")===0){var s=h.slice(7),w=W.filter(function(x){return slug(x.name)===s})[0];if(!w)return null;return {key:"w:"+s,name:w.name,sub:w.skill+", "+w.exp+" yrs \u00b7 "+w.area+" \u00b7 "+w.avail,badge:"Worker",about:w.about,pic:"",match:function(p){return w.email?p.email===w.email:p.by===w.name}}}
if(h.indexOf("member-")===0){var id=h.slice(7),a=accts().filter(function(x){return hid(x.email)===id})[0];if(!a)return null;return {key:"u:"+id,name:E(a.company||a.name),sub:a.company?E(a.name):"",badge:a.role==="provider"?"Business":"Client",about:E(a.about||""),pic:a.pic||"",full:a.picFull||a.pic||"",match:function(p){return p.email===a.email}}}return null}
function hydrate(root){[].forEach.call(root.querySelectorAll(".pm"),function(d){mGet(d.dataset.m).then(function(b){if(!b){d.textContent="Media unavailable";return}var u=URL.createObjectURL(b);d.textContent="";if(d.dataset.k==="vid"){var v=document.createElement("video");v.controls=true;v.preload="metadata";v.playsInline=true;v.src=u;d.appendChild(v)}else{var i=document.createElement("img");i.alt="Photo shared in a post";i.src=u;d.appendChild(i)}})})}
function renderEntity(e){var av=$("enav");av.style.backgroundImage=e.pic?"url("+e.pic+")":"";av.style.backgroundSize="cover";av.textContent=e.pic?"":(e.name[0]||"?");if(e.full){av.dataset.full=e.full;av.tabIndex=0}else{delete av.dataset.full;av.removeAttribute("tabindex")}
$("enname").innerHTML=e.name;$("enbadge").textContent=e.badge;$("ensub").innerHTML=e.sub;
var ps=posts().concat(SP).filter(e.match);
$("enstats").innerHTML=[[fcnt(e.key),"followers"],[gcnt(e.key),"following"],[ps.length,"posts"]].map(function(x){return '<div class="stat"><b>'+x[0]+'</b><span>'+x[1]+'</span></div>'}).join("");
$("enfol").hidden=e.key===myKey();fbtn($("enfol"),e.key);$("enfol").onclick=function(){toggleF(e.key,function(){renderEntity(e)})};
$("enmsg").onclick=function(){startChat(e.name,e.badge)};
$("enabout").innerHTML=e.about||"No bio yet.";$("enlists").innerHTML=lists(e.key);
$("enposts").innerHTML=ps.length?ps.map(postHTML).join(""):'<p style="color:var(--muted)">No posts yet.</p>';hydrate($("enposts"))}
function postAct(e,after){var b=e.target.closest("button");if(!b)return;
if(b.classList.contains("plus")){toggleF(b.dataset.k,after)}
else if(b.classList.contains("cmore")){openCom[b.dataset.id]=!openCom[b.dataset.id];after()}
else if(b.classList.contains("like")){var k=liked(),i=k.indexOf(b.dataset.id);if(i>-1)k.splice(i,1);else k.push(b.dataset.id);try{localStorage.setItem("vouchLk",JSON.stringify(k))}catch(x){}if(i<0&&user){var lp=posts().filter(function(x){return x.id===b.dataset.id})[0];if(lp&&lp.email)notify("u:"+hid(lp.email),"like",myKey(),b.dataset.id)}after()}
else if(b.classList.contains("delp")){var L=posts(),p=L.filter(function(x){return x.id===b.dataset.id})[0];if(p){(p.media||[]).forEach(function(m){mDel(m.id)});savePosts(L.filter(function(x){return x.id!==p.id}));after()}}
else if(b.classList.contains("repp")){openReport("Post by "+decodeURIComponent(b.dataset.by))}}
$("pfeed").onclick=function(e){postAct(e,renderPosts)};
$("enposts").onclick=function(e){postAct(e,function(){renderEntity(curEnt)})};
function comSubmit(e,after){var f=e.target.closest(".cform2");if(!f)return;e.preventDefault();if(!user){location.hash="account";return}
var t=f.querySelector("input").value.trim();if(!t)return;var C=comAll(),id=f.dataset.p;(C[id]=C[id]||[]).push({by:E(user.company||user.name),t:E(t),at:Date.now()});saveCom(C);openCom[id]=true;
var pp=posts().filter(function(x){return x.id===id})[0];if(pp&&pp.email)notify("u:"+hid(pp.email),"comment",myKey(),id);after()}
$("pfeed").onsubmit=function(e){comSubmit(e,renderPosts)};
$("enposts").onsubmit=function(e){comSubmit(e,function(){renderEntity(curEnt)})};
function NL(){try{return JSON.parse(localStorage.getItem("vouchN")||"[]")}catch(x){return[]}}
function myN(){var m=myKey();return m?NL().filter(function(n){return n.to===m}):[]}
function updNot(){var b=$("notb");$("acsum").textContent=user?"Hi, "+user.name.split(" ")[0]:"Sign in";b.hidden=!user;if(!user)return;var n=myN().filter(function(x){return !x.read}).length;b.textContent=n?"Alerts ("+n+")":"Alerts"}
function saveN(l){try{localStorage.setItem("vouchN",JSON.stringify(l.slice(0,100)))}catch(x){}updNot()}
function notify(to,type,from,extra){if(!to||to===from)return;var L=NL();L.unshift({to:to,type:type,from:from,x:extra||"",at:Date.now(),read:false});saveN(L)}
function nInfo(n){var w=n.from?whoIs(n.from):{t:"Someone",h:"home"},x=n.x||"",q=x.split("|");
if(n.type==="welcome")return {h:"profile",t:"<b>Welcome to Vouch!</b> Complete your profile and add a photo so people can find you."};
if(n.type==="msg")return {h:"chat-"+q[0],t:"<b>"+q[1]+"</b> sent you a message"};
if(n.type==="apply")return {h:"applications",t:"<b>"+q[1]+"</b> applied for <b>"+q[0]+"</b>"};
if(n.type==="app")return {h:"jobs",t:"Your application for <b>"+q[0]+"</b> was "+(q[1]==="Shortlisted"?"shortlisted":"not successful")};
return {h:w.h,t:"<b>"+w.t+"</b> "+(n.type==="follow"?"started following you":n.type==="comment"?"commented on your post":"liked your post")}}
function welcome(u){var A=accts(),a=A.filter(function(x){return x.email===u.email})[0];if(a&&!a.welcomed){a.welcomed=1;try{localStorage.setItem("vouchA",JSON.stringify(A))}catch(x){return}notify("u:"+hid(a.email),"welcome","system")}}
function nt(k){if(k.indexOf("u:")===0)return k;if(k.indexOf("w:")===0){var w=W.filter(function(x){return "w:"+slug(x.name)===k})[0];return w&&w.email?"u:"+hid(w.email):""}return ""}
function renderNot(){$("notout").hidden=!!user;$("notin").hidden=!user;if(!user)return;var L=myN();$("notempty").hidden=L.length>0;
$("notlist").innerHTML=L.map(function(n){var i=nInfo(n);return '<a class="panel" href="#'+i.h+'" style="display:block;text-decoration:none;color:inherit;margin-bottom:10px;'+(n.read?'':'border-color:var(--accent);')+'">'+i.t+'<div style="color:var(--muted);font-size:13px;margin-top:2px">'+new Date(n.at).toLocaleString()+(n.read?'':' \u00b7 New')+'</div></a>'}).join("");
var A=NL(),m=myKey();A.forEach(function(n){if(n.to===m)n.read=true});saveN(A)}
$("notclr").onclick=function(){var m=myKey();saveN(NL().filter(function(n){return n.to!==m}));renderNot()};
updNot();
function navMark(h){var t="";if(h==="home"||h==="join"||/^(provider|property)-/.test(h))t="#home";else if(h==="jobs"||h==="workers"||h==="postjob"||h==="applications"||/^(job|worker)-/.test(h))t="#jobs";else if(h==="posts"||/^member-/.test(h))t="#posts";else if(h==="pricing")t="#pricing";
[].forEach.call(document.querySelectorAll(".mainnav a"),function(a){a.classList.toggle("on",a.getAttribute("href")===t)})}
document.addEventListener("click",function(e){var m=$("am");if(m.open&&(!m.contains(e.target)||e.target.closest(".menu a,.menu button")))m.open=false});
document.addEventListener("keydown",function(e){if(e.key==="Escape")$("am").open=false});
function openPhoto(u){$("lbimg").src=u;if($("lb").showModal)$("lb").showModal();else $("lb").setAttribute("open","")}
$("lb").onclick=function(e){if(e.target!==$("lbimg")){if($("lb").close)$("lb").close();else $("lb").removeAttribute("open")}};
document.addEventListener("click",function(e){var t=e.target.closest&&e.target.closest("[data-full]");if(t&&t.dataset.full)openPhoto(t.dataset.full)});
document.addEventListener("keydown",function(e){if(e.key==="Enter"){var t=e.target.closest&&e.target.closest("[data-full]");if(t&&t.dataset.full)openPhoto(t.dataset.full)}});
function setTheme(t,save){var r=document.documentElement;if(t==="light"||t==="dark")r.setAttribute("data-theme",t);else{r.removeAttribute("data-theme");t="auto"}
if(save){try{if(t==="auto")localStorage.removeItem("vouchTheme");else localStorage.setItem("vouchTheme",t)}catch(x){}}
[].forEach.call(document.querySelectorAll(".themebox button"),function(b){b.setAttribute("aria-pressed",String(b.dataset.th===t))})}
[].forEach.call(document.querySelectorAll(".themebox button"),function(b){b.onclick=function(){setTheme(b.dataset.th,true)}});
var st0="auto";try{st0=localStorage.getItem("vouchTheme")||"auto"}catch(x){}setTheme(st0,false);
$("sort").onchange=render;
$("go").onclick=function(){render();$("list").scrollIntoView({behavior:"smooth"})};
function show(id){["home","provider","property","join","account","pricing","jobs","job","postjob","workers","applications","messages","chat","profile","posts","entity","notifications"].forEach(function(s){$(s).hidden=s!==id})}
function route(){
var h=location.hash.slice(1)||"home";navMark(h);$("am").open=false;
if(h==="jobs"){renderJobs();show("jobs");window.scrollTo(0,0);document.title="Jobs — Vouch";return}
if(h==="workers"){renderWorkers();fillJobs();$("mres").hidden=true;show("workers");window.scrollTo(0,0);document.title="Find workers — Vouch";return}
if(h==="notifications"){renderNot();show("notifications");window.scrollTo(0,0);document.title="Alerts — Vouch";return}
if(h.indexOf("worker-")===0||h.indexOf("member-")===0){var en=ent(h);if(en){curEnt=en;renderEntity(en);show("entity");window.scrollTo(0,0);document.title="Profile — Vouch";return}}
if(h==="posts"){renderPosts();show("posts");window.scrollTo(0,0);document.title="Showcase — Vouch";return}
if(h==="profile"){renderProfile();show("profile");window.scrollTo(0,0);document.title="My profile — Vouch";return}
if(h==="messages"){renderInbox();show("messages");window.scrollTo(0,0);document.title="Messages — Vouch";return}
if(h.indexOf("chat-")===0){if(renderChat(h.slice(5))){show("chat");window.scrollTo(0,0);document.title="Chat — Vouch";return}}
if(h==="postjob"){show("postjob");window.scrollTo(0,0);return}
if(h==="applications"){renderApps();show("applications");window.scrollTo(0,0);document.title="Applications — Vouch";return}
if(h.indexOf("job-")===0){var jb=J.filter(function(x){return "job-"+x.id===h})[0];if(jb){$("jbav").textContent=jb.co[0];$("jbav").style.background=jb.c;$("jbtitle").innerHTML=jb.title;$("jbco").innerHTML=jb.co;$("jbfacts").innerHTML='<span>'+jb.type+'</span><span>'+jb.loc+'</span><span>'+jb.cat+'</span>';$("jbpay").innerHTML=jb.pay;$("jbdesc").innerHTML=jb.desc;$("jbreqs").innerHTML=jb.reqs.map(function(r){return '<li>'+r+'</li>'}).join("");$("jbrp").hidden=!jb.reqs.length;curJob=jb.id;$("jmsg").onclick=function(){startChat(jb.co,"Employer: "+jb.title)};$("jrep").onclick=function(){openReport(jb.title+" at "+jb.co)};$("cverr").hidden=true;$("af").reset();$("af").hidden=false;$("aok").hidden=true;if(user)$("an").value=user.name;show("job");window.scrollTo(0,0);document.title="Job — Vouch";return}}
if(h.indexOf("property-")===0){var f=findProp(h.slice(9));if(f){var r=f.r;$("xph").textContent=r.icon;$("xkind").textContent=r.kind;$("xtitle").textContent=r.title;$("xprice").textContent=r.price;
$("xfacts").innerHTML='<span>'+(r.beds?r.beds+' bed':'Land')+'</span>'+(r.baths?'<span>'+r.baths+' bath</span>':'')+'<span>'+r.size+'</span><span>'+r.area+'</span>';
$("xdesc").textContent=r.desc;$("xagent").textContent=f.p.name;$("xagent").href="#provider-"+f.p.id;$("xback").onclick=function(){location.hash="provider-"+f.p.id};
$("vf").reset();$("vf").hidden=false;$("vok").hidden=true;if(user)$("vn").value=user.name;show("property");window.scrollTo(0,0);document.title=r.title+" — Vouch";return}}
if(h.indexOf("provider-")===0){
var p=P.filter(function(x){return "provider-"+x.id===h})[0];
if(p){cur=p;$("pvbw").innerHTML=vBadge(p);fbtn($("pfol"),"p:"+p.id);$("pfol").onclick=function(){toggleF("p:"+p.id,function(){fbtn($("pfol"),"p:"+p.id)})};$("pmsg").onclick=function(){startChat(p.name,p.trade)};$("prep").onclick=function(){openReport(p.name)};var pr=p.props||[];$("pprops").hidden=!pr.length;$("pplist").innerHTML=pr.map(propCard).join("");[].forEach.call($("pplist").children,function(b){b.onclick=function(){location.hash="property-"+b.dataset.pr}});$("pav").textContent=p.name[0];$("pav").style.background=p.c;$("pname").textContent=p.name;$("ptrade").textContent=p.trade;$("prate").textContent=p.rate;$("pcount").textContent="("+p.n+" reviews)";$("pabout").textContent=p.about;
$("psvc").innerHTML=p.svc.map(function(s){return '<div class="svc"><span>'+s[0]+'</span><b>'+s[1]+'</b></div>'}).join("");
$("prev").innerHTML=p.rev.map(function(r){return '<div class="rev"><b>'+r[0]+'</b> <span class="stars">'+stars(r[2])+'</span><p>'+r[1]+'</p></div>'}).join("");$("norev").hidden=p.rev.length>0;
$("qs").innerHTML=p.svc.map(function(s){return '<option>'+s[0]+'</option>'}).join("");
$("qok").hidden=true;$("qf").hidden=false;show("provider");window.scrollTo(0,0);document.title=p.name+" — Vouch";return}
}
$("pwhy").hidden=!(h==="pricing"&&payWhy);if(h==="pricing")payWhy=false;
show(["join","account","pricing"].indexOf(h)>-1?h:"home");document.title="Vouch — Find verified local professionals";
}
$("qf").onsubmit=function(e){e.preventDefault();if(!canSend())return;$("qf").hidden=true;$("qok").hidden=false};
function store(p){try{var s=JSON.parse(localStorage.getItem("vouchP")||"[]").filter(function(x){return x.id!==p.id});s.push(p);localStorage.setItem("vouchP",JSON.stringify(s))}catch(x){}}
$("rf").onsubmit=function(e){e.preventDefault();var r=parseInt($("rr").value,10),esc=function(t){return t.replace(/</g,"&lt;")};
cur.rev.unshift([esc($("rn").value.trim()),esc($("rc").value.trim()),r]);
cur.rate=cur.n?((parseFloat(cur.rate)*cur.n+r)/(cur.n+1)).toFixed(1):String(r.toFixed(1));cur.n++;
if(cur.id.indexOf("new-")===0)store(cur);$("rf").reset();route();render()};
var user=null;
function normPh(t){if(t.indexOf("@")>-1)return "";var d=t.replace(/\D/g,"");return d.length>=7?d.slice(-9):""}
function sha(t){if(!window.crypto||!crypto.subtle)return Promise.resolve(btoa(unescape(encodeURIComponent(t))));return crypto.subtle.digest("SHA-256",new TextEncoder().encode(t)).then(function(b){return [].map.call(new Uint8Array(b),function(x){return x.toString(16).padStart(2,"0")}).join("")})}
function accts(){try{return JSON.parse(localStorage.getItem("vouchA")||"[]")}catch(x){return[]}}
function setUser(u){user=u;try{u?localStorage.setItem("vouchU",u.email):localStorage.removeItem("vouchU")}catch(x){}
$("who").hidden=!u;$("who").textContent=u?"My profile":"";
var a=$("acct");a.textContent=u?"Sign out":"Sign in";a.href=u?"#home":"#account";updNot();if(u)welcome(u);
if(u){$("qn").value=u.name;$("rn").value=u.name}}
$("acct").onclick=function(){if(user)setUser(null)};
function tab(up){$("sif").hidden=up;$("suf").hidden=!up;$("tin").setAttribute("aria-pressed",String(!up));$("tup").setAttribute("aria-pressed",String(up));$("aerr").hidden=true}
$("tin").onclick=function(){tab(false)};$("tup").onclick=function(){tab(true)};
function err(m){$("aerr").textContent=m;$("aerr").hidden=false}
$("suf").onsubmit=function(e){e.preventDefault();var em=$("ue").value.trim().toLowerCase(),tel=$("uph").value.trim(),pk=normPh(tel),A=accts();
if(!pk)return err("Enter a valid phone number so we can send your verification code.");
if(A.some(function(a){return a.email===em||(pk&&a.phone===pk)}))return err("An account with this email or phone number already exists. Sign in instead.");
sha(em+":"+$("up").value).then(function(h){var u={name:$("un").value.trim(),email:em,phone:pk,tel:tel,h:h,role:$("ur").value};pend=u;sendOtp();$("suf").hidden=true;$("otpf").hidden=false;$("otpto").textContent=tel;$("tabs").hidden=true;$("aerr").hidden=true;$("otpc").focus()})};
$("sif").onsubmit=function(e){e.preventDefault();var id=$("se").value.trim().toLowerCase(),pk=normPh(id),u0=accts().filter(function(a){return a.email===id||(pk&&a.phone===pk)})[0];
sha((u0?u0.email:id)+":"+$("sp").value).then(function(h){var u=u0&&u0.h===h?u0:null;
if(!u)return err("Email, phone number or password is incorrect.");setUser(u);$("sif").reset();location.hash="home"})};
var pend=null,otp=null,cool=0,ct=null;
function sendOtp(){var c=String(Math.floor(100000+Math.random()*900000));
if(window.crypto&&crypto.getRandomValues){c=String(100000+crypto.getRandomValues(new Uint32Array(1))[0]%900000)}
otp={c:c,exp:Date.now()+300000,tries:0};
$("demo").textContent="Demo mode: no real text message is sent. Your code is "+c;
cool=30;$("resend").disabled=true;$("resend").textContent="Resend code in 30s";clearInterval(ct);
ct=setInterval(function(){cool--;if(cool>0){$("resend").textContent="Resend code in "+cool+"s"}else{clearInterval(ct);$("resend").textContent="Resend code";$("resend").disabled=false}},1000)}
$("resend").onclick=function(){sendOtp()};
$("otpback").onclick=function(){pend=null;otp=null;clearInterval(ct);$("otpf").reset();$("otpf").hidden=true;$("suf").hidden=false;$("tabs").hidden=false;$("aerr").hidden=true};
$("otpf").onsubmit=function(e){e.preventDefault();if(!otp||!pend)return err("Your code expired. Request a new one.");
if(Date.now()>otp.exp)return err("That code has expired. Tap Resend code.");
if(otp.tries>=5)return err("Too many wrong attempts. Tap Resend code to get a new one.");
if($("otpc").value.trim()!==otp.c){otp.tries++;return err("That code is not correct.")}
var A=accts();A.push(pend);try{localStorage.setItem("vouchA",JSON.stringify(A))}catch(x){}
var u=pend;pend=null;otp=null;clearInterval(ct);setUser(u);$("suf").reset();$("otpf").reset();$("otpf").hidden=true;$("suf").hidden=false;$("tabs").hidden=false;$("aerr").hidden=true;
location.hash=u.role==="provider"?"join":"home"};
var COL=["#0e7a5f","#7a4fd1","#c2410c","#1d6fb8","#b4233b","#0f766e"];
$("jf").onsubmit=function(e){e.preventDefault();var esc=function(t){return t.replace(/</g,"&lt;")},pr=$("jp").value.trim()||"15",t=$("jt").value;
var p={id:"new-"+Date.now().toString(36),name:esc($("jn").value.trim()),trade:t,c:COL[P.length%6],rate:"New",n:0,price:"from $"+pr,about:esc($("ja").value.trim())||"New on Vouch.",svc:[[t+" service","$"+pr]],rev:[],area:esc($("jl").value.trim())};
P.push(p);store(p);render();$("jf").hidden=true;$("jok").hidden=false;$("jlink").href="#provider-"+p.id};
try{P=P.concat(JSON.parse(localStorage.getItem("vouchP")||"[]"))}catch(x){}
try{var em0=localStorage.getItem("vouchU");if(em0)setUser(accts().filter(function(a){return a.email===em0})[0]||null)}catch(x){}
window.addEventListener("hashchange",route);render();route();
