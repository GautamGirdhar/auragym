import { supabase } from "@/lib/supabase";
import Link from "next/link";
import Image from "next/image";
import { CalendarDays, ArrowUpRight } from "lucide-react";

async function getBlogs() {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error);
    return [];
  }

  return data;
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <section className="min-h-screen bg-background py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-primary uppercase tracking-[0.35em] text-sm font-bold">
            Aura Gym Blog
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold uppercase text-white mt-4">
            Fitness Articles &<span className="text-primary"> Insights</span>
          </h1>
        </div>

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.slug}`}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-card hover:border-primary/50 transition-all duration-500 hover:-translate-y-3"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={blog.image_url || "/placeholder-blog.jpg"}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />

                {/* Category */}
                <div className="absolute top-5 left-5">
                  <span className="bg-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-white">
                    Fitness
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="flex items-center gap-2 text-white/40 text-sm mb-4">
                  <CalendarDays size={15} />
                  <span>
                    {new Date(blog.created_at).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <h2 className="text-2xl font-extrabold text-white leading-tight group-hover:text-primary transition-colors">
                  {blog.title}
                </h2>

                <p className="mt-4 text-white/60 leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="mt-6 flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm">
                  Read Article
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
