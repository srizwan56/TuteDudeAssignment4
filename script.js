const addButtons = document.querySelectorAll(".add-btn");
const removeButtons = document.querySelectorAll(".remove-btn");
const cartItems = document.getElementById("cart-items");
const totalAmount = document.getElementById("total-amount");

let cart = [];

function updateCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = `<tr class="empty"><td colspan="3">No items added yet</td></tr>`;
  } else {
    cart.forEach((item, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${item.name}</td>
        <td>₹${item.price}.00</td>
      `;
      cartItems.appendChild(row);
    });
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  totalAmount.textContent = `₹${total}.00`;
}

addButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const parent = btn.closest(".service-item");
    const name = parent.dataset.name;
    const price = parseInt(parent.dataset.price);

    cart.push({ name, price });
    btn.classList.add("hidden");
    parent.querySelector(".remove-btn").classList.remove("hidden");
    updateCart();
  });
});

removeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const parent = btn.closest(".service-item");
    const name = parent.dataset.name;
    cart = cart.filter((item) => item.name !== name);
    btn.classList.add("hidden");
    parent.querySelector(".add-btn").classList.remove("hidden");
    updateCart();
  });
});

updateCart();
