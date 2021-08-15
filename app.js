const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

// Селекторы
const refs = {
    start: document.querySelector('[data-action="start"]'),
    stop: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body')
}

// Функция выбора случайного числа (индекс элемента массива цветов)
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
 
 //Слушатели событий
refs.start.addEventListener("click", onClickStart)
refs.stop.addEventListener("click", onClickStop)

// Идентификатор интервала. Нужен для остановки/удаления интервала
let idInterval = null;



// Функция изменения цвета body  с кусочном асинхронного кода
function changeBodyBackgroundColor() {
    idInterval = setInterval(() => {
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000) 
}


// Изначально кнопка остановки интервала неактивна
refs.stop.disabled = true;


// Функция запуска интервала( смена цвета body)
function onClickStart() {
    console.log("Зафиксирован клик на кнопке Start! ");
    changeBodyBackgroundColor();

    //Делаем кнопку Start неактивной, чтобы измежать повторных ошибочных стартов и активируем кнопку Stop
    refs.start.disabled = true;
    refs.stop.disabled = false;

}

function onClickStop() {
    console.log("Зафиксирован клик на кнопке Stop! ");
    //Останавливаем, удаляем интервал 
    clearInterval(idInterval);

    //Делаем кнопку Start активной, кнопку Stop  неактовной
   refs.start.disabled = false;
    refs.stop.disabled = true;
}



