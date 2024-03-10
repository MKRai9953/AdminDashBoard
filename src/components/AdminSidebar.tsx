import { IconType } from "react-icons";
import { AiFillFileText } from "react-icons/ai";
import {
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaGamepad,
  FaStopwatch,
} from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import {
  RiCoupon3Fill,
  RiDashboardFill,
  RiShoppingBag3Fill,
} from "react-icons/ri";
import { Link, Location, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  // const navigate = useNavigate();
  const location = useLocation();

  //Array to map on  the sidebar items.
  const menuItems = [
    {
      url: "/admin/dashBoard",
      text: "DashBoard",
      Icon: RiDashboardFill,
    },
    {
      url: "/admin/products",
      text: "Product",
      Icon: RiShoppingBag3Fill,
    },
    {
      url: "/admin/customers",
      text: "Customer",
      Icon: AiFillFileText,
    },
    {
      url: "/admin/transactions",
      text: "Transaction",
      Icon: IoIosPeople,
    },
  ];
  // Array chartItems in Navbar
  const chartItems = [
    {
      url: "/admin/chat/bar",
      text: "Bar",
      Icon: FaChartBar,
    },
    {
      url: "/admin/chat/pie",
      text: "Pie",
      Icon: FaChartPie,
    },
    {
      url: "/admin/chat/line",
      text: "Line",
      Icon: FaChartLine,
    },
  ];

  // Array for App items
  const appItems = [
    {
      url: "/admin/app/stopwatch",
      text: "StopWatch",
      Icon: FaStopwatch,
    },
    {
      url: "/admin/app/coupon",
      text: "Coupon",
      Icon: RiCoupon3Fill,
    },
    {
      url: "/admin/app/game",
      text: "Game",
      Icon: FaGamepad,
    },
  ];
  function Charts() {
    return (
      <div>
        <h5>Charts</h5>
        <ul>
          {chartItems.map((item, index) => (
            <Li
              key={index}
              url={item.url}
              text={item.text}
              Icon={item.Icon}
              location={location}
            />
          ))}
        </ul>
      </div>
    );
  }

  function Dashboard() {
    return (
      <div>
        <h5>DashBoard</h5>
        <ul>
          {menuItems.map((item, index) => (
            <Li
              key={index}
              url={item.url}
              text={item.text}
              Icon={item.Icon}
              location={location}
            />
          ))}
        </ul>
      </div>
    );
  }

  function AppItems() {
    return (
      <div>
        <h5>App</h5>
        <ul>
          {appItems.map((item, index) => (
            <Li
              key={index}
              url={item.url}
              text={item.text}
              Icon={item.Icon}
              location={location}
            />
          ))}
        </ul>
      </div>
    );
  }
  return (
    <aside>
      <h2>LOGO.</h2>
      <Dashboard />
      <Charts />
      <AppItems />
    </aside>
  );
};

interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}

const Li = ({ url, text, location, Icon }: LiProps) => (
  <li
    style={{
      background: location.pathname.includes(url)
        ? "rgba(0,115,255,0.1)"
        : "#fff",
    }}
  >
    <Link to={url}>
      <Icon />
      {text}
    </Link>
  </li>
);

export default AdminSidebar;
