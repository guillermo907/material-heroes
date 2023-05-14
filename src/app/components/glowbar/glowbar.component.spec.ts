import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlowbarComponent } from './glowbar.component';

describe('GlowbarComponent', () => {
  let component: GlowbarComponent;
  let fixture: ComponentFixture<GlowbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlowbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlowbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
