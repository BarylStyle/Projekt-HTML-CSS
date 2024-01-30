(() => {
  const refs = {
    openModalBtn: document.querySelector('[contact-modal-open]'),
    openModalBtn2: document.querySelector('[store-modal-open]'),
    closeModalBtn: document.querySelector('[contact-modal-close]'),
    modal: document.querySelector('[contact-data-modal]'),
    thankYouModal: document.querySelector('[data-thanks-modal]'),
    contactForm: document.querySelector('#contact-form'), // added form reference
    continueBtn: document.querySelector('[data-thanks-modal] .continue-btn'), // added continue button reference
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.contactForm.addEventListener('submit', handleFormSubmit);
  refs.continueBtn.addEventListener('click', handleContinueButtonClick); // added event listener for continue button

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const isValid = validateFormData();
    if (isValid) {
      toggleModal();
      refs.thankYouModal.classList.remove('is-hidden');
    }
  }

  function handleContinueButtonClick() {
    refs.thankYouModal.classList.add('is-hidden'); // Hide the thanks modal
  }

  function validateFormData() {
    // Implement your validation logic here
    const nameInput = document.getElementById('user-name');
    let isValid = true;

    const emailInputs = document.querySelectorAll('.email-input');
    emailInputs.forEach(emailInput => {
      if (!emailInput.checkValidity()) {
        isValid = false;
        emailInput.classList.add('is-invalid');
      } else {
        emailInput.classList.remove('is-invalid');
      }
    });

    if (!nameInput.checkValidity()) {
      isValid = false;
      nameInput.classList.add('is-invalid');
    } else {
      nameInput.classList.remove('is-invalid');
    }

    return isValid;
  }
})();