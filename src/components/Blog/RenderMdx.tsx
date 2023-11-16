"use client";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

const mdxComponents = {
	Image
};

function RenderMdx({ blog }) {
	const MDXComponent = useMDXComponent(blog.body.code);
	return (
		<>
			<div
				className="col-span-8 font-in prose-lg max-w-max 
                prose-blockquote:p-2 
                prose-blockquote:px-6 
                prose-blockquote:not-italic
                prose-blockquote:bg-accent/20 
                prose-blockquote:border-l-4
                prose-blockquote:border-accent
                "
			>
				<MDXComponent components={mdxComponents} />
			</div>
		</>
	);
}
export default RenderMdx;
