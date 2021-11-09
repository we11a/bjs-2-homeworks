class PrintEditionItem {

    constructor(name, releaseDate, pagesCount, state) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
    fix() {
      this.state = this.state * 1.5;
    }
  
    set state(stateNum) {
      if (stateNum > 100) {
        this._state = 100;
      } else if (stateNum < 0) {
        this._state = 0;
      } else {
        this._state = stateNum;
      }
    }
  
    get state() {
      return this._state;
    }
  }
  
  class Magazine extends PrintEditionItem {
    
    constructor(name, releaseDate, pagesCount, state) {
      super(name, releaseDate, pagesCount, state);
      this.type = 'magazine';
    }
  }
  
  class Book extends PrintEditionItem {
    
    constructor(author, name, releaseDate, pagesCount, state) {
      super(name, releaseDate, pagesCount, state);
      this.type = 'book';
      this.author = author;
    }
  }
  
  class NovelBook extends Book {
    
    constructor(author, name, releaseDate, pagesCount, state) {
      super(author, name, releaseDate, pagesCount, state);
      this.type = 'novel';
    }
  }
  
  class FantasticBook extends Book {
    
    constructor(author, name, releaseDate, pagesCount, state) {
      super(author, name, releaseDate, pagesCount, state);
      this.type = 'fantastic';
    }
  }
  
  class DetectiveBook extends Book {
    
    constructor(author, name, releaseDate, pagesCount, state) {
      super(author, name, releaseDate, pagesCount, state);
      this.type = 'detective';
    }
  }
  
  class Library {
    constructor(name, books) {
      this.name = name;
      this.books = [];
    }
  
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
  
    findBookBy(type, value) {
      let findBookResult = this.books.find(key => key[type] === value);
      if (findBookResult) {
        return findBookResult;
      } 
      return null;
    }
  
    giveBookByName(bookName) {
      let result = this.books.find(key => key.name === bookName);
      let id = this.books.findIndex(i => i === result);
      if (id >= 0) {
        return result;
        this.books.splice(id, 1);
      }
      return null;
    }
  }
