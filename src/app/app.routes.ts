import { CompleteComponent } from './pages/complete.component';
import { OrderComponent } from './pages/order.component';
import { VoucherComponent } from './pages/voucher.component';
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
        path: 'voucher/:product',
        component: VoucherComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
