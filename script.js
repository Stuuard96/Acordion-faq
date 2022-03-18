window.addEventListener('load', () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(buttonE1 => {
        buttonE1.addEventListener('click', function(){
            /*verifica si el elemento en el que se hizo clic está cerrado*/
            const isCurrentClosed = !this.classList.contains('openned');

            /*Cierra todos los acordeones*/
            buttons.forEach(el => el.classList.remove('openned'));

            /* Si el elemento actual en el que se hizo clic está cerrado, ábralo si agrega 'clase openned'*/
            if (isCurrentClosed) {
                this.classList.add('openned');
            }
        })
    })
});