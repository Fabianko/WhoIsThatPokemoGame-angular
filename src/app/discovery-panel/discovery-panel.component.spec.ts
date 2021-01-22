import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoveryPanelComponent } from './discovery-panel.component';

describe('DiscoveryPanelComponent', () => {
  let component: DiscoveryPanelComponent;
  let fixture: ComponentFixture<DiscoveryPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoveryPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoveryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
