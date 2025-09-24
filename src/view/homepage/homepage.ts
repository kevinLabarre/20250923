import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DemoOutput } from "../../component/demo-output/demo-output";

@Component({
  selector: 'app-homepage',
  imports: [FormsModule, DemoOutput],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {

  constructor(private router: Router) {
    console.log('Exécuté au chargement du composant')
  }

  idValue: string = "";

  handleNavigate() {
    // this.router.navigate(["actualite", "test1", "test2"]); // --> navigue vers actualite/test1/test2
    this.router.navigate(["actualite", this.idValue]); // --> navigue vers actualite/test1/test2
  }


  // Exemple @output --> passage de données de enfant vers parent

  childData: string = "";

  receiveData(data: string) {
    console.log("passé par l'enfant :", data)
    this.childData = data;
  }

}
