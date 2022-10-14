//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
//domainName("http://github.com/carbonfive/raygun") == "github" 
//domainName("http://www.zombie-bites.com") == "zombie-bites"
//domainName("https://www.cnet.com") == "cnet

function parseURL(urlString)
{
    let domainString = urlString.replace("https://www.", "").replace("http://www.", "").replace("https://", "").replace("http://", "").split(".com")[0]
    console.log(domainString)
}

parseURL("http://github.com/carbonfive/raygun")
parseURL("http://www.zombie-bites.com")
parseURL("https://www.cnet.com")
