# express-mongoose
Get started with Mongo DB with Express - using Mongoose schema 

This project helps to create APIs using MongoDB with express JS to handle requests. 

### Setup and installations 
Step 1 - install mongo db [Link](https://docs.mongodb.com/manual/installation/)
Step 2 - **npm install** ( make sure that you are in your project folder)
Step 3 - Run the mongo server using the command **mongod** (Assuming that you have successfull mongodb server up and running)
Step 4 - Now access the below urls to post and get the data via apis

         1. To add a category - http://localhost:3000/addCategory
             Request body : {
                                "categoryName": "Top 50 Pick LInes",
                                "status": "active",
                                "categoryType" : "top50"
                            }
             

        2. To get All categories - http://localhost:3000/getAllCategories
        3. To add new conversation - http://localhost:3000/addConversation
            
            Request body : {        
                                "chat" : [ "test2", "category test" ,"what the hell" , "wassup buddy"],
                                "status" : "active",
                                "categoryName" : ["romantic", "cute"]
                            }
               

        4. Get conversations by category - http://localhost:3000/getConversationsByCategory
            
            Request body : {
                               "categoryName" : "chessy"
                           }
              
        
