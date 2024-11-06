

// Initial display of products
document.addEventListener("DOMContentLoaded", () => {
  displayProducts(products);
});

// Function to display products in the container
function displayProducts(products) {
  const container = document.getElementById("product-container");


  products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
      productDiv.innerHTML = `<strong>${product.name}</strong> - $${product.price}`;
      container.appendChild(productDiv);
  });
}

// Sorting function
function sortProducts() {
  const sortOption = document.getElementById("sort").value;

  let sortedProducts = [...products]; // Create a copy of products to sort

  switch (sortOption) {
      case "priceAsc":
          sortedProducts.sort((a, b) => a.price - b.price);
          break;
      case "priceDesc":
          sortedProducts.sort((a, b) => b.price - a.price);
          break;
      case "nameAsc":
          sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
          break;
      case "nameDesc":
          sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
          break;
  }

  displayProducts(sortedProducts); // Update product display with sorted products
}


const products = [
  {
      id: 1,
      name: "Chocolate Chip Cookies",
      price: "20kr",
      description: "Classic, buttery treats with crisp edges and soft centers, loaded with melty chocolate chips.",
      image: "images/image0.jpeg"
  },
  {
      id: 2,
      name: "Red velvet Cookies",
      price: "10kr",
      description:  "Red velvet filled cookies are soft, cocoa-flavored treats with a rich red color and a creamy, sweet filling inside.",
      image: "images/image1.jpeg",
  },
  {
      id: 3,
      name: "Biscoffe Cookies",
      price: "40kr",
      description: "Biscoff-filled cookies are soft, spiced treats with a creamy, sweet Biscoff spread center, offering a rich caramelized flavor in every bite.",
      image: "images/image2.jpeg",
  },
  {
      id:4,
      name:"Multiple Cookies",
      price: "80kr",
      description: "Multiple cookies feature a mix of classic flavors like chocolate chip, double chocolate and red velvet offering a delicious treat for every taste.",
              image: "images/image5.jpeg",
  }
]
              // Select the container element where the products will be displayed
const productContainer = document.querySelector('.product-container');
productContainer.style.display = 'grid';
productContainer.style.gridTemplateColumns = 'repeat(2, 1fr)'; // Two items per row
productContainer.style.gap = '20px'; // Space between items

// Loop through each product in the array
products.forEach(product => {
  // Create a div for the product
  const productDiv = document.createElement('div');
  productDiv.classList.add('product-image');
  
  // Create an img element for the product image
  const productImage = document.createElement('img');
  productImage.src = product.image;
  productImage.alt = product.name;
  productImage.classList.add('cookies-image');

  // Set image dimensions to reduce size in the browser
productImage.style.width = '300px';
productImage.style.height = '300px'; // Adjust height as needed
  // Create an h2 element for the product name
  const productName = document.createElement('h2');
  productName.classList.add('product-name');
  productName.textContent = product.name;


  
  // Create a p element for the product price
  const productPrice = document.createElement('p');
  productPrice.classList.add('product-price');
  productPrice.textContent = product.price;
  // Create a p element for the product description
  const productDescription = document.createElement('p');
  productDescription.classList.add('product-description');
  productDescription.textContent = product.description;
  // Create a button for adding the product to the cart
  const addToCartButton = document.createElement('button');
  addToCartButton.classList.add('add-to-cart-btn');
  addToCartButton.textContent = 'Add to Cart';
  // Append all elements to the product div
  productDiv.appendChild(productImage);
  productDiv.appendChild(productName);
  productDiv.appendChild(productPrice);
  productDiv.appendChild(productDescription);
  productDiv.appendChild(addToCartButton);
  // Append the product div to the main product container
  productContainer.appendChild(productDiv);
});










 