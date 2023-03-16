console.log(window.innerWidth)
if(window.innerWidth < 740){
  document.querySelectorAll(".section-images__list--item").forEach(function(cur, inx){
    console.log(inx);
    if(inx > 5){
      cur.remove()
    }
  })
}
console.log(window.innerWidth)
if(window.innerWidth < 1024){
  document.querySelectorAll(".section-images3__list--item1").forEach(function(cur, inx){
    console.log(inx);
    if(inx > 5){
      cur.remove()
    }
  })
}
$(document).ready(function () {
    $(".slider").slick({
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: true,
    });
});

// $(".slider1").slick({
      
//   dots: false,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   arrows: false,
//   slidesToShow: 4,
// });
  



$(document).ready(function () { 
    $(".slider1").slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        slidesToShow: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              centerMode: true,
              centerPadding: "30% 0 0",
            }
          },
          {
            breakpoint: 740,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: "30% 0 0",
            }
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
});

//Dong ho dem nguoc
if(document.querySelector("#countdown")){
  const days = document.getElementById('days');
  const hours = document.getElementById('hours');
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');
  console.log(days)
  
  const currentYear = new Date().getFullYear();
  
  const newYearTime = new Date(`December 29, 2023 23:59:59`);
  
  function updateCountdown() {
      const currentTime = new Date();
      const diff = newYearTime - currentTime;
  
      const d = Math.floor(diff / 1000 / 60 / 60 / 24);
      const h = Math.floor(diff / 1000 / 60 / 60) % 24;
      const m = Math.floor(diff / 1000 / 60) % 60;
      const s = Math.floor(diff / 1000) % 60;
  
      days.innerHTML = d;
      hours.innerHTML = h < 10 ? '0' + h : h;
      minutes.innerHTML = m < 10 ? '0' + m : m;
      seconds.innerHTML = s < 10 ? '0' + s : s;
  
  
  }
  
  setInterval(updateCountdown, 1000);
}


const btnLogin = document.querySelector('.js__login')
const modalPopup = document.querySelector(".modal")
const popup = document.querySelector(".form-login")
  if(btnLogin && modalPopup && popup)
    btnLogin.addEventListener('click', function(){
      modalPopup.classList.add('active')
      popup.classList.add('active')
    })

const btnRemove = document.querySelector('.out-btn')   
if(btnRemove && modalPopup && popup)
    btnRemove.addEventListener('click', function(){
      modalPopup.classList.remove('active')
      popup.classList.remove('active')
    })
  


  console.log('continue');
  
  modalPopup.addEventListener('click', function(){
    popup.classList.add('animate-shake')
    setTimeout(()=>{
      popup.classList.remove('animate-shake')
    }, 1000)
    setInterval(()=>{
      console.log(123);
    }, 4000)
  })


