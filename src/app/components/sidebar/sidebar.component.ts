import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  constructor(
    private tokenService: TokenService,
    private router: Router){}

  sidebarOpen: boolean = true;

  @Output() sidebarStatus = new EventEmitter<boolean>();

  public openOrCloseSideBar(): void{

    this.sidebarOpen = !this.sidebarOpen;

    this.sidebarStatus.emit(this.sidebarOpen);
  }

  public logOut(): void{
    this.tokenService.clear();
    this.router.navigate(['login']);
  }
}
