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
    @Input() user;
    @Input() systemNotification;
    ownProp = 'init';

    constructor(private logger: LoggerService) {

    }

    onChange = name => val => {
        // console.log(`${name} changed to ${val}`);
    }

    showData() {
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
