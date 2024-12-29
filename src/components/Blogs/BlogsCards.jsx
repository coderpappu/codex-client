import { useEffect } from 'react';
import Button from '../../utils/Button';
import SingleBlogCard from './SingleBlogCard';
import BlogLoader from '../ui/BlogLoader';
import { useStore } from '../../app/store';
import { allBlogs } from '../../helper/helper';

const BlogsCard = () => {
  const { blogs, setAllBlogs } = useStore((state) => state);
  

  // const handleFunction = ()=>{
  //   setAllBlogs({ blogs: [], isLoading: true });
  //   allBlogs()
  //     .then((data) => {
  //       console.log({ data });
  //       setAllBlogs({ blogs: data.data, isLoading: false });
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }
  // handleFunction()

  useEffect(() => {
    setAllBlogs({ blogs: [], isLoading: true });
    allBlogs()
      .then((data) => {
        console.log({ data });
        setAllBlogs({ blogs: data.data, isLoading: false });
      })
      .catch((err) => {
        console.error(err);
      });
  }, [setAllBlogs]);
  console.log(blogs);

  
  // fake data

  return (
    <>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 md:gap-8 allContainer mt-8'>
        {blogs?.isLoading
          ? Array(3)
              .fill(3)
              .map((s, i) => <BlogLoader key={i} />)
          : blogs?.blogs.map((blogList) => (
              <SingleBlogCard
                key={blogList.id}
                blogList={blogList}
              ></SingleBlogCard>
            ))}
      </div>

      <div className='text-center mt-12'>
        {!blogs.isLoading && <Button active={true}>View More Blogs</Button>}
      </div>
    </>
  );
};

export default BlogsCard;
