const baseURL = "https://portfolioapi-gsh3.onrender.com/"
  // import.meta.env.VITE_SERVER_URL

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

// export function getData(category = "tents") {
//   return fetch(`../json/${category}.json`)
//     .then(convertToJson)
//     .then((data) => data);
// }

export async function findProductById(id) {
  const response = await fetch(baseURL + `product/${id}`);
  const product = await convertToJson(response);
  return product.Result;
  
}

export async function getGameById(id){
  const response = await fetch(baseURL + `game/${id}`);
  const game = await convertToJson(response)
  return game
}

export async function getGameById2(id){
  const response = await fetch(baseURL + `game/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch game file.');
  }



  // Convert the response to blob format
  const gameBlob = await response.blob();

  // Create an object URL from the blob
  const gameURL = URL.createObjectURL(gameBlob);
  return gameURL
}

export async function getGameSWFFileData(gameId) {
  try {
    const response = await fetch(`https://portfolioapi-gsh3.onrender.com/game/${gameId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/x-shockwave-flash',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch the game SWF file.');
    }

    return await response.arrayBuffer();
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch the game SWF file.');
  }
}


export async function getGraphicDesignById(id){
  const response = await fetch(baseURL + `graphicDesign/${id}`);
  const graphic = await convertToJson(response)
  return graphic
}

export async function getData(category) {
  // console.log(baseURL)
  const response = await fetch(baseURL + `${category}`);
  console.log(response)
  const data = await convertToJson(response);
  return data;
}

export async function loginRequest(user) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };
  const response = await fetch(baseURL + "login", options).then(convertToJson);
  return response.accessToken;
}

export async function getOrders(token) {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(baseURL + "orders", options).then(convertToJson);
  return response;
}