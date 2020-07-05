import { Injectable } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { LoginComponent } from '../components/login/login.component';
// import { PreviewOverlayRef } from './preview-over-ref';
export interface OverLayDialogConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
  width?: number | string;
  height?: number | string;
}
const DEFAULT_CONFIG: OverLayDialogConfig = {
  hasBackdrop: true,
  width: '300px',
  height: '300px'
};

@Injectable({
  providedIn: 'root'
})
export class OverlayComponentsService {
  constructor(private overlay: Overlay) {}

  openLogin(config: OverLayDialogConfig = {}) {
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };
    const overlayRef = this.createOverlay(dialogConfig);
    // const dialogRef = new PreviewOverlayRef(overlayRef);
    const userProfilePortal = new ComponentPortal(LoginComponent);
    overlayRef.attach(userProfilePortal);
    overlayRef.backdropClick().subscribe(_ => overlayRef.dispose());
  }
  private createOverlay(config: OverLayDialogConfig) {
    const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }
  private getOverlayConfig(config: OverLayDialogConfig): OverlayConfig {
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });

    return overlayConfig;
  }

  close(): void {
    // this.overlayReference.dispose();
  }
}
