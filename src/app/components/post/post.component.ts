import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../../services/pokemon.service';
import {TweetService} from '../../services/tweet.service';
import {Tweet} from '../../interfaces/tweet.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  username: string;
  image: string;
  post: string;

  newTweets: Tweet[] = [];

  private imageurlPath = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor(private pokemonService: PokemonService, private tweetService: TweetService) {
  }

  ngOnInit() {
    this.assignAnonymousPokemonUserDetails();
  }

  createNewTweet(post: string) {
    this.post = post;

    this.storeTweetToDatabase();

    this.assignAnonymousPokemonUserDetails();
  }

  assignAnonymousPokemonUserDetails() {
    const randomNumber = Math.floor(Math.random() * 500);
    return this.pokemonService.getRandomPokemon(randomNumber).subscribe(data => {
      this.username = data.name;
      this.image = this.imageurlPath + randomNumber + '.png';
    });
  }

  storeTweetToDatabase() {
    const tweet: Tweet = {
      username: this.username,
      post: this.post,
      image: this.image
    };

    this.newTweets.unshift(tweet);

    this.tweetService.createTweet(tweet).then(function (postedTweet: Tweet) {
      console.log('tweet posted to database: ' + postedTweet);
    });
  }

}
