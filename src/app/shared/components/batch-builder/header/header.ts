import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'batch-header',
    templateUrl: './header.html'
})
export class BatchHeader implements OnInit {

    @Input() index: any;
    @Input() batch: any;
    @Input() form: any;

    constructor() { }

    ngOnInit() {
    }
}
