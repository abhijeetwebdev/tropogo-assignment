import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-batch-builder',
    templateUrl: './batch-builder.html'
})
export class BatchBuilder implements OnInit, OnDestroy {

    @Input() showError: any;
    @Input() batches: any;
    @Input() form: any;
    batchSub: Subscription;

    constructor() { }

    ngOnInit() {
    }

    ngOnDestroy() {
    }
}
