import { PostsStore as Store } from '../posts_store';

const Post = (request: any) => {
  const posts = new Store();
  const postId: string = request.params.id;

  const body = JSON.stringify(posts.find(postId));
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  };
  return new Response(body, { headers });
};

export { Post };
