import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocEditComponent } from './bloc-edit.component';

describe('BlocEditComponent', () => {
  let component: BlocEditComponent;
  let fixture: ComponentFixture<BlocEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlocEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlocEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
