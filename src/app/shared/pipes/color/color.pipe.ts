import { Pipe, PipeTransform } from '@angular/core';

export const colors: string[] = [
  '#6a9c3c',
  '#00579B',
  '#5D4136',
  '#008879',
  '#5E69C0',
  '#4E5D66',
  '#F06E01',
  '#014C40',
  '#014C40',
  '#512FA8',
  '#BE1B5B',
  '#00589B',
  '#76929D',
  '#6a9c3c',
  '#008879'
];

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {
  transform(value: string): string {
    return colors[Math.floor(Math.random() * 14)];
  }
}
