//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
//Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data. 

const app = new Vue(
    {
        el: '#vue',
        data: {
            message: 'Sto imparando ad usare Vue',
            img: 'img/elden_1.0.jpg'
        },
    }
);