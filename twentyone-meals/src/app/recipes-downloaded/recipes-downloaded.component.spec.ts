import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesDownloadedComponent } from './recipes-downloaded.component';

describe('RecipesDownloadedComponent', () => {
  let component: RecipesDownloadedComponent;
  let fixture: ComponentFixture<RecipesDownloadedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesDownloadedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesDownloadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
