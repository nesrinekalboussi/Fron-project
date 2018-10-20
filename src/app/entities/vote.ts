import { Injectable } from '@angular/core';
@Injectable()
export class Vote {
    id?: string;
    title: string;
    description: string;
    choix:{}

    constructor() { }
}
