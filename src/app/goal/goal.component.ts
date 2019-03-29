import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal'
import {Goals} from '../goals'
import {GoalService} from '../goals/goal.service';
import {AlertsService} from '../alert-service/alerts.service'
import {HttpClient} from '@angular/common/http'
import {Quote} from '../quote-class/quote'
import {QuoteRequestService} from '../quote-http/quote-request.service'
import { Router} from '@angular/router';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  providers:[GoalService,QuoteRequestService],
  styleUrls: ['./goal.component.css']
})

export class GoalComponent implements OnInit {
      goToUrl(id){
          this.router.navigate(['/goals',id])
      }



    quote:Quote;
    goals:Goal[];
    alertService:AlertsService
    constructor(goalService:GoalService,alertService:AlertsService,private http:HttpClient,private quoteService:QuoteRequestService,private router:Router) {
        this.quoteService.quoteRequest()
        this.quote=this.quoteService.quote
        this.goals = goalService.getGoals()
        this.alertService = alertService;
     }


    deleteGoal(index){
        {
            let toDelete=confirm(`Are you sure you want to delete ${this.goals[index].name}`)
            
            if(toDelete){
                this.goals.splice(index,1)
                this.alertService.alertMe("Goal has been deleted")
            }
        }
    }
   

    ngOnInit(){
     

this.quoteService.quoteRequest()
this.quote=this.quoteService.quote
    }

 

}