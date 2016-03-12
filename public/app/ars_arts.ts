import {Component, Input} from 'angular2/core';
import {ArsArt} from './ars_art';
@Component({
  selector: 'ars-arts',
  template: `
    <h2>Arts (points: {{points}})</h2>
    <div class="art-group tech">
      <ars-art id="cr" value="0" name="Creo"></ars-art>
      <ars-art id="in" value="0" name="Intellego"></ars-art>
      <ars-art id="mu" value="0" name="Muto"></ars-art>
      <ars-art id="pe" value="0" name="Perdo"></ars-art>
      <ars-art id="re" value="0" name="Rego"></ars-art>
    </div>
    <div class="art-group form1">
      <ars-art id="an" value="0" name="Animal"></ars-art>
      <ars-art id="aq" value="0" name="Aquam"></ars-art>
      <ars-art id="au" value="0" name="Auram"></ars-art>
      <ars-art id="co" value="0" name="Corporem"></ars-art>
      <ars-art id="he" value="0" name="Herbem"></ars-art>
    </div>
    <div class="art-group form2">
      <ars-art id="Ig" value="0" name="Ignem"></ars-art>
      <ars-art id="Im" value="0" name="Imagonem"></ars-art>
      <ars-art id="Me" value="0" name="Mentem"></ars-art>
      <ars-art id="Te" value="0" name="Terram"></ars-art>
      <ars-art id="Vi" value="0" name="Vim"></ars-art>
    </div>`,
  styles: [`.art-group {width: 210px; float: left;} .form1 {padding-left: 10px;} .form2 { padding-left: 10px; clear: right;}`],
  directives: [ArsArt]
})
export class ArsArts {
  points: number = 150;

  inc(val: number): void {
    this.points += val;
  }

  dec(val: number): boolean {
    if (val > this.points) return false;
    this.points -= val;
    return true;
  }

}
