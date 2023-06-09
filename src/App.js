import { useReducer } from "react";
import { initialState, playerReducer } from "components/context/playerReducer";
import {
  PlayerContext,
  PlayerDispatchContext,
} from "components/context/playerContext";
import { ThemeProvider } from "styled-components";
import { SkeletonTheme } from "react-loading-skeleton";
import { ToastContainer } from "react-toastify";
import { theme } from "styles/Theme";
import Home from "pages/Home";
import { GlobalStyles } from "styles/Global";

// Import Skeleton
import "react-loading-skeleton/dist/skeleton.css";

// Import react tostify css
import "react-toastify/dist/ReactToastify.css";

// Import rc-slider css
import "rc-slider/assets/index.css";
import { Route, Routes } from "react-router-dom";
import Search from "pages/Search";
import Layout from "components/Layout";
import Error from "pages/Error";

function App() {
  const [state, dispatch] = useReducer(playerReducer, initialState);

  return (
    <PlayerContext.Provider value={state}>
      <PlayerDispatchContext.Provider value={dispatch}>
        <ThemeProvider theme={theme}>
          <SkeletonTheme
            baseColor={theme.colors.secondaryBlack}
            highlightColor={theme.colors.lightWhite}
          >
            <GlobalStyles />
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />}></Route>
                <Route path="search" element={<Search />}></Route>
                <Route path="*" element={<Error />}></Route>
              </Route>
            </Routes>

            <ToastContainer
              position="bottom-left"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </SkeletonTheme>
        </ThemeProvider>
      </PlayerDispatchContext.Provider>
    </PlayerContext.Provider>
  );
}

export default App;
