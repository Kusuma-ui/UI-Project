let cartCount = 0;

function addToCart(item, price, button){
    cartCount++;

document.getElementById("cartCount").innerText = cartCount;

    button.innerText = "Added";
    button.disabled = true;
    button.style.backgroundColour = "blue"
}