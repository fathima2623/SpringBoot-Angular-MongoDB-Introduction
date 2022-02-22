import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookshopUpdateComponent } from './bookshop-update.component';

describe('BookshopUpdateComponent', () => {
  let component: BookshopUpdateComponent;
  let fixture: ComponentFixture<BookshopUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookshopUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookshopUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
