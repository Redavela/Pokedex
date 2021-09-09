const searchInput = document.querySelector('.recherche-poke input')

// Animation de l'input

searchInput.addEventListener('input', (e) =>{

    if(e.target.value != ''){
        e.target.parentNode.classList.add('active-input')
    }if(e.target.value === ''){
        e.target.parentNode.classList.remove('active-input')
    }
})