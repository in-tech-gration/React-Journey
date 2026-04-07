export default function Post({ post }) {
  return (
    <li className="text-left border p-1 mb-2" key={post}>
      {post.title} <span className="text-xs">(views: {post.views})</span>
    </li>
  )
}