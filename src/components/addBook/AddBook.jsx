// import styles from "./addBook.module.css";
// import { addBook } from "../../redux/booksSlice";
// import { useDispatch } from "react-redux";

// function AddBook({ setModal }) {
//   const dispatch = useDispatch();

//   const handleAddBook = (e) => {
//     e.preventDefault();
//     const bookInfo = {
//       id: new Date().toISOString(),
//       name: e.target.bookname.value,
//       description: e.target.description.value,
//       pages: +e.target.pages.value,
//       done: 0,
//       started: null,
//       finished: null,
//       duration: null,
//       rate: 0,
//       notes: [],
//     };

//     dispatch(addBook(bookInfo));
//     e.target.reset();
//   };

//   return (
//     <section className={styles.addBook}>
//       <div className={styles.bookDetails}>
//         <div className={styles.topLine}>
//           <button className={styles.closeModal} onClick={() => setModal(false)}>
//             <i className="fa-solid fa-x"></i>
//           </button>
//         </div>
//         <form onSubmit={handleAddBook}>
//           <label htmlFor="bookname">
//             Book name
//             <input type="text" id="bookname" required />
//           </label>
//           <label htmlFor="description">
//             Book description
//             <textarea id="description" cols="30" rows="5" required></textarea>
//           </label>
//           <label htmlFor="pages">
//             Total pages
//             <input type="number" id="pages" required />
//           </label>
//           <button>Add book</button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default AddBook;
