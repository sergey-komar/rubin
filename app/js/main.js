$(function () {
    $(".header-slider__inner").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
       
      
      });

    // $(".modal-slider__inner").slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //   });
      var $slider = $('.modal-slider__inner');

      if ($slider.length) {
        var currentSlide;
        var slidesCount;
        var sliderCounter = document.createElement('div');
        sliderCounter.classList.add('slider__counter');
        
        var updateSliderCounter = function(slick, currentIndex) {
          currentSlide = slick.slickCurrentSlide() + 1;
          slidesCount = slick.slideCount;
          $(sliderCounter).text(currentSlide + ' из ' +slidesCount)
        };
      
        $slider.on('init', function(event, slick) {
          $slider.append(sliderCounter);
          updateSliderCounter(slick);
        });
      
        $slider.on('afterChange', function(event, slick, currentSlide) {
          updateSliderCounter(slick, currentSlide);
        });
      
        $slider.slick();
      }






      // $(".modal-slider__inner--one").slick({
      //   slidesToShow: 1,
      //   slidesToScroll: 1,
       
      // });
      var $slider1 = $('.modal-slider__inner--one');

      if ($slider1.length) {
        var currentSlide1;
        var slidesCount1;
        var sliderCounter1 = document.createElement('div');
        sliderCounter1.classList.add('slider__counter--one');
        
        var updateSliderCounter1 = function(slick1, currentIndex1) {
          currentSlide1 = slick1.slickCurrentSlide() + 1;
          slidesCount1 = slick1.slideCount1;
          $(sliderCounter1).text(currentSlide1 + ' из ' +slidesCount)
        };
      
        $slider1.on('init', function(event, slick1) {
          $slider1.append(sliderCounter1);
          updateSliderCounter1(slick1);
        });
      
        $slider1.on('afterChange', function(event, slick1, currentSlide1) {
          updateSliderCounter1(slick1, currentSlide1);
        });
      
        $slider1.slick();
      }



      // $(".modal-slider__inner--two").slick({
      //   slidesToShow: 1,
      //   slidesToScroll: 1, 
      // });

      var $slider2 = $('.modal-slider__inner--two');
      if ($slider2.length) {
        var currentSlide2;
        var slidesCount2;
        var sliderCounter2 = document.createElement('div');
        sliderCounter2.classList.add('slider__counter--two');
        
        var updateSliderCounter2 = function(slick2, currentIndex2) {
          currentSlide2 = slick2.slickCurrentSlide() + 1;
          slidesCount2 = slick2.slideCount2;
          $(sliderCounter2).text(currentSlide2 + ' из ' +slidesCount)
        };
      
        $slider2.on('init', function(event, slick2) {
          $slider2.append(sliderCounter2);
          updateSliderCounter2(slick2);
        });
      
        $slider2.on('afterChange', function(event, slick2, currentSlide2) {
          updateSliderCounter2(slick2, currentSlide2);
        });
      
        $slider2.slick();
      }






      $(".reviews-slider__inner").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        
        appendArrows: '.reviews-slider__arrows'
      
      });
     
})


