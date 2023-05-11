import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
import { BlogComponent } from './blog/blog.component';
import { CardComponent } from './card/card.component';

//Import a modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import {RouterModule} from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShowPostComponent } from './show-post/show-post.component';



@NgModule({
  declarations: [
    AppComponent,
    MyCoursesComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    TableComponent,
    FormComponent,
    BlogComponent,
    CardComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    PageNotFoundComponent,
    ShowPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
