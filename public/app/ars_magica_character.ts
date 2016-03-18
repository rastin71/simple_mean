import {Component} from 'angular2/core';
import {ArsArts} from './ars_arts';
import {ArsSkills} from './ars_skills';

@Component({
    selector: 'ars-magica-character',
    template: `
    <h2>Character</h2>
    <ars-arts points="150"></ars-arts>
    <ars-skills points="80"></ars-skills>`,
    directives: [ArsArts, ArsSkills]
})
export class ArsMagicaCharacter {
}

