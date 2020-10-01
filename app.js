//initial data structure
const product = { count: 3, price: 12.55, type: "ropa" };

function getVat(product) {
    let vat;

switch (product.type) {
  case "alimentacion":
    vat = product.price * 0.1;
    break;
  case "libro":
    vat = product.price * 0.04;
    break;
  default:
    vat = product.price * 0.21;
    break;
}
    return vat;
}

function getTotalVat(product) {
    return product.count > 0 ? product.count * getVat(product) : 0;
}

function getTotal(product) {
    return product.count > 0 ? product.count * product.price : 0;
}

function printProductPrice(product) {
    const subtotal = getTotal(product);
    const vat = getTotalVat(product);
    const total = subtotal + vat;
  
    console.log("Subtotal:", subtotal + "€");
    console.log("IVA:", vat + "€");
    console.log("Total:", total + "€");
}

console.log("Los datos iniciales son:", product);
printProductPrice(product);

/* 
// ---------------------------- BASIC EXERCICE ---------------------
//initial data structure
//const product = { count: 3, price: 12.55, type: "ropa" };
const product = { count: -1, price: 49, type: "alimentacion" };

//calculate the VAT of a product per unit

let unitariVat;

switch (product.type) {
  case "alimentacion":
    unitariVat = product.price * 0.1;
    break;
  case "libro":
    unitariVat = product.price * 0.04;
    break;
  default:
    unitariVat = product.price * 0.21;
    break;
}

//calculate total VAT
const vat = product.count > 0 ? product.count * unitariVat : 0;

//calculate subtotal (total withou VAT)
const subtotal = product.count > 0 ? product.count * product.price : 0;

//calculate total (subtotal + VAT)
const total = subtotal + vat;

//show results
console.log("Los datos iniciales son:", product);
console.log("Subtotal:", subtotal + "€");
console.log("IVA:", vat + "€");
console.log("Total:", total + "€");
 */