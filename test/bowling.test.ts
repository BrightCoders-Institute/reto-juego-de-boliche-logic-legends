import BowlingGame from '../src/bowling';

describe('Tests for BowlingGame class',() => {

  test('A bowling shot returns less or equal to 10', () =>{
    expect(BowlingGame.shot(10)).toBeLessThanOrEqual(10);
  });

  test('A bowling shot return less or equal to 2',() =>{
    expect(BowlingGame.shot(8)).toBeLessThanOrEqual(2);
  });

  test('Should return the sum of the 2 shots and be less than 10', () =>{
    const game = new BowlingGame();
    game.createFrame(0);
    let sum = game.frames[0][0] + game.frames[0][1];
    expect(sum).toBeLessThanOrEqual(10);
  });

  test('Should have a bonus of 5', () =>{
    const game = new BowlingGame();
    game.frames[0] = [10,0];
    game.frames[1] = [3,2];
    game.Bonus(1);
    expect(game.frames[0][2]).toBe(5);
  })

  test('Should have a bonus of 5', () =>{
    const game = new BowlingGame();
    game.currentFrame = [5,2];
    game.frames[0] = [5,5];
    game.frames[1] = [5,2];
    game.Bonus(1);
    expect(game.frames[0][2]).toBe(5);
  });

});