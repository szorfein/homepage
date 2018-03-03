# homepage

A simple homepage to web browser. Sense look like a terminal, 
i would see where i can deep in :)

I will include some icons too. We'll see.

# Configuration

## Social link

Edit `social-link.json`, you can find icon name to [ionicons.com](http://ionicons.com).

## Rss feed

To edit `rss-feeds.json`, you have to generate url from [yahoo](https://developer.yahoo.com/yql/?dataTypeRadios=JSON)  

Imagine, you want follow news from `http://threatpost.com/feed/`, you go to yahoo link above and can set a thing like this:

+ Response : `JSON`
+ Yql query : `select title,link from rss where url="http://threatpost.com/feed/" limit 3`

Yql query is like a sql language.

You receive a line like this:
```
https://query.yahooapis.com/v1/public/yql?q=select%20title%2Clink%20from%20rss%20where%20url%3D%22http%3A%2F%2Fthreatpost.com%2Ffeed%2F%22%20limit%203&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys
```
And you past this line to `rss-feeds.json`.

## Troubleshooting

With chrome, CORS policy block javascript unless you activate some obscur flag.  
I recommanded you to use [darkhttpd](https://unix4lyfe.org/darkhttpd/), he's light & secure (with chroot), if you are a gentoo user, i've wrote an ebuild [here](https://github.com/szorfein/ninjatools/blob/master/www-servers/darkhttpd/darkhttpd-1.12.ebuild).

Last screen:
![screenshot](https://raw.githubusercontent.com/szorfein/homepage/master/preview.jpg "Screenshot")