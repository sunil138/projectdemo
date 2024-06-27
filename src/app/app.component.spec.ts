import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent], 
      imports: [RouterOutlet, CommonModule]
    }).compileComponents();
  });

  it('should import RouterOutlet', async () => {
    const moduleConfig = await TestBed.configureTestingModule({}).compileComponents();
    const moduleImports = moduleConfig.module.imports;
    expect(moduleImports).toContain(RouterOutlet);
  });
  
  it('should import AppComponent', async () => {
    const moduleConfig = await TestBed.configureTestingModule({}).compileComponents();
    const moduleDeclarations = moduleConfig.module.declarations;
    expect(moduleDeclarations).toContain(AppComponent);
  });
  
  it('should include RouterOutlet and AppComponent in imports', async () => {
    const moduleConfig = await TestBed.configureTestingModule({}).compileComponents();
    const moduleImports = moduleConfig.module.imports;
    expect(moduleImports).toContain(RouterOutlet);
    expect(moduleImports).toContain(CommonModule); // Make sure CommonModule is included
  });
});   
