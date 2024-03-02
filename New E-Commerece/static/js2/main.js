async function GetProducts() {
    var response = await fetch("http://127.0.0.1:5001/products");
    // console.log(response);
    var data = await response.json();
    console.log(data);
}

async function AddProduct() {
    var product = {
        pid: "p30",
        name: "Car",
        description: "Brand New,Zero Meter",
        price: 970000,
        image: "Car.jpg",
        rating: 6,
    };
    var response = await fetch("http://127.0.0.1:5001/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
    });
    console.log(response);
}

async function DeleteProduct() {
    var product = {
        pid: "p300",
    };
    var response = await fetch("http://127.0.0.1:5001/products", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
    });
    console.log(response);
}

async function UpdateRating() {
    var product = {
        pid: "p200",
        rating: 9,
    };
    var response = await fetch("http://127.0.0.1:5001/products", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
    });
    console.log(response);
}

async function GetProductByID() {
    var product = {
        pid: "p02",
    };
    var url = "http://127.0.0.1:5001/products/" + product.pid;
    //   var response = await fetch(`http://127.0.0.1:5001/products/${product.pid}`);
    var response = await fetch(url);
    var data = await response.json();
    console.log(data);
}

// var tbody = (document.getElementById("bodytable1"));
// tbody.innerHTML = "";

// var trow = document.createElement('tr');
// var trow2 = document.createElement('tr');
// trow.innerHTML = `<td>1</td>
// <td>Microwave</td>
// <td>good</td>
// <td>3000</td>
// <td>4.6</td>`

// trow2.innerHTML = `<td>1</td>
// <td>Microwave</td>
// <td>good</td>
// <td>3000</td>
// <td>3000</td>`

// tbody.appendChild(trow);
// tbody.appendChild(trow2);

async function PopulateTable() {
    var response = await fetch("http://127.0.0.1:5001/products");
    var data = await response.json();
    var tableBody = document.getElementById("bodytable1");
    // tableBody.innerHTML = "";
    for (var i = 0; i < data.length; i++) {
        var product = data[i];
        console.log(product);
        var row = document.createElement('tr');
        row.innerHTML = `
        <td>${i + 1}</td>
        <td>${product.name}</td>
        <td>${product.description}</td>
        <td>${product.price}</td>
        <td>${product.rating}</td>
        `;
        tableBody.appendChild(row);
    }
}

async function updateProduct() // in ki values abi set nai ki mtlb ky name
{
    var pid = document.getElementById('pid').value;
    var pName = document.getElementById('name').value;
    var pDescription = document.getElementById('description').value;
    var pPrice = document.getElementById('price').value;
    var pRating = document.getElementById('rating').value;

    var product = {
        pid: pid,
        name: pName,
        description: pDescription,
        price: pPrice,
        rating: pRating,

    };
    response = await fetch('http://127.0.0.1:5001/products',
        {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        });
        PopulateTable();
}

async function deleteProduct(index)
{
    const response = await fetch(`${backend_url}/products`,
    {
        method : 'DELETE',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({pid: products[index].pid}) // iss products ka nai pta kahan sy ayya
    });
    PopulateTable();
}

async function saveProduct() // in ki value abi set nai ki
{
    const pid = document.getElementById('pIdAdd').value;
    const pName = document.getElementById('pNameAdd').value;
    const pDescription = document.getElementById('pDescriptionAdd').value;
    const pPrice = document.getElementById('pPriceAdd').value;
    const pRating = document.getElementById('pRatingAdd').value;
    const image = document.getElementById('pImageAdd').value;

    var product = {pid: pid, name : pName, description : pDescription, price : pPrice, rating : pRating, image : image};
    var response = await fetch(`${backend_url}/products`,
    {
        method : 'POST',
        headers : { 'Content-Type' : 'application/json'},
        body: JSON.stringify(product)
    });
    // reset form
    const form = document.getElementById('productForm');
    form.reset(); 
    PopulateTable();
}

// var tableBody = document.getElementById("bodytable1");
// tableBody.innerHTML = "";
// PopulateTable();
