import {Component} from 'angular2/core';
@Component({
  selector: 'ars-arts',
  template: `
    <h2>Arts (points: {{points}})</h2>
    <div *ngFor="#art of arts; #i = index" [class]="art.css">
      <span>{{art.name}}</span>
      <div class="dec" (click)="art.dec()">-</div>
      <input type="text" [name]="art.id" [value]="art.value">
      <div class="inc" (click)="art.inc()">+</div>
    </div>`,
  styles: [`
    .tech, .form1, .form2 { width: 210px; float: left; }
    .form1 { padding-left: 10px; }
    .form2 { padding-left: 10px; clear: right; }
    span { width: 135px; float: left; }
    input { width: 25px; float: left; }
    .dec, .inc { float: left; width: 15px; }

  `]
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

  dec(val: number): boolean {
    if (val > this.points) return false;
    this.points -= val;
    return true;
  }

}
class Art {
  pref: ArsArts;
  name: string;
  id: string;
  value: number;
  css: string;

  constructor(name: string, id: string, val: number, css: string, pref: ArsArts) {
    this.name = name;
    this.id = id;
    this.value = val;
    this.css = css;
    this.pref = pref;
  }

  inc() {
    if (this.pref.dec(this.value + 1)) this.value++;
  }
  dec(): boolean {
    if (this.value > 0) {
      this.pref.inc(this.value--);
      return true;
    }
    return false;
  }
}

