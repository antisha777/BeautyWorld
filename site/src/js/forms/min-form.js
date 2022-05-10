import ApiService from '../services/api-service';

export class MinOrder {
    constructor() {
        this.creatEl = document.getElementById('form');
        this.nameInput = this.creatEl.elements.name;
        this.phoneInput = this.creatEl.elements.phone;
        this.succes = this.creatEl.elements.succes;
        this.unsucces = this.creatEl.elements.unsucces;
        this.allFormFields = document.querySelectorAll('.column__form')

        this._bindEvent();
    }

    _bindEvent() {
        this.creatEl.addEventListener('submit', async event => {
            event.preventDefault();

            document.querySelector('.loader-show').classList.remove('loader-show_hide');
            const formData = new FormData(this.creatEl);
            let submitReturn = await ApiService.createOrder(Object.fromEntries(formData));

            try {               
                unsuccess.hidden = true;
                succes.hidden = false;

                setTimeout(() => {  
                    this.clearForm();                        
                    succes.hidden = true;
                }, 3000);

            } catch(e) {
                unsucces.hidden = false;

            } finally {
                document.querySelector('.loader-show').classList.add('loader-show_hide');
            }
        });
    }

    clearForm() {
        this.allFormFields.forEach(field => {
          field.value = "";
            });
        }
}