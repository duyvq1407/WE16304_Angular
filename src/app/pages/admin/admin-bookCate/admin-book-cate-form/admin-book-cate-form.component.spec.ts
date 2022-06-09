import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBookCateFormComponent } from './admin-book-cate-form.component';

describe('AdminBookCateFormComponent', () => {
  let component: AdminBookCateFormComponent;
  let fixture: ComponentFixture<AdminBookCateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBookCateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBookCateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
