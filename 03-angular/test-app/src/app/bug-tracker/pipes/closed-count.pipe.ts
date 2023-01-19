import { Pipe, PipeTransform } from '@angular/core';
import Bug from '../models/Bug';

@Pipe({
  name: 'closedCount',
  pure : false
})
export class ClosedCountPipe implements PipeTransform {

  transform(list: Bug[], ...args: unknown[]): number {
     return list.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0)
  }

}
