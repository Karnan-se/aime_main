const slides = document.querySelectorAll('.slick');
let currentSlide = 0;

// show the first slide
slides[currentSlide].classList.add('active');

// advance to the next slide every 5 seconds
setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 4000);
////////////////////////////////////////////////////////////////////////////////////uhgugjhgjh///////////////////////////////////////////////////////////////////////
const observer = new IntersectionObserver((entries)=>{
entries.forEach(function(entry){
    if(entry.isIntersecting){
        entry.target.classList.add('show');
    }else{
        entry.target.classList.remove('show');

    }

});
    
});

const hiddenelement=document.querySelectorAll('.textcl1');
hiddenelement.forEach((el)=>observer.observe(el));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



const obsever=new IntersectionObserver((entries)=>{
entries.forEach((entry)=>{
    if(entry.isIntersecting){
        entry.target.classList.add('show');
    }else{
        entry.target.classList.remove('show');
    }


});

});
const hiddern=document.querySelectorAll('.slick');
hiddern.forEach((el)=>obsever.observe(el));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const helement= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
        entry.target.classList.add('show');
         } else{
            entry.target.classList.remove('show');
         }

   
        });

});


const hidedelement=document.querySelectorAll('.textcl2');
hidedelement.forEach((el)=>helement.observe(el));