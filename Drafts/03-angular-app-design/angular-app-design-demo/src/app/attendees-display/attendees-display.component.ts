import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AttendeeService } from '../Services/AttendeeService';
import { TenantIDService } from '../Services/TenantIDService';

@Component({
  selector: 'app-attendees-display',
  templateUrl: './attendees-display.component.html',
  styleUrls: ['./attendees-display.component.css']
})
export class AttendeesDisplayComponent implements OnInit {

  constructor(private _attendeeService: AttendeeService) {}

  dataObservable = this._attendeeService.attendeeObservable;

  ngOnInit() {
    this._attendeeService.loadAll();
  }

}