window.addEventListener('DOMContentLoaded', () => {
  const modalBtn = document.querySelector('#one');
  const modal = document.querySelector('.modal');
  const modalCloseBtn = document.querySelector('.modal__close');

    modalBtn.addEventListener('click', ()=>{
          modal.classList.add('show');
          modal.classList.remove('hide');
          document.body.style.overflow = '';
          $('.modal-slider__inner').slick('setPosition');
      });

    modalCloseBtn.addEventListener('click', ()=>{
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';         
    });


    modal.addEventListener('click', (e)=>{
          if(e.target == modal){
              modal.classList.add('hide');
              modal.classList.remove('show');
              document.body.style.overflow = '';
            }
        });


//ONE
const modalBtnOne = document.querySelector('#two');
const modalOne = document.querySelector('.modal--one');
const modalCloseBtnOne = document.querySelector('.modal__close--one');

    modalBtnOne.addEventListener('click', ()=>{
          modalOne.classList.add('show');
          modalOne.classList.remove('hide');
          document.body.style.overflow = '';
          $('.modal-slider__inner--one').slick('setPosition');

      });

    modalCloseBtnOne.addEventListener('click', ()=>{
        modalOne.classList.add('hide');
        modalOne.classList.remove('show');
        document.body.style.overflow = '';         
    });


    modalOne.addEventListener('click', (e)=>{
          if(e.target == modalOne){
              modalOne.classList.add('hide');
              modalOne.classList.remove('show');
              document.body.style.overflow = '';
            }
        });




//TWO
const modalBtnTwo = document.querySelector('#three');
const modalTwo = document.querySelector('.modal--two');
const modalCloseBtnTwo = document.querySelector('.modal__close--two');

    modalBtnTwo.addEventListener('click', ()=>{
          modalTwo.classList.add('show');
          modalTwo.classList.remove('hide');
          document.body.style.overflow = '';
          $('.modal-slider__inner--two').slick('setPosition');
      });

    modalCloseBtnTwo.addEventListener('click', ()=>{
        modalTwo.classList.add('hide');
        modalTwo.classList.remove('show');
        document.body.style.overflow = '';         
    });


    modalTwo.addEventListener('click', (e)=>{
          if(e.target == modalTwo){
              modalTwo.classList.add('hide');
              modalTwo.classList.remove('show');
              document.body.style.overflow = '';
            }
        });





//MODAL-EVENTS
    const modalBtnEvents = document.querySelectorAll('.events-block__item');
    const modalEvents = document.querySelector('.modal-events');
    const modalCloseBtnEvents = document.querySelector('.modal-events__close');
    

    modalBtnEvents.forEach(btn =>{
        btn.addEventListener('click', ()=>{
            modalEvents.classList.add('show');
            modalEvents.classList.remove('hide');
            document.body.style.overflow = 'hidden';
  
        })
    });

    modalCloseBtnEvents.addEventListener('click', ()=>{
            modalEvents.classList.add('hide');
            modalEvents.classList.remove('show');
            document.body.style.overflow = '';
           
    });

    modalEvents.addEventListener('click', (e)=>{
        if(e.target == modalEvents){
            modalEvents.classList.add('hide');
            modalEvents.classList.remove('show');
            document.body.style.overflow = '';
        }
    });


const tabsItem = document.querySelector('.tabs__item');
const tabsItemBtn = document.querySelectorAll('.tabs__item-btn');
const tabsContent = document.querySelectorAll('.tabs__content');

function tabsHide(){
    tabsContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show');
    });

    tabsItemBtn.forEach(btn =>{
        btn.classList.remove('active');
    })
}
function tabsShow(i){
    tabsContent[i].classList.add('show');
    tabsContent[i].classList.remove('hide');
    tabsItemBtn[i].classList.add('active');
}

if(tabsItem && tabsItemBtn && tabsContent){
  tabsItem.addEventListener('click', (e)=>{
    const target = e.target;
    
    if(target && target.classList.contains('tabs__item-btn')){
        tabsItemBtn.forEach((item, i)=>{
            if(target == item){
                tabsHide();
                tabsShow(i);
            }
           
        })
       
    }
})

tabsHide();
tabsShow(0);

}

//HEADER
const header = document.querySelector('.header-scroll');
if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        header.classList.add("header-bg");
      } else {
        header.classList.remove("header-bg");
      }

      
    });
  }


//BTN
const novelties = document.querySelector('.footer');
const btn = document.querySelector('.btnUp');

if(document && novelties){
    document.addEventListener('scroll', () => {
        if(scrollY > novelties.offsetHeight){
            btn.classList.add('btnUp-visible');
        }else{
            btn.classList.remove('btnUp-visible');
        }
        
    });
}
if(btn){
    btn.addEventListener('click', ()=>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth' 
      
        });
      });
} 

// Маска для Инпута
var element = document.getElementById('input-mask');
var element1 = document.getElementById('input-mask1');
var element2 = document.getElementById('input-mask2');
var element3 = document.getElementById('input-mask3');
var element4 = document.getElementById('input-mask4');
var element5 = document.getElementById('input-mask5');
var maskOptions = {
	mask: '+{7}(000)000-00-00'
};

var mask = IMask(element, maskOptions);
var mask1 = IMask(element1, maskOptions);
var mas2k = IMask(element2, maskOptions);
var mask3 = IMask(element3, maskOptions);
var mask4 = IMask(element4, maskOptions);
var mask5 = IMask(element5, maskOptions);



//MENU
const menu = document.querySelector('.menu');
const mobile = document.querySelector('.nav-icon');

mobile.addEventListener('click', function(){
    this.classList.toggle('nav-icon--active');
    menu.classList.toggle('nav--active');

});
//Находим ссылки внутри мобильной навигации
const navLinks = document.querySelectorAll('.menu__list a');

//Обходим ссылки методом forEach
navLinks.forEach(function (item) {
  //Для каждой ссылки добавляем прослушку по событию "Клик"
  item.addEventListener('click', function () {
    mobile.classList.remove('nav-icon--active'); // Убираем активный класс у иконки моб. навигации
    menu.classList.remove('nav--active'); // Убираем активный класс у блока моб. навигации
  
  });
});










})