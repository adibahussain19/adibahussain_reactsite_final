import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import WritingPage from "./pages/WritingPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import RootLayout from "./pages/Root.jsx";

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {path: '/projects', element: <ProjectsPage/>},
        {path: '/writing', element: <WritingPage/>},
        {path: '/', element: <HomePage/>},

      ]
    }
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

function App() {
    return (
      <RouterProvider 
        router={router} 
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      />
    );
}

export default App;
