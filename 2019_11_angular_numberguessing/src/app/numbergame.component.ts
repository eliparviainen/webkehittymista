import {Component} from '@angular/core'
import {NumberGameService} from './numbergameservice.service'

import {PlayerResult} from './playerresult.model';

@Component({
selector: "numbergame",
templateUrl: "./numbergame.component.html"
})


export class NumberGame {
guess:number = 0;
player:string = "";
msg:string="you have not guessed yet";
noof:number=0;
    topten:PlayerResult[]=[];
    gamesize:number=0;
    minval:number=0;
    maxval:number=0;

// constructor injection
constructor(private _game:NumberGameService) {}

startGame() {
//console.log("numbergamecomp, peli alkaa")
    this.gamesize = this._game.startGame(this.player)
    this.topten=this._game.getList();
    this.minval=1;
    this.maxval=this.gamesize;
    this.msg="you have not guessed yet";
    this.noof=0;
}

submitGuess() {
//console.log("numbergamecomp, saatu arvaus")
let res = this._game.submitGuess(this.guess);
this.msg = res.msg;
    this.noof = res.noof;
    this.minval = res.minval;
    this.maxval = res.maxval;
this.topten=this._game.getList();
}
}


