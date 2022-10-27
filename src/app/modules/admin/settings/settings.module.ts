import { NgModule } from '@angular/core';
import {SettingsComponent} from "app/modules/admin/settings/settings.component";
import {Route, RouterModule} from "@angular/router";

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: SettingsComponent
    }
];

@NgModule({
    declarations: [
        SettingsComponent
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes)
    ]
})
export class SettingsModule
{
}

