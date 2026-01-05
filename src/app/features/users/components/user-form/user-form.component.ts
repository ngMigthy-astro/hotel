import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFormComponent {
  private fb = inject(FormBuilder);
  private userService = inject(UserService);

  roles = [
    {
      label: 'Usuario Estándar',
      value: 'user',
      icon: 'pi pi-user',
      desc: 'Acceso básico',
    },
    {
      label: 'Administrador',
      value: 'admin',
      icon: 'pi pi-shield',
      desc: 'Acceso total',
    },
  ];

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    role: ['user', Validators.required],
    status: [true],
  });
}
