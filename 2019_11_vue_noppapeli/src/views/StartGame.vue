<template>
<div>
<h4> Prepare to play ... </h4>
<br/>
<label htmlFor="inputPlayername">Player name:</label>
<input name="inputPlayername" type="text" v-model="playername"/>
<br/><br/>
<button class="mybtn" v-on:click="play('pass')">play Pass Bets</button>
<button class="mybtn" v-on:click="play('dontpass')">play Don't Pass</button>
</div>
</template>

<script>
export default {
name: "StartGame",
data() {return{
playername: "Nobody",
bet:"pass",
}},
methods: {
play: function(bet) {
let game = {playername: this.playername, gametype:bet};
this.$router.push({name:"PlayGame",params:game});
}
}
}
</script>

<style>
h4 { color: blue }
.mybtn { margin: 20px }
</style>