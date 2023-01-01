import { PostsStore as Store } from '../posts_store';

interface PostInterface {
  params: {
    id: number;
  };
}

const Post = (request: PostInterface) => {
  const posts = new Store();
  const postId: number = request.params.id;

  const body = JSON.stringify(posts.find({ id: postId }));
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  };
  return new Response(body, { headers });
};

export { Post };
