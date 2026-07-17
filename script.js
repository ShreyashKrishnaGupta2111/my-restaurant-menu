let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({item, price});
  total += price;
  displayCart();
}

function displayCart() {
  let cartList = document.getElementById("cart");
  cartList.innerHTML = "";

  cart.forEach(i => {
    let li = document.createElement("li");
    li.textContent = i.item + " - ₹" + i.price;
    cartList.appendChild(li);
  });

  document.getElementById("total").textContent = "Total: ₹" + total;

  let orderText = cart.map(i => i.item + " ₹" + i.price).join(", ");

  let phone = "91XXXXXXXXXX"; // 🔴 CHANGE THIS

  document.getElementById("orderBtn").href =
    "https://wa.me/" + phone +
    "?text=I want to order: " + orderText +
    " | Total: ₹" + total;
}
