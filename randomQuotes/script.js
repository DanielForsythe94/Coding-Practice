function generateNewQuote(){
    let quotes = {
        "- C.S. Lewis" :"I was not born to be free---I was born to adore and obey.",
        "- God" : "Let there be light.",
        "- Dan" : "You're a nice lady.",
        "- Chelley" : "Where's the dhog?",
        "- Dhog" : "Bark.",
        "- Mark" : "Deez nuts."
    }

    let authors = Object.keys(quotes);

    let author = authors[Math.floor(Math.random() * authors.length)];

    let quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    
    document.getElementById("author").innerHTML = author;
}