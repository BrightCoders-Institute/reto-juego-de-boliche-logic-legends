export default class BowlingGame {
    frames: number[];
    totalScore: number;
    firstShot: number;
    
  constructor(){
    this.frames = [];
    this.totalScore= 0;
    this.firstShot = 0;
  }

  shot(){
    return Math.floor((Math.random()*(10-this.firstShot)-1) +1);
  }
}
