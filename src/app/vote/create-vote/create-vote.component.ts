import { Component, OnInit } from '@angular/core';
import { VoteService } from '../../services/vote.service';
import { Router } from '@angular/router';
import { Vote } from '../../entities/vote';
import { ChoiceService } from '../../services/choice.service';
import { Choice } from '../../entities/choice';

@Component({
  selector: 'app-create-vote',
  templateUrl: './create-vote.component.html',
  styleUrls: ['./create-vote.component.css']
})
export class CreateVoteComponent implements OnInit {
  vote: Vote = new Vote();
  anotherChoice: boolean = false;
  choice: Choice = new Choice();
  constructor(private choiceService: ChoiceService, private router: Router, private voteService: VoteService) { }

  ngOnInit() {
  }

  create() {
    this.voteService.addVote(this.vote).subscribe(res => {
      console.log(res);
      this.router.navigate(['/list-vote']);
    })
  }
  addNewChoice() {
    this.choiceService.addChoice(this.choice).subscribe(res => {
      this.choice = new Choice();
      this.anotherChoice = true;
    })

  }

}
