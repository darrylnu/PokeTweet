import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedComponent } from './feed.component';
import { TweetService } from '../../services/tweet.service';
import { HttpModule } from '@angular/http';
import { Tweet } from '../../interfaces/tweet.interface';


describe('FeedComponent', () => {
  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedComponent ],
      providers: [ TweetService ],
      imports: [ HttpModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const tweet1: Tweet = {
    username: 'testName',
    post: 'testing post',
    image: 'test image url'
    };
    const tweet2: Tweet = {
    username: 'testName2',
    post: 'testing post2',
    image: 'test image url2'
    };

    component.tweets = [tweet1, tweet2];
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have an array of tweets', async(() => {
    expect(component.tweets[0].username).toEqual('testName');
    expect(component.tweets[0].post).toEqual('testing post');
    expect(component.tweets[0].image).toEqual('test image url');
    expect(component.tweets[1].username).toEqual('testName2');
    expect(component.tweets[1].post).toEqual('testing post2');
    expect(component.tweets[1].image).toEqual('test image url2');
  }));
});
