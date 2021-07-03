import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Attendee } from "../Models/Attendee";

@Injectable({
    providedIn: 'root'
})
export class AttendeeService {
    private _attendeeList: Attendee[] = [
        { 'id': 1, 'firstName': 'Sai', 'lastName': 'Machi', 'tenantId': 1 },
        { 'id': 2, 'firstName': 'Nani', 'lastName': 'Machi', 'tenantId': 1 },
        { 'id': 3, 'firstName': 'Bill', 'lastName': 'Gates', 'tenantId': 2 },
        { 'id': 4, 'firstName': 'Jeff', 'lastName': 'Bezos', 'tenantId': 3 }
    ];

    private _attendeeSubject: BehaviorSubject<Attendee[]> = new BehaviorSubject<Attendee[]>([]);
    attendeeObservable = this._attendeeSubject.asObservable();

    loadAll() {
        let tenantId = localStorage.getItem('tenantId');
        if (tenantId == null) return;
        // Assertion that tenantId is not null
        this._attendeeSubject.next(this._attendeeList.filter(element => element.tenantId === +(tenantId!)));
    }
}