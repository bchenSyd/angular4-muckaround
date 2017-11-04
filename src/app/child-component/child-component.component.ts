import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.less']
})
export class ChildComponentComponent implements OnInit {
  @Input() user;
  constructor() {
  }
  onChange(val) {
    console.log(val);
  }
  childClick() {
    // click event will bubble up
    alert(JSON.stringify(this.user));
    return false; // return false won't stop bubbling
  }
  ngOnInit() {
  }

}
