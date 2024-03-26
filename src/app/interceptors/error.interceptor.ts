import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { TokenService } from '../services/token.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);

  return next(req).pipe(catchError(err => {
    
    if([401,403].includes(err.status)) {
      tokenService.clear();
      router.navigate(['login']);
    }

    const validError = typeof err.error ! == "string";
    const title = validError ? err.error.title : "Ops.. tivemos algum problema ao realizar a requisição."
    const message = err.statusText

    Swal.fire({
      icon: "error",
      title: title,
      text: message
    });

    return throwError(() => err);
  }));
};
