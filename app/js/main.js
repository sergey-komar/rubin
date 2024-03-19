$(function () {
    $(".header-slider__inner").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
      
      });

    $(".modal-slider__inner").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
      });

      $(".modal-slider__inner--one").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
      });

      $(".modal-slider__inner--two").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
      });

      $(".reviews-slider__inner").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
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
const header = document.querySelector('.header__inner');
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

})