// fn URL string -> string just domain name
// always .com  always  // maybe www.

// http://github.com -> github
// https://www.code.com -> code

// find in str ".com" & remove

// check if str contains www.; if so remove that and before it

// if not check :// remove that and all before

function domainName(url) {
  // remove ending of URL
  let domain = url.replace("http://", "");
  domain = domain.replace("https://", "");
  domain = domain.replace("www.", "");
  // return only portion before TLD
  return domain.split(".")[0];
}

console.log(domainName("http://github.com")); // -> github
console.log(domainName("https://www.code.com")); // ->  -> code
