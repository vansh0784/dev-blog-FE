import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-signup',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './signup.component.html',
})
export class SignupComponent {
    private fb = inject(FormBuilder);
    @Output() submitForm = new EventEmitter<any>();
    form = this.fb.group({
        userName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
    });

    onSubmit() {
        if (this.form.invalid) return;
        this.submitForm.emit(this.form.value);
    }
}
