import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortNumber'
})
export class ShortNumberPipe implements PipeTransform {
  transform(value: number | string, fractionSize: number = 1): string | undefined {
    if (value === undefined || value === undefined) return undefined;
    if (typeof value === 'string') {
      value = parseFloat(value);
    }
    if (isNaN(value)) return undefined;

    if (value === 0) return '0';

    const abs = Math.abs(value);
    const rounder = Math.pow(10, fractionSize);
    const isNegative = value < 0;
    let key = '';

    const powers = [
      { key: 'Q', value: Math.pow(10, 15) }, // Quadrillion
      { key: 'T', value: Math.pow(10, 12) }, // Trillion
      { key: 'B', value: Math.pow(10, 9) },  // Billion
      { key: 'M', value: Math.pow(10, 6) },  // Million
      { key: 'k', value: 1000 }             // Kilo
    ];

    for (let i = 0; i < powers.length; i++) {
      const reduced = abs / powers[i].value;
      if (reduced >= 1) {
        value = Math.round(reduced * rounder) / rounder;
        key = powers[i].key;
        break;
      }
    }

    return (isNegative ? '-' : '') + value + key;
  }
}
