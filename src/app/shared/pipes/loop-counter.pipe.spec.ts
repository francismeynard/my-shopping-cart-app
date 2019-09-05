import { LoopCounterPipe } from './loop-counter.pipe';

describe('LoopCounterPipe', () => {
  it('create an instance', () => {
    const pipe = new LoopCounterPipe();
    expect(pipe).toBeTruthy();
  });
});
