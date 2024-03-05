import { Component } from '@angular/core';
import { MenuBarComponent } from "../menu-bar/menu-bar.component";
import { PageContentComponent } from "../page-content/page-content.component";
import { PageContent } from '../../interfaces/page-content';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
    selector: 'app-my-account-page',
    standalone: true,
    templateUrl: './my-account-page.component.html',
    styleUrl: './my-account-page.component.css',
    imports: [MenuBarComponent, PageContentComponent, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatCheckboxModule]
})
export class MyAccountPageComponent {

    email = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl('', Validators.required);
    signUp : boolean = false;

    emailPlaceholder : string = 'you@gmail.com';
    passwordPlaceholder : string = '6 characters minimum';
    buttonText : string = 'Login';
    signUpClicked : boolean = false;
    signedUp : boolean = false;

    myAccount: PageContent = {
        leftPhoto: './assets/myAcc-page-img.jpg',
        title: 'Login'
    };

    getErrorMessageEmail() {
        if (this.email.hasError('required')) {
          return 'Email Adress is required';
        }

        return this.email.hasError('email') ? 'Not a valid email' : '';
    }

    getErrorMessagePassword() {
        if(this.password.hasError('required')) {
            return 'Password is required';
        }
    
        return this.email.hasError('email') ? 'Not a valid email' : '';
    }

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
}
