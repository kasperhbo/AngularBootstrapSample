import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { LikeComponent } from './like/like.component';
import { MoshLikesSollutionComponent } from './mosh-likes-sollution/mosh-likes-sollution.component';
import { ElseIfComponent } from './else-if/else-if.component';
import { NgSwitchCaseComponent } from './ng-switch-case/ng-switch-case.component';
import { NgForLoopsComponent } from './ng-for-loops/ng-for-loops.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgForLoopsAndTrackByComponent } from './ng-for-loops-and-track-by/ng-for-loops-and-track-by.component';
import { NgClassesComponent } from './ng-classes/ng-classes.component';
import { NgStylesComponent } from './ng-styles/ng-styles.component';
import { SafeTraversalOperatorComponent } from './safe-traversal-operator/safe-traversal-operator.component';
import { CreatingCustomDirectivesComponent } from './creating-custom-directives/creating-custom-directives.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ZippyExcersiseComponent } from './zippy-excersise/zippy-excersise.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { NewCourseFormSollutionComponent } from './new-course-form-sollution/new-course-form-sollution.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import {PostsComponent} from "./posts/posts.component";
import {PostService} from "./Services/post.service";
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import {GithubFollowersService} from "./github-followers/github-followers.service";

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    FavoriteComponent,
    BootstrapPanelComponent,
    LikeComponent,
    MoshLikesSollutionComponent,
    ElseIfComponent,
    NgSwitchCaseComponent,
    NgForLoopsComponent,
    NgForLoopsAndTrackByComponent,
    NgClassesComponent,
    NgStylesComponent,
    SafeTraversalOperatorComponent,
    CreatingCustomDirectivesComponent,
    InputFormatDirective,
    ZippyComponent,
    ZippyExcersiseComponent,
    ContactFormComponent,
    CourseFormComponent,
    NewCourseFormSollutionComponent,
    SignupFormComponent,
    NewCourseComponent,
    FormBuilderComponent,
    ChangePasswordFormComponent,
    PostsComponent,
    GithubFollowersComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientJsonpModule,
        HttpClientJsonpModule,
    ],
  providers: [
    PostService,
    GithubFollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
