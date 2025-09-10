// Fetch API (API calls)
// fetch for sending/receiving resources
// uses Request and Repoinse objects
// fetch() method is used to fetch a resource, that returns a promise.
// fetch(API calls) will also get the data at runtime without reloading the page.
const url = "https://cataas.com/cat?json=true"; // URL (Upper case is a keyword in JS)

console.log("Getting cat picture without await");
let response = fetch(url);  // response will be Promise type
console.log(response);  // response will the represent the Promise object 

const getCatPic = async () => {
    console.log("Getting cat picture");
    let response = await fetch(url);  // response will be Promise type, by default fetch will create the GET request.
    console.log("Getting cat picture data");
    console.log(response);  // after await response will represent Response object
    console.log(response.status);  // just print the status
}

getCatPic();

// Understanding Terms
// Ajax is Asynchronous JS & XML
// JSON is JavaScript object Notation
// json() method returns a second Promis (First Promise will return by the fetch method) 
// with the result of Parsing the response body text as JSON (input will be JSON and output will be JS object)

const catsImage = document.querySelector("#cats_image");
const btnCats = document.querySelector("#btn_cat");

const getCatPicJson = async () => {
    console.log("Getting cat picture Json");
    let response = await fetch(url);  // response will be Promise type, by default fetch will create the GET request.
    console.log(response);  // after await response will represent Response object
    console.log(response.status);  // just print the status
    let data = await response.json();   // json method will return the Promise so used await.
    console.log("Getting cat picture JS object data");
    catsImage.src = data.url;
}


// can do same with Promise chaining

const getCatPicJsonPromiseChain = async () => {
    console.log("Getting cat picture Json Promise Chain");
    fetch(url).then((response) => {
        return response.json();
    }).then((response) => {
        console.log("Getting cat picture JS object data Promise Chain");
        catsImage.src = response.url;
    });
}

btnCats.addEventListener('click', () => {
    getCatPicJson();    // with async-await
    // getCatPicJsonPromiseChain(); // with Promise chain
});


