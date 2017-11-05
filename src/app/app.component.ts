import {
  Component, ChangeDetectionStrategy,
  OnInit, OnDestroy, DoCheck, OnChanges,
  AfterContentChecked, AfterViewInit, AfterViewChecked, AfterContentInit,
} from '@angular/core';
import { LoggerService } from './logger.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [LoggerService],
  changeDetection: ChangeDetectionStrategy.OnPush // CheckOnce;
})
class AppComponent implements OnInit, OnChanges, OnDestroy, DoCheck,
  AfterViewChecked, AfterContentChecked, AfterViewInit, AfterContentInit {
  title: string;
  currentUser: any;
  systemNotification: string;
  constructor(private logger: LoggerService) {
    this.title = 'angular4';
    this.currentUser = {
      name: 'bochen',
      age: 35,
    };
    this.systemNotification = 'welcome to angular4';
  }

  onChangeData() {
    const random = Math.floor(Math.random() * 100);
    this.currentUser.name = 'bochen-' + random;

    // if you comment out below line, changes to currentUser won't take effect on dom
    // child.doCheck return false, nest gets skipped
    // because child @input hasn't changed, nor its own binding changes
    // this.systemNotification = 'sys-notification => ' + random;
  }
  ngOnInit() {
    // Properties are resolved and things like
    // this.mapWindow and this.mapControls
    // had a chance to resolve from the
    // two child components <map-window> and <map-controls>
    this.logger.log('parent ngOnInit');
  }

  ngDoCheck() {
    this.logger.log('parent  ngDoCheck');
  }

  ngOnChanges(changes) {
    this.logger.log('parent ngOnChanges');
  }

  ngOnDestroy() {
    this.logger.log('parent ngOnDestroy');
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

