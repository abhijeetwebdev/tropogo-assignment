import { Component, Input, OnInit, OnDestroy, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Batch, getEmptyBatch } from 'src/app/models/batch.model';

@Component({
    selector: 'app-batch-builder',
    templateUrl: './batch-builder.html'
})
export class BatchBuilder implements OnInit, OnDestroy {

    @Input() showError: any;
    @Input() batches: Batch[];
    @Input() form: any;
    batchSub: Subscription;

    // @Output() batchesChange = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    resetBatch(index: number) {
        if (this.batches[index]) {
            this.batches[index] = getEmptyBatch();
        }
    }

    deleteBatch(index: number) {
        this.batches.splice(index, 1);
    }

    setBatch(data: { index: number, key: any, value: any }) {
        // if (this.batches[data.index]) {
        //     this.batches[data.index][data.key] = data.value;
        // }
    }
}
