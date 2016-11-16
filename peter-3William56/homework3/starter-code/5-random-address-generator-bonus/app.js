/*
Optional bonus work on conditionals and functions:

    Write a script that can generate random addresses
    As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name, and zip code
    Your script should randomly select one item from each of these arrays and then use them to construct a random address
    Each time you load or reload the page in a browser, your program should print a new randomly-generated address to the terminal. For example:
    
    34578 Dolphin Street, Wonka NY, 44506
*/



(function randomAddy() {
    var stNum = [1234, 5678, 91011, 1213, 1415];
    var stName = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo'];
    var city = ['Atlanta', 'Boston', 'Chicago', 'Denver', 'Eastleigh'];
    var state = ['AK', 'CA', 'IL', 'WA', 'TX'];
    var zip = [12345, 678910, 111213, 141516, 171819];
    
    stNum = stNum[Math.ceil(Math.random()*4)];
    stName = stName[Math.ceil(Math.random()*4)];
    city = city[Math.ceil(Math.random()*4)];
    state = state[Math.ceil(Math.random()*4)];
    zip = zip[Math.ceil(Math.random()*4)];
    console.log(stNum + " " + stName + ', ' + city + ' ' + state + ', ' + zip);
})();
//randomAddy();
//Immediately Invoking Function Expression, relates to local scope and reducing x-polluting the code: illustrated by Matt
