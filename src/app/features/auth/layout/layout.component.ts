import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DecorativeBackgroundComponent } from '../../../shared/components/decorative-background/decorative-background.component';
import { DecorativeCirclesComponent } from '../../../shared/components/decorative-circles/decorative-circles.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet,
    DecorativeBackgroundComponent,
    DecorativeCirclesComponent,
  ],
  templateUrl: './layout.component.html',
})
export class AuthLayoutComponent {}
