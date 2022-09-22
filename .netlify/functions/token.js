const { default: axios } = require("axios")

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") return { statusCode: 405, body: "" }
  const body = JSON.parse(event.body)

  const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    method: "POST",
    params: {
      code: body.code,
      redirect_uri: process.env.REDIRECT_URI,
      grant_type: "authorization_code",
    },
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(
          process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET
        ).toString("base64"),
    },
    json: true,
  }
  console.log("KØRER NU TOKEN")

  // Await response from the axios request to the spotify api to get access token and refresh token
  try {
    var response = await axios(authOptions)
    return {
      statusCode: 201,
      body: JSON.stringify(response.data),
    }
  } catch (error) {
    // catch any errors and return them to the client
    //console.log(error)
    return {
      statusCode: 500,
      body: "internal server error",
    }
  }
}
