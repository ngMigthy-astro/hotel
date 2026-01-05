import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { DecorativeBackgroundComponent } from '../../../../shared/components/decorative-background/decorative-background.component';
import { DecorativeCirclesComponent } from '../../../../shared/components/decorative-circles/decorative-circles.component';

import { UserFormComponent } from '../user-form/user-form.component';
import { User } from '../../interfaces/user.interface';
import { TitleComponent } from "../../../../shared/components/title/title.component";

import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    DecorativeBackgroundComponent,
    DecorativeCirclesComponent,
    TitleComponent,
  ],
  providers: [NzButtonModule],
  templateUrl: './user-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {}
