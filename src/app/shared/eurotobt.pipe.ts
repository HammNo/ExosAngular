import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eurotobt'
})
export class EurotobtPipe implements PipeTransform {

  transform(value: number ): string {
    return '' + (value / 24144) + ' btc';
  }

}
