import { useState } from 'react';
import BlogEditor from '../../components/Blogs/BlogEditor';
import Button from '../../utils/Button';
import BlogEditorForm from '../../components/Blogs/BlogEditorForm';
import { addBlog } from '../../helper/helper.js';
import SingleBlogDetails from '../../components/Blogs/SingleBlogDetails.jsx';
import BlogEditCode from '../../components/Blogs/BlogEditCode.jsx';

const BlogEditPage = () => {
  const [file, setFile] = useState(null);
  const [headingText, setHeadingFile] = useState('');
  const [descriptionText, setDescription] = useState('');
  const [consolation, setConsolation] = useState('');
  const [editor, setEditorText] = useState('');
  const [error, setError] = useState('');
  const [allowEditor, setAllowEditor] = useState(0);
  // const [htmlCode, setHtmlCode] = useState();
console.log(file);
  const editorData = {
    title: headingText,
    description: descriptionText,
    consolation,
    featured: editor,
    image: file,
    authorEmail: 'ikhtiarbabor@gmail.com',
    date: new Date().getDate(),
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!error) {
      addBlog(editorData);
    }
  };
  return (
    <section className=' allContainer bg-[#edebf1] rounded-md md:p-6'>
      <form onSubmit={handleSubmit}>
        <BlogEditorForm
          formData={{
            file,
            headingText,
            descriptionText,
            consolation,
            setFile,
            setHeadingFile,
            setDescription,
            setConsolation,
            error,
            setError,
          }}
        />
        <div className='flex gap-3 px-6 pb-3'>
          <p
            className={`cursor-pointer ${
              !allowEditor ? 'font-bold text-[#6F4FFF]' : 'font-normal'
            }`}
            onClick={() => setAllowEditor(0)}
          >
            Editor
          </p>
          <p
            className={`cursor-pointer ${
              allowEditor ? 'font-bold text-[#6F4FFF]' : 'font-normal'
            }`}
            onClick={() => setAllowEditor(1)}
          >
            Html Code{' '}
          </p>
        </div>
        {!allowEditor ? (
          <BlogEditor editorText={{ setEditorText, editor }} />
        ) : (
          <BlogEditCode code={setEditorText} codeValue={editor} />
        )}
        <p className='pt-6'>
          <Button disabled={error} active={true}>
            Get Blog
          </Button>
        </p>
      </form>
      <SingleBlogDetails
        blogDetails={{
          image: file,
          title: headingText,
          description: descriptionText,
          consolation,
          featured: editor,
        }}
      />
    </section>
  );
};

export default BlogEditPage;
