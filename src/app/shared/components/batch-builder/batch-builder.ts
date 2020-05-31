import { Component, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
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

    @Output() batchesChange = new EventEmitter<number>();

    constructor() { }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    reset(index: number) {
        alert('Reset: ' + index);
    }

    delete(index: number) {
        this.batches.splice(index, 1);
    }
}
