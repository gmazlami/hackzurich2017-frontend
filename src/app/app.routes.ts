import { CompleteComponent } from './pages/complete.component';
import { ReleaseComponent } from './pages/release.component';
import { OrderComponent } from './pages/order.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// teaser
import { SearchComponent } from './pages/search.component';

const appRoutes: Routes = [
    {
        path: '',
        component: SearchComponent
    },
    {
        path: 'orders/:product',
        component: OrderComponent
    },
    {
        path: 'completed/:product',
        component: CompleteComponent
    },
    {
        path: 'releases/:product',
        component: ReleaseComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
