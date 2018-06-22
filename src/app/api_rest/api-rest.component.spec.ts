import { TestBed, async } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { APIRestComponent } from './api-rest.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { ApiService } from '../api.service';
import { ApiMockService } from './api-mock.service';

describe('APIRestComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        APIRestComponent
      ],
      providers: [
        TodoDataService,
        {
          provide: ApiService,
          useClass: ApiMockService
        }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(APIRestComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});