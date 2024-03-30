import { Component } from '@angular/core';
import { InfoCardComponent } from '../../../components/info-card/info-card.component';
import { PrimaryInputComponent } from '../../../components/primary-input/primary-input.component';

@Component({
  selector: 'app-students-main',
  standalone: true,
  imports: [InfoCardComponent, PrimaryInputComponent],
  templateUrl: './students-main.component.html',
  styleUrl: './students-main.component.scss'
})
export class StudentsMainComponent {

}
