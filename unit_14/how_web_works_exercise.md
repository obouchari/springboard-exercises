# How Web Works Exercise

## Part I: Solidify Terminology

1. What is HTTP?  
   It is the protocol used to transfer hypermedia documents, such as HTML on the web.

2. What is a URL?  
   URL also referred to as a web address, is a combination of protocol, domain name, and the specific web resource or webpage.

3. What is DNS?  
   DNS is a service that translates IP addresses to human readable, easy to remember domain names.

4. What is a query string?

5. What are two HTTP verbs and how are they different?  
   Most commonly used HTTP verbs on the web are GET and Post. GET is used to request data from the server without a request body. POST is mostly used to submit data to the server using a request body.

6. What is an HTTP request?  
   is a way to inquire data from the server. An HTTP request comprises of a request header, URL, Method (GEt/POST/PUT/...) and sometimes a body.

7. What is an HTTP response?  
   It is a response to the HTTP request. HTTP response comprises of a response header, status code, and the response body.

8. What is an HTTP header? Give a couple examples of request and response headers you have seen.  
   HTTP headers basically allow the client and the server to pass additional information with an HTTP request or response.
   An example of an HTTP request header would be the Accept-Encoding which tells the server what kind of encoding the browser accepts.
   An example of an HTTP response header would be the Content-Type, it the server's way of telling the browser the type of the data it is sending.

9. What are the processes that happen when you type "http://somesite.com/some/page.html" into a browser?  
   The following is merely a simplified version of the process:
   1. the browser request resolution of the IP address associated with the specified domain name using cache or DNS server.
   2. the browser forms an HTTP request with the correct header information.
   3. the browser send a request to the web server request the specified resource in this case the page.html.
   4. server receives the request lookup the page and create an http response and sends back the data.
   5. the browser receives the page and sends additional request for any embedded resources.
   6. the browser interprets the data and renders it to the user.
