(function(){

    var scrollY = function(){
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compact = ((document.compatMode || "") === "CSS1Compat");

        return supportPageOffset ? window.pageYOffset : isCSS1Compact ? document.documentElement.scrollTop : document.body.scrollTop;
    }


    var topBar = document.querySelector('.top-header');


    var mainBar = document.querySelector('.mainbar');
    var top = mainBar.getBoundingClientRect().height + scrollY();

    var onScroll = function(){
        var hasClassFixed = topBar.classList.contains('active-top-header');

        if(scrollY() > top && !hasClassFixed){
            topBar.classList.add('active-top-header');
        }else if(scrollY() < top && hasClassFixed){
            topBar.classList.remove('active-top-header');
        }
    }

    window.addEventListener('scroll', onScroll);

})();