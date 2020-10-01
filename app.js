//initial data structure
//const product = { count: 3, price: 12.55, type: "ropa" };
const product = { count: 6, price: 0.5, type: "alimentacion" };

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
