/*Определяем некоторые переменные*/
var objzoom = document.getElementById("map");
var scaling = false;
var dist = 0;
var scale_factor = 1.0;
var curr_scale = 1.0;
var max_zoom = 8.0;
var min_zoom = 0.5
/*Пишем функцию, которая определяет расстояние меж пальцами*/
function distance (p1, p2) {
return (Math.sqrt(Math.pow((p1.clientX - p2.clientX), 2) + Math.pow((p1.clientY - p2.clientY), 2)));
}
/*Ловим начало косания*/
objzoom.addEventListener('touchstart', function(evt) {
evt.preventDefault();
var tt = evt.targetTouches;
if (tt.length >= 2) {
dist = distance(tt[0], tt[1]);
scaling = true;
} else {
scaling = false;
}
}, false);
/*Ловим зумирование*/
objzoom.addEventListener('touchmove', function(evt) {
evt.preventDefault();
var tt = evt.targetTouches;
if (scaling) {
curr_scale = distance(tt[0], tt[1]) / dist * scale_factor;
objzoom.style.WebkitTransform = "scale(" + curr_scale + ", " + curr_scale + ")";
}
}, false);
/*Ловим конец косания*/
objzoom.addEventListener('touchend', function(evt) {
var tt = evt.targetTouches;
if (tt.length < 2) {
scaling = false;
if (curr_scale < min_zoom) {
scale_factor = min_zoom;
} else {
if (curr_scale > max_zoom) {
scale_factor = max_zoom;
} else {
scale_factor = curr_scale;
}
}
objzoom.style.WebkitTransform = "scale(" + scale_factor + ", " + scale_factor + ")";
} else {
scaling = true;
}
}, false);


