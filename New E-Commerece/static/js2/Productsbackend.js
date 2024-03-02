let data;
async function PopulateProductsTable()
{
    var response = await fetch("http://127.0.0.1:5001/products");
    data = await response.json();
    var tableBody = document.getElementById("productsTable");
    tableBody.innerHTML = "";
    for (var i = 0; i < data.length; i++) {
        var product = data[i];
        console.log(product);
        var row = document.createElement('tr');
        row.innerHTML = `
        <td>${product.pid}</td>
        <td>${product.name}</td>
        <td>${product.description}</td>
        <td>${product.price}</td>
        <td>${product.quantity}</td>
        <td><button class="UpdateButton">Update</button></td>
        <td><button class="DeleteButton" onclick="DeleteProduct(${i})">Delete</button></td>
        `;
        tableBody.appendChild(row);
    }
}

async function DeleteProduct(index)
{
    const pid1 = (data[index].pid);
    const response = await fetch("http://127.0.0.1:5001/products",
    {
        method : 'DELETE',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({pid: pid1}) // iss products ka nai pta kahan sy ayya
    });
    PopulateProductsTable();
}

async function AddProduct()
{
    var product;
    //if(window.location.pathname === '/Signup.html')
    {
        const pid1 = (document.getElementById("pid").value).toString();
        const name1 = (document.getElementById("productname").value).toString();
        const description1 = (document.getElementById("productdescription").value).toString();
        const price1 = (document.getElementById("productprice").value).toString();
        const quantity1 = (document.getElementById("productquantity").value).toString();
        
        product = {pid:pid1 , name:name1, description:description1, price:price1, quantity:quantity1}
    }
    var response = await fetch("http://127.0.0.1:5001/products",
    {
        method : 'POST',
        headers : { 'Content-Type' : 'application/json'},
        body: JSON.stringify(product)
    });
    // console.log(response.status);
    //reset form
   // if(window.location.pathname === '/Signup.html')
    {
        const form = document.getElementById('productinfo');
        form.reset(); 
    }
    
    PopulateProductsTable();
}


PopulateProductsTable();