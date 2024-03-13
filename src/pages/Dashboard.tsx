import { BsSearch } from "react-icons/bs";
import AdminSidebar from "../components/AdminSidebar";
import { FaRegBell } from "react-icons/fa";
import user from "../assests/user-picture.png";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from "../assests/data.json";
import { BarChart, DoughNutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";

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
            <BarChart
              data_1={[300, 56, 535, 345, 345, 545]}
              data_2={[300, 56, 535, 345, 345, 689]}
              bgColor_1="red"
              bgColor_2="green"
              title_1="How"
              title_2="fsgd"
              // horizontal={true}
            />
          </div>
          <div className="dashboardCategories">
            <h2>Inventory</h2>
            <div>
              {data.categories.map((ele, i) => (
                <CategoryItem
                  key={`${Date.now()}+${i}`}
                  heading={ele.heading}
                  value={ele.value}
                  color={`hsl(${ele.value},${ele.value}%,50%)`}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="transaction-container">
          <div className="gender-chart">
            <h2>Gender Ratio</h2>
            {/* Chart */}
            <DoughNutChart
              labels={["Female", "Male"]}
              data={[12, 19]}
              backgroundColor={["hsl(340,82%,56%)", "hsl(53,162,235,0.8)"]}
              cutout={90}
            />
            <p>
              <BiMaleFemale />
            </p>
          </div>
          {/* Table */}
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
    <span>{value}%</span>
  </div>
);

export default Dashboard;
