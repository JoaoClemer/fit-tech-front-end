import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  public set(user: string, token: string): void{
    localStorage.setItem('fittechuser', user);
    localStorage.setItem('fittechtoken', token);
  }

  public setUser(user: string): void{
    localStorage.setItem('fittechuser', user);
  }

  public setToken(token: string): void{
    localStorage.setItem('fittechtoken', token);
  }

  public getUser(): string | null {
    const user = localStorage.getItem('fittechuser');
    if(user)
      return user;
    else
      return null;
  }

  public getToken(): string | null {
    const user = localStorage.getItem('fittechtoken');
    if(user)
      return user;
    else
      return null;
  }

  public hasToken(): boolean {
    if(this.getToken())
      return true;
    else
      return false;
  }

  public clear(): void {
    localStorage.removeItem('fittechuser');
    localStorage.removeItem('fittechtoken');
  }

}
