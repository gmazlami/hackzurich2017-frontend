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
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
