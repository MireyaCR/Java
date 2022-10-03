let guests = prompt('How many people are coming to your wedding?');

function getPrice(guests) {
    let cost = 0;
    // Your code here
    var personas = parseInt(guests);

    if (personas > 200) {
        cost=20000;
    } else if (personas <= 200 && personas > 100) {
        cost=15000;
    } else if (personas <= 100 && personas > 50) {
        cost=10000;
    } else {
        cost=4000;
    }
    console.log("")
    return cost;
}

let price = getPrice(guests);
console.log('Your wedding will cost ' + price + ' dollars');
