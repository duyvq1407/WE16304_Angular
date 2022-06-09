import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBookCateDetailComponent } from './admin-book-cate-detail.component';

describe('AdminBookCateDetailComponent', () => {
  let component: AdminBookCateDetailComponent;
  let fixture: ComponentFixture<AdminBookCateDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBookCateDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBookCateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
