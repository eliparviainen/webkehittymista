<template>
<div>
<h4> Welcome to play  {{gamename}}, {{$route.params.playername}}! </h4>

<div  v-if="dice1+dice2>0">
<div id="throw">{{dice1}}+{{dice2}}={{dice1+dice2}}</div>
<p> {{msg}} </p>
</div>

<button v-if="stillPlaying" class="mybtn" v-on:click="rollDice()">Throw dice</button>

<br/>
<hr/>

<button class="mybtn" v-on:click="newGame()">Start a new game</button>

</div>
</template>

<script>
export default {
name: "PlayGame",
data() {return{
gamename: (this.$route.params.gametype==='pass')?"Pass Bets":"Don't Pass",
dice1: -1,
dice2: -1,
msg:"",
stillPlaying: true,
point: -1,
}},
methods: {
newGame: function() {
this.dice1=-1; this.dice2=-1;  this.msg=""; this.stillPlaying=true; this.point=-1;
this.$router.go(-1);
},
rollDice: function() {
this.dice1 = Math.floor(Math.random()*6)+1;
this.dice2 = Math.floor(Math.random()*6)+1;

let roll = this.dice1+this.dice2;	
switch(this.$route.params.gametype) {
case "pass":
     if (this.point<0) {
          this.msg="No result yet... please throw again.";	
     if (roll===7 || roll===11) {
     // If the first roll is 7 or 11, the bet wins.
     this.msg ="You win!"
     this.stillPlaying = false;
     return;
     }
     else if (roll===2 || roll===3 ||roll===12) {
     // If the first roll is 2, 3 or 12, the bet loses (known as "crapping out").
     this.msg = "You crap out.";
     this.stillPlaying = false;
          return;
     }     
else {
     // If the roll is any other value, it establishes a point.
     this.point = roll;
     this.msg="The point is set at "+this.point+".";
     return;
     }
     } // point exists
     else
     {
     this.msg="No result yet... please throw again.";	
     if (roll===this.point) {
     // If, with a point established, that point is rolled again before a 7, the bet wins.
     this.msg ="You win!"
     this.stillPlaying = false;
          return;
     }
     else if (roll===7) {
     // If,  with a point established, a 7 is rolled before the point is rolled again ("seven out"), the bet loses.
     this.msg = "You lose.";
     this.stillPlaying = false;
          return;
     }     
     }
break;
case "dontpass":
     if (this.point<0) {
          this.msg="No result yet... please throw again.";	
     if (roll===2 || roll===3) {
     //     If the first roll is 2 or 3, the bet wins.
     this.msg ="You win!"
     this.stillPlaying = false;
     return;
     }
     else if (roll===7 || roll==11) {
     // If the first roll is 7 or 11, the bet loses.
     this.msg = "You lose.";
     this.stillPlaying = false;
          return;
     }
else if (roll===12) {
// If the come-out roll is 12, you get your money back
this.msg = "You get your money back.";
     this.stillPlaying = false;
          return;
     }

else {
     // If the roll is any other value, it establishes a point.
     this.point = roll;
     this.msg="The point is set at "+this.point+".";
     return;
     }
     } // point exists
     else
     {
     this.msg="No result yet... please throw again.";	
     if (roll===this.point) {
//     If, with a point established, that point is rolled again before a 7, the bet loses.
     this.msg ="You lose."
     this.stillPlaying = false;
          return;
     }
     else if (roll===7) {
  //   If, with a point established, a 7 is rolled before the point is rolled again ("seven out"), the bet wins.
     this.msg = "You win!";
     this.stillPlaying = false;
          return;
     }     
     }
break;

default:
this.msg = "Nothing happens. Seems the game ["+this.$route.params.gametype+"] has not been implemented.";
this.stillPlaying = false;
break;
}
}
}

}
</script>

<style>
h4 { color: blue }
#throw {
font-size: 2em;
font-weight: bold;
color: darkred
}
.mybtn { margin: 20px }
</style>