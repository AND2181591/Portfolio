import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
    {
        path: 'contact', 
        loadChildren: () => 
            import('./contact/contact.module').then(m => m.ContactModule)
    }, 
    {
        path: 'projects', 
        loadChildren: () => 
            import('./projects/projects.module').then(m => m.ProjectsModule)
    }, 
    {
        path: 'skills', 
        loadChildren: () => 
            import('./skills/skills.module').then(m => m.SkillsModule)
    }, 
    { 
        path: 'about', 
        loadChildren: () => 
            import('./about/about.module').then(m => m.AboutModule)
    }, 
    { path: '', component: HomeComponent }, 
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule]
})
export class AppRoutingModule {}