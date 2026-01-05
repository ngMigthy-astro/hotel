import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  router = inject(Router);

  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }
}
