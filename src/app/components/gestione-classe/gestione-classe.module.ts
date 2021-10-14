import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GestioneClasseComponent } from './gestione-classe.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    declarations: [
        GestioneClasseComponent,
    ],
    exports: [
        GestioneClasseComponent
    ],
    providers: []
})
export class GestioneClasseModule { }