let teng = document.querySelector(".birek");
let body = document.querySelector("body");

fetch("https://dummyjson.com/products?limit=10")
  .then((res) => res.json())
  .then((result) => {
    getData(result.products);
    // console.log(result.products);
  });

function getData(data) {
  let head = "";
  data.forEach((element) => {
    head += `
       <div>
       <h1>${element.id}</h1>
       <img width="200px" src="${element.images[0]}"></img>
       <button class="birek">bos</button>
       <h4 class="price">${element.price}</h4>
       </div>
    `;

    body.innerHTML = head;
  });
}

let price = document.querySelectorAll(".price");
console.log(price);

function handleAdd(price) {
  console.log("ok");

  let footer = document.createElement("footer");
  let h1 = document.createElement("h1");
  h1.textContent = "salom";

  footer.appendChild(h1);
}
