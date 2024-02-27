const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  const fetchPromise2 = fetch(
    //"https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
    "file://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found", // breaks the promise block
  );
  const fetchPromise3 = fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
  );
  
  Promise.all([fetchPromise1, fetchPromise2, fetchPromise3]) // requires all promises to resolve
    .then((responses) => {
      for (const response of responses) {
        console.log(`${response.url}: ${response.status}`);
      }
    })
    .catch((error) => {
        console.error(`Failed to fetch: ${error}`);
    });
  