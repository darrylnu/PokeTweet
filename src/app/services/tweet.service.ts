import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Tweet} from '../interfaces/tweet.interface';

@Injectable()
export class TweetService {
  private api = 'api/tweets';

  constructor(private http: Http) {
  }

  getTweets(): Promise<void | Tweet[]> {
    return this.http.get(this.api)
      .toPromise()
      .then(response => response.json() as Tweet[])
      .catch(this.handleError);
  }

  createTweet(tweet: Tweet): Promise<void | Tweet> {
    return this.http.post(this.api, tweet)
      .toPromise()
      .then(response => response.json() as Tweet)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
  }

}
