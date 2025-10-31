emailjs.init("8-Ep-eYSyZrCz84zA");

const bookingForm = document.getElementById("booking-form");
const bookingMessage = document.getElementById("booking-message");

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = {
        full_name: bookingForm.full_name.value,
        email_id: bookingForm.email_id.value,
        phone_number: bookingForm.phone_number.value,
        total_amount: document.getElementById("total-amount").textContent
    };

    emailjs.send("service_jbkc6mi", "template_x6ft0og", formData)
    .then(function(response) {
        console.log("SUCCESS!", response.status, response.text);

        bookingMessage.style.display = "block";

        bookingForm.reset();
    }, function(error) {
        console.log("FAILED...", error);
        alert("Oops! Something went wrong with booking. Please try again later.");
    });
});