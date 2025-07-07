const submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", async (e) => {
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const phoneInput = document.querySelector("#phone");
  const subjectInput = document.querySelector("#subject");
  const messageInput = document.querySelector("#message");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const subject = subjectInput.value.trim();
  const message = messageInput.value.trim();

  if (!name || !email || !phone || !subject || !message) {
    alert("Please fill out all fields.");
    return;
  }

  const formData = { name, email, phone, subject, message };
  const apiURL = "http://localhost:5000/api/contact";

  try {
    const response = await fetch(apiURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent successfully!");

      nameInput.value = "";
      emailInput.value = "";
      phoneInput.value = "";
      subjectInput.value = "";
      messageInput.value = "";
    } else {
      const error = await response.json();
      alert(`Failed to send the message: ${error.message || "Unknown error"}`);
    }
  } catch (error) {
    alert(`An error occurred: ${error.message}`);
  }
});
