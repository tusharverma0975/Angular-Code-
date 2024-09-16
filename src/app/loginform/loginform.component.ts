import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.scss',
})
export class LoginformComponent {
  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.email]),
  });
  loginUser() {
    console.warn(this.loginForm, [Validators.required]);
    console.warn(this.loginForm.value);
    // isse sirf value milegi
    //validation k lie array m bhjna hota hai custom validator bana kar
    //user.toched ka matlab ek baar touch kia aur fir khi aur focus kar dia toh uska meaning ye hai
  }

  public get user() {
    return this.loginForm.get('user');
  }

  public get password() {
    return this.loginForm.get('password');
  }
}
