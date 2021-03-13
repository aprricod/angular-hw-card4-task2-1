import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(userName: any[], value: any) {
    return userName.filter((userName: string | any[]) => {
      return userName.includes(value);
    });
  }
}
