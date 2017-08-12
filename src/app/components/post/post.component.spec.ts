import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PostComponent } from './post.component';
import { PokemonService } from '../../services/pokemon.service';
import { TweetService } from '../../services/tweet.service';
import { HttpModule } from '@angular/http';


describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostComponent ],
      providers: [ PokemonService, TweetService ],
      imports: [ HttpModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.createNewTweet('this is a test post');

  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should get post from form', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(component.post).toBe('this is a test post');
  });

  it('should store tweets to array', () => {
    expect(component.newTweets).toEqual([{ username: undefined, post: 'this is a test post', image: undefined }]);
  });

});
