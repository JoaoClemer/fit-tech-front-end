import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingComponent } from '../../components/loading/loading.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet, LoadingComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

  public siderbarIsOpen:boolean = true;

  changeSideBarStatus(event:boolean){
    this.siderbarIsOpen = event;
  }

}
