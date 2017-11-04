import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.less']
})
export class ChildComponentComponent implements OnInit, OnChanges {
  @Input() user;
  @Input() systemNotification;
  constructor() {
  }

  onNameChange = val => {
    console.log(`user.name changed to ${val}`);
    this.user.name = val;
  }

  onSystemNotificationChange = val => {
    console.log(`sysNotification changed to ${val}`);
    this.systemNotification = val;
  }

  childClick() {
    alert(JSON.stringify(this.user));
  }
  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      const change = changes[propName];
      console.dir(change);
      if (change.isFirstChange()) {
        console.log(`first change: ${propName}`);
      } else {
        console.log(`prev: ${change.previousValue}, cur: ${change.currentValue}`);
      }
    }

  }


}
