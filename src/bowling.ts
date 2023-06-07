export default class BowlingGame {
  frames: number[][];
  currentFrame: number[];
  totalScore: number;


  constructor() {
    this.frames = [];
    this.currentFrame = [0,0];
    this.totalScore = 0;

  }

  shot() {
    return Math.floor(Math.random() * (11 - this.currentFrame[0]));
  }

  spare(){
    return this.currentFrame[0];
  }
  sumFrame(frameNumber: number){
    return this.frames[frameNumber][0] + this.frames[frameNumber][1];
  }

  createFrame(frameNumber: number){
    this.currentFrame = [0,0];
    this.currentFrame[0] = this.shot();
    this.currentFrame[1] = this.shot();
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
