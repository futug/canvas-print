export class FormTransfer {
  constructor(targetClass, formData) {
    console.log("Полученый объект:", formData);
    this.orientation = document.querySelector(`${targetClass}__orientation`);
    this.size = document.querySelector(`${targetClass}__size`);
    this.design = document.querySelector(`${targetClass}__design`);
    this.designAdd = document.querySelector(`${targetClass}__additional`);
    this.coverages = document.querySelector(`${targetClass}__coverage`);
    this.frame = document.querySelector(`${targetClass}__frame`);
    this.stretch = document.querySelector(`${targetClass}__stretch`);
    this.suspend = document.querySelector(`${targetClass}__suspend`);
    this.wrap = document.querySelector(`${targetClass}__wrap`);
    this.file = document.querySelector(`${targetClass}__file`);
    this.total = document.querySelector(`${targetClass}__total`);
    this.name = document.querySelector(`${targetClass}__name`);
    this.phone = document.querySelector(`${targetClass}__phone`);
    this.email = document.querySelector(`${targetClass}__email`);
    this.deliveryWay = document.querySelector(`${targetClass}__delivery-way`);
    this.formData = formData;

    this.transferValues(this.formData);
  }

  transferValues(formData) {
    if (this.orientation) {
      this.orientation.value = formData[0].orientation;
    }
    if (this.size) {
      this.size.value = formData[0].size;
    }
    if (this.design) {
      this.design.value = formData[0].design;
    }

    if (this.designAdd) {
      this.designAdd.value = formData[0].designAdd;
    }
    if (this.coverages) {
      this.coverages.value = formData[0].coverages;
    }
    if (this.frame) {
      this.frame.value = formData[0].frame;
    }
    if (this.stretch) {
      this.stretch.value = formData[0].stretch;
    }
    if (this.suspend) {
      this.suspend.value = formData[0].suspend;
    }
    if (this.wrap) {
      this.wrap.value = formData[0].wrap;
    }
    if (this.total) {
      this.total.value = formData[0].total;
    }

    if (this.name) {
      this.name.value = formData[0].name;
    }

    if (this.phone) {
      this.phone.value = formData[0].phone;
    }

    if (this.email) {
      this.email.value = formData[0].email;
    }

    if (this.deliveryWay) {
      this.deliveryWay.value = formData[0].deliveryWay;
    }
  }
}
