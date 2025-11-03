emailjs.init("8-Ep-eYSyZrCz84zA");

const bookingForm = document.getElementById("booking-form");
const bookingMessage = document.getElementById("booking-message");

bookingForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = bookingForm.full_name.value;
  const email = bookingForm.email_id.value;
  const phone = bookingForm.phone_number.value;

  let servicesList = cart
    .map((item, index) => `${index + 1}. ${item.name} - ₹${item.price}`)
    .join("\n");

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    alert("⚠️ Please add at least one service before booking!");
    return;
  }

  const params = {
    customer_name: name,
    customer_email: email,
    customer_phone: phone,
    selected_services: servicesList,
    total_amount: `₹${total}.00`,
  };

  emailjs.send("service_jbkc6mi", "template_x6ft0og", params)
    .then(() => {
      bookingMessage.style.display = "block";
      bookingForm.reset();
    })
    .catch((error) => {
      console.error("Email Failed:", error);
      alert("❌ Failed to send email. Please try again!");
    });
});

