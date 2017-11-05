import { Component, ChangeDetectionStrategy, OnInit, DoCheck } from '@angular/core';
import { LoggerService } from '../../logger.service';
@Component({
  selector: 'app-nested',
  template: `<h1>nested</h1>`,
  providers: [LoggerService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NestedComponent implements OnInit, DoCheck {

  constructor(private logger: LoggerService) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.logger.log('nested component DoCheck');
  }

}
