import {
    Component, Input, ChangeDetectionStrategy,
    OnInit, DoCheck, OnChanges, SimpleChanges
} from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.less'],
    providers: [LoggerService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit, DoCheck {
    // changes to @input will only cause doCheck return true if they
    // are new instances (shallowEqual false)
    @Input() user;
    @Input() systemNotification;
    // changes to ownProp will always cause doCheck return false;
    showAge = false;

    constructor(private logger: LoggerService) { }

    showData() {
        alert(JSON.stringify({
            user: this.user,
            systemNotification: this.systemNotification,
            showAge: this.showAge,
        }));
    }

    ngDoCheck() {
        this.logger.log('child  ngDoCheck');
    }
    ngOnInit() {
        this.logger.log('child ngOnInit');
    }

}
