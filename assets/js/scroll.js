
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
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }