async function printTheResponse(){

    const GIPHY_PI_KEY = "API KEY";
    const inputValue = 'cats'

    const response = await fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=${GIPHY_PI_KEY}&s=${inputValue}`
      );

      console.log(await response.json())
}

printTheResponse()