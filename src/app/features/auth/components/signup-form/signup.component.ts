import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-signup',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './signup.component.html',
})
export class SignupComponent {
    private fb = inject(FormBuilder);
    formValue = signal({ userName: '', email: '', password: '' });
    form = this.fb.group({
        userName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
    });

    onSubmit() {
        if (this.form.invalid) return;
        console.log(this.form.value);
        console.log(this.formValue());
    }
}
