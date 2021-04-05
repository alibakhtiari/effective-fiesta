/* mobile menu */
var el = document.querySelector('.menu-trigger');
var nav = document.querySelector('.nav_list_mobile');
var ham = document.querySelector('#hamburger_menu');

el.onclick = function() {
  nav.classList.toggle('visible');
  ham.classList.toggle('open');
}
/* footer BOM get last modified */
var last_mod = document.querySelector('.last_mod');
var bom_mod = document.lastModified;
last_mod.innerHTML = 'last updated or modified : ' + bom_mod;


/*smooth scroll*/
document
    .querySelectorAll('.nav__item a[href^="#"]')
    .forEach(trigger => {
        trigger.onclick = function(e) {
            e.preventDefault();
            let hash = this.getAttribute('href');
            let target = document.querySelector(hash);
            let headerOffset = 100;
            let elementPosition = target.offsetTop;
            let offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        };
    });
    //html { scroll-behavior: smooth; }



    /* form validation */
    function validateName() {
        var  fName = document.querySelector('#name');
        if (fName.value.trim() === "") {
          this.setStatus(fName, 'Name cannot be blank', "error");
        } else {
          this.setStatus(fName, null, "success");
        }
    
    };
    function validateEmail() {
        var  f_EM = document.querySelector('#email');
          const regex = /\S+@\S+\.\S+/;
          if (regex.test( f_EM.value)) {
            this.setStatus( f_EM, null, "success");
          } else {
            this.setStatus( f_EM, "Please enter valid email address", "error");
          }
    
    
    };
    function  validateTextArea() {
        var  f_TA = document.querySelector('#message');
        if ( f_TA.value.trim() === "") {
          this.setStatus( f_TA, 'Enter your message', "error");
        } else {
          this.setStatus( f_TA, null, "success");
        }
    
    };
    function   setStatus(field, message, status) {
        const successIcon = field.parentElement.querySelector('.icon-success');
        const errorIcon = field.parentElement.querySelector('.icon-error');
        const errorMessage = field.parentElement.querySelector('.error-message');
    
        if (status === "success") {
          if (errorIcon) {errorIcon.classList.add('hidden');}
          if (errorMessage) {errorMessage.innerText = "";}
          successIcon.classList.remove('hidden');
          field.classList.remove('input-error');
        }
    
        if (status === "error") {
          if (successIcon) {successIcon.classList.add('hidden');}
          field.parentElement.querySelector('.error-message').innerText = message;
          errorIcon.classList.remove('hidden');
          field.classList.add('input-error');
        }
      }
    
