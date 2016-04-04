$(document).ready(function() {

  // alert('hi there');

  // $('.content-title').on('click', function() {
  //   alert('hello');
  // })


  /*
  .nav-bar {
    width: auto;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;

    padding-right: 20px;
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
    align-items: center;

    .nav-bar-top {
      margin-top: 10px;
    }
  }
  */

  window.addEventListener('orientationchange', function() {
    var originalBodyStyle = getComputedStyle(document.body).getPropertyValue('display');
    document.body.style.display = 'none';
    setTimeout(function() {
      document.body.style.display = originalBodyStyle;
    }, 10);
  });

}); // end document ready
