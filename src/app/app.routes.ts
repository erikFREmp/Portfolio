import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: 'header', component: HeaderComponent},
    {path: 'footer', component : FooterComponent},
    {path: 'home', component: HomeComponent}
];
