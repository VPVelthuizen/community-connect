// sourced from Stack Overflow user Oliver https://stackoverflow.com/users/7421158/oliver

//the function below are functions that run after the Dom Content has been loaded
document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
    //carousel activation
    var elems = document.querySelectorAll('.carousel');
    var xinstances = M.Carousel.init(elems, 
    {
      fullWidth: true,
      indicators: true,
      numVisible: 3
    });

    //carousel Next function
    window.next = function() {
      var el = document.querySelector(".carousel");
      var l = M.Carousel.getInstance(el);
      l.next(1);
    }

    //carousel previous function
    window.prev = function() {
      var el = document.querySelector(".carousel");
      var l = M.Carousel.getInstance(el);
      l.prev(1);
    }
});