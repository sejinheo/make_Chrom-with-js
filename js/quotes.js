const quotes = [
    {
        quote: "Today's me is tomorrow's me.",
        author: "Heo Se-jin",
    },
    {
        quote: "Soccer is simple. But it is the hardest to do it simply.",
        author: "Johan Cruyff",
    },
    {
        quote: "The moment I cross the limit, I really start.",
        author: "Usain Bolt",
    },
    {
        quote: "One thing changes a person.",
        author: "Park Sae-ro-yi",
    },
    {
        quote: "It ain’t over till it’s over.",
        author: "Heo Se-jin",
    },
    {
        quote: "Sweaty uniform, that's all I can show you.",
        author: "Paul Scholes",
    },
    {
        quote: "Success belongs to the most persistent.",
        author: "Napoleon",
    },
    {
        quote: "Fear is a sign of growth.",
        author: "David Goggins",
    },
    {
        quote: "I prove to those who doubt me.",
        author: "Cristiano Ronaldo",
    },
    {
        quote: "Business should be based on trust.",
        author: "Park Sae-ro-yi",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;