import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'instock'
})
export class InStockPipe implements PipeTransform {
    transform(value: boolean) {
        return value ? 'Còn hàng' : 'Hết hàng';
    }
}

