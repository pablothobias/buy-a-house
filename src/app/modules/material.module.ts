import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';

const materialComponentModules = [
    MatCardModule,
    MatDatepickerModule,
    MatButtonModule
];

@NgModule({
    imports: [
        ...materialComponentModules
    ],
    exports: [
        ...materialComponentModules
    ]
})
export class MaterialModule { }