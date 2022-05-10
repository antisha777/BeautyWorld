import ApiService from '../services/api-service';
import { Fancybox } from "@fancyapps/ui";

export class OrderForm {
    constructor() {
        this.formEl = document.getElementById('order-form');
        this.nameInput = this.formEl.elements.name;
        this.phoneInput = this.formEl.elements.phone;
        this.mastersSelect = this.formEl.elements.masterId;
        this.servicesSelect = this.formEl.elements.serviceId;
        this.visitDateInput = this.formEl.elements.visitDate;
        this.success = this.formEl.elements.success;
        this.unsuccess = this.formEl.elements.unsuccess;
        this.allFormFields = document.querySelectorAll('.column-red')

        this._init();
        this._bindEvents();
    }

    _init() {
        this._buildMastersSelect();
        this._buildServicesSelect();
    }

    _bindEvents() {
        this.formEl.addEventListener('submit', async event => {
            event.preventDefault();
 
            if (!this.validateForm()) {
                return [0]
              }

            this.validateForm();
            
            document.querySelector('.loader-show').classList.remove('loader-show_hide');
            const data = new FormData(this.formEl);
            let response = await ApiService.createOrder(Object.fromEntries(data));

            try {               
                unsuccess.hidden = true;
                success.hidden = false;

                setTimeout(() => {                          
                    success.hidden = true;
                    this.clearForm();
                    Fancybox.close();
                }, 3000);

            } catch(e) {
                unsuccess.hidden = false;

            } finally {
                document.querySelector('.loader-show').classList.add('loader-show_hide');
            }
        });
    }

    async _buildMastersSelect() {
        const masters = await ApiService.getMasters();
    
        masters.forEach(master => {
          const option = document.createElement('option');
          option.value = master.id;
          option.textContent = master.fullName;
          this.mastersSelect.add(option);
        });
    }

    async _buildServicesSelect() {
        const services = await ApiService.getServices();
    
        services.forEach(service => {
          const option = document.createElement('option');
          option.value = service.id;
          option.textContent = service.name;
          this.servicesSelect.add(option);
        });
    }

    validateForm() {
        this.phoneInput.classList.add('column-valid', false)
        this.nameInput.classList.add('column-valid', false)
        let isNameValidated = true;
        let isPhoneValidated = true;
    
        if (this.nameInput.value == "") {
          this.nameInput.classList.add('.column-valid', true)
          this.nameInput.placeholder = "Введите имя";
          isNameValidated = false
        }
    
        if (this.phoneInput.value.length < 16 || this.phoneInput.value == "") {
          this.phoneInput.classList.add('.column-valid', true)
          this.phoneInput.placeholder = "Введите номер телефона";
          isPhoneValidated = false
        }
        return isNameValidated && isPhoneValidated && true;
        }

      clearForm() {
        this.allFormFields.forEach(field => {
          field.value = "";
            });
        }
}

