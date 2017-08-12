import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {FeedComponent} from './components/feed/feed.component';
import {PostComponent} from './components/post/post.component';

import {PokemonService} from './services/pokemon.service';
import {TweetService} from './services/tweet.service';
import {AuthService} from './services/auth.service';
import {CallbackComponent} from './components/callback/callback.component';


@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    PostComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([{path: '', component: AppComponent}, {path: 'callback', component: CallbackComponent}])

  ],
  providers: [
    PokemonService,
    TweetService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
