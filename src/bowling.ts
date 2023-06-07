export default class BowlingGame {
  frames: number[][];
  currentFrame: number[];
  totalScore: number;


  constructor() {
    this.frames = [];
    this.currentFrame = [];
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

  Bonus(frameNumber: number){
    if (frameNumber === 0 ) return;
    if (this.frames[frameNumber - 1 ][0] === 10){
      this.frames[frameNumber-1][2] = this.sumFrame(frameNumber);
    }
    else if(this.sumFrame(frameNumber-1) === 10){
      this.frames[frameNumber-1][2] = this.spare();
    }
  }

  createFrame(frameNumber: number){
    this.currentFrame = [0,0,0];
    this.currentFrame[0] = BowlingGame.shot(0);
    this.currentFrame[1] = BowlingGame.shot(this.currentFrame[0]);
    this.frames[frameNumber] = this.currentFrame; 
  }

  createAndPrintFrames(){
    for (let i = 0; i < 10; i++) {
      this.createFrame(i);
      console.log(this.frames[i][0],"--", this.frames[i][1]);
      console.log("-----------------------------");
    }
  }
}
