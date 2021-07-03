import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantIDFilterComponent } from './tenant-idfilter.component';

describe('TenantIDFilterComponent', () => {
  let component: TenantIDFilterComponent;
  let fixture: ComponentFixture<TenantIDFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantIDFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantIDFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
