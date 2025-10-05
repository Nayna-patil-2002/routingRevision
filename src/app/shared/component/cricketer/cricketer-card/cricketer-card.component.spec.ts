import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketerCardComponent } from './cricketer-card.component';

describe('CricketerCardComponent', () => {
  let component: CricketerCardComponent;
  let fixture: ComponentFixture<CricketerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CricketerCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CricketerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
