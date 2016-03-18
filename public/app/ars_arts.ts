import {Component, Input} from 'angular2/core';
import {Score, ScoreContainer} from './ars_score';

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
export class ArsArts implements ScoreContainer {
  @Input() points: number;
  arts: Score[] = [];

  data = [
    {"id": "cr", "name": "Creo", "value": 0},
    {"id": "an", "name": "Animal", "value": 0},
    {"id": "ig", "name": "Ignem", "value": 0},

    {"id": "in", "name": "Intellego", "value": 0},
    {"id": "aq", "name": "Aquam", "value": 0},
    {"id": "im", "name": "Imagonem", "value": 0},

    {"id": "mu", "name": "Muto", "value": 0},
    {"id": "au", "name": "Auram", "value": 0},
    {"id": "me", "name": "Mentem", "value": 0},

    {"id": "pe", "name": "Perdo", "value": 0},
    {"id": "co", "name": "Corporem", "value": 0},
    {"id": "te", "name": "Terram", "value": 0},

    {"id": "re", "name": "Rego", "value": 0},
    {"id": "he", "name": "Herbem", "value": 0},
    {"id": "vi", "name": "Vim", "value": 0}
  ];

  constructor () {
    for (var i=0; i < this.data.length; i++) {
      var dat = this.data[i];
      this.arts.push(new Score(dat.name, dat.id, dat.value, dat.css, this));
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

