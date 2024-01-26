window.onscroll = ()=> {
    scrollFunction()
  };
  
  function scrollFunction() {
    var myscroll = document.getElementById('scroll');  
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          myscroll.style.display="block";
      } else {
        myscroll.style.display = "none";
      }
    }
    
    
    /* function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    } */

      var smooth = [$('a.smooth'), 100, 750];
      smooth[0].click(function() {
        $('html, body').animate({
          scrollTop: $('[id="' + $.attr(this, 'href').substr(1) + '"]').offset().top -smooth[1]
        }, smooth[2]);
        return false; 
      });
    