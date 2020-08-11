import { Component, OnInit } from '@angular/core';
import { Tweet } from '../tweet';
import { TweetsService } from '../tweets.service';
import { NumberSymbol } from '@angular/common';


@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})

export class TweetsComponent implements OnInit {
like = 0;
searchText : string;

  twat: Tweet[];
  show : boolean= true;
  constructor(tService: TweetsService) {
       this.twat = tService.tweets;
       console.log(this.twat.length);
   }

  ngOnInit() {
  }

  likes() {
    this.like = (this.like)

}
save(text : string)
{
  this.searchText = text

  
}
match(text : string){

if(text.includes(this.searchText)){
  
  return true;
}
else if(this.searchText == undefined){
  return true;
}
else{
  return false;
} 
}

}
