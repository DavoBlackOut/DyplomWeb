import { Pipe, PipeTransform } from '@angular/core';
import { IWebSocketCustomStatus } from './Interfaces/IWebSocketCustomStatus';

@Pipe({
  name: 'webSocketState'
})
export class WebSocketStatePipe implements PipeTransform {

  transform(readyState: number, args?: any): IWebSocketCustomStatus {
    switch (readyState) {
      case 0:
        return { status: 'Connecting', cssclass: 'bg-primary text-white' };
      case 1:
        return { status: 'Connected', cssclass: 'bg-success text-white' };
      case 2:
        return { status: 'Closing', cssclass: 'bg-warning text-dark' };
      default:
        return { status: 'Closed', cssclass: 'bg-danger text-dark' };
    }
  }
}
