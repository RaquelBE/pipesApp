import { Pipe, PipeTransform } from '@angular/core';


//raquel | toggleCase = 'RAQUEL'
//RAQUEL | toggleCase = 'raquel

@Pipe({
  name: 'toggleCase',
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, toUpper: boolean = false): string {
    return ( toUpper ) ? value.toUpperCase() : value.toLowerCase();
  }
}
