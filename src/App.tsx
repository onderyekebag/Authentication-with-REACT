import Loading from "./layouts/loading.tsx";
import AppRouter from "./router/app-router.tsx";

function App() {

    const loading = false;

    return loading ? <Loading /> : <AppRouter />
}

export default App
