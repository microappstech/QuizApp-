import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforestartComponent } from './beforestart.component';

describe('BeforestartComponent', () => {
  let component: BeforestartComponent;
  let fixture: ComponentFixture<BeforestartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeforestartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeforestartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
