
document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
    });

    document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {indicators: true});
    });


    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.scrollspy');
        var instances = M.ScrollSpy.init(elems,{scrollOffset: 0});
    });
