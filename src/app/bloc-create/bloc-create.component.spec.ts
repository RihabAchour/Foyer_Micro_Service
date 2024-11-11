import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocCreateComponent } from './bloc-create.component';

describe('BlocCreateComponent', () => {
  let component: BlocCreateComponent;
  let fixture: ComponentFixture<BlocCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlocCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlocCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
