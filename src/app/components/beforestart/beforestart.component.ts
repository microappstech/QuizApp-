import { Component ,ViewChild,OnInit,ElementRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-beforestart',
  templateUrl: './beforestart.component.html',
  styleUrls: ['./beforestart.component.css']
})
export class BeforestartComponent implements OnInit{
  @ViewChild('name') namekey! : ElementRef;
  category:any;
  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get("category");
  }

  startQuiz(){
    localStorage.setItem('name',this.namekey.nativeElement.value);
    localStorage.setItem("category",this.category);
  }
}
