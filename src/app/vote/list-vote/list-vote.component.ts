import { Component, OnInit } from '@angular/core';
import { VoteService } from '../../services/vote.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-vote',
  templateUrl: './list-vote.component.html',
  styleUrls: ['./list-vote.component.css']
})
export class ListVoteComponent implements OnInit {
  listVotes;
  constructor(private voteService: VoteService, private route:Router) { }

  ngOnInit() {
  }

  loadAllVotes() {
    this.voteService.loadAll().subscribe(res => {
      console.log(res);
      this.listVotes = res;
    })
  }

  create()
  {
this.route.navigate(['/create-vote']);
  }

}
