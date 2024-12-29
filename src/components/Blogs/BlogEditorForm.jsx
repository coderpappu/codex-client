import { useState } from 'react';
import Error from '../ui/Error';

const BlogEditorForm = ({ formData }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const {
    headingText,
    descriptionText,
    consolation,
    setFile,
    setHeadingFile,
    setDescription,
    setConsolation,
    error,
    setError,
  } = formData;
  console.log(error);
  const onImageSelect = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    if (file.size > 2621440) {
      const fileSize = Math.round(file.size / 1048576);
      setError(`You image is ${fileSize} mb. Please provide below 2.5 mb`);
    }
    reader.onload = () => {
      setImagePreview(reader.result);
      setFile(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const inputClass = 'px-3 py-2 focus:outline-none rounded-md my-1 w-full';
  const labelClass = 'text-[18px] font-bold';
  return (
    <div className='flex flex-col justify-center items-center max-md:pt-8'>
      <div className=' p-6 rounded-lg w-full'>
        <div>
          <div className='sm:grid grid-cols-2 gap-2 pb-2'>
            <div>
              <label className={labelClass} htmlFor='name'>
                Image URL
              </label>
              <br />
              <div className='flex'>
                <input
                  className={`${inputClass} !w-1/2`}
                  required
                  type='file'
                  name='ImageURL'
                  onChange={onImageSelect}
                  id='imageURL'
                  placeholder='Write your image url'
                />
                <img draggable={false} className='h-10' src={imagePreview} alt='' />
              </div>
              {error && <Error message={error} />}
            </div>
            <div>
              <label className={labelClass} htmlFor='email'>
                Heading Input
              </label>
              <br />
              <input
                className={inputClass}
                type='text'
                required
                value={headingText}
                onChange={(e) => setHeadingFile(e.target.value)}
                name='heading'
                id='heading'
                placeholder='Write a Heading of blog'
              />
            </div>
            <div>
              <label className={labelClass} htmlFor='name'>
                Description
              </label>
              <br />
              <input
                className={`${inputClass} `}
                type='text'
                name='description'
                id='description'
                value={descriptionText}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Write a blog description'
              />
            </div>
            <div>
              <label className={labelClass} htmlFor='email'>
                Consolation(Optional)
              </label>
              <br />
              <input
                className={inputClass}
                type='text'
                name='consolation'
                id='consolation'
                value={consolation}
                onChange={(e) => setConsolation(e.target.value)}
                placeholder='Write a blog consolation'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogEditorForm;
