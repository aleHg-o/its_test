
async function exampleFetch() {
    const response = await fetch('https://raw.githubusercontent.com/dariusk/corpora/master/data/technology/programming_languages_popular.json');
    const json = await response.json();
    console.log(json);

   let d = document.querySelectorAll('.second');
   d.forEach(function (d) {
   
    d.classList.remove('second');

    let link = d.querySelectorAll('a');
    link.forEach(function (link) {
    link.remove();
    });
});




let a = document.getElementsByClassName("item_text");
for (let i = 0; i < a.length; i++) 
 {
         a[i].textContent = json.programming_languages_popular[i];

        let urlWikipedia = 'https://it.wikipedia.org/wiki/' + json.programming_languages_popular[i];
         a[i].innerHTML = `<a href="${urlWikipedia}" target="_blank">${json.programming_languages_popular[i]}</a>`;
     
 }
}

let imagine = document.getElementsByClassName("eltdf-normal-logo")[0];
imagine.src="https://cdn.knoji.com/images/logo/w3schools.jpg?fit=contain&trim=true&flatten=true&extend=25&width=1200&height=630";

exampleFetch()

