(()=>{const e={openModalBtn:document.querySelector("[follow-modal-open]"),closeModalBtn:document.querySelector("[follow-modal-close]"),modal:document.querySelector("[follow-data-modal]"),emailInput:document.getElementById("email")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o),e.emailInput.addEventListener("input",(function(){const o=e.emailInput.value;/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o)?e.emailInput.style.borderColor="green":e.emailInput.style.borderColor="red"}))})();
//# sourceMappingURL=index.0b0e5c6b.js.map
