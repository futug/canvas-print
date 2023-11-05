export class ModalsHandler {
  constructor(callerButton, closeButton, modal, modalWrapper) {
    this.caller = document.querySelectorAll(`.${callerButton}`);
    this.modal = document.querySelector(`.${modal}`);
    this.modalWrapper = document.querySelector(`.${modalWrapper}`);
    this.modalActive = `${modal}--active`;
    this.modalWrapperActive = `${modalWrapper}--active`;
    this.close = document.querySelectorAll(`.${closeButton}`);
    this.body = document.querySelector("body");
  }

  initialize() {
    this.caller.forEach((item) => {
      item.addEventListener("click", (event) => {
        event.preventDefault();
        this.openModal();
      });
    });
    this.close.forEach((item) => {
      item.addEventListener("click", (event) => {
        event.preventDefault();
        this.closeModal();
      });
    });
    document.addEventListener("click", (event) => {
      this.outerClick(event);
    });
    document.addEventListener("keydown", (event) => {
      this.escClick(event);
    });
  }

  openModal() {
    this.modal?.classList.add(`${this.modalActive}`);
    this.modalWrapper?.classList.add(`${this.modalWrapperActive}`);
    this.body.style.overflow = "hidden";
  }

  closeModal() {
    this.modal?.classList.remove(`${this.modalActive}`);
    this.modalWrapper?.classList.remove(`${this.modalWrapperActive}`);
    this.body.style.overflow = "auto";
  }

  outerClick(event) {
    if (event.target === this.modal && event.target !== this.modalWrapper) {
      event.stopPropagation();
      this.closeModal();
    }
  }

  escClick(event) {
    if (
      event.code === "Escape" &&
      this.modal.classList.contains(`${this.modalActive}`)
    ) {
      this.closeModal();
    }
  }
}
