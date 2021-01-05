import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {IEncriptionConfig} from '../../../environments/environment.model';


@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  constructor() {
  }

  get encriptionConfig(): IEncriptionConfig {
    return environment.encriptionConfig;
  }

  get security(): boolean {
    return environment.security;
  }
}
