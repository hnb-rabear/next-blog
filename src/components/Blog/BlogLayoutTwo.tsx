import Image from "next/image";
import Link from "next/link";
import Tag from "../Elements/Tag";
import { format } from "date-fns";

function BlogLayoutTwo({ blog }) {
  return (
    <>
      <div className="group grid grid-cols-12 gap-4 items-center text-dark">
        <Link
          href={blog.url}
          className="col-span-4 h-full rounded-xl overflow-hidden"
        >
          <Image
            src={blog.image.filePath.replace("../public", "")}
            alt={blog.title}
            blurDataURL={blog.image.blurhashDataUrl}
            width={blog.image.width}
            height={blog.image.height}
            className="aspect-square w-full h-full object-cover object-center group-hover:scale-105 ease-in-out duration-500"
          />
        </Link>
        <div className="col-span-8 w-full">
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
export default BlogLayoutTwo;
