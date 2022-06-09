import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBookCateListComponent } from './admin-book-cate-list.component';

describe('AdminBookCateListComponent', () => {
  let component: AdminBookCateListComponent;
  let fixture: ComponentFixture<AdminBookCateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBookCateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBookCateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
