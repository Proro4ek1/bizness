window.onload = function () { 
        var busuness = Array.from(document.querySelectorAll('.busuness'));
        var price = busuness.map(item => item.querySelector('.Price').innerHTML);
        var profit = busuness.map(item => item.querySelector('.Profit').innerHTML);
 
    function checkprice() {
        var busuness = Array.from(document.querySelectorAll('.busuness'));
        var price = busuness.map(item => item.querySelector('.Price').innerHTML);
        var priceMinbusuness1 = document.getElementById("priceMinbusuness1").value;
        var priceMaxbusuness1 = document.getElementById("priceMaxbusuness1").value;
        var Numberprice = parseInt(price,10);
        var NumberpriceMinbusuness1 = parseInt(priceMinbusuness1,10);
        var NumberpriceMaxbusuness1 = parseInt(priceMaxbusuness1,10);


        price.forEach(function(item, i) {

            if (item >= NumberpriceMinbusuness1 && item <= NumberpriceMaxbusuness1) {
                busuness[i].classList.add('active_slider_busuness1');
            } else {
                busuness[i].classList.remove('active_slider_busuness1');
            }
        });
    }
    setInterval(checkprice, 10);

        function checkprofit() {
        var busuness = Array.from(document.querySelectorAll('.busuness'));
        var profit = busuness.map(item => item.querySelector('.Profit').innerHTML);
        var priceMinbusuness2 = document.getElementById("priceMinbusuness2").value;
        var priceMaxbusuness2 = document.getElementById("priceMaxbusuness2").value;
        var Numberprofit = parseInt(profit,10);
        var NumberpriceMinbusuness2 = parseInt(priceMinbusuness2,10);
        var NumberpriceMaxbusuness2 = parseInt(priceMaxbusuness2,10);


        profit.forEach(function(item, i) {

            if (item >= NumberpriceMinbusuness2 && item <= NumberpriceMaxbusuness2) {
                busuness[i].classList.add('active_slider_busuness2');
            } else {
                busuness[i].classList.remove('active_slider_busuness2');
            }
        });

    }
    setInterval(checkprofit, 10);

/*   var sum1=0;
    var sum=0;
    for(var i=0;i<profit.length;i++){
    sum1 = sum1 + parseInt(profit[i]);
}
    for(var i=0;i<price.length;i++){
    sum = sum + parseInt(price[i]);
}
    console.log("Выплата", sum1);
    console.log("Общая стоимость", sum);
*/
var price=0;
$('.Profit').each( function(i) {
  price += +$(this).text().split('р')[0];
});
console.log(price);
};

