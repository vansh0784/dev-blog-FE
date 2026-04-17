import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    imports: [ReactiveFormsModule, CommonModule],
    standalone: true,
    templateUrl: './login.component.html',
})
export class LoginComponent {
    private fb = inject(FormBuilder);
    formValue = signal({ email: '', password: '' });
    form = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
    });

    onSubmit() {
        console.log(this.form.value);
        console.log(this.formValue());
    }
}
