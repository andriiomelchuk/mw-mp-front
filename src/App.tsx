import HomePage from "./pages/HomePage";

import { Suspense } from "react";

import PublicRoutes from './routes/PublicRoutes'
import PrivatRoutes from './routes/PrivateRoutes'

const App = () => {
    return (
        < Suspense fallback={'Loading...'}>
            <PublicRoutes />
            <PrivatRoutes />
        </Suspense>
    )
}

export default App;