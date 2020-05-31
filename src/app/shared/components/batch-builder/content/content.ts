import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'batch-content',
    templateUrl: './content.html'
})
export class BatchContent implements OnInit {

    @Input() index: any;
    @Input() batch: any;
    @Input() form: any;

    constructor() { }

    ngOnInit() {
    }
}
