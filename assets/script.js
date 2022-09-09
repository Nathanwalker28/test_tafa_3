
const buttons = document.querySelectorAll('button');
const boxOne = document.querySelector('.box_1')
const boxTwo = document.querySelector('.box_2')
const boxThree = document.querySelector('.box_3')

buttons[0].addEventListener('click', function() {
    boxOne.classList.toggle('box_4');
})

buttons[1].addEventListener('click', function() {
    boxTwo.classList.toggle('box_5');
})

buttons[2].addEventListener('click', function() {
    boxThree.classList.toggle('box_6');
})


 