import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccordionDirective} from './accordion.directive';
import {AccordionAnchorDirective} from './accordionanchor.directive';
import {AccordionLinkDirective} from './accordionlink.directive';





@NgModule({
  declarations: [
    AccordionDirective,
    AccordionAnchorDirective,
    AccordionLinkDirective
  ],
  imports: [
    CommonModule,
  ], exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
  ]
})
export class AccordionDirectivesModule { }
