export class FormTransfer {
  constructor(targetClass, formData) {
    this.targetClass = targetClass;
    this.formData = formData;
    this.fields = this.extractFields();

    this.transferValues(this.formData);
  }

  extractFields() {
    const elements = document.querySelectorAll(
      `${this.targetClass} input, ${this.targetClass} select`
    );
    const fields = Array.from(elements).map((element) => {
      const classList = element.classList;
      for (let i = 0; i < classList.length; i++) {
        if (classList[i].includes("__")) {
          return classList[i].split("__")[1];
        }
      }
    });
    return fields.filter((field) => field);
  }

  transferValues(formData) {
    this.fields.forEach((field) => {
      const element = document.querySelector(`${this.targetClass}__${field}`);
      if (element) {
        element.value = formData[field] || "";
      }
    });
  }
}
