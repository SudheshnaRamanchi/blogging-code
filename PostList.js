import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'Essential Tips for Rose Care',
    summary: `
      Roses require specific care to thrive. Here are essential tips for maintaining healthy roses:
      1. Ensure they receive at least 6 hours of sunlight each day to promote blooming.<br><br>
      2. Water them deeply once a week, but avoid watering the foliage to prevent disease.<br><br>
      3. Prune roses in late winter or early spring to encourage new growth and remove any dead wood.<br><br>
      4. Apply mulch around the base to help retain moisture and regulate soil temperature.<br><br>
      5. Use a balanced fertilizer designed for roses to support robust growth and flowering.<br><br>
      6. Keep an eye out for common pests like aphids and treat them promptly to protect your roses.
    `,
    image: 'rose 1.jpg',
  },
  {
    id: 2,
    title: 'Tips for Growing Beautiful Tulips',
    summary: `
      Tulips add a splash of color to your garden. Follow these tips for a thriving tulip display:
      1. Plant tulip bulbs in well-drained soil about 6-8 inches deep, preferably in the fall.<br><br>
      2. Select a sunny location or partial shade to encourage vibrant blooms.<br><br>
      3. Water the bulbs immediately after planting to help them establish roots.<br><br>
      4. Fertilize with a bulb food or all-purpose fertilizer to support healthy growth.<br><br>
      5. Deadhead spent flowers to promote energy for bulb development.<br><br>
      6. Allow foliage to die back naturally to ensure the bulbs are nourished for the next growing season.
    `,
    image: 'rose2.jpg',
  },
];

function PostList() {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <img src={post.image} alt={post.title} style={{ width: '500px', height: 'auto' }} />
          <h2>{post.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: post.summary }} />
          <Link to={`/post/${post.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}

export default PostList;