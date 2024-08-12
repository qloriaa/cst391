export class Book
{
    private id: number = -1;
    private title: string = "";
    private author: string = "";
    private price: number = -1.00;
    private isbn13: string = "";
    private description: string = "";

    constructor (id: number, title: string, author: string, price: number, isbn13: string, description: string) {
      this.id = id;
      this.title = title;
      this.author = author;
      this.price = price;
      this.isbn13 = isbn13;
      this.description = description;
    }

    get Id(): number {
      return this.id;
    }
    set Id(id: number){
      this.id = id;
    }

    get Title(): string {
      return this.title;
    }
    set Title(title: string){
      this.title = title;
    }

    get Author(): string {
      return this.author;
    }
    set Author(author: string){
      this.author = author;
    }

    get Price(): number {
      return this.price;
    }
    set Price(price: number){
      this.price = price;
    }

    get ISBN13(): string {
      return this.isbn13;
    }
    set ISBN13(isbn13: string){
      this.isbn13 = isbn13;
    }

    get Description(): string {
      return this.description;
    }
    set Description(description: string){
      this.description = description;
    }

}
