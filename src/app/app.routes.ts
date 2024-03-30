import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { StudentsMainComponent } from './pages/students/students-main/students-main.component';

export const routes: Routes = [
    {path: '', redirectTo:'/home', pathMatch:'full'},
    {path: '', component:MainPageComponent, 
    children:
    [
        {path:'home', component:HomeComponent, canActivate:[authGuard]},
        {path: 'students', component:StudentsMainComponent, canActivate:[authGuard]}
    ]},

    {path: 'login', component: LoginComponent}
];
