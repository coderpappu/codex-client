import { useState } from 'react';
import BlogEditor from '../../components/Blogs/BlogEditor';
import Button from '../../utils/Button';
import BlogEditorForm from '../../components/Blogs/BlogEditorForm';
import { editBlog } from '../../helper/helper.js';
import SingleBlogDetails from '../../components/Blogs/SingleBlogDetails.jsx';
import BlogEditCode from '../../components/Blogs/BlogEditCode.jsx';

const EditBlog = ({ blogData }) => {
  const {
    id,
    title,
    description,
    consolation: initialConsolation,
    featured,
    image,
    authorEmail,
    date,
  } = blogData || {};
  const [file, setFile] = useState(image);
  const [headingText, setHeadingFile] = useState(title);
  const [descriptionText, setDescription] = useState(description);
  const [consolation, setConsolation] = useState(initialConsolation);
  const [editor, setEditorText] = useState(featured);
  const [error, setError] = useState('');
  const [allowEditor, setAllowEditor] = useState(0);


  const editorData = {
    id,
    title: headingText,
    description: descriptionText,
    consolation,
    featured: editor,
    image: file,
    authorEmail: authorEmail,
    date: date,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!error) {
      editBlog(editorData);
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
        <p className='pt-6 pl-6'>
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

export default EditBlog;
