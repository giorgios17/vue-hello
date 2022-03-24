//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
//Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data. 

const app = new Vue(
    {
        el: '#vue',
        data: {
            message: 'Sto imparando ad usare Vue',
            eldenRingImg: 'img/elden_1.0.jpg',
            contatore: '10'
        },
        methods: {
            cambiaImg() {
                this.eldenRingImg = 'https://p325k7wa.twic.pics/high/elden-ring/elden-ring/00-page-setup/elden-ring-new-header-mobile.jpg?twic=v1/cover=760x844/step=10/quality=80'
            }
        }
    }
);