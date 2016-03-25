import {Component} from 'angular2/core';
import {ArsArts} from './ars.arts';
import {ArsSkills} from './ars.skills';

@Component({
    selector: 'ars-character',
    template: `
    <h2>Character</h2>
    <ars-arts points="150"></ars-arts>
    <ars-skills points="80"></ars-skills>`,
    directives: [ArsArts, ArsSkills]
})
export class ArsCharacter {
}

