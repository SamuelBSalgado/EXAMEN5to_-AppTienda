import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientProductListPage } from './client-product-list.page';

describe('ClientProductListPage', () => {
  let component: ClientProductListPage;
  let fixture: ComponentFixture<ClientProductListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClientProductListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
