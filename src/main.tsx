import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {Provider as StoreProvider} from "react-redux";
import {store} from "./store/store.tsx";

createRoot(document.getElementById('root')!).render(
    <StoreProvider store={store}>
        <App />
    </StoreProvider>
)
