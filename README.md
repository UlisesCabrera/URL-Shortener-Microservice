# URL Shortener Microservice
A microservice where the user can pass a URL as a parameter and it will receive a shortened URL in the JSON response, 
If it pass an invalid URL that doesn't follow the valid http://www.example.com format, 
the JSON response will contain an error instead.And when the user visits that shortened URL, it will redirect it to the original link.

###Example creation usage:
```sh
https://url-sh.herokuapp.com/new/https://www.google.com<br>
https://url-sh.herokuapp.com/new/http://nba.com
```
###Example creation output:
```sh
{ "original_url": "http://nba.com", "short_url": "https://url-sh.herokuapp.com/6" }
```
###Usage:
```sh
https://url-sh.herokuapp.com/6
```
###Will Redirect To:
```sh
http://nba.com
```