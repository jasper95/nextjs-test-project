import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Post } from 'src/models/post';

const dateFormatter = new Intl.DateTimeFormat('en-US');

type PostCardProps = {
  post: Post;
};
export default function PostCard({ post }: PostCardProps) {
  return (
    <Card>
      <CardHeader title={post.title} subheader={dateFormatter.format(new Date(post.published_date))} />
      <CardContent>
        <Typography variant="body1" color="textSecondary" gutterBottom component="p">
          {post.description}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          By {post.email}
        </Typography>
      </CardContent>
    </Card>
  );
}
