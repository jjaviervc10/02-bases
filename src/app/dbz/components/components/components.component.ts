import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [],
  template: `<p>components works!</p>`,
  styleUrl: './components.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentsComponent { }
