import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';
import {ArsCharacter}   from './ars.character';
import {ArsService}     from './ars.service';
bootstrap(ArsCharacter, [HTTP_PROVIDERS, ArsService]);
