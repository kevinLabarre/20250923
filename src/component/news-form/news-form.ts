import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsService } from '../../service/news-service';
import { INews } from '../../interface/INews';

@Component({
  selector: 'app-news-form',
  imports: [ReactiveFormsModule],
  templateUrl: './news-form.html',
  styleUrl: './news-form.css'
})
export class NewsForm {

  constructor(private service: NewsService) { }

  newsForm = new FormGroup({
    titre: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    texte: new FormControl('', Validators.required),
    image: new FormControl(''),
    categorie: new FormControl('', Validators.required),
  })

  handleAddNews() {
    if (this.newsForm.valid) {

      const value = this.newsForm.value

      const news: INews = {
        titre: value.titre!, // ! car la valeur est obligatoire
        texte: value.texte!,
        image: value.image || "",
        categorie: value.categorie!,
        datePublication: new Date(), // new Date() retourne la date actuelle
        dateModification: new Date()
      }

      this.service.addOneNews(news).subscribe(resp => console.log(resp))
    }
    else console.log("Formulaire non valide !")
  }

  get titleRequiredError() {
    const errors = this.newsForm.get('titre')?.errors
    if (errors) {
      return errors['required']
    }
    return false;
  }

  get titleMaxLengthError() {
    const errors = this.newsForm.get('titre')?.errors
    if (errors) {
      return errors['maxlength']
    }
    return false;
  }

  get textError() {
    const errors = this.newsForm.get('texte')?.errors
    if (errors) {
      return errors['required']
    }
    return false;
  }

  get categorieError() {
    const errors = this.newsForm.get('categorie')?.errors
    if (errors) {
      return errors['required']
    }
    return false;
  }

  get titleTouched() {
    return this.newsForm.get('titre')?.touched
  }

  get textTouched() {
    return this.newsForm.get('texte')?.touched
  }

  get categorieTouched() {
    return this.newsForm.get('categorie')?.touched
  }


}
