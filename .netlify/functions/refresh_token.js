const axios = require("axios")

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") return { statusCode: 405, body: "" }
  const body = JSON.parse(event.body)
  // console.log(body.refreshToken);
  const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    method: "POST",
    params: {
      refresh_token: body.refresh_token,
      grant_type: "refresh_token",
    },
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(
          process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET
        ).toString("base64"),
    },
  }
  console.log("KØRER NU REFRESH")
  try {
    var response = await axios(authOptions)
    return {
      statusCode: 201,
      body: JSON.stringify(response.data),
    }
  } catch (error) {
    // catch any errors and return them to the client
    console.log(error)
    return {
      statusCode: 500,
      body: "internal server error",
    }
  }
}
