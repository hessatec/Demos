import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TenantIDService {
    private _tenantIdSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    tenantIdObservable = this._tenantIdSubject.asObservable();

    publishTenantId(newTenantId: number)
    {
        localStorage.setItem('tenantId', newTenantId.toString());
        this._tenantIdSubject.next(newTenantId);
    }
}