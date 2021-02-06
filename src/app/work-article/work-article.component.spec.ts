import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkArticleComponent } from './work-article.component';

describe('WorkArticleComponent', () => {
  let component: WorkArticleComponent;
  let fixture: ComponentFixture<WorkArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
