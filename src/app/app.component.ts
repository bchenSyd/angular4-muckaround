import {
  Component, OnInit, OnDestroy, DoCheck, OnChanges,
  AfterContentChecked, AfterViewInit, AfterViewChecked
} from '@angular/core';
import { LoggerService } from './logger.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [LoggerService]
})
class AppComponent implements OnInit {
  title: string;
  currentUser: any;
  constructor(private logger: LoggerService) {
    this.title = 'angular4';
    this.currentUser = {
      name: 'bochen',
      age: 35,
    };
  }

  ngOnInit() {
    // Properties are resolved and things like
    // this.mapWindow and this.mapControls
    // had a chance to resolve from the
    // two child components <map-window> and <map-controls>
    this.logger.log('ngOnInit');
  }
  ngOnDestroy() {
    this.logger.log('ngOnDestroy');
  }

  ngDoCheck() {
    // this.logger.log('ngDoCheck give you an extra opportunity to mark as dirty');
  }

  ngOnChanges(changes) {
    this.logger.log('ngOnChanges');
    // Called right after our bindings have been checked but only
    // if one of our bindings has changed.
    //
    // changes is an object of the format:
    // {
    //   'prop': PropertyUpdate
    // }
  }
  ngAfterContentInit() {
    // Component content has been initialized
  }
  ngAfterContentChecked() {
    // Component content has been Checked
  }
  ngAfterViewInit() {
    // Component views are initialized
  }
  ngAfterViewChecked() {
    // Component views have been checked
  }
}

export {
  AppComponent
};

