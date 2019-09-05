import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loopCounter'
})
export class LoopCounterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return Array.from(Array(value), (num, index) => index + 1);
  }

}
