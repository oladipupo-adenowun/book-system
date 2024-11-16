let books = [];

function addBook(){
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = document.getElementById('pagesNumber').value;

    if(bookName && authorName && bookDescription && !isNaN(pagesNumber)){
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showBooks();
        clearInputs();
    }else{
        alert('Please fill all fields correctly!');
    }
}
    function showBooks(){
        const booksHTML = books.map(
            (book,index) => `
            <h1>Book Number: ${index + 1}</h1>
            <p><strong>Book Name: </strong>${book.name}</p>
            <p><strong>Author Name: </strong>${book.authorName}</p>
            <p><strong>Book Description: </strong>${book.bookDescription}</p>
            <p><strong>No. of Pages: </strong>${book.pagesNumber}</p>
            <p><button id="edit_book" onclick="editBook(${index+1})">Edit Book</button>
        <button id="delete_book" onclick="deleteBook(${index+1})">Delete Book</button></p>
            `
        ).join('');
        document.getElementById('books').innerHTML = booksHTML;
    }

    function clearInputs(){
        document.getElementById('bookName').value = '';
        document.getElementById('authorName').value = '';
        document.getElementById('bookDescription').value = '';
        document.getElementById('pagesNumber').value = '';
    }

    function deleteBook(bookId){
        books.splice(bookId-1,1);
        showBooks();
    }

    function editBook(bookId){
        const index = bookId-1;
        const editBook = books[index];
        document.getElementById("bookName").value = editBook.name;
        document.getElementById("authorName").value = editBook.authorName;
        document.getElementById("bookDescription").value = editBook.bookDescription;
        document.getElementById("pagesNumber").value = editBook.pagesNumber;

        const addButton = document.getElementById("add_book");
        addButton.innerText = "Update";
        addButton.onclick = ()=>{
            updateBook(index);
        }
    }

    function updateBook(bookId){
        const bookName = document.getElementById('bookName').value;
        const authorName = document.getElementById('authorName').value;
        const bookDescription = document.getElementById('bookDescription').value;
        const pagesNumber = document.getElementById('pagesNumber').value;
    
        if(bookName && authorName && bookDescription && !isNaN(pagesNumber)){
            const book = {
                name: bookName,
                authorName: authorName,
                bookDescription: bookDescription,
                pagesNumber: pagesNumber
            };
            books.splice(bookId,1,book);
            showBooks();
            clearInputs();
        }else{
            alert('Please fill all fields correctly!');
        }
    }