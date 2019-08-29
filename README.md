## DESCRIPTION
Angular 6, 7, 8+ **User Idle / Session Timout** detector service. It's a pretty simple **user idle / session timout** detector for Angular. You can use this for session timeout, user idle restriction after a period of time etc..

- [Learn Angular Tutorials](http://bearnithi.com/)
- [Angular Tree Component](https://www.npmjs.com/package/bn-ng-tree-lib)
- [Angular PDF Viewer](https://www.npmjs.com/package/bn-ng-pdf-viewer)

## INSTALLATION
```sh
npm install bn-ng-idle
```

## How to use angular idle detector in your angular app

### API List
1. **startWatching(timeOutSeconds)** - This method is used to initiate the idle detector in angular. `timeoutSeconds` is a parameter, number of seconds to emit the idle event. This method returns an observable which you can subscribe to detect the idleness of the user.
2. **resetTimer()** - This method is used to reset the timer
3. **stopTimer()** - This method is used to stop the idle detector.



## Sample Code for Angular User Idle

### app.module.ts - Import the BnNgIdleService in your module

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BnNgIdleService } from 'bn-ng-idle'; // import bn-ng-idle service


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BnNgIdleService], // add it to the providers of your module
  bootstrap: [AppComponent]
})
export class AppModule { }

```


### app.component.ts - Import the BnNgIdleService in your component

```typescript
import { Component } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle'; // import it to your component

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private bnIdle: BnNgIdleService) {

  }

  // initiate it in your component OnInit
  ngOnInit(): void {
    this.bnIdle.startWatching(60).subscribe((isTimedOut: boolean) => {
      if (res) {
        console.log('session expired');
      }
    });
  }
}

```

In the above example, I have invoked the `startWatching(timeOutSeconds)` method with 60 seconds (1 minute) and subscribed to the observable, once the user is idle for one minute then the subscribe method will get invoked with the `isTimedOut` parameter's value (which is a boolean) as `true`.

By checking whether the `isTimedOut` is true or not, you can show your session timeout dialog or message. For brevity, I just logged the message to the console.

## VERSION

1.0.0 - Angular 6 user idle detector
