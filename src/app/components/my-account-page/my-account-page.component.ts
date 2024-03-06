import { Component } from '@angular/core';
import { MenuBarComponent } from "../menu-bar/menu-bar.component";
import { PageContentComponent } from "../page-content/page-content.component";
import { PageContent } from '../../interfaces/page-content';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { ErrorStateMatcher } from '@angular/material/core';
import { CommonModule } from '@angular/common';

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
  }

@Component({
    selector: 'app-my-account-page',
    standalone: true,
    templateUrl: './my-account-page.component.html',
    styleUrl: './my-account-page.component.css',
    imports: [MenuBarComponent, PageContentComponent, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatIconModule, MatInputModule, MatButtonModule, MatCheckboxModule, CommonModule]
})
export class MyAccountPageComponent {

    formGroup: FormGroup;
    isPasswordInvalid: boolean = false;

    constructor(private builder: FormBuilder) {
    
        this.formGroup = this.builder.group({
          emailFormControl: ['', [Validators.required, Validators.email]],
          passwordFormControl: ['', [
            Validators.required, 
            Validators.pattern(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/)
          ]]
        });
      }

    hide = true;
    signUp : boolean = false;

    emailPlaceholder : string = 'you@gmail.com';
    passwordPlaceholder : string = '6 characters minimum';
    buttonText : string = 'Login';
    signUpClicked : boolean = false;
    signedUp : boolean = false;

    matcher = new MyErrorStateMatcher();

    myAccount: PageContent = {
        leftPhoto: './assets/myAcc-page-img.jpg',
        title: 'Login'
    };

    signUpToAppear() {
        this.emailPlaceholder = 'Your email address';
        this.passwordPlaceholder = 'Create a Password';
        this.buttonText = 'Sign Up';
        this.signUpClicked = true;
        this.myAccount.title = this.signUpClicked ? 'Sign Up' : 'Login';
    }

    signedUpMethod(){
        this.signedUp = true;
    }

    areSignedUp() {
        this.emailPlaceholder = 'you@gmail.com';
        this.passwordPlaceholder = '6 characters minimum';
        this.buttonText = 'Login';
        this.signUpClicked = false;
        this.myAccount.title = this.signUpClicked ? 'Sign Up' : 'Login';
        this.signedUp = false;
    }

    onPasswordBlur() {
        if (this.formGroup.get('passwordFormControl')?.hasError('pattern')) {
          this.isPasswordInvalid = true;
        } else {
          this.isPasswordInvalid = false;
        }
    }
}
