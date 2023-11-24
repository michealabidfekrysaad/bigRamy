import "./App.css";
import { Route, Routes } from "react-router-dom";
import { LoggedInUserRoute, PrivateRoute } from "./routes/routes";
import { PATH_PAGE } from "./routes/paths";
import { MainLayout } from "./layouts/Layouts";
import { Login } from "./pages/login/Login";
import { BookDetails } from "./pages/bookdetails/BookDetails";
import { Books } from "./pages/books/Books";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoggedInUserRoute />}>
          <Route path={PATH_PAGE.login} element={<Login />} />
        </Route>

        <Route path="/" element={<PrivateRoute />}>
          <Route
            path={PATH_PAGE.books}
            element={
              <MainLayout>
                <Books />
              </MainLayout>
            }
          />
          <Route
            path={PATH_PAGE.booksDetails}
            element={
              <MainLayout>
                <BookDetails />
              </MainLayout>
            }
          />
          <Route path="*" element={<h1>not found page</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
