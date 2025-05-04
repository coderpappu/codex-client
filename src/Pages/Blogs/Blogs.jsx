import BlogsBanner from "../../components/Blogs/BlogsBanner";
import BlogsCard from "../../components/Blogs/BlogsCards";
import BlogsMenu from "../../components/Blogs/BlogsMenu";
//import { useStore } from '../../app/store';
import { Helmet } from "react-helmet-async";

const Blogs = () => {
  //const {blogs,addBlogs}=useStore()//TODO: store

  return (
    <div>
      <Helmet>
        <title>
          Blog | Software Industry News, Tips & Insights | Codex Devware
        </title>
        <meta
          name="description"
          content="Read the latest software trends, SaaS tips, web development insights, and digital marketing guides on the Codex Devware blog."
        />
        <link rel="canonical" href="https://codexdevware.com/blogs" />
        <meta property="og:title" content="Codex Devware Blog" />
        <meta
          property="og:description"
          content="Stay updated with the latest software, SaaS, and digital marketing trends in Bangladesh."
        />
        <meta property="og:url" content="https://codexdevware.com/blogs" />
        <meta property="og:type" content="website" />
      </Helmet>

      <BlogsBanner />
      <BlogsMenu />
      <BlogsCard />
    </div>
  );
};

export default Blogs;
