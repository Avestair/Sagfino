import Loading from "./Loading";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { CheckboxProvider } from "../contexts/CheckboxContext";
import { RecommendedProvider } from "../contexts/RecommendedContext";
import { FilterProvider } from "../contexts/FilterContext";
import { Toaster } from "react-hot-toast";
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      <RecommendedProvider>
        <FilterProvider>
          <CheckboxProvider>
            <div className="grid">
              {isLoading && <Loading />}

              <div className="">
                <main className="mx-auto">
                  <Outlet />
                </main>
              </div>
              <Footer />
            </div>
          </CheckboxProvider>
        </FilterProvider>
      </RecommendedProvider>
      <Toaster />
    </>
  );
}

export default AppLayout;
