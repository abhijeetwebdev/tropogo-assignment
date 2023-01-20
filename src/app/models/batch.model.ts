import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { City } from './city.model';
import { Language } from './language.model';

export class Batch {
    startDate: NgbDateStruct;
    endDate: NgbDateStruct;
    location: City;
    languages: Language[];
    cost: string;
    isWeekendCourse: boolean;
}

export const emptyBatch = {
    startDate: null,
    endDate: null,
    location: null,
    languages: [],
    cost: null,
    isWeekendCourse: false
}
