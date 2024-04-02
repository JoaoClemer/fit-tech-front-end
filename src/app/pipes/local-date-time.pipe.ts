import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localDateTime',
  standalone: true
})
export class LocalDateTimePipe implements PipeTransform {

  transform(date: string): string {
    if(date == '0001-01-01T00:00:00')
      return '--------'
    
    const convertedDate = new Date(date).toLocaleDateString("pt-BR",{timeZone:'America/Sao_Paulo'});

    return convertedDate;
  }

}
