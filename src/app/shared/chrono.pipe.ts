import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chrono'
})
export class ChronoPipe implements PipeTransform {

  transform(value: Date): string {
    return "" + value.getMinutes() + " minutes " + value.getSeconds() + " secondes";
  }
}
