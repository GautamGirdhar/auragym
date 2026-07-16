import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types/blog";

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <article className="group overflow-hidden rounded-3xl border border-white/10 bg-card hover:border-primary transition-all duration-300">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={blog.cover_image}
            alt={blog.title}
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />
        </div>

        <div className="p-6">
          <p className="text-primary text-sm mb-2">{blog.author}</p>

          <h2 className="text-2xl font-bold text-white">{blog.title}</h2>

          <p className="mt-3 text-white/60 line-clamp-3">{blog.excerpt}</p>
        </div>
      </article>
    </Link>
  );
}
