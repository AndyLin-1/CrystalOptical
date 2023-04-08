import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  ngOnInit(): void {
    const form = document.querySelector('form');

    // @ts-ignore
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const emailInput = document.querySelector('#email');
      const firstNameInput = document.querySelector('#firstName');
      const lastNameInput = document.querySelector('#lastName');
      const addressInput = document.querySelector('#address');
      const countrySelect = document.querySelector('#country-select');
      const provinceSelect = document.querySelector('#province');
      const cityInput = document.querySelector('#city');
      const zipInput = document.querySelector('#zip');
      const cardNumberInput = document.querySelector('#card-number');
      const cardNameInput = document.querySelector('#card-name');
      const expiryDateInput = document.querySelector('#expiry-date');
      const cvvInput = document.querySelector('#cvv');

      // @ts-ignore
      if (emailInput.checkValidity() && firstNameInput.checkValidity() && lastNameInput.checkValidity() && addressInput.checkValidity() && countrySelect.checkValidity() && provinceSelect.checkValidity() && cityInput.checkValidity() && zipInput.checkValidity() && cardNumberInput.checkValidity() && cardNameInput.checkValidity() && expiryDateInput.checkValidity() && cvvInput.checkValidity()) {
        // all fields are valid, submit the form
        // @ts-ignore
        form.submit();
      } else {
        // some fields are invalid, show error message
        alert('Please fill in all required fields and provide valid inputs.');
      }
    });
  }
}
