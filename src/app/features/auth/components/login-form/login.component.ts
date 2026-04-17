import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    imports: [ReactiveFormsModule, CommonModule],
    standalone: true,
    templateUrl: './login.component.html',
})
export class LoginComponent {
    private fb = inject(FormBuilder);
    @Output() submitForm = new EventEmitter<any>();
    form = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
    });

    onSubmit() {
        if (this.form.invalid) return;
        this.submitForm.emit(this.form.value);
    }
}
