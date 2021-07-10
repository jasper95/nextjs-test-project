import React from 'react'
import Grid from '@material-ui/core/Grid'
import PostCard from '../src/components/post-card'
import Layout from '../src/components/layout'

export default function PostsPage({ posts }) {
  return (
    <Layout title="Post List">
      <Grid container spacing={2}>
        {posts.map(post => (
          <Grid key={post.id} item xs={4}>
            <PostCard post={post}/>
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}


export async function getServerSideProps() {
  const res = await fetch(`http://${process.env.HOSTNAME}:${process.env.PORT}/api/posts`)
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}