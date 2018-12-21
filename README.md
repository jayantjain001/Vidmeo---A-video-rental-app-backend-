# Vidmeo-A-video-rental-app-backend
Hi , this is Nodejs  (Backend) application  made using ExpressJS and MongoDB and many external modules and packages
and authentication and authorisation is ensured using JSON Webtokens.

How to start App-
(These commands work for Mac and Linux)  tested in Ubuntu
first come in the directory 
input these commands
eg . cd home/jayant/Documents/Web_Dev/Nodejs/Express                       this is an example
then input these in your current directory
export PORT=3000
export app_password=1234 
export vidly_jwtPrivatekey=124

nodemon


Use the Postman app for testing Restful APIs created :
for normal viewing 
Genres 
GET   localhost:3000/api/genre           if POST is 3000


Authentication -    if the user want to update or add a genre/movie   user need to be authenticated first

only admins can delete data

1) Register new user :   POST    /api/users
body  ->raw-> json
{
"name":"Jayant",
	"email":"jj1234@gmail.com",
	"password":"12345"
}

you will get a jwt after registering in header section in postmanapp

2) 
testing Authentication
POST    /api/auth

when client logins to server then server generates a jwt and send to client 

you put jwt  registration token in headers and email ,password in body
then you get a new jwt token in body as output  for further tasks
3)

for posting a new genre u must be a authenticated user
take the jwt token from registered user from headers section and put it into 
POST  api/genre
 put that token eg. eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzE2YmNhMjliZWNlYzQzYjMyMDc2NTkiLCJpYXQiOjE1NDQ5OTM5NTV9.82P8naLf1jr1Kal7D5LRP7JhYSF1vMM7JBC59NyoHjg

in headers     x-auth-token    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzE2YmNhMjliZWNlYzQzYjMyMDc2NTkiLCJpYXQiOjE1NDQ5OTM5NTV9.82P8naLf1jr1Kal7D5LRP7JhYSF1vMM7JBC59NyoHjg

  and entre name of genre in json format in body

  and you are done

4)
Checking current user
GET   api/users/me
put jwt token received after authentication here eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzE2YmNhMjliZWNlYzQzYjMyMDc2NTkiLCJpYXQiOjE1NDQ5OTQyMTB9.3UHLncquttW_U7_O2ZotRa1hgS7oUVTxl2OknJ3RZDM

body shows current user


5) Creating a user admin you can go to mongodb compass and in users place 
 add a new field by editing 
 field===  "isAdmin":true   value to Boolean



libaries used -
Loadash    -has  _.pick()   no need to repeat user.name user.password ,etc.
bcrypt     - .genSalt(num) asynchronous method higher the num more complex the salt
 and more time it takes and hence more strong the password   hashing passwords  dont store them in plain text
            password=  .hash('password',salt)   contains hashed password with salt generated in front because we need salt to decrypt it
            .compare(req.bdy.password,user.password)    == (plaintextpassword,  hashed password)

PAssword -- 
JOI   -- validation
JWT(Json Web Tokens)  - it needs a private key to be accessed which is only in server            
