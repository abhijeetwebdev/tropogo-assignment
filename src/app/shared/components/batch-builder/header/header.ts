import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'batch-header',
    templateUrl: './header.html'
})
export class BatchHeader implements OnInit {

    @Input() index: any;
    @Input() batch: any;
    @Input() form: any;

    @Output() onReset: EventEmitter<any> = new EventEmitter<any>();
    @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();
    @Output() onDateSelect: EventEmitter<any> = new EventEmitter<any>();

    startDate: NgbDateStruct;
    endDate: NgbDateStruct;

    constructor() { }

    ngOnInit() {
    }

    reset(index: number) {
        this.onReset.emit(index);
    }

    delete(index: number) {
        this.onDelete.emit(index);
    }

    onDateSet(index: number, type: string, date: NgbDateStruct) {
        this.onDateSelect.emit({ index: index, type: type, date: date });
    }
}
