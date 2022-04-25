    var busuness = Array.from(document.querySelectorAll('.busuness'));
    var Prices = busuness.map(item => item.querySelector('.Price').innerHTML);

    var Prices1 = String(Prices).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ");
    
    Prices.forEach((item, i) => {
      document.querySelector('.Price').innerHTML = Prices1[i];
    });
/*
    Prices.forEach((item, i) => {
      Prices[i].replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    });
    /*var Prices1 = parseInt(Prices).toLocaleString('ru-RU');

    Prices.forEach((item, i) => { 
      function divideNumberByPieces(x, delimiter) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter || " ");
      }

      Price[i] = divideNumberByPieces(Price[i]);

  });*/
/*
const users = Array.from(document.querySelectorAll('.blip'));
const triggers = users.map(item => item.querySelector('.trigger')); 

triggers.forEach((item, i) => { // проходимся по каждому тригеру
  item.addEventListener('click', (e) => { // ставим на него слушатель события клика
    users[i].classList.toggle('active'); // что-то делаем   
  });
});*/
