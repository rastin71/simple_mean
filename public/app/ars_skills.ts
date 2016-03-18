import {Component, Input} from 'angular2/core';
import {Skill, ScoreContainer} from './ars_score';

@Component({
    selector: 'ars-skills',
    template: `
    <h2>Skill (points: {{points}})</h2>
    <div class="glyphicon-plus" (click)="add('test', 'tst', 0)"></div>
    <div class="row wrapper">
      <div *ngFor="#skill of skills; #i = index" class="col-sm-4 row">
        <div class="skill col-sm-6">{{skill.name}}</div>
        <div class="glyphicon-minus col-sm-2" (click)="skill.dec()"></div>
        <div class="value col-sm-2">{{skill.value}}<span *ngIf="skill.remainder > 0">:{{skill.remainder}}</span></div>
        <div class="glyphicon-plus col-sm-2" (click)="skill.inc()"></div>
        <div class="glyphicon-remove col-sm-2" (click)="skill.delete()"></div>
      </div>
    </div>`,
    styles: [`.skill, .value { font-size: 14pt; } .value { text-align: center; } .wrapper { max-width: 750px; }`]
})
export class ArsSkills implements ScoreContainer {
    @Input() points: number;
    skills: Skill[] = [];

    add(name: string, id: string, value: number): void {
        this.skills.push(new Skill(name, id, value, this));
    }

    delete(skill: Skill): void {
        for (i = 0; i < this.skills.length; i++) {
            if (skill == this.skills[i]) { this.skills.splice(i, 1); }
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

