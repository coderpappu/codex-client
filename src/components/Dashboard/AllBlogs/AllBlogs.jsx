import { useEffect } from "react";
//import { useStore } from "../../../app/store";
import AllBlogsTable from "./AllBlogsTable";

const AllBlogs = () => {
  //const {blogs,addBlogs}=useStore()//TODO: store
  useEffect(() => {}, []);
  return (
    <div className="allContainer ">
      <AllBlogsTable />
    </div>
  );
};

export default AllBlogs;
