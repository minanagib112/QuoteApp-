var quoteArray = [
  {
    quote:
      "The best way to find yourself is to lose yourself in the service of others.",
    author: "--Mahatma Gandhi",
  },
  {
    quote:
      "The greatest glory in life is not in never falling, but in rising every time we fall.",
    author: "--Nelson Mandela",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "--Steve Jobs",
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor.",
    author: "--Eleanor Roosevelt",
  },
  {
    quote:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "--Oprah Winfrey",
  },
  {
    quote:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "--James Cameron",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "--John Lennon",
  },
];

var quote = document.getElementById("quote");
var author = document.getElementById("author");
var lastIndex = -1;

function getQuote() {
  var randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quoteArray.length);
  } while (randomIndex === lastIndex);
  lastIndex = randomIndex;
  quote.innerHTML = quoteArray[randomIndex].quote;
  author.innerHTML = quoteArray[randomIndex].author;
}
