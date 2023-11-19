import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientsListPage } from './clients-list.page';

describe('ClientsListPage', () => {
  let component: ClientsListPage;
  let fixture: ComponentFixture<ClientsListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClientsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
