import {Component, Input} from 'angular2/core';
@Component({
    selector: 'ars-art',
    template: `
    <div class="wrapper">
    <span>{{name}}</span>
    <div class="dec" (click)="dec()">-</div>
    <input type="text" [name]="id" [value]="value">
    <div class="inc" (click)="inc()">+</div></div>`,
    styles: [`
        .wrapper {width: 300px; padding-bottom: 10px;}
        span {width: 75px; float: left;}
        div {width: 20px; float: left;}
        .dec {border: 1pt solid red;}
        input {float: left; width: 25px;}
        .inc {border: 1pt solid green;}`]
})
export class ArsArt {

    @Input() name: string;
    @Input() id: string;
    @Input() value: number;

    inc(): void {
        this.value++;
    }
    dec(): void {
        if (this.value > 0) {
            
            this.value--;
        }
    }
}