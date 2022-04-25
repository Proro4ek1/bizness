var scale = 1

$(".oper-plus").click(function(){
  scale += .2
  $("#map").css({
    "-webkit-transform": "scale(" + scale + ")",
    "-moz-transform"   : "scale(" + scale + ")",
    "-ms-transform"    : "scale(" + scale + ")",
    "-o-transform"     : "scale(" + scale + ")",
    "transform"        : "scale(" + scale + ")"
  })
});

$(".oper-minus").click(function(){
  scale -= .2
  $("#map").css({
    "-webkit-transform": "scale(" + scale + ")",
    "-moz-transform"   : "scale(" + scale + ")",
    "-ms-transform"    : "scale(" + scale + ")",
    "-o-transform"     : "scale(" + scale + ")",
    "transform"        : "scale(" + scale + ")"
  })
});