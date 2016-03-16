import {Component} from 'angular2/core';
@Component({
  selector: 'ars-arts',
  template: `
    <h2>Arts (points: {{points}})</h2>
    <div class="row wrapper">
      <div *ngFor="#art of arts; #i = index" class="col-sm-4 row">
        <div class="art col-sm-6">{{art.name}}</div>
        <div class="glyphicon-minus col-sm-2" (click)="art.dec()"></div>
        <div class="value col-sm-2">{{art.value}}<span *ngIf="art.remainder > 0">:{{art.remainder}}</span></div>
        <div class="glyphicon-plus col-sm-2" (click)="art.inc()"></div>
      </div>
    </div>`,
  styles: [`div {border: 0pt solid black;} .art, .value { font-size: 14pt; } .value { text-align: center; } .wrapper { max-width: 750px; }`]
})
export class ArsArts {
  points: number = 0;
  arts: Art[] = [];

  data = [
    {"id": "cr", "css": "tech", "name": "Creo", "value": 0},
    {"id": "an", "css": "form1", "name": "Animal", "value": 0},
    {"id": "ig", "css": "form2", "name": "Ignem", "value": 0},

    {"id": "in", "css": "tech", "name": "Intellego", "value": 0},
    {"id": "aq", "css": "form1", "name": "Aquam", "value": 0},
    {"id": "im", "css": "form2", "name": "Imagonem", "value": 0},

    {"id": "mu", "css": "tech", "name": "Muto", "value": 0},
    {"id": "au", "css": "form1", "name": "Auram", "value": 0},
    {"id": "me", "css": "form2", "name": "Mentem", "value": 0},

    {"id": "pe", "css": "tech", "name": "Perdo", "value": 0},
    {"id": "co", "css": "form1", "name": "Corporem", "value": 0},
    {"id": "te", "css": "form2", "name": "Terram", "value": 0},

    {"id": "re", "css": "tech", "name": "Rego", "value": 0},
    {"id": "he", "css": "form1", "name": "Herbem", "value": 0},
    {"id": "vi", "css": "form2", "name": "Vim", "value": 0}
  ];

  constructor () {
    this.points = 150;
    for (var i=0; i < this.data.length; i++) {
      var dat = this.data[i];
      this.arts.push(new Art(dat.name, dat.id, dat.value, dat.css, this));
    }
  }

  inc(val: number): void {
    this.points += val;
  }

  inc_point(): void {
    this.points++;
  }

  dec(val: number): boolean {
    if (val > this.points) return false;
    this.points -= val;
    return true;
  }

  dec_point(): boolean {
    if (this.points > 0) {
      this.points--;
      return true;
    }
    return false;
  }

}
class Art {
  pref: ArsArts;
  name: string;
  id: string;
  value: number;
  remainder: number;
  css: string;

  constructor(name: string, id: string, val: number, css: string, pref: ArsArts) {
    this.name = name;
    this.id = id;
    this.value = val;
    this.remainder = 0;
    this.css = css;
    this.pref = pref;
  }

  inc(): void {
    if (this.pref.dec(this.value + 1)) this.value++;
    else if (this.pref.dec_point()) this.remainder++;
  }
  dec(): void {
    if (this.remainder > 0) {
      this.pref.inc_point();
      this.remainder--;
    }
    else if (this.value > 0) {
      this.pref.inc(this.value--);
    }
  }
}

