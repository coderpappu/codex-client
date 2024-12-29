import { useEffect } from "react";
import { useStore } from "../../app/store";
import DashboardTemplate from "../../components/Dashboard/DashboardTemplate";
import useFetch from "../../hook/fetch.hook";
const Dashboard = () => {
  const [getData] = useFetch();
  const { setUser } = useStore();
  useEffect(() => {
    setUser(getData);
  }, [getData, setUser]);
  return (
    <>
      <DashboardTemplate />
    </>
  );
};

export default Dashboard;
