import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PhastComponent } from './phast.component';
import { PhastBannerComponent } from './phast-banner/phast-banner.component';
import { SankeyComponent } from './sankey/sankey.component';
import { SystemBasicsComponent } from './system-basics/system-basics.component';
import { OperatingHoursComponent } from './operating-hours/operating-hours.component';
import { LossesComponent } from './losses/losses.component';
import { AuxEquipmentComponent } from './aux-equipment/aux-equipment.component';
import { DesignedEnergyUseComponent } from './designed-energy-use/designed-energy-use.component';
import { MeteredEnergyUseComponent } from './metered-energy-use/metered-energy-use.component';
import { PhastTabsComponent } from './phast-tabs/phast-tabs.component';
import { HelpPanelComponent } from './help-panel/help-panel.component';
import { DataPanelComponent } from './data-panel/data-panel.component';
import { SettingsPanelComponent } from './settings-panel/settings-panel.component';
import { ChargeMaterialComponent } from './losses/charge-material/charge-material.component';
import { WallLossesComponent } from './losses/wall-losses/wall-losses.component';
import { AtmosphereLossesComponent } from './losses/atmosphere-losses/atmosphere-losses.component';
import { OpeningLossesComponent } from './losses/opening-losses/opening-losses.component';
import { WaterCoolingLossesComponent } from './losses/water-cooling-losses/water-cooling-losses.component';
import { HeatStorageComponent } from './losses/heat-storage/heat-storage.component';
import { FlueGasLossesComponent } from './losses/flue-gas-losses/flue-gas-losses.component';
import { OtherLossesComponent } from './losses/other-losses/other-losses.component';
import { FixtureLossesComponent } from './losses/fixture-losses/fixture-losses.component';
import { LossesSidebarComponent } from './losses/losses-sidebar/losses-sidebar.component';
import { SankeyDiagramComponent } from './sankey/sankey-diagram/sankey-diagram.component';
import {ColorPickerModule} from 'angular2-color-picker';

@NgModule({
  declarations: [
    PhastComponent,
    PhastBannerComponent,
    SankeyComponent,
    PhastTabsComponent,
    SystemBasicsComponent,
    OperatingHoursComponent,
    LossesComponent,
    AuxEquipmentComponent,
    DesignedEnergyUseComponent,
    MeteredEnergyUseComponent,
    HelpPanelComponent,
    DataPanelComponent,
    SettingsPanelComponent,
    ChargeMaterialComponent,
    WallLossesComponent,
    AtmosphereLossesComponent,
    OpeningLossesComponent,
    WaterCoolingLossesComponent,
    HeatStorageComponent,
    FlueGasLossesComponent,
    OtherLossesComponent,
    FixtureLossesComponent,
    LossesSidebarComponent,
    SankeyDiagramComponent
  ],
  exports: [
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    ColorPickerModule
  ],
  providers: []
})

export class PhastModule { }
