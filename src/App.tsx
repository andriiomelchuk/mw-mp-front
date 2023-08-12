import HomePage from "./pages/HomePage";

import { Suspense } from "react";

import PublicRoutes from './routes/PublicRoutes'
import PrivatRoutes from './routes/PrivateRoutes'

import Header from "./features/Header/Header";
import { AppStyles, Footer} from './App.styled'

const App = () => {
    return <>
        <AppStyles />

        <Header />

        < Suspense fallback={'Loading...'}>
            <PublicRoutes />
            {/*<PrivatRoutes />*/}
        </Suspense>

        <Footer>
            <div>AVO marketplace</div>
        </Footer>
    </>
}

export default App;