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

  $('.main-wrapper').on('orientationchange', function() {
    location.reload(true);
  });


}); // end document ready
