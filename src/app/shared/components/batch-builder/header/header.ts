import { Component, Input, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'batch-header',
    templateUrl: './header.html'
})
export class BatchHeader implements OnInit {

    @Input() index: any;
    @Input() batch: any;
    @Input() form: any;

    startDate: NgbDateStruct;
    endDate: NgbDateStruct;

    constructor() { }

    ngOnInit() {
    }
}
