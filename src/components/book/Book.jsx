// import styles from "./book.module.css";

// function Book({ book }) {
//   return (
//     <div className={styles.book} key={book.id}>
//       <h3>{book.name}</h3>
//       <p>{book.description}</p>
//       <div className={styles.startEnd}>
//         {book.started ? <span> {book.started} </span> : <button>Start</button>}
//         {book.finished ? (
//           <span> {book.finished} </span>
//         ) : (
//           <button>Finish</button>
//         )}
//       </div>
//       {book.started && !book.finished ? (
//         <div className={styles.duration}>
//           Done: {(book.done * 100) / book.pages}%
//           <input
//             type="range"
//             name="done"
//             id="done"
//             value={(book.done * 100) / book.pages}
//           />
//         </div>
//       ) : (
//         ""
//       )}
//       <div className={styles.rating}></div>
//       <div className={styles.notes}>
//         <p>Notes</p>
//         <div className={styles.notesBody}>
//           {book.notes.map((note, i) => (
//             <span key={i}>
//               {i + 1}. {note}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Book;
