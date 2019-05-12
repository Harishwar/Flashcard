import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ViewSetComponent } from './view-set/view-set.component';

const routes: Routes = [{
    path: '',
    component: HomeComponent
}, {
    path: ':id',
    component: ViewSetComponent
}, {
    path: '**',
    redirectTo: ''
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
