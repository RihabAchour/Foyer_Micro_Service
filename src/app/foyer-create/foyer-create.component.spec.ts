import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoyerCreateComponent } from './foyer-create.component';

describe('FoyerCreateComponent', () => {
  let component: FoyerCreateComponent;
  let fixture: ComponentFixture<FoyerCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoyerCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoyerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
