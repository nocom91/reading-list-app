import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { CreateListComponent } from './pages/create-list/create-list.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
    },
    {
        path: 'create-new-list',
        component: CreateListComponent,
    },
];
