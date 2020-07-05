import { Component, OnInit } from '@angular/core';
import {
  OverLayDialogConfig,
  OverlayComponentsService
} from '../../services/overlay-components.service';

@Component({
  selector: 'cc-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  constructor(private overlayService: OverlayComponentsService) {}

  ngOnInit(): void {}
  openLogin() {
    let config: OverLayDialogConfig = {};
    this.overlayService.openLogin();
  }
}
