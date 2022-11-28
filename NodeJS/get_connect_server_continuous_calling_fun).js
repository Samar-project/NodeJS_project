var http_obj=require('http');//importing http prebuilt fun and refering to var http object
var fs =require('fs');//server

http_obj.createServer(function(req,res){           
                                fs.readFile('anytxt_file.txt',function (err,data)
                                                                        {                        
                                                            res.writeHead(200,{'Content-Type':'text/html/doc'});
                                                            res.write(data);
                                                            return res.end();
                                                                        });                                                                                                                   
                                        }).listen(3000);
                //------------OR-------------------//

var http_obj=require('http');
var fs =require('fs');

//http_obj instantiate createServer method passing a function operating over listen object which takes args in time(wait to connect)
http_obj.createServer(createServer_fun).listen(3000);

//creating sever fun with two agrs
var createServer_fun=function(req,res){//one is txt file to write data on it
    fs.readFile('anytxt_file.txt',fs.readFile_fun);//second fun to(how data will written)                                                   
}

//readFile functon to read the website(html/txt file) on server with two agrs 
readFile_fun =function(err,data){//err to record if any error occurs
                                    //data to read data and write on txt file
    res.writeHead(200,{'Content-Type':'text/html/doc'});
    res.write(data);//write the data to file
    return res.end();   //close the file
}
//bye bye 