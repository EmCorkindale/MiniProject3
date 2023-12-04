1.  What was your requirements gathering and design process? Was it useful/successful?
logical and physical models completed. It was definitely useful for creating schemas, however I ended up dropping one of my schemas that wasn't needed.

2. Give a high level overview of your application and its features
Fake ecommerce store. The tables are set up, then the product and cartProduct data is wiped, and then the fetch is called to re-populate the tables.

3. Where does the data come from (external API)?
A fake store API

4. How is this data inserted into your database?
Using axios.

5. How is the data structured (into tables or collections)?
Three tables - Users, Products, and Cart Products.

6. How is the application code structured (MVC model)?
Models, Controllers, and Routes.

7. Does your application cover all 4 CRUD operations? How?
Yes - Get, Put, Post, and Delete are used for almost all of the schemas,

8. How might using a database instead of an external API directly benefit an application?
To store user information, to update products, more privacy and security, lesss steps - no fetch

9. How might you extend the features of your application in future?
Build a front end. Fetch from the database directly instead of using a third part api.

products/1/addToCart?userID=1