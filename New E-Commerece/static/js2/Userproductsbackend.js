let data;
async function PopulateUserProductsTable()
{
    var response = await fetch("http://127.0.0.1:5001/products");
    data = await response.json();
    var tableBody = document.getElementById("productstable1");
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
        `;
        tableBody.appendChild(row);
    }
}

PopulateUserProductsTable();