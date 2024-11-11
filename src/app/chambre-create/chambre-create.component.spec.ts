import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChambreCreateComponent } from './chambre-create.component';

describe('ChambreCreateComponent', () => {
  let component: ChambreCreateComponent;
  let fixture: ComponentFixture<ChambreCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChambreCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChambreCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
