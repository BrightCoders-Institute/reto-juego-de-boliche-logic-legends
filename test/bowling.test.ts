import BowlingGame from '../bowling';

describe('Tests for BowlingGame class',() => {

  test('A bowling shot returns less or equal to 10', () =>{
    const game = new BowlingGame();
    expect(game.shot()).toBeLessThanOrEqual(10);
  });

  test('A bowling shot return less or equal to 2',() =>{
    const game = new BowlingGame();
    game.firstShot = 8;
    expect(game.shot()).toBeLessThanOrEqual(2);
  });
});