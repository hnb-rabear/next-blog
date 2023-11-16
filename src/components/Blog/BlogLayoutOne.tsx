import Image from "next/image";
import Tag from "../Elements/Tag";
import Link from "next/link";
import { slug } from "github-slugger";

function BlogLayoutOne({ blog }) {
	return (
		<>
			<div className="group inline-blog overflow-hidden rounded-xl">
				<div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark rounded-xl z-10" />
				<Image
					src={blog.image.filePath.replace("../public", "")}
					placeholder="blur"
					alt={blog.title}
					blurDataURL={blog.image.blurhashDataUrl}
					width={blog.image.width}
					height={blog.image.height}
					className="w-full h-full object-center object-cover rounded-xl group-hover:scale-105 ease-in-out duration-500"
				/>
				<div className="w-full absolute bottom-0 p-10 z-20">
					<Tag
						link={`/categories/${slug(blog.tags[0])}`}
						name={blog.tags[0]}
						className="px-6 text-sm py-2 !border"
					/>
					<Link href={blog.url} className="mt-6">
						<h1 className="font-bold capitalize text-2xl text-light mt-4">
							<span className="bg-gradient-to-r from-accent to-accent bg-[length:0%_5px] group-hover:bg-[length:100%_5px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
								{blog.title}
							</span>
						</h1>
					</Link>
				</div>
			</div>
		</>
	);
}
export default BlogLayoutOne;
