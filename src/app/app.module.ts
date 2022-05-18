import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FadelPlasticComponent } from './modules/fadel-plastic-module/components/fadel-plastic/fadel-plastic.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatChipsModule} from '@angular/material/chips';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
	FadelPlasticComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
    ReactiveFormsModule,
	MatStepperModule,
	MatFormFieldModule,
	MatMenuModule,
	MatSelectModule,
	MatProgressSpinnerModule,
	BrowserAnimationsModule,
	MatInputModule,
	MatButtonModule,
	MatIconModule,
	MatRadioModule,
	MatChipsModule,
	MatTooltipModule,
	MatSliderModule
	
	

	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
