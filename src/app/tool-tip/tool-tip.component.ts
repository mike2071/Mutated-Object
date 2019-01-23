import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tool-tip',
  templateUrl: './tool-tip.component.html',
  styleUrls: ['./tool-tip.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolTipComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() config;

  get runChangeDetection() {
    console.log('Checking the view');
    return true;
  }
}
