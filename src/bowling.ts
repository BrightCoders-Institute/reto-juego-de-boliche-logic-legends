export default class BowlingGame {
  frames: number[][];
  currentFrame: number[];
  //lastFrame: number[];
  totalScore: number;

  // frames [ [1,4], [5,4], [3,3] ] 
  // currentFrame[ 3, 4 ]
  // lastFrame [3,2]

  constructor() {
    this.frames = [];
    this.currentFrame = [0,0];
    this.totalScore = 0;

  }

  shot() {
    return Math.floor(Math.random() * (11 - this.currentFrame[0]));
  }

  spare(bonus: number){
    this.totalScore+= bonus;
  }
  strike(bonus: number){ 
    this.totalScore+= bonus;
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
