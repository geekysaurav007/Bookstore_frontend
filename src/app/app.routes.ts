import { Routes} from '@angular/router';
import { LoginComponent } from './common/login/login.component';
import { HomeComponent } from './common/home/home.component';



export const routes: Routes = [
    {path:"login", component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'',component:HomeComponent}
];
