import { TestBed } from '@angular/core/testing';

import { YesnoAPIService } from './yesno-api.service';

describe('YesnoAPIService', () => {
  let service: YesnoAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YesnoAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
