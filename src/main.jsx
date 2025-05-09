import {StrictMode} from "react"
import {createRoot} from "react-dom/client"
import "./style.css"
import TestAPIKey from "./App.jsx"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <TestAPIKey/>
    </StrictMode>,
)
