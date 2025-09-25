import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {

  // Exemple avec ngModel :
  //    --> utilisé en général pour des formulaires 'simple'
  login: string = "";
  password: string = "";

  handleSubmit(e: Event) {
    console.log(`credential: ${this.login} / ${this.password}`)
  }


  // Avec Reactive forms
  loginForm = new FormGroup({
    login: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required)
  })

  handleSubmitWithReactiveForm() {
    if (this.loginForm.valid) {
      const formValue = this.loginForm.value;  // Objet javascript qui contient les valeurs des inputs
      console.log("credential: ", formValue)

      console.log("Formulaire soumis !")
    } else {
      console.log("Erreur de validation !")
    }
  }

  get requiredLoginError() {
    const errors = this.loginForm.get('login')?.errors
    if (errors) {
      return errors['required']
    }
    return false;
  }

  get formatMailLoginError() {
    const errors = this.loginForm.get('login')?.errors
    if (errors) {
      return errors['email']
    }
    return false;
  }

  get requiredPasswordError() {
    const errors = this.loginForm.get('password')?.errors
    if (errors) {
      return errors['required']
    }
    return false;
  }

  get loginTouched() {
    return this.loginForm.get('login')?.touched
  }

  get passwordTouched() {
    return this.loginForm.get('password')?.touched
  }

}
