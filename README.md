# express-mongoose
Get started with Mongo DB with Express - using Mongoose schema 

This project helps to create APIs using MongoDB with express JS to handle requests. 
[Documentation](https://nbadiganti.github.io/express-mongoose/)


## Setup and installations 
Step 1 - install mongo db [Link](https://docs.mongodb.com/manual/installation/)  <br />
Step 2 - **npm install** ( make sure that you are in your project folder) <br />
Step 3 - Run the mongo server using the command **mongod** (Assuming that you have successfull mongodb server up and running) <br />
Step 4 - Now access the below urls to post and get the data via API`s <br />

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
              
        

### Created & Maintained By

[Nagendra Badiganti](https://github.com/nbadiganti) ([@nagendrabadigan](https://www.twitter.com/nagendrabadigan)) 
([Insta](https://www.instagram.com/nbadiganti))

> If you found this project helpful or you learned something from the source code and want to thank me, consider buying me a cup of :coffee:
>
> * [PayPal](https://www.paypal.me/codingcursor/)
> * [Portfolio](https://www.driftycode.com)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
