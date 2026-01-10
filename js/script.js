// SCROLL ANIMATION – 2025 STYLE
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:0.15});

document.querySelectorAll("section,.card,.services-grid div,.why div")
.forEach(el=>{
  el.classList.add("hidden");
  observer.observe(el);
});
