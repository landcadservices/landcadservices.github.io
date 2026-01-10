const btn=document.getElementById("themeToggle");
if(localStorage.theme==="dark"){
 document.body.classList.add("dark");
}
btn.onclick=()=>{
 document.body.classList.toggle("dark");
 localStorage.theme=document.body.classList.contains("dark")?"dark":"light";
};
const obs=new IntersectionObserver(e=>{
 e.forEach(i=>{
  if(i.isIntersecting){
   i.target.style.opacity=1;
   i.target.style.transform="none";
  }
 });
});

document.querySelectorAll("section,.card,.services-grid div")
.forEach(el=>{
 el.style.opacity=0;
 el.style.transform="translateY(40px)";
 obs.observe(el);
});
