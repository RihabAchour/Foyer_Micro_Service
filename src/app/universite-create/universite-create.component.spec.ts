import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversiteCreateComponent } from './universite-create.component';

describe('UniversiteCreateComponent', () => {
  let component: UniversiteCreateComponent;
  let fixture: ComponentFixture<UniversiteCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UniversiteCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UniversiteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
