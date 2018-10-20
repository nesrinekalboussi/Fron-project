import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateVoteComponent } from './vote/create-vote/create-vote.component';
import { ListVoteComponent } from './vote/list-vote/list-vote.component';
import { routing } from './app.routing';
import { User } from './entities/User';
import { AuthService } from './services/auth.service';
import { Vote } from './entities/vote';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Choice } from './entities/choice';
import { ChoiceService } from './services/choice.service';
import { VoteService } from './services/vote.service';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        ListVoteComponent,
        CreateVoteComponent
    ],
    imports: [
        BrowserModule,
        routing,
        FormsModule,
        HttpClientModule,


    ],
    providers: [User, Vote,Choice,ChoiceService,VoteService, AuthService],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
