import { Component, ChangeDetectionStrategy, OnInit, DoCheck } from '@angular/core';
import { NgIf } from '@angular/common';
import { LoggerService } from '../../logger.service';
@Component({
  selector: 'app-nested',
  template: `<div style="border:1px blue solid; padding:5px; margin: 5px;">
                <h1>nested component</h1>
                <div *ngIf="condition" >ngIf</div>
             </div>`,
  providers: [LoggerService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NestedComponent implements OnInit, DoCheck {

  condition = true;
  constructor(private logger: LoggerService) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.logger.log('nested component DoCheck');
  }

}
