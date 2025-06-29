//Animation for skill bar
const skillBars=document.querySelectorAll('.skill-progress');

const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            const width= entry.target.style.width;
            entry.target.style.width='0';
            setTimeout(()=>{
                entry.target.style.width=width;
            }, 100);

        }
    });
},{threshold:0.5});

skillBars.forEach(bar=>{
    observer.observe(bar);
});
//smooth scrolling navigation bar
document.querySelectorAll('a[href^="#"]').forEach(anchar =>{
    anchar.addEventListener('click',function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth'
        });
    });
});
    
