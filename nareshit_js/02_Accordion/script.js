const accordions = document.querySelectorAll('.accordion');

accordions.forEach(elements => {
    const answers = elements.querySelector('.answer');
    const icons = elements.querySelector('.icon');
    elements.addEventListener('click', () =>{
        answers.classList.toggle('hide');
        icons.classList.toggle('icon');
    })
})

document.getElementById('btn') . addEventListener('click', () => {
    document.getElementById('model').classList.remove('box')
    document.getElementById('btn').classList.add('boxx')
})

document.getElementById('close') . addEventListener('click', () => {
    document.getElementById('model').classList.add('box')
    document.getElementById('btn').classList.remove('boxx')
})