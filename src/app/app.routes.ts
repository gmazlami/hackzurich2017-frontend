import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// teaser
import { SearchComponent } from './pages/search.component';

const appRoutes: Routes = [
    {
        path: '',
        component: SearchComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
