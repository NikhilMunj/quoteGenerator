/******************************************
 * The below script generates random quotes when the user click the Next Quote button
*****************************************/

/*** 
 * `quotes` array 
***/
 var quotes = [];
 var quoteObject1 = 
{quote: 'When there is no envy, jealousy, comparison, and competition within you, you can focus your full capabilities on doing what is needed.When there is no envy, jealousy, comparison, and competition within you, you can focus your full capabilities on doing what is needed.'
,source: 'Sadhguru'
,citaion: 'isha.sadhguru.org'
,year: '2022'};
var quoteObject2 =
{quote: "“People throw stones at you and you convert them into milestones."
,source: "Sachin Tendulkar"
,citaion: "Playing it my way(Autobiography)"
,year: "2015"};
var quoteObject3 =
{quote: "Only when you are ignorant of your Original Nature, do other people’s opinions become important."
,source: "Sadhguru"
,citaion: "isha.sadhguru.org"
,year: "2022"};
var quoteObject4 =
{quote: "Do not try to please anyone. If you are truly Joyful and an overflow of Humanity, everyone will be pleased with you."
,source: "Sadhguru"
,citaion: "isha.sadhguru.org"
,year: "2022"};
var quoteObject5 =
{quote: "For the health of the economy, we compromise the health of human beings. It is time we let consciousness guide our lives."
,source: "Sadhguru"
,citaion: "isha.sadhguru.org"
,year: "2022"};

//Add the individual quoteObjects in the quotes array.
quotes.push(quoteObject1);
quotes.push(quoteObject2);
quotes.push(quoteObject3);
quotes.push(quoteObject4);
quotes.push(quoteObject5);

//Get the quotes array size
let quoteLength = quotes.length;

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
    // 1. Create a variable that generates a random number
    // 2. Use the random number variable and bracket notation
    var randomNumber = Math.floor(Math.random()*(quoteLength));
    // 2. Use the random number variable and bracket notation
    // to grab a random object from the `quotes` array, and
    // store it in a variable
    //
    var randomQuote1 = quotes[randomNumber];
    // 3. Return the variable storing the random quote object
    return randomQuote1;
}
/***
 * `printQuote` function
***/
function printQuote() {
    // 1. Create a variable that calls the getRandomQuote()
    // function
    var randomQuote = getRandomQuote();
    //console.log(randomQuote);
    //console.log(randomQuote.source);
    //console.log(randomQuote.year);
    // 2. Create a variable that initiates your HTML string with
    // the first two <p></p> elements, their classNames,
    // and the quote and source properties, but leave off
    // the second closing `</p>` tag for now
    var htmlQuote = "<p class ='quote'>" + randomQuote.quote ;
    +"</p>";
    htmlQuote +="<p class ='source'>"+ randomQuote.source ;
    // 3. Use an if statement to check if the citation property
    // exists, and if it does, concatenate a <span></span>
    // element, appropriate className, and citation property
    // to the HTML string
    if(randomQuote.citaion){
        htmlQuote +="<span class='citation'>"+ randomQuote.citaion
        +"</span>" ;
        //+"</p><br>";
    }
    // 4. Use an if statement to check of the year property exists,
    // and if it does, concatenate a <span></span> element,
    // appropriate className, and year property to the HTML
    //string
    if(randomQuote.year){
        htmlQuote +="<span class='year'>"+ randomQuote.year
        +"</span>" ;
    }
    // 5. After the two if statements, concatenate the closing </p>
    // tag to the HTML string
    htmlQuote += "</p>";
    // 6. set the innerHTML of the quote-box div to equal the
    // complete HTML string}
    //console.log(htmlQuote);
    document.getElementById('quote-box').innerHTML=htmlQuote;
}

/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/
document.getElementById('load-quote').addEventListener("click",printQuote);