# Token-register module

```

A Node.js module and easy way for to integrate auth-token

```

This module was initially developed by @iperezluis, for open source.
Currently, we are few maintainers trying to deal with it. :) More contributors are always welcome! ❤️ if you are interested we can discuss it and add you after strict rules, like enabling Two-Factor Auth in your npm and GitHub accounts.

Highlights

- Low memory footprint
- Graceful error handling
- Very high test coverage

Install

This project requires Node.js >= 10.13. Install it using yarn or npm.
We highly recommend to use Yarn when you think to contribute to this project.

```

npm install token-register
yarn add token-register

```

Examples
For more examples look at the examples/ directory.

-NOTE: the first step is you should include .env file and you project and add the following enviroment variable

```
  JWT_KEY= "YOUR PRIVATE KEY"
```

- The code example:
  Is necesary to introduce two params in the token function "uid" and "expireIn"

- expireIn: Expiration time for token
- uid: id or variable that you wants to encrypt

```
const { token, checkToken, validateToken } = require("token-register");

//generate token
const check = async () => {
try {
  // token(uid: string, expireIn: string);
  const res = await token("id4587445554", "2 days");
  console.log(res);
  return res;
} catch (error) {
  console.log(error);
}
};
console.log(check());

//check token
const checkingToken = async () => {
try {
  const { res } = token;
  const uid = await checkToken(res);
  //we return decrypted token
  return uid;
} catch (error) {
  console.log(error);
}
};

```

<h2>Contributing</h2>

- If the documentation is unclear or has a typo, please click on the page's Edit button (pencil icon) and suggest a correction. If you would like to help us fix a bug or add a new feature, please check our Contributing Guide. Pull requests are welcome!
