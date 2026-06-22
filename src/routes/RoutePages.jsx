
import { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import routesConfig from "./routesConfig";
import PageWrapper from "./PageWrapper";

function RoutePages() {
  const location = useLocation();

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <AnimatePresence mode="wait">
        <Routes
          location={location}
          key={location.pathname}
        >
          {routesConfig.map((route) => {
            const Component = route.element;

            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <PageWrapper>
                    <Component />
                  </PageWrapper>
                }
              />
            );
          })}
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default RoutePages;












// import { lazy, Suspense } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import PageTransition from "../utils/PageTransition";
// const Checkpage = lazy(() => import("../pages/Checkpage"));
// const Dashboard = lazy(() => import("../pages/Dashboard"));
// const LoginPage = lazy(() => import("../pages/LoginPage"));


// function RoutePages() { 
//     return (
//  <Suspense fallback={<h2>Loading...</h2>}>
//         <AnimatePresence mode="wait">
//           <Routes
//             location={location}
//             key={location.pathname}
//                 >
//                     <Route path="/" element={<PageTransition>
//                     <Dashboard />
//                     </PageTransition>} />
//             {/* <Route
//               path="/"
//               element={
//                 <PageTransition>
//                   <Checkpage />
//                 </PageTransition>
//               }
//             /> */}

//             <Route
//               path="/login"
//               element={
//                 <PageTransition>
//                   <LoginPage />
//                 </PageTransition>
//               }
//             />
//           </Routes>
//         </AnimatePresence>
//       </Suspense>
//     );
// }

// export default RoutePages;