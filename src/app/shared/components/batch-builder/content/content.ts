import { Component, Input, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { City } from 'src/app/models/city.model';

@Component({
    selector: 'batch-content',
    templateUrl: './content.html'
})
export class BatchContent implements OnInit {

    cities: City[];
    selectedCities: City[];

    @Input() index: any;
    @Input() batch: any;
    @Input() form: any;

    constructor(
        private dataService: DataService
    ) { }

    ngOnInit() {
        this.cities = this.dataService.getCities();
    }
}
