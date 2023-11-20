function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

let accordions = document.querySelectorAll('.accordion-wrapper .accordion')
accordions.forEach((acco)=>{
    acco.onclick = () =>{
        accordions.forEach((subcontent) =>{
            subcontent.classList.remove("active");
        })
        acco.classList.add("active");
    }
})

$(".testimonial_slider_area").owlCarousel({
    loop:true,
    items:3,
    margin:30,
    dots:false,
    responsive: {
        320:{
            items:1
        },
        767:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
