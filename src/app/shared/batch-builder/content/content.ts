import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { City } from 'src/app/models/city.model';
import { Language } from 'src/app/models/language.model';
import { Batch } from 'src/app/models/batch.model';

@Component({
    selector: 'batch-content',
    templateUrl: './content.html'
})
export class BatchContent implements OnInit {

    @Input() index: any;
    @Input() batch: Batch;
    // @Output() batchChange = new EventEmitter<any>();
    @Input() form: any;

    // @Output() onBatchUpdate: EventEmitter<any> = new EventEmitter<any>();

    cities: City[];
    languages: Language[];

    public cost = {
        type: 'text',
        name: 'cost',
        label: 'Course Cost (Ex GST)',
        value: '',
        required: true,
        placeholder: 'Rs.'
    };

    public weekend = {
        type: 'radio',
        name: 'weekend',
        label: 'Is this a weekend course?',
        value: '',
        required: true,
        options: [
            { key: '1', label: 'Yes' },
            { key: '0', label: 'No' }
        ]
    };

    constructor(
        private dataService: DataService
    ) { }

    ngOnInit() {
        this.cities = this.dataService.getCities();
        this.languages = this.dataService.getLanguages();
    }

    // locationChanged(index: number, location: Location) {
    //     this.onBatchUpdate.emit({ index: index, key: 'location', value: location });
    // }

    // languageChanged(index: number, languages: Language[]) {
    //     this.onBatchUpdate.emit({ index: index, key: 'languages', value: languages });
    // }
}
