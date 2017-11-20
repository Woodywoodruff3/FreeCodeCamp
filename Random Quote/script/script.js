var quotes = [
    
            ["Do not take life too seriously. You will never get out alive.", "Elbert Hubbard"],
            ["I may be drunk, Miss, but in the morning I will be sober and you will still be ugly.", "Winston Churchill"],
            ["Age is something that doesn't matter, unless you are cheese.", "Luis Bunuel"],
            ["My fake plants died because I did not pretend to water them.", "Mitch Hedberg"],
            ["Always remember that you are absolutely unique. Just like everyone else.", "Margaret Mead"],
            ["A day without sunshine is like, you know, night.", "Steve Martin"],
            ["There are only three things women need in life: food, water, and compliments.", "Chris Rock"],
            ["People who think they know everything are a great annoyance to those of us who do.", "Isaac Asimov"],
            ["Behind every great man is a woman rolling her eyes.", "Jim Carrey"],
            ["I'm sorry, if you were right, I'd agree with you.", "Robin Williams"]
        ];
    
    
    function newQuote() {
    
     var randomNumber = Math.floor(Math.random() * (quotes.length));
     document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber][0];
     document.getElementById('authorDisplay').innerHTML = quotes[randomNumber][1];
    
    var tweet = document.getElementById('twitter');
    var address = "https://twitter.com/intent/tweet?text=";
    tweet.href = address + quotes[randomNumber][0] + " -" + quotes[randomNumber][1];
    }
    
    
    
    