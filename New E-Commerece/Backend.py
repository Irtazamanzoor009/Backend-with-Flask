import pandas as pd
usersfile = "users.csv"
commentsfile = "comments.csv"
productsfile = "products.csv"
contactinfo = "contactinfo.csv"

def AddUsers(username,password,role):
    df = pd.read_csv(usersfile)
    users = [username,password,role]
    df.loc[len(df.index)] = users
    df.to_csv(usersfile,index=False)
    
def ViewAllUsers():
    df = pd.read_csv(usersfile)
    return df

def DeleteUser(username,password):    
    df = pd.read_csv(usersfile)
    df['password'] = df['password'].astype(str)
    # Iterate through rows
    for index, row in df.iterrows():
        if row['username'] == username and row['password'] == password:
            df.drop(index, inplace=True)
            df.to_csv(usersfile, index=False)
            return True

    return False

def AddComment(firstname,lastname,email,phone,message):
    df = pd.read_csv(commentsfile)
    comment = [firstname,lastname,email,phone,message]
    df.loc[len(df.index)] = comment
    df.to_csv(commentsfile,index=False)
    
def ViewAllComments():
    df = pd.read_csv(commentsfile)
    return df

def DeleteComment(firstname):
    df = pd.read_csv(commentsfile)
    idx = df[df['firstname'] == firstname].index
    df.drop(idx, inplace=True)
    df.to_csv(commentsfile, index=False)
    
def AddProduct(pid, name, description, price, quantity):
    df = pd.read_csv(productsfile)
    products = [pid, name, description, price, quantity]
    df.loc[len(df.index)] = products
    df.to_csv(productsfile, index=False)
    
def viewProducts():
    df = pd.read_csv(productsfile)
    return df

def GetProduct(pid):
    df = pd.read_csv(productsfile)
    product = df[df['pid'] == pid]
    return product

def UpdateQuantity(pid, new_quantity):
    df = pd.read_csv(productsfile)
    idx = df[df['pid'] == pid].index
    df.loc[idx,'rating'] = new_quantity
    df.to_csv(productsfile,index=False)
    
def DeleteProduct(pid):
    df = pd.read_csv(productsfile)
    idx = df[df['pid'] == pid].index
    df.drop(idx, inplace=True)
    df.to_csv(productsfile, index=False)
    
def UpdateContactInfo(address1,email1,phone):
    df = pd.read_csv(contactinfo)
    new_data = {'address': address1, 'email': email1, 'phone': phone}
    df = pd.DataFrame([new_data])
    df.to_csv(contactinfo, index=False)
    
    # df = pd.read_csv(contactinfo)
    
    # Assuming you have a unique identifier (e.g., index or ID) to locate the row you want to update
    # Here, I'm assuming it's the first row (index 0), you should modify it accordingly
    # df.at[0, 'address'] = address
    # df.at[0, 'email'] = email
    # df.at[0, 'phone'] = phone
    
    # df.to_csv(contactinfo, index=False)
    
def ViewContactInfo():
    df = pd.read_csv(contactinfo)
    return df
    
