# ** for agah company
`information`

**author : mahdi shahpoury**

##commands
    docker stop $(docker ps -a -q)
    docker rm $(docker ps -a -q)


 `docker build -t username/agah  .`
 
 `docker run -p 49160:8080 -d  mani/agah`
 
  or  simply run  : 
 
  `docker-compose up --build`

##   mongo panel  => http://localhost:8081/

##test
curl -i localhost

##references ~~projects~~
 https://expressjs.com/en/starter/hello-world.html
