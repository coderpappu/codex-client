import BlogsBanner from '../../components/Blogs/BlogsBanner';
import BlogsMenu from '../../components/Blogs/BlogsMenu';
import BlogsCard from '../../components/Blogs/BlogsCards';
//import { useStore } from '../../app/store';


const Blogs = () => {
 //const {blogs,addBlogs}=useStore()//TODO: store
 

  return (
    <div>
      <BlogsBanner />
      <BlogsMenu />
      <BlogsCard />
    </div>
  );
};

export default Blogs;
