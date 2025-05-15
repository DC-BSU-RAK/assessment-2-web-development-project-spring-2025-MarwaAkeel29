document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", (e) => {
      // Only flip if the click is NOT inside a form/input/textarea/select/button
      const tag = e.target.tagName.toLowerCase();
      if (!["input", "select", "textarea", "button", "label"].includes(tag)) {
        card.classList.toggle("flipped");
      }
    });
  });