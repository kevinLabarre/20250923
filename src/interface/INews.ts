export interface INews {
  id?: number,  // ? -> optionnel
  categorie: string,
  titre: string,
  texte: string,
  datePublication: Date,
  dateModification: Date,
  image?: string
}
