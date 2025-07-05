let count = 0;

function addToCart() {
    if (count<3)
    {
  count++;
  document.getElementById("cart-count").innerText = count;
    }
}
