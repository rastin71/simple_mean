import {Component} from 'angular2/core';
import {Score, ScoreContainer} from './ars.score';

@Component({
    selector: 'ars-skills',
    template: `
    <h2>Skill (points: {{points}})</h2>
    <div class="row">
        <label class="col-sm-1" for="new_name">Name</label>
        <input class="col-sm-4" type="text" required [(ngModel)]="new_name"/>
        <label class="col-sm-1" for="new_name">ID</label>
        <input class="col-sm-4" type="text" required [(ngModel)]="new_id"/>
        <div class="col-sm-2 glyphicon-plus" (click)="add(0)"></div>
    </div>
    <div class="row wrapper">
      <div *ngFor="#skill of skills; #i = index" class="col-sm-4 row">
        <div class="skill col-sm-6">{{skill.name}}</div>
        <div class="glyphicon-minus col-sm-2" (click)="dec(skill)"></div>
        <div class="value col-sm-2">{{skill.value}}<span *ngIf="skill.remainder > 0">:{{skill.remainder}}</span></div>
        <div class="glyphicon-plus col-sm-2" (click)="inc(skill)"></div>
        <div class="glyphicon-remove col-sm-2" (click)="delete(i)"></div>
      </div>
    </div>`,
    styles: [`.skill, .value { font-size: 14pt; } .value { text-align: center; } .wrapper { max-width: 750px; }`]
})
export class ArsSkills extends ScoreContainer {
    new_name: string;
    new_id: string;
    skills: Score[];

    constructor() {
        this.points = 90;
    }

    add(value: number): void {
        this.skills.push({"name": this.new_name, "id": this.new_id, "value": value, "remainder": 0});
        this.new_name = this.new_id = "";
    }

    delete(index: number): void {
        this.skills.splice(index, 1);
    }
}