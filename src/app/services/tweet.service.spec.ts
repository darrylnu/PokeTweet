import { TestBed, inject } from '@angular/core/testing';

import { TweetService } from './tweet.service';
import { HttpModule } from '@angular/http';

describe('TweetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TweetService],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([TweetService], (service: TweetService) => {
    expect(service).toBeTruthy();
  }));
});
