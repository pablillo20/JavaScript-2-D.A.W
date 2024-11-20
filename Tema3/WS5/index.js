// Reading List

class Book {
    constructor({ title, genre, author, isRead = false, readDate = null }) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.isRead = isRead;
        this.readDate = readDate;
    }
}

class BookList {
    constructor() {
        this.books = [];
        this.readCount = 0;
        this.unreadCount = 0;
        this.currentBook = null;
        this.nextBook = null;
        this.lastBook = null;
    }

    add(book) {
        this.books.push(book);
        this.unreadCount++;
        if (!this.nextBook) {
            this.nextBook = book; // Si no hay próximo libro, asignamos el libro agregado como el próximo
        }
    }

    finishCurrentBook() {
        if (this.currentBook) {
            this.currentBook.isRead = true;
            this.currentBook.readDate = new Date(); // Establecer la fecha de lectura
            this.lastBook = this.currentBook; // Cambiar el último libro leído
            this.readCount++;
            this.unreadCount--;

            // Cambiar el libro actual a el siguiente
            this.currentBook = this.nextBook;

            // Buscar el próximo libro no leído
            this.nextBook = this.books.find(book => !book.isRead) || null;
        }
    }

    startReading(book) {
        if (this.books.includes(book)) {
            this.currentBook = book;
        }
    }

    getNextBook() {
        return this.nextBook;
    }

    getBooks() {
        return this.books;
    }

    getReadCount() {
        return this.readCount;
    }

    getUnreadCount() {
        return this.unreadCount;
    }
}
