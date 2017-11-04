import {
    Component, Input, ChangeDetectionStrategy,
    OnInit, DoCheck, OnChanges, SimpleChanges
} from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
    selector: 'app-child-component',
    templateUrl: './child-component.component.html',
    styleUrls: ['./child-component.component.less'],
    providers: [LoggerService],
    changeDetection: ChangeDetectionStrategy.OnPush // CheckOnce;
})
export class ChildComponentComponent implements OnInit, DoCheck {
    @Input() user;
    @Input() systemNotification;
    ownProp: string = "init";

    constructor(private logger: LoggerService) {

    }

    onChange = name => val => {
        // console.log(`${name} changed to ${val}`);
    }

    childClick() {
        alert(JSON.stringify({
            user: this.user,
            systemNotification: this.systemNotification,
            ownProp: this.ownProp,
        }));
    }

    ngDoCheck() {
        this.logger.log('child  ngDoCheck will update those none @inputs');
    }
    ngOnInit() {
        this.logger.log('child ngOnInit');
    }

}
