import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  SignUpPage,
  LoginPage,
  HomePage,
  ListsPage,
  ProfilePage,
  InboxPage,
  PropertyDetailPag,
} from "./routes/Routes.js";

import { ThemeProvider } from "styled-components";
import theme from "./styles/themes.js";
import GlobalStyle from "./styles/global.js";
import {
  AgentAccountSetUpPag,
  AgentAddRoomPag,
  AgentFindPaymentDetailPag,
  AgentSinglePropertyDetailPag,
  AgentUserPaymentDetailPag,
  AllPropertyPag,
  DashboardPag,
  ListPropertyFormPag,
  WithdrawPag,
} from "./routes/AgentRoutes.js";
import MainLayOut from "./pages/layout/MainLayOut.jsx";
// import AgentDashboardLayOut from "./pages/Layout/agentDashboardLayOut.jsx";
import { AppProvider } from "./context/HeaderContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/lists",
        element: <ListsPage />,
      },
      {
        path: "/property/:id",
        element: <PropertyDetailPag />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/messages",
        element: <InboxPage />,
      },
      {
        path: "/inbox",
        element: <InboxPage />,
      },
      {
        path: "/agentAccountSetUp",
        element: <AgentAccountSetUpPag />,
      },
      {
        path: "/register",
        element: <SignUpPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },

      // agent
      {
        path: "agentDashboard/dashboard",
        element: <DashboardPag />,
      },

      {
        path: "agentDashboard/allProperty",
        element: <AllPropertyPag />,
      },

      {
        path: "agentDashboard/listPropertyForm",
        element: <ListPropertyFormPag />,
      },

      {
        path: "agentDashboard/withdraw",
        element: <WithdrawPag />,
      },

      {
        path: "addRoom/:propertyId",
        element: <AgentAddRoomPag />,
      },

      // for a property occupant list
      {
        path: "agentSinglePropertyDetail/:propertyId",
        element: <AgentSinglePropertyDetailPag />,
      },
      // find payment
      {
        path: "agent/findPaymentDetail",
        element: <AgentFindPaymentDetailPag />,
      },
      {
        path: "agentUserPaymentDetail/:userId",
        element: <AgentUserPaymentDetailPag />,
      },
    ],
  },
]);

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
