import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { INews } from '../../interface/INews';
import { NewsService } from '../../service/news/news-service';

@Component({
  selector: 'app-update-news-form',
  imports: [ReactiveFormsModule],
  templateUrl: './update-news-form.html',
  styleUrl: './update-news-form.css'
})
export class UpdateNewsForm implements OnInit {
  @Input({ required: true }) news!: INews

  constructor(private service: NewsService) { }

  newsForm = new FormGroup({
    titre: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    texte: new FormControl('', Validators.required),
    image: new FormControl(''),
    categorie: new FormControl('', Validators.required),
  })

  ngOnInit(): void {
    // Avec setValue, on doit forcément remplir tous les champs !
    // this.newsForm.setValue({
    //   titre: this.news.titre,
    //   texte: this.news.texte,
    //   image: this.news.image || "",
    //   categorie: this.news.categorie
    // })

    // Avec patchValue, on reset tout le formulaire (touched, controls, etc.)
    // Avec patch value on peut remplir partiellement le formulaire (pas obligatoire tous les champs)

    this.newsForm.patchValue({
      titre: this.news.titre,
      texte: this.news.texte,
      image: this.news.image || "",
      categorie: this.news.categorie
    })
  }

  handleUpdateNews() {
    if (this.newsForm.valid) {

      const value = this.newsForm.value

      const news: INews = {
        id: this.news.id,
        titre: value.titre!, // ! car la valeur est obligatoire
        texte: value.texte!,
        image: value.image || "",
        categorie: value.categorie!,
        datePublication: new Date(), // new Date() retourne la date actuelle
        dateModification: new Date()
      }
      this.service.updateNews(news).subscribe((resp) => console.log(resp))
    }
    else console.error("Formulaire non valide !")
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
