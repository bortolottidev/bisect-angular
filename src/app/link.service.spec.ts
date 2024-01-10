import { TestBed } from '@angular/core/testing';

import { LinkService } from './link.service';

describe('LinkService', () => {
  let service: LinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should provide all links', () => {
    expect(service.getAllLinks()).toBeInstanceOf(Array);
    expect(service.getAllLinks()).toHaveSize(6);
  });
});
