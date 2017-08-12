import {Component, OnInit} from '@angular/core';
import {TweetService} from '../../services/tweet.service';
import {Tweet} from '../../interfaces/tweet.interface';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  tweets: Tweet[];

  constructor(private tweetService: TweetService) {
  }

  ngOnInit() {
    this.tweetService.getTweets().then((tweets: Tweet[]) => {
      this.tweets = <Tweet[]> tweets;
    });
  }

}
