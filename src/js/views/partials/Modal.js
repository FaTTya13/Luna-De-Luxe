class Modal {
  init() {
    const openModalButtons = document.querySelectorAll('[data-modal-target]');
    const closeModalButtons = document.querySelectorAll('[data-close-button]');
    const overlay = document.getElementById('overlay');

    openModalButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const modal = document.querySelector(button.dataset.modalTarget);
        event.preventDefault();
        if (event.target.classList.contains('basket_button')) return;
        openModal(modal);
      });
    });

    overlay.addEventListener('click', () => {
      const modals = document.querySelectorAll('.modal.active');
      modals.forEach( () => {
        closeModal(modals);
      });
    });

    closeModalButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const modals = Array.from(document.getElementsByClassName('modal'));
        closeModal(modals);
      });
    });

    function openModal(modal) {
      if (modal == null) return;
      modal.classList.add('active');
      overlay.classList.add('active');
    }

    function closeModal(modals) {
      if (modals == null) return;
      modals.forEach(modal => {
        modal.classList.remove('active');
      })
      overlay.classList.remove('active');
    }
  }
}

export default Modal;