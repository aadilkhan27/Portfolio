document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("contactForm");
  const btn = document.getElementById("submitBtn");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    btn.innerText = "Sending...";
    btn.disabled = true;

    const formData = new FormData(form);

    const code = formData.get("country_code");
    const phone = formData.get("phone");
    formData.set("phone_full", `${code} ${phone}`);

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });

      if (res.ok) {
        form.reset();
        showToast("success", "Message sent successfully!");
      } else {
        showToast("error", "Failed to send message.");
      }

    } catch (err) {
      showToast("error", "Network error. Try again.");
    }

    btn.innerText = "Send Message";
    btn.disabled = false;
  });

});

function showToast(type, message) {
  const toast = document.getElementById("toast");
  const icon = document.getElementById("toastIcon");
  const msg = document.getElementById("toastMsg");

  if (!toast) return;

  toast.className = "toast";

  if (type === "success") {
    toast.classList.add("success");
    icon.className = "fa-solid fa-circle-check";
  } else {
    toast.classList.add("error");
    icon.className = "fa-solid fa-circle-xmark";
  }

  msg.innerText = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
