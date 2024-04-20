import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoadingService } from '../services/loading.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {  
  var activeRequests = 0
  const loadingService = inject(LoadingService); 

  if(activeRequests == 0){
    console.log('primeiro')
    loadingService.show();
    console.log(activeRequests);
  }

  activeRequests++;
  console.log(activeRequests);

  return next(req).pipe(
    finalize(() => {
      activeRequests--;
      console.log('segundo')
      console.log(activeRequests)

      if(activeRequests == 0)
        {
          loadingService.hide();
          console.log('terceiro')
          console.log(activeRequests)
        }
    })
  );
};
