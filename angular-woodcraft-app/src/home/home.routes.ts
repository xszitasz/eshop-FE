import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ContactComponent } from '../components/contact/contact.component';
import { GalleryComponent } from '../components/gallery/gallery.component';
import { NavbarComponent } from '../components/navbar/navbar.component';


export const routes: Routes = [
    { path: 'contact', component: ContactComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: '', component: ContactComponent },
    { path: '**', component: HomeComponent } // Handle 404 error
];