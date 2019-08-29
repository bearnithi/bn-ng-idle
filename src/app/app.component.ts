import { Component, OnInit } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';
// import { BnNgIdleService } from 'projects/bn-ng-idle/src/lib/bn-ng-idle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bn-idle';

  constructor(private bnIdle: BnNgIdleService) {

  }

  // initiate it in your component OnInit
  ngOnInit(): void {
    this.bnIdle.startWatching(60).subscribe((res) => {
      if (res) {
        console.log('session expired');
      }
    });
  }
}
