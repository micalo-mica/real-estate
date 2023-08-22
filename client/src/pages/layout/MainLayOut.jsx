import { Outlet } from "react-router-dom";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import styled from "styled-components";
import Submenu from "../../components/Layout/Submenu";
import Sidebar from "../../components/Layout/Sidebar";

const M = styled.div``;

const MainLayOut = () => {
  return (
    <M>
      {/* <QueryClientProvider client={queryClient}> */}
      <Header />
      <Sidebar />
      <Submenu />
      <Outlet />
      {/* <Footer /> */}
      {/* </QueryClientProvider> */}
    </M>
  );
};

export default MainLayOut;
