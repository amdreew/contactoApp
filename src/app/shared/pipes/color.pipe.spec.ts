import { ColorPipe } from './color/color.pipe';

describe('ColorPipe', () => {
  it('create an instance', () => {
    const pipe = new ColorPipe();
    expect(pipe).toBeTruthy();
  });
});
