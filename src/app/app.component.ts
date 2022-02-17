import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  //imgUrl = "../assets/BrigeLabz.jpg"
   imgUrl = "https://media.glassdoor.com/sqll/1318507/bridgelabz-solutions-squarelogo-1561105119880.png"
  url = "https://www.bridgelabz.com"
  userName: string = "";
  nameError: string = "";

  ngOnInit(): void{
    this.title = "Hello from Bridgelabz"
  }

  onClick($event : any){
    console.log("Save Button is clicked!", $event);
    window.open(this.url,"_blank");
  }

  onInput($event : any)
  {
    console.log("Change Event Occured!", $event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError = "";
      return;
    }
    this.nameError = "Name is Incorrect!";
  }
}

