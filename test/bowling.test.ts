import BowlingGame from '../src/bowling';

describe('Tests for BowlingGame class',() => {

  test('A bowling shot returns less or equal to 10', () =>{
    const game = new BowlingGame();
    expect(game.shot()).toBeLessThanOrEqual(10);
  });

  test('A bowling shot return less or equal to 2',() =>{
    const game = new BowlingGame();
    game.currentFrame[0] = 8;
    expect(game.shot()).toBeLessThanOrEqual(2);
  });

  test('Should return the sum of the 2 shots and be less than 10', () =>{
    const game = new BowlingGame();
    game.createFrame(0);
    let sum = game.frames[0][0] + game.frames[0][1];
    expect(sum).toBeLessThanOrEqual(10);
  })
});