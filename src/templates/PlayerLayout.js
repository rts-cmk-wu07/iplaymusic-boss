import { useContext, useState, useEffect } from "react"

import Player from "./Player"
import PlayerContext from "../contexts/PlayerContext"
import TokenContext from "../contexts/TokenContext"
import { default as refreshTokenFunction } from "../functions/refreshToken"

const PlayerLayout = ({ children }) => {
  const [tokenData, setTokenData] = useState({
    accessToken: "",
    refreshToken: "",
    expiredDate: null,
  })
  const { accessToken } = tokenData

  useEffect(() => {
    refreshTokenFunction(setTokenData)
  }, [])

  return (
    <>
      <TokenContext.Provider value={{ tokenData, setTokenData }}>
        {children}
        {accessToken && <Player />}
      </TokenContext.Provider>
    </>
  )
}

export default PlayerLayout
