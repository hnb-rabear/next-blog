import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

function BlogLayoutThree({ blog }) {
  return (
    <>
      <div className="group flex flex-col items-center text-dark">
        <Link href={blog.url} className="h-full rounded-xl overflow-hidden">
          <Image
            src={blog.image.filePath.replace("../public", "")}
            alt={blog.title}
            blurDataURL={blog.image.blurhashDataUrl}
            width={blog.image.width}
            height={blog.image.height}
            className="aspect-4/3 w-full h-full object-cover object-center group-hover:scale-105 ease-in-out duration-500"
          />
        </Link>
        <div className="flex flex-col w-full mt-4">
          <span className="uppercase text-accent font-semibold text-sm">
            {blog.tags[0]}
          </span>
          <Link href={blog.url} className="inline-block my-1">
            <h1 className="font-semibold capitalize text-lg mt-2">
              <span className="bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0%_2px] group-hover:bg-[length:100%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                {blog.title}
              </span>
            </h1>
          </Link>
          <span className="capitalize text-dark/50 font-semibold text-base">
            {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
          </span>
        </div>
      </div>
    </>
  );
}
export default BlogLayoutThree;
