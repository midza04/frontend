import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {GridModule} from "@progress/kendo-angular-grid";

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: ExampleComponent
    }
];

@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports: [
        RouterModule.forChild(exampleRoutes),
        MatStepperModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatIconModule,
        GridModule,
    ]
})
export class ExampleModule
{
}
