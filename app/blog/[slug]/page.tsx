import { supabase } from "@/lib/supabase";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

async function getBlog(slug: string) {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) return null;

  return data;
}

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-extrabold text-white mb-6">{blog.title}</h1>

      <p className="text-white/40 mb-10">
        {new Date(blog.created_at).toLocaleDateString()}
      </p>
      <div className="relative h-125 rounded-3xl overflow-hidden mb-10">
        <Image
          src={blog.cover_image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div
        className="
  prose
  prose-invert
  prose-lg
  max-w-none

  prose-headings:text-white
  prose-headings:font-bold
  prose-headings:tracking-tight

  prose-h2:text-4xl
  prose-h2:mt-16
  prose-h2:mb-8
  prose-h2:text-primary

  prose-h3:text-2xl
  prose-h3:text-white

  prose-p:text-white/80
  prose-p:leading-8
  prose-p:text-lg

  prose-li:text-white/80
  prose-li:marker:text-primary

  prose-strong:text-white
"
      >
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </div>
    </article>
  );
}
