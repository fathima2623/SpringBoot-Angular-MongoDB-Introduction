import {Genre} from "./genre";
import {Author} from "./author";
export class Book {
  id?: any;
  title?: string;
  price?: number;
  year_of_publishing?: number;
  publisher?: string;
  genre?: Genre[];
  author?: Author[];
  image?: string;
  registration?: Date;
}
