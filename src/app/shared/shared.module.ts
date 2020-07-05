import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonMaterialModule } from './common-material/common-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfileMenuComponent } from './components/profile-menu/profile-menu.component';
import { LoginComponent } from './components/login/login.component';
@NgModule({
  declarations: [TopBarComponent, ProfileMenuComponent, LoginComponent],
  imports: [
    CommonModule,
    CommonMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule
  ],
  exports: [
    CommonMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    TopBarComponent
  ],
  entryComponents: [LoginComponent],
  providers: []
})
export class SharedModule {}
