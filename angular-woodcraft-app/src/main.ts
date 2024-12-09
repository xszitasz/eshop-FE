import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';

bootstrapApplication(HomeComponent)
  .catch((err) => console.error(err));
