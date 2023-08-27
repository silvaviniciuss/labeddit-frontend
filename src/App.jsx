import { GlobalStyle } from "@chakra-ui/react"
import { GlobalState } from "./contexts/GlobalState"
import { Router } from "./routes/Router"

function App() {
  return (
    <>
    <GlobalState>
      <GlobalStyle/>
      <Router />
    </GlobalState>
    </>
  )
}

export default App
