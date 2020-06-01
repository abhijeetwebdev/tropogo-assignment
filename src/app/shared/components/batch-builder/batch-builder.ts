import { Component, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Batch } from 'src/app/models/batch.model';

@Component({
    selector: 'app-batch-builder',
    templateUrl: './batch-builder.html'
})
export class BatchBuilder implements OnInit, OnDestroy {

    @Input() showError: any;
    @Input() batches: Batch[];
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

    setDate(data: { index: number, type: string, date: NgbDateStruct }) {
        if (this.batches[data.index]) {
            this.batches[data.index][data.type] = data.date;
        }
    }
}
