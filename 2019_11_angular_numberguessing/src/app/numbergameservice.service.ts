
import {Injectable} from '@angular/core';
//import {NumberGame} from './numbergame.model';

import {PlayerResult} from './playerresult.model';

const GAMESIZE = 10;

@Injectable()
export class NumberGameService {
private topten:PlayerResult[]=[];
private answer:number=0;
private player:string="";
private noof:number=0;
private minval:number=1;
private maxval:number=GAMESIZE;

startGame(player:string) {
 this.answer = Math.floor(Math.random()*10)+1;
 this.player = player;
 this.minval=1;
 this.maxval=GAMESIZE;
 this.noof=0;
 return GAMESIZE;
}

getList() {
return this.topten;
}


submitGuess(guess) {

this.noof = this.noof +1;	
 if (guess<this.answer) {
  this.minval = Math.max(this.minval,guess+1);
 return({"msg":"too low","noof":this.noof,"minval":this.minval,"maxval":this.maxval})
 }
 if (guess>this.answer) {
    this.maxval = Math.min(this.maxval,guess-1);
 return({"msg":"too high","noof":this.noof,"minval":this.minval,"maxval":this.maxval})
 }

let newres = new PlayerResult(this.player, this.noof)
     this.topten.push(newres)
//     this.topten.sort(var points = [40, 100, 1, 5, 25, 10];
//points.sort(function(a, b){return a-b});

     this.topten.sort(function (a,b){
     return (a.noof-b.noof)
     })

// console.log( this.topten)
 return({"msg":"you win","noof":this.noof,"minval":this.minval,"maxval":this.maxval})
}


}