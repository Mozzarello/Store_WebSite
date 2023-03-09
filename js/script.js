window.addEventListener("DOMContentLoaded", () => {
  const modalTrigger = document.querySelector(".mobile__hide"),
    modal = document.querySelector(".modal"),
    modalCloseBtn = document.querySelector("[data-close]");

  modalTrigger.addEventListener("click", () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  });

  modalCloseBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "";
  });
});
