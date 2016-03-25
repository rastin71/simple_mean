import {Component, Input} from 'angular2/core';
import {Score, ScoreContainer} from './ars.score';
import {ArsService} from './ars.service';

@Component({
  selector: 'ars-arts',
  template: `
    <h2>Arts (points: {{points}})</h2>
    <div class="row wrapper">
      <div *ngFor="#art of arts; #i = index" class="col-sm-4 row">
        <div class="art col-sm-6">{{art.name}}</div>
        <div class="glyphicon-minus col-sm-2" (click)="dec(art)"></div>
        <div class="value col-sm-2">{{art.value}}<span *ngIf="art.remainder > 0">:{{art.remainder}}</span></div>
        <div class="glyphicon-plus col-sm-2" (click)="inc(art)"></div>
      </div>
    </div>`,
  styles: [`div {border: 0pt solid black;} .art, .value { font-size: 14pt; } .value { text-align: center; } .wrapper { max-width: 750px; }`]
})
export class ArsArts extends ScoreContainer {
  arts: Score[];
  @Input() points: number;

  ngOnInit() {
    this.getArts();
  }

  constructor (private _arsService: ArsService) {}

  getArts(): void {
    this._arsService.getArts().subscribe(
      data => { this.arts = data },
      err => console.error(err),
      () => console.log(this.arts)
    );
  }
}

