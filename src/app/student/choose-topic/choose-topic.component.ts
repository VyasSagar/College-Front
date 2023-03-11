import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../ApiService';


@Component({
  selector: 'app-choose-topic',
  templateUrl: './choose-topic.component.html',
  styleUrls: ['./choose-topic.component.scss']
})
export class ChooseTopicComponent implements OnInit {
  classDetails:any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getclasses();
  }

  getclasses(){
    this.apiService.getData().subscribe((data: any) => {
      this.classDetails = data;
      console.log(this.classDetails);
    });
  }

}
