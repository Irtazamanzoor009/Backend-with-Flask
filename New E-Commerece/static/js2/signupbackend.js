let data;
async function PopulateTable()
{
    var response = await fetch("http://127.0.0.1:5001/users");
    data = await response.json();
    var tableBody = document.getElementById("bodytable1");
    tableBody.innerHTML = "";
    for (var i = 0; i < data.length; i++) {
        var user = data[i];
        console.log(user);
        var row = document.createElement('tr');
        row.innerHTML = `
        <td>${user.username}</td>
        <td>${user.password}</td>
        <td>${user.role}</td>
        <td><button class="DeleteButton" onclick="deleteuser(${i})">Delete</button></td>
        `;
        tableBody.appendChild(row);
    }
}

async function deleteuser(index)
{
    const usernameToDelete = (data[index].username).toString();
    const passwordToDelete = (data[index].password).toString();
    const response = await fetch("http://127.0.0.1:5001/users",
    {
        method : 'DELETE',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({username: usernameToDelete, password: passwordToDelete}) // iss products ka nai pta kahan sy ayya
    });
//     var tableBody = document.getElementById("bodytable1");
//  tableBody.innerHTML = "";
    // console.log(response.status);
    // PopulateTable();
}

async function SignUp()
{
    var user;
    //if(window.location.pathname === '/Signup.html')
    {
        const username1 = (document.getElementById("username").value).toString();
        const password1 = (document.getElementById("password").value).toString();
        const role1 = (document.getElementById("options").value).toString();
        
        user = {username: username1, password: password1, role : role1}
    }
    var response = await fetch("http://127.0.0.1:5001/users",
    {
        method : 'POST',
        headers : { 'Content-Type' : 'application/json'},
        body: JSON.stringify(user)
    });
    // console.log(response.status);
    //reset form
   // if(window.location.pathname === '/Signup.html')
    {
        const form = document.getElementById('userform');
        form.reset(); 
    }
    // var tableBody = document.getElementById("bodytable1");
    // tableBody.innerHTML = "";
    // PopulateTable();
    // ShowModal();
}

async function ShowModal() {
    document.querySelector('.overlay').classList.add('showoverlay');
    document.querySelector('.message').classList.add('showmessage');
}

async function HideModal() {
    document.querySelector('.overlay').classList.remove('showoverlay');
    document.querySelector('.message').classList.remove('showmessage');
}

PopulateTable();