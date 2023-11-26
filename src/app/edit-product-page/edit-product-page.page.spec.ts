import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditProductPAGEPage } from './edit-product-page.page';

describe('EditProductPAGEPage', () => {
  let component: EditProductPAGEPage;
  let fixture: ComponentFixture<EditProductPAGEPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditProductPAGEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
