import { useState } from "react";
import { useSelector } from "react-redux";
import Book from "../../components/book/Book";
import AddBook from "../../components/addBook/AddBook";
import styles from "./booksPage.module.css";

function BooksPage() {
  const [modal, setModal] = useState(false);

  const books = useSelector((state) => state.booksData.books);
  console.log(books);

  return (
    <div className={styles.booksPage}>
      <button className={styles.addNewBook} onClick={() => setModal(true)}>
        Add New Book
      </button>
      <section className={styles.booksSection}>
        {books.length
          ? books.map((book) => <Book book={book} key={book.id} />)
          : "There are no books added."}
      </section>
      {modal ? <AddBook setModal={setModal} /> : null}
    </div>
  );
}

export default BooksPage;
