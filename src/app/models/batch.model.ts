import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export class Batch {
    startDate: NgbDateStruct;
    endDate: NgbDateStruct;
    location: string;
    languages: string[];
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
