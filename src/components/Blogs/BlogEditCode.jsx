export default function BlogEditCode({ code, codeValue }) {
  return (
    <div className='px-6'>
      <textarea
        value={codeValue}
        onChange={(e) => code(e.target.value)}
        className='w-full rounded-md bg-transparent border-2 border-gray-300 p-5 resize-none'
        id=''
        cols='30'
        placeholder='Paste Here Your Code'
      ></textarea>
    </div>
  );
}
