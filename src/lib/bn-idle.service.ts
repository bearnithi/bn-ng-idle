import { Injectable } from '@angular/core';
import { Observable, fromEvent, merge, Subject, timer } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BnIdleService {

  private idle$: Observable<any>;
  private timer$;
  private timeOutMilliSeconds: number;
  private idleSubscription;

  public expired$: Subject<boolean> = new Subject<boolean>();

  constructor() {

  }

  public startWatching(timeOutSeconds): Observable<any> {
    this.idle$ = merge(
      fromEvent(document, 'mosuemove'),
      fromEvent(document, 'click'),
      fromEvent(document, 'mousedown'),
      fromEvent(document, 'keypress'),
      fromEvent(document, 'DOMMouseScroll'),
      fromEvent(document, 'mousewheel'),
      fromEvent(document, 'touchmove'),
      fromEvent(document, 'MSPointerMove'),
      fromEvent(window, 'mousemove'),
      fromEvent(window, 'resize'),
    );

    this.timeOutMilliSeconds = timeOutSeconds * 1000;

    this.idleSubscription = this.idle$.subscribe((res) => {
      this.resetTimer();
    });

    this.startTimer();

    return this.expired$;
  }

  private startTimer() {
   this.timer$ = timer(this.timeOutMilliSeconds,this.timeOutMilliSeconds).subscribe((res) => {
      this.expired$.next(true);
    });
  }

  public resetTimer() {
    this.timer$.unsubscribe();
    this.startTimer();
  }

  public stopTimer() {
    this.timer$.unsubscribe();
    this.idleSubscription.unsubscribe();
  }
}
