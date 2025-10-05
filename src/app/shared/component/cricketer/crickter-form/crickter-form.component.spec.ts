import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrickterFormComponent } from './crickter-form.component';

describe('CrickterFormComponent', () => {
  let component: CrickterFormComponent;
  let fixture: ComponentFixture<CrickterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrickterFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrickterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
