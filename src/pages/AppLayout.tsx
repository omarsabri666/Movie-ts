import { Outlet } from "react-router";
import Header from "../componots/Header";
import { Suspense } from "react";
import Loader from "../componots/Loader";

function AppLayout() {
    return (
      <div>
        <div className="  max-w-5xl mx-auto">
          <Header />
          <div className="">
            <Suspense

              fallback={
                <div className=" flex justify-center items-center">
                  <Loader />
                </div>
              }
            >
              <Outlet />
            </Suspense>
          </div>
        </div>
      </div>
    );
}

export default AppLayout
