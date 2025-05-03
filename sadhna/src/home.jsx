import React, { useEffect, useState } from 'react';

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then((data) => {
        console.log("data",data);
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;
 
  return (
    <div>
      <h1>Posts from JSONPlaceholder</h1>
      
      {posts.map((post) => (
        < table key={post.id}  >
         
            <tr>
                <td style={{border: '1px solid #ccc'}}>{post.userId}</td>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                

            </tr>
        
        </table>
      ))}
    </div>
  );
};

export default PostsList;
