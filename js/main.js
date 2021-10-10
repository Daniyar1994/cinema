const schemeSvg = document.querySelector('.scheme svg');
const TotalPriceTag = document.querySelector('.price-total')
let cost = 800;
let totalPrice=0;
schemeSvg.addEventListener('click', (event) =>{
    if (!event.target.classList.contains('booked')){
        event.target.classList.toggle('active');
        let TotalSeats = schemeSvg.querySelectorAll('.active').length;
        totalPrice = TotalSeats * cost;
        TotalPriceTag.textContent=totalPrice;
        console.log(schemeSvg .querySelectorAll('.active').length);
    }
    
})