import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export class Batch {
    startDate: NgbDateStruct;
    endDate: NgbDateStruct;
    location: string;
    languages: string[];
    cost: string;
    isWeekendCourse: boolean;
}
