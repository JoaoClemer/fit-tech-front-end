import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss'
})
export class InfoCardComponent {
  @Input() value: string = "";
  @Input() text: string = "";
  @Input() icon: string = "";
  @Input() color: string = "";
}
