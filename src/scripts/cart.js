/* add to basket */
let cart = document.querySelectorAll('.painting-container img');

gemKurv();

for(let i=0; i < cart.length; i++){

    cart[i].addEventListener('click', () => {

        kurvNummer();
    })  
}

function gemKurv(){
    let produkter = localStorage.getItem('kurvNummer');

    if(produkter){
        document.querySelector('.viskurv span').textContent = produkter;

    }
}

function kurvNummer(){
    let produkter = localStorage.getItem('kurvNummer');

    produkter = parseInt(produkter);
    
    if(produkter){
        localStorage.setItem('kurvNummer', produkter + 1);
        document.querySelector('.viskurv span').textContent = produkter + 1;

    } else {

        localStorage.setItem('kurvNummer', + 1);
        document.querySelector('.viskurv span').textContent = 1;

    }

}