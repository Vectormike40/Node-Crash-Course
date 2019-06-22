const url = require('url');

const myUrl = new URL('https://www.facebook.com/messages/t/100007851918622');

// Serialize url
console.log(myUrl.href);

// Host (root domain)
console.log(myUrl.host);

// Hostname 
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname)

// Serialized query
console.log(myUrl.searchParams)