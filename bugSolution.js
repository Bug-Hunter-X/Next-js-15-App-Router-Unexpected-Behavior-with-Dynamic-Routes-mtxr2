```javascript
// pages/post/[id].js

import { getServerSideProps } from 'next/server';

export async function getServerSideProps({ params }) {
  const { id } = params;

  // Fetch data based on the id
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return {
    props: { data },
  };
}

export default function Post({ data }) {
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}
```