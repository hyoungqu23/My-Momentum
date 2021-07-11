const quotes = [
  {
    quote: '“It’s not a bug. It’s an undocumented feature!”',
    author: 'Anonymous',
  },
  {
    quote: '“A website without visitors is like a ship lost in the horizon.”',
    author: 'Dr. Christopher Dayagdag',
  },
  {
    quote: '“If debugging is the process of removing software bugs, then programming must be the process of putting them in”',
    author: 'Edsger Dijkstra',
  },
  {
    quote: '“If you think math is hard, try web design.”',
    author: 'Trish Parr',
  },
  {
    quote: '“What separates design from art is that design is meant to be… functional.”',
    author: 'Cameron Moll',
  },
  {
    quote: '“A user interface is like a joke. If you have to explain it, it’s not that good.”',
    author: 'Unknown',
  },
  {
    quote: '“I don’t care if it works on your machine! We are not shipping your machine!”',
    author: 'Vidiu Platon',
  },
  {
    quote: '“The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with. The new becomes threatening, the old reassuring.”',
    author: 'Paul Rand',
  },
  {
    quote: '“Measuring programming progress by lines of code is like measuring aircraft building progress by weight.”',
    author: 'Bill Gates',
  },
  {
    quote: '“Great web design without functionality is like a sports car with no engine.”',
    author: 'Paul Cookson',
  },
  {
    quote: '“My code DOESN’T work, I have no idea why. My code WORKS, I have no idea why.”',
    author: 'Anonymous',
  },
  {
    quote: '“A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.”',
    author: 'Antoine de Saint-Exupéry',
  },
  {
    quote: '“Things aren’t always #000000 and #FFFFFF”',
    author: 'HTML Proverb',
  },
  {
    quote: '“Intuitive design is how we give the user new superpowers.”',
    author: 'Jared Spool',
  },
  {
    quote: '“One man’s crappy software is another man’s full time job.”',
    author: 'Jessica Gaston',
  },
  {
    quote: '“Digital design is like painting, except the paint never dries.”',
    author: ' Neville Brody',
  },
  {
    quote: '“Software undergoes beta testing shortly before it’s released. Beta is Latin for ‘still doesn’t work.’”',
    author: 'Unknown',
  },
  {
    quote: '“Talk is cheap. Show me the code.”',
    author: 'Linus Torvalds',
  },
  {
    quote: '“If Internet Explorer is brave enough to ask to be your default browser, You are brave enough to ask that girl out.”',
    author: 'Anonymous',
  },
  {
    quote: '“If at first you don’t succeed; call it version 1.0”',
    author: 'Unknown',
  },
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todayQuote = quotes[Math.floor(Math.random() * (quotes.length))];

quote.innerText = `${todayQuote.quote}`
author.innerText = `
by. ${todayQuote.author}`