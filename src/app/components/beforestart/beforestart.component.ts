import { Component ,ViewChild,OnInit,ElementRef} from '@angular/core';

@Component({
  selector: 'app-beforestart',
  templateUrl: './beforestart.component.html',
  styleUrls: ['./beforestart.component.css']
})
export class BeforestartComponent implements OnInit{
  @ViewChild('name') namekey! : ElementRef;
  ngOnInit(): void {
    
  }

  startQuiz(){
    localStorage.setItem('name',this.namekey.nativeElement.value);
  }
}
