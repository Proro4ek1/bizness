$(document).bind( 'mousewheel', function (e) { 
    var nt = $(document.sidebar).scrollTop()-(e.deltaY*e.deltaFactor*1); 
    e.preventDefault(); 
    e.stopPropagation(); 
    $(document.sidebar).stop().animate( { 
         scrollTop : nt 
     } , 5 , 'easeInOutCubic' );  
} )