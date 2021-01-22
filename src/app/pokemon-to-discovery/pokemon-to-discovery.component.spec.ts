import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonToDiscoveryComponent } from './pokemon-to-discovery.component';

describe('PokemonToDiscoveryComponent', () => {
  let component: PokemonToDiscoveryComponent;
  let fixture: ComponentFixture<PokemonToDiscoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonToDiscoveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonToDiscoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
