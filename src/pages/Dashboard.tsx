import { BsSearch } from "react-icons/bs";
import AdminSidebar from "../components/AdminSidebar";
import { FaRegBell } from "react-icons/fa";
import user from "../assests/user-picture.png";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";

const Dashboard = () => {
  return (
    <div className="adminContainer">
      {/* SideBar */}
      <AdminSidebar />
      {/* Main */}
      <main className="dashboard">
        <div className="bar">
          <label htmlFor="input">
            <BsSearch />
          </label>
          <input
            type="text"
            id="input"
            placeholder="Search for data, users,docs"
          />
          <FaRegBell />
          {/* Account holder's image */}
          <img src={user} alt="image" />
        </div>
        <section className="widgetContainer">
          <WidgetItem
            heading="Yellow"
            value={250000}
            percent={54}
            color={"green"}
            amount={true}
          />
          <WidgetItem
            heading="Yellow"
            value={25000}
            percent={84}
            color={"blue"}
            amount={true}
          />
          <WidgetItem
            heading="Yellow"
            value={25000000}
            percent={-94}
            color={"Red"}
            amount={true}
          />
        </section>
        <section className="graphContianer">
          <div className="revenueChart">
            <h2>Revenue & Transaction</h2>
            {/* Graph Here */}
          </div>
          <div className="dashboardCategories">
            <h2>Inventory</h2>
            <div>
              <CategoryItem heading="Laptops" value={70} color="red" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount,
}: WidgetItemProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : `${value}`}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp /> + {percent}%
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> {percent}%
        </span>
      )}
    </div>
    <div
      className="widgetcircle"
      style={{
        background: `conic-Gradient(${color} ${
          Math.abs(percent / 100) * 360
        }deg, rgb(255,255,255) 0)`,
      }}
    >
      <span style={{ color }}>{percent}%</span>
    </div>
  </article>
);

interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}

const CategoryItem = ({ color, value, heading }: CategoryItemProps) => (
  <div className="categoryItem">
    <h5>{heading}</h5>
    <div>
      <div style={{ background: color, width: `${value}%` }}></div>
    </div>
    <span>{value}</span>
  </div>
);

export default Dashboard;
