async function PopulateContactInfoFields() 
{
    var response = await fetch("http://127.0.0.1:5001/contactinfo");
    var data = await response.json();
    console.log(data[0].address);
    console.log(data[0].email);
    console.log(data[0].phone);
    // $('#address').HTMl(data.address);
    // $('#email').HTML(data.email);
    // $('#phone').HTML(data.phone);

    document.getElementById("address").textContent = data[0].address;
    document.getElementById("email").textContent = data[0].email;
    document.getElementById("phone").textContent = data[0].phone;
}


async function ChangeContactInfo() 
{
    const newaddress1 = (document.getElementById("address1").value);
    const newemail1 = (document.getElementById("email1").value);
    const newphone1 = (document.getElementById("phonenumber").value);
    // idhr error aa ra hy bkl
    var contactinfo = { address: newaddress1, email: newemail1, phone: newphone1 };
    var response = await fetch("http://127.0.0.1:5001/contactinfo", 
    {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactinfo),
    });
    
    console.log(contactinfo.email);
    const form = document.getElementById("editcontacttable");
    form.reset();

    PopulateContactInfoFields();
}

PopulateContactInfoFields();
