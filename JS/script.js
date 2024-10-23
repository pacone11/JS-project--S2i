const titleContainer = document.createElement('div');
titleContainer.className='title-container';
const title = document.createElement('h1');
title.innerHTML='COUNTER';
titleContainer.append(title);
document.body.insertBefore(titleContainer, document.body.firstElementChild);

const counterContainer = document.createElement('div');
counterContainer.className='counter-container';
const counterDisplay = document.createElement('p');
counterDisplay.className='counter';
counterDisplay.innerHTML= 0;
counterContainer.append(counterDisplay);
document.body.insertBefore(counterContainer, titleContainer.nextElementSibling);


const buttonsContainer = document.createElement('div');
buttonsContainer.className='counter-buttons';
counterContainer.append(buttonsContainer);

const minusBtn = document.createElement('button');
minusBtn.className='minus btn';
minusBtn.innerHTML='-';
buttonsContainer.append(minusBtn);

const resetBtn = document.createElement('button');
resetBtn.className='reset btn';
resetBtn.innerHTML='RESET';
buttonsContainer.append(resetBtn);

const plusBtn = document.createElement('button');
plusBtn.className='plus btn';
plusBtn.innerHTML='+';
buttonsContainer.append(plusBtn);

let count= 0;

function displayUpdate(){
    counterDisplay.innerHTML=count;

    counterDisplay.classList.add('pop');  
    setTimeout(() => {
        counterDisplay.classList.remove('pop'); 
    }, 200);
}

plusBtn.addEventListener('click', function () {
    count++;
    displayUpdate();
});


minusBtn.addEventListener('click', function () {
    if (count>0) {
        count--;
        displayUpdate();
    }
});

resetBtn.addEventListener('click', function () {
        count= 0;
        displayUpdate();
});








    