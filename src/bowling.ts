export default class BowlingGame {
  frames: number[][];
  currentFrame: number[];
  totalScore: number;

  constructor() {
    this.frames = [];
    this.currentFrame = [0,0];
    this.totalScore = 0;
  }

  static shot(prevShot: number) {
    return Math.floor(Math.random() * (11 - prevShot));
  }

  spare(){
    return this.currentFrame[0];
  }

  sumFrame(frameNumber: number){
    return this.frames[frameNumber][0] + this.frames[frameNumber][1];
  }

  frameScore(frameNumber:number){
    return this.frames[frameNumber][0] + this.frames[frameNumber][1] +  this.frames[frameNumber][2];
  }

  getTotalScore(){
    this.totalScore=0;
    for (let i = 0; i < this.frames.length; i++) {
      this.totalScore+= this.frameScore(i);
    }
    return this.totalScore;
  }
  

  Bonus(frameNumber: number){
    if (frameNumber === 0 ) return;
    if (this.frames[frameNumber - 1 ][0] === 10){
      this.frames[frameNumber-1][2] = this.sumFrame(frameNumber);
    }
    else if(this.sumFrame(frameNumber-1) === 10){
      this.frames[frameNumber-1][2] = this.spare();
    }
  }

  validateFinalFrame(){
    switch( this.frames[9][0] ){
      case 10:
        break;
      default:  

    }
    if (this.frames[9][0] === 10){
      this.frames[9] = [this.frames[9][0],BowlingGame.shot(0),BowlingGame.shot(0)]
    }


  }

  createFrame(frameNumber: number){
    this.currentFrame = [0,0,0];
    this.currentFrame[0] = BowlingGame.shot(0);
    this.currentFrame[1] = BowlingGame.shot(this.currentFrame[0]);
    this.frames[frameNumber] = this.currentFrame; 
  }
  
  createFrames(){
    for (let i = 0; i < 10; i++) {
      this.createFrame(i);
      this.Bonus(i);
    }
    this.validateFinalFrame();
  }
  
  printFrames(){
    for (let i = 0; i < this.frames.length; i++) {
      console.log(this.frames[i][0],"--", this.frames[i][1]);
      console.log("-----------------------------");      
    }
  }
}
