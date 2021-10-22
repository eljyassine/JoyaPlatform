export interface Pub{
  id?:string,
  idp ?: string,
  titre?:string,
  description?:string,
  photo?: string,
  date?:Date,
  category?:string ,
  first?:string,
  last?:string,
  comment?:[{
    msg?:string;
    id?:string;    
    date?:string}]  
  }