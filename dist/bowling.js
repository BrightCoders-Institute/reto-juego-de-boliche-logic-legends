"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BowlingGame {
    // frames [ [1,4], [5,4], [3,3] ] 
    // currentFrame[ 3, 4 ]
    // lastFrame [3,2]
    constructor() {
        this.frames = [];
        this.currentFrame = [0, 0];
        this.totalScore = 0;
    }
    shot() {
        return Math.floor(Math.random() * (11 - this.currentFrame[0]));
    }
    spare(bonus) {
        this.totalScore += bonus;
    }
    strike(bonus) {
        this.totalScore += bonus;
    }
    createFrame(frameNumber) {
        this.currentFrame = [0, 0];
        this.currentFrame[0] = this.shot();
        this.currentFrame[1] = this.shot();
        this.frames[frameNumber] = this.currentFrame;
    }
    createAndPrintFrames() {
        for (let i = 0; i < 10; i++) {
            this.createFrame(i);
            console.log(this.frames[i][0], "--", this.frames[i][1]);
            console.log("-----------------------------");
        }
    }
}
exports.default = BowlingGame;
//# sourceMappingURL=bowling.js.map