import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [FormsModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {

  constructor(private router: Router) {
    console.log('Exécuté au chargement du composant')
  }

  slugValue: string = "";

  handleNavigate() {
    // this.router.navigate(["actualite", "test1", "test2"]); // --> navigue vers actualite/test1/test2
    this.router.navigate(["actualite", this.slugValue]); // --> navigue vers actualite/test1/test2
  }
}
