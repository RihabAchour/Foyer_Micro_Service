import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversiteEditComponent } from './universite-edit.component';

describe('UniversiteEditComponent', () => {
  let component: UniversiteEditComponent;
  let fixture: ComponentFixture<UniversiteEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UniversiteEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UniversiteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
