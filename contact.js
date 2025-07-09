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

  function showPopup(message, duration = 3000) {
    const popup = document.getElementById("popup");
    popup.textContent = message;
    popup.classList.remove("hidden");
    popup.classList.add("show");

    setTimeout(() => {
      popup.classList.remove("show");
      popup.classList.add("hidden");
    }, duration);
  }

  if (!name || !email || !phone || !subject || !message) {
    showPopup("Please fill out all fields.");
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
      showPopup("Message sent successfully!");

      nameInput.value = "";
      emailInput.value = "";
      phoneInput.value = "";
      subjectInput.value = "";
      messageInput.value = "";
    } else {
      const error = await response.json();
      showPopup(
        `Failed to send the message: ${error.message || "Unknown error"}`
      );
    }
  } catch (error) {
    showPopup(`An error occurred: ${error.message}`);
  }
});
