const url = 'https://anapioficeandfire.com/api/books/';

const app = document.querySelector('#books');

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.array.forEach((element) => {
        console.log(element);
        addBooktoDOM(element);
      });
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
    });
};

fetchData(url);

  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given

  const addBooktoDOM = (element) => {
    let div = document.createElement("div");
    let title = document.createElement("h4");
    let author = document.createElement("p");
    let published = document.createElement("p");
    let pages = document.createElement("p");

    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.alignItems = "center";
    div.style.marginTop = "25px";

    title.textContent = element.name;
    author.textContent = `by ${item.authors[0]}`;
    published.textContent = item.released.substr(0, 4);
    pages.textContent = `${item.numberOfPages} pages`;

    div.append(title);
    div.append(author);
    div.append(published);
    div.append(pages);
    app.append(div);
  }