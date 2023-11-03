// import { mobileMenu, body } from "./burger";

// let targetClick;

// document.addEventListener("click", (event) => {
//   if (event.target.closest(".header")) {
//     targetClick = true;
//   }

//   if (targetClick === false) {
//     mobileMenu.classList.remove("mobile-menu--active");
//     body.classList.remove("lock");
//     targetClick = true;
//   } else {
//     targetClick = false;
//     console.log(targetClick);
//   }
// });

// document.addEventListener("keydown", (event) => {
//   if (
//     event.code === "Escape" &&
//     mobileMenu.classList.contains("mobile-menu--active")
//   ) {
//     mobileMenu.classList.remove("mobile-menu--active");
//     body.classList.remove("lock");
//   }
// });

// class OuterClick {
//   constructor(targetClass, activeClass, body, closetClass) {
//     this.modal = targetClass;
//     this.active = activeClass;
//     this.body = body;
//     this.closet = closetClass;

//   }
// }

export class OuterClick {
  constructor(targetElement, activeClass, body, closetClass) {
    this.modal = targetElement;
    this.active = activeClass;
    this.body = body;
    this.closet = closetClass;

    this.targetClick = false;

    this.initialize();
  }

  initialize() {
    document.addEventListener("click", (event) =>
      this.handleDocumentClick(event)
    );
    document.addEventListener("keydown", this.handleDocumentKeydown.bind(this));
  }

  handleDocumentClick(event) {
    if (event.target.closest(this.closet)) {
      this.targetClick = true;
    }

    if (!this.targetClick) {
      this.closeModal();
    } else {
      this.targetClick = false;
      console.log(this.targetClick);
    }
  }

  handleDocumentKeydown(event) {
    if (event.code === "Escape" && this.modal.classList.contains(this.active)) {
      this.closeModal();
    }
  }

  closeModal() {
    this.modal.classList.remove(this.active);
    this.body.classList.remove("lock");
  }
}
