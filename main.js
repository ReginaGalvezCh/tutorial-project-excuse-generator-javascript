window.onload = function () {
    // who, what and when to create an excuse   
    let so = ['You may not believe me, but the truth is ']
    let who = ['the dog', 'my granma', 'his turtle', 'my bird'];
    let how = ['eat', 'pissed', 'crushed', 'broked'];
    let what = ['my homework', 'internet', 'cell phone', 'computer'];
    let when = ['before the class', 'right in time', 'when I finished', 'during my lunch', 'while I was praying'];
    //  variables
    let guessWho = Math.floor((Math.random() * who.length));
    let guessHow = Math.floor((Math.random() * how.length))
    let guessWhat = Math.floor((Math.random() * what.length));
    let guessWhen = Math.floor((Math.random() * when.length));


    //sentence
    document.querySelector('#scusi').innerHTML = so + who[guessWho] + ' ' + how[guessHow] + ' ' + what[guessWhat] + ' ' + when[guessWhen];

}