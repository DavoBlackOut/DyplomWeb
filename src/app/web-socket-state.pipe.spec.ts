import { WebSocketStatePipe } from './web-socket-state.pipe';

describe('WebSocketStatePipe', () => {
  it('create an instance', () => {
    const pipe = new WebSocketStatePipe();
    expect(pipe).toBeTruthy();
  });
});
