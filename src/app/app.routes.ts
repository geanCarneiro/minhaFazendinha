import { Routes } from '@angular/router';
import { StartupComponent } from './module/startup/startup.component';
import { MainGameComponent } from './module/main-game/main-game.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: StartupComponent
    },
    {
        path: 'mainGame',
        component: MainGameComponent
    }
    // {
    //     path: '',
    //     pathMatch: 'full',
    //     component: MainGameComponent
    // }
];
