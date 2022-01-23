const quotes = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    author: " - Oscar Wilde",
  },
  {
    quote: "“You only live once, but if you do it right, once is enough.”",
    author: " - Mae West",
  },
  {
    quote: "“Be the change that you wish to see in the world.”",
    author: " - Mahatma Gandhi",
  },
  {
    quote:
      "“In three words I can sum up everything I've learned about life: it goes on.”",
    author: " - Robert Frost",
  },
  {
    quote: "“Always forgive your enemies; nothing annoys them so much.”",
    author: " - Oscar Wilde",
  },
  {
    quote:
      "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    author: " - Mahatma Gandhi",
  },
  {
    quote: "“Without music, life would be a mistake.”",
    author: " - Friedrich Nietzsche, Twilight of the Idols",
  },
  {
    quote:
      "“It is better to be hated for what you are than to be loved for what you are not.”",
    author: " - Andre Gide, Autumn Leaves",
  },
  {
    quote:
      "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    author: " - Dr. Seuss",
  },
  {
    quote:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    author: " - Bernard M. Baruch",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
