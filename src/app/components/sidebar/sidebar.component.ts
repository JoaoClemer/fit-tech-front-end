import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  sidebarOpen: boolean = true;

  public openOrCloseSideBar(): void{

    this.sidebarOpen = !this.sidebarOpen;
  }
}
