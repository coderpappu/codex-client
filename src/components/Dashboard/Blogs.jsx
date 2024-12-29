import { Fragment, useState } from 'react';

export default function Blogs() {
  const [data, setData] = useState([1, 2, 3, 4]);
  return (
    <section>
      {data.map((d) => (
        <Fragment key={d?.id}>
          <div>
            <h2>title</h2>
            <h2>authorName</h2>
            <p>last Update</p>
          </div>
          <div>
            <img draggable={false} src='blogImage' alt='Blog Image' />
            <img draggable={false} src='authorImage' alt='Author Image' />
          </div>
          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </Fragment>
      ))}
    </section>
  );
}
