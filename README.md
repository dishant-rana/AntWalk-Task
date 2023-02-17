# ABOUT THE PRJOECT

This is the serverless backend of the TODO project which can run locally as well. You can Perfrom All the CRUD Operations on the TODOS and CHECK that in the DB.


# About Project

- Language: Node.js
- Framework: Express Js
- Database: PostgreSql 
- Development Model: Serverless

# How to install the project on local
   
Open **CLI** and run following commands to set up at local:

- **Clone the project**

        git clone https://github.com/dishant-rana/AntWalk-Assignment.git
   
- **Go to project directory** 

        cd AntWalk-Assignment  -- Open code in any IDE( e.g visual studio code)

- **Install node.js** 

   To install node.js follow below url :
> 

        https://nodesource.com/blog/installing-nodejs-tutorial-windows/

- **Install the dependencies**    

        npm install


# Database 
 	 
- **Which UI being used to connect to DB**
> 

        You can use any DB client of your choice like DataGrip or connect from CLI.
        
- **Connect To The DATABASE**	

  Get the Values of the Variables from the .env and put them into the conenction to connect to DB.
  Host as DB_HOST, Port as DB_PORT, Username as DB_USERNAME, Password as DB_PASSWORD


# Code architecture/structure

  The Project is using mvc architecture pattern to manage the code into three main logical components: the model, the view, and the controller.Each of these components are built to handle specific development aspects.

**Index.js** : Index.js intercepts the requests made by the client and send them the response.
    
**Routes**: It refers to how an application’s endpoints (URIs) respond to client requests. All the Routes are defined with inside the Route File of the Moduel.
    
**Controller** : Controller gets takes the Requests and analyze it which sends it to Services to Perform the required Logics on the Request.
     
**DAL** (Data access layer) : This is database access layer that contains the databases or any other source of data. It includes all the methods which interact with the Database and sends back the data.

# REQUESTS EXAMPLES

**BASEURL* : http://localhost:3000 <br/>

**GET REQUEST** :  This is used to Get all the TODOS from the DATABASE. 
                    Example: GET http://localhost:3000?page=1 
                    You can exclude the Page query if you want. 

**POST REQUEST**: This is used to ADD new TODOS to the DATABASE. And the body conatins the TodoNames in the form of Array.You can Add multiple TODOS at once.<br/>
                    Example: POST http://localhost:3000 <br/>
                    REQUEST BODY: [{"todoName":"New Todo"}, {"todoName":"One more Todo"}]<br/>

**DELETE REQUEST** :  This is used to DELETE the TODOS from the DATABASE on the basis of NAME or ID. You can Delete multiple TODOs at once. <br/>
                    Example: DELETE http://localhost:3000 <br/>
                    REQUEST BODY: {"ids":[1,2,3]}  OR {"todoNames":["Name1", "Name2","Name3"]} <br/>

**PATCH REQUEST** :  This is Used to Update or Add the TODOS in the Database on the basis of availability. If the TODO is present already it will update the    STATUS of it <br/>
                    Example: GET http://localhost:3000 <br/>
                    REQUEST BODY: [{"id":1,"todoName":"Anything","status":false},{"id":2,"todoName":"Anything","status":true}] <br/>
