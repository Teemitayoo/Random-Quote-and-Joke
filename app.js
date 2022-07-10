const quoteText=document.querySelector(".quote");
const author=document.querySelector(".name");
const quoteBtn=document.getElementById("genquote");


const generateQuote= async()=>{
    const res=await fetch('https://type.fit/api/quotes');
    const quotes=await res.json()
    const dice=Math.floor(Math.random()*quotes.length);
    const pickedQuote=quotes[dice];
    const quote=pickedQuote.text;
    const authorName=pickedQuote.author;
    quoteText.innerText=quote;
    author.innerText=authorName;
    console.log(pickedQuote)

}
quoteBtn.addEventListener('click', generateQuote)

generateQuote()