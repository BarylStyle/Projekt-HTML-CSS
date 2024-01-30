(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-thanks-open]'),
      closeModalBtn: document.querySelector('[data-thanks-close]'),
      modal: document.querySelector('[data-thanks-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();