function whenButtonIsClicked() {
    alert("You got a Twix Bar!");
}
function whenButtonIsClicked() {
    alert("You got a Crunch Bar!");
}
function whenButtonIsClicked() {
    alert("You got a Kit Kat!");
}


function Candy(name, flavor, size) {
    this.name = name;
    this.flavor = flavor;
    this.size = size;
}


const candy1 = new Candy("Twix", "chocolate caramel", "small");
const candy2 = new Candy("Crunch", "chocolate crispy", "small");
const candy3 = new Candy("Kit Kat", "chocolate wafer", "small");


const trickorTreatBag = [candy1, candy2, candy3];

console.log(trickOrTreatBag);