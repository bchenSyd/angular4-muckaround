import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.less']
})
export class ChildComponentComponent implements OnInit, OnChanges {
  @Input() user;
  @Input() systemNotification;
  ownProp: string;
  constructor() {

  }

  onChange = name => val => {
    console.log(`${name} changed to ${val}`);
  }



  childClick() {
    alert(JSON.stringify({
      user: this.user,
      systemNotification: this.systemNotification,
      ownProp: this.ownProp,
    });
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
