import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  AgreePage,
  BookmarkPage,
  CardCollectionPage,
  CategoryPage,
  DeletePage,
  // EmailAuthenticationPage,
  // EmailConfirmPage,
  Error404Page,
  LoginPage,
  MainPage,
  MyPage,
  UserInfoPage,
  UserProfilePage,
  VotePage,
} from "./@components";
import JoinPage from "./@components/JoinPage";
import { routePaths } from "./core/routes/path";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={routePaths.Main}
          element={PublicRoute({ Component: <MainPage /> })}
        />
        <Route
          path={routePaths.Login}
          element={PublicRoute({ Component: <LoginPage />, restricted: true })}
        />
        <Route
          path={routePaths.Category}
          element={PublicRoute({ Component: <CategoryPage /> })}
        />
        <Route
          path={routePaths.CardCollection}
          element={PublicRoute({ Component: <CardCollectionPage /> })}
        />
        <Route
          path={`${routePaths.Vote}${routePaths.VoteId}`}
          element={PublicRoute({ Component: <VotePage /> })}
        />
        <Route
          path={routePaths.MyPage}
          element={PrivateRoute({ Component: <MyPage /> })}
        />
        <Route
          path={routePaths.BookmarkPage}
          element={PublicRoute({ Component: <BookmarkPage /> })}
        />
        <Route
          path={routePaths.Delete}
          element={PrivateRoute({ Component: <DeletePage /> })}
        />
        <Route
          path={`${routePaths.Join_}*`}
          element={PublicRoute({ Component: <JoinPage />, restricted: true })}
        >
          <Route path={routePaths.Join_Agree} element={<AgreePage />} />
          {/* <Route path={routePaths.Join_EmailAuthentication} element={<EmailAuthenticationPage />} />
          <Route path={routePaths.Join_EmailConfirm} element={<EmailConfirmPage />} /> */}
          <Route
            path={routePaths.Join_UserProfile}
            element={<UserProfilePage />}
          />
          <Route path={routePaths.Join_UserInfo} element={<UserInfoPage />} />
          <Route path="*" element={<Error404Page />} />
        </Route>
        <Route
          path="*"
          element={PublicRoute({ Component: <Error404Page /> })}
        />
      </Routes>
    </BrowserRouter>
  );
}

interface PublicRouteProps {
  Component: JSX.Element;
  restricted?: boolean;
}
type PrivateRouteProps = Omit<PublicRouteProps, "restricted">;

const PublicRoute = ({ Component, restricted = false }: PublicRouteProps) => {
  const isLogined = localStorage.getItem("piickle-token");
  return isLogined && restricted ? <MainPage /> : Component;
};
const PrivateRoute = ({ Component }: PrivateRouteProps) => {
  const isLogined = localStorage.getItem("piickle-token");
  return isLogined ? Component : <LoginPage />;
};
