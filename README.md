# trello-bug

[View Trello’s API documentation online][apidocs]. For information on Trello’s API development, visit [their Trello board][trellotrello], of course.

[apidocs]: https://trello.com/docs/
[trellotrello]: https://trello.com/board/trello-public-api/4ed7e27fe6abb2517a21383d

## Install
```
npm install trello-bug
```

### Getting your key and token
* [Generate your developer key][devkey] and supply it as the first constructor parameter.
* To read a user’s private information, get a token by directing them to `https://trello.com/1/connect?key=<PUBLIC_KEY>&name=MyApp&response_type=token` replacing, of course, &lt;PUBLIC_KEY&gt; with the public key obtained in the first step.
* If you never want the token to expire, include `&expiration=never` in the url from the previous step.
* If you need write access as well as read, `&scope=read,write` to the request for your user token.

[devkey]: https://trello.com/1/appKey/generate

## Example Code
```javascript
var trello = require('trello-bug');
trello.init('<PUBLIC_KEY>', '<TOKEN>', '<USERNAME or USERID>', '<BOARD>', '<LIST>', function (err) {
    if(err) throw err;
    trello.sendBug(<CODE>, <NAME>, <DESCRIPTION>, function (err, data) {
        if (err) throw err;
        console.log(data);
    });
});
```

## License

Released under [MIT](https://github.com/MaximeNicole/trello-bug/blob/master/LICENSE).