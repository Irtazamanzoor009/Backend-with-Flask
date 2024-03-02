let data;
async function PopulateViewContactTable() {
    var response = await fetch("http://127.0.0.1:5001/comments");
    data = await response.json();
    var tableBody = document.getElementById("commenttable");
    tableBody.innerHTML = "";
    for (var i = 0; i < data.length; i++) {
        var comment = data[i];
        console.log(comment);
        var row = document.createElement("tr");
        row.innerHTML = `
        <td>${comment.firstname}</td>
        <td>${comment.lastname}</td>
        <td>${comment.email}</td>
        <td>${comment.phone}</td>
        <td>${comment.message}</td>
        <td><button class="DeleteButton" onclick="deletecomment(${i})">Delete</button></td>
        `;
        tableBody.appendChild(row);
    }
}

async function deletecomment(index) {
    const firstname1 = data[index].firstname.toString();
    const response = await fetch("http://127.0.0.1:5001/comments", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstname: firstname1 }), // iss products ka nai pta kahan sy ayya
    });
    // var tableBody = document.getElementById("bodytable1");
    // tableBody.innerHTML = "";
    // console.log(response.status);
    PopulateViewContactTable();
}

async function AddComment() {
    var comment;

    const firstname1 = document.getElementById("firstname").value.toString();
    const lastname1 = document.getElementById("lastname").value.toString();
    const email1 = document.getElementById("email1").value.toString();
    const mobilenumber1 = document.getElementById("mobilenumber").value.toString();
    const message1 = document.getElementById("message").value.toString();

    comment = {
        firstname: firstname1,
        lastname: lastname1,
        email: email1,
        phone: mobilenumber1,
        message: message1,
    };

    var response = await fetch("http://127.0.0.1:5001/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comment),
    });

    const form = document.getElementById("contactus");
    form.reset();

    PopulateViewContactTable();
}

PopulateViewContactTable();
