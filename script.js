document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItemsList = document.querySelector(".cart-items");
    const cartTotal = document.getElementById("cart-total");

    let totalCost = 0;

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const product = this.parentNode;
            const productName = product.querySelector("h2").textContent;
            const productPrice = parseFloat(product.querySelector("p").textContent.replace("$", ""));
            totalCost += productPrice;
            cartTotal.textContent = totalCost.toFixed(2);
            const listItem = document.createElement("li");
            listItem.textContent = productName;
            cartItemsList.appendChild(listItem);
        });
    });
});
