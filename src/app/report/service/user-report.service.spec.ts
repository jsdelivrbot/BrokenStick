/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserReportService } from './user-report.service';

describe('UserReportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserReportService]
    });
  });

  it('should ...', inject([UserReportService], (service: UserReportService) => {
    expect(service).toBeTruthy();
  }));
});
