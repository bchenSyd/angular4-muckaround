import { Component, ChangeDetectionStrategy, OnInit, DoCheck } from '@angular/core';
import { NgIf } from '@angular/common';
import { LoggerService } from '../../logger.service';
@Component({
  selector: 'app-nested',
  template: `<div style="border:1px blue solid; padding:5px; margin: 5px;">
                <h2>nested component</h2>
                <select name="type" [(ngModel)]="selectedType">
                  <option *ngFor="let t of types" [ngValue]="t.value">
                    {{t.name}}
                  </option>
                </select>
                <div *ngIf="selectedType === 1" >you selected directive</div>
             </div>`,
  providers: [LoggerService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NestedComponent implements OnInit, DoCheck {

  condition = true;
  types = [{
    name: 'component',
    value: 0
  },
  {
    name: 'directive',
    value: 1
  },
  {
    name: 'service',
    value: 2
  }];
  selectedType = 0;
  constructor(private logger: LoggerService) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.logger.log('nested DoCheck');
  }

}
