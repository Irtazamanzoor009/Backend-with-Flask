from flask import Flask, render_template
app = Flask("My Web")


@app.route("/")
def render_index():
    return render_template("index.html")

@app.route("/index.html")
def render_home():
    return render_template("index.html")

@app.route("/aboutus.html")
def render_aboutus():
    return render_template("aboutus.html")

@app.route("/AddProduct.html")
def render_addproduct():
    return render_template("AddProduct.html")

@app.route("/adminpage.html")
def render_adminpage():
    return render_template("adminpage.html")

@app.route("/contactus.html")
def render_contactus():
    return render_template("contactus.html")

@app.route("/EditContactUs.html")
def render_Editcontactus():
    return render_template("EditContactUs.html")

@app.route("/products.html")
def render_products():
    return render_template("products.html")

@app.route("/Signup.html")
def render_signup():
    return render_template("Signup.html")

@app.route("/userpage.html")
def render_userpage():
    return render_template("userpage.html")

@app.route("/ViewContacts.html")
def render_viewcontacts():
    return render_template("ViewContacts.html")

@app.route("/ViewUsers.html")
def render_viewusers():
    return render_template("ViewUsers.html")

app.run(port=5000)