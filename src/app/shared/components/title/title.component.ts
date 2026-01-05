import { ChangeDetectionStrategy, Component, input } from '@angular/core';


@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {
  title = input.required<string>();
  description = input.required<string>();
  buttonText = input<string>('Añadir nuevo');
  icon = input<string>('pi-plus-circle');
}
