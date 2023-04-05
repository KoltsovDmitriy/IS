(function(){
    const header = document.querySelector('.header');
    window.onscroll = () =>{
        if(window.pageYOffset > 70){
            header.classList.add('header_active');            
        }else {
            header.classList.remove('header_active'); 
        }
    }    
}())
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }
//   AOS.init();