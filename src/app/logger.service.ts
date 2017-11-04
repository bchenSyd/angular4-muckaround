import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }
  log(txt) {
    console.log(txt);
  }

}
