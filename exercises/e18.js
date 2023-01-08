import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  const yearlyRepetitions = {};

  data.asteroids
    .map((asteroid) => asteroid.discoveryYear)
    .map((year) => {
      yearlyRepetitions[year] = yearlyRepetitions[year] + 1 || 1;
    }); 

    let mostFrequent = 0;
    for( let year in yearlyRepetitions) {
      if( yearlyRepetitions[year] > mostFrequent) {
        mostFrequent = yearlyRepetitions[year];
      }
    }

    let mostDiscovered = Number(Object.keys(yearlyRepetitions)
      .find(key => yearlyRepetitions[key] === mostFrequent));
    
    return mostDiscovered;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
