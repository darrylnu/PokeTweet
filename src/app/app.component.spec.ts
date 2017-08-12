import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { FeedComponent } from './components/feed/feed.component';

import { AuthService } from './services/auth.service';
import { PokemonService } from './services/pokemon.service';
import { TweetService} from './services/tweet.service';

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PostComponent,
        FeedComponent
      ],
      providers: [
      AuthService,
      PokemonService,
      TweetService,
      { provide: APP_BASE_HREF, useValue: '/' }
      ],
      imports: [
      HttpModule,
      RouterModule.forRoot([{path: '', component: AppComponent}])
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('WELCOME TO POKE-TWEET!');
  }));
});
