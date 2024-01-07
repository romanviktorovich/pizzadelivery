import { Outlet } from "react-router-dom";
import cls from "./MainLayout.module.scss";

const MainLayout = () => {
  return (
    <div id="app" className="app">
      <p>Header</p>

      <main className={cls.main}>
        <div className="cls.container">
          <div className="cls.body">
            <p>Navbar</p>

            <Outlet />
          </div>
        </div>
      </main>

      <p>Footer</p>
    </div>
  );
};

export { MainLayout };
