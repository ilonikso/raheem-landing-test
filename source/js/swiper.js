var mySwiper = new Swiper ('.swiper-container', {
    
  });

  mySwiper.slideTo(0);
  document.querySelector('.slider__button').classList.add("slider__button--active")

  document.addEventListener('click', (e) => {
    e.preventDefault();
    

    if(e.target.classList.contains('slider__button')){
        let slide = e.target.getAttribute('data-slide');

        document.querySelectorAll('.slider__button').forEach(item => {
            item.classList.remove('slider__button--active');
        });

        e.target.classList.add('slider__button--active');

        mySwiper.slideTo(slide);
    }
  });

  mySwiper.on('slideChange', function () {
    document.querySelectorAll('.slider__button').forEach(item => {
        item.classList.remove('slider__button--active');
    })

    let activeSlide = mySwiper.realIndex;

    document.querySelectorAll('.slider__button').forEach((item, index) => {
        if(index === activeSlide){
            item.classList.add('slider__button--active');
        }
        
    })
  });