import { posts } from 'src/constants';
import { v4 as uuid } from 'uuid';
import { NextApiRequest, NextApiResponse } from 'next';
import { Post } from 'src/models/post';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    return handleCreate(req, res);
  } else {
    return handleGetList(req, res);
  }
}

function handleCreate(req: NextApiRequest, res: NextApiResponse<Post>) {
  const data: Post = { ...req.body, id: uuid() };
  posts.push(data);
  res.send(data);
}

function handleGetList(req: NextApiRequest, res: NextApiResponse<Post[]>) {
  const copy = [...posts];
  copy.reverse();
  res.send(copy.slice(0, 5));
}
