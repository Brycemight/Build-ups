function generate(){
    var quotes = {
       "- Bob Dylan":"No one is free, even the birds are chained to the sky.",
       "- Cesare Pavese" : "We do not remember days, we remember moments.",
      "- Lao Tzu": "Life is a series of natural and spontaneous changes. Don't resist them - that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.",
      "- Snoop Dogg": "If the ride is more fly, then you must buy.",
      "- J.Cole" : "I've always been an underdog. I feel like I beat the odds."
    }

    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
 
}