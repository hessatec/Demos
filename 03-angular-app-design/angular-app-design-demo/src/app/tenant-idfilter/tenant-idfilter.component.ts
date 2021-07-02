import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TenantIDService } from '../Services/TenantIDService';

@Component({
  selector: 'app-tenant-idfilter',
  templateUrl: './tenant-idfilter.component.html',
  styleUrls: ['./tenant-idfilter.component.css']
})
export class TenantIDFilterComponent implements OnInit {

  constructor(private _tenantIdService: TenantIDService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params =>
      {
        let param = params.get('tenantId');
        if (param == null) return;
        this._tenantIdService.publishTenantId(+param);
      }
    ); 
  }

}
