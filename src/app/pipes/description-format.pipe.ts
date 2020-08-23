import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'descriptionFormat'
})
export class DescriptionFormatPipe implements PipeTransform {

  transform(value: string): string {
    let temp: string = '';
    for (let i = 0; i < value.length; i++) {
      if (i == 0) {
        temp += value[i].toUpperCase();
      } else {
        temp += value[i].toLowerCase();
      }
    }
    return temp;
  }

}
