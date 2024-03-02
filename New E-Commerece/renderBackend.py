from flask import Flask,render_template, request
from flask_cors import CORS
app = Flask("My Web")
CORS(app)

import Backend as dl

@app.get("/users")
def ViewUsers():
    users = dl.ViewAllUsers().to_json(orient="records")
    return users

@app.post("/users")
def AddUsers():
    users = request.get_json()
    dl.AddUsers(users['username'],users['password'],users['role'])
    return "User Added Successfully"

@app.delete("/users")
def DeleteUser():
    user = request.get_json()
    dl.DeleteUser(user['username'],user['password'])
    return "User is Deleted"

@app.get("/comments")
def ViewAllComments():
    comments = dl.ViewAllComments().to_json(orient="records")
    return comments

@app.post("/comments")
def AddComment():
    comment = request.get_json()
    dl.AddComment(comment['firstname'],comment['lastname'],comment['email'],comment['phone'],comment['message'])
    return "Comment Added Successfully"

@app.delete("/comments")
def DeleteComment():
    comment = request.get_json()
    dl.DeleteComment(comment['firstname'])
    return "Comment is deleted"

@app.get("/products")
def ViewAllProducts():
    products = dl.viewProducts().to_json(orient="records")
    return products

@app.post("/products")
def AddProduct():
    products = request.get_json()
    dl.AddProduct(products['pid'],products['name'],products['description'],products['price'],products['quantity'])
    return "Product added successfully"

@app.delete("/products")
def DeleteProduct():
    product = request.get_json()
    dl.DeleteProduct(product['pid'])
    return "Product Deleted"

@app.get("/contactinfo")
def ViewContactInfo():
    info = dl.ViewContactInfo().to_json(orient="records")
    return info

@app.patch("/contactinfo")
def UpdateContactInfo():
    info = request.get_json()
    print(info)
    dl.UpdateContactInfo(info['address'],info['email'],info['phone'])
    return "Contact Info Updated Successfully"

app.run(port=5001)