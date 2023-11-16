// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import GithubSlugger from 'github-slugger';

export const Blog = defineDocumentType(() => ({
    name: 'Blog',
    filePathPattern: `**/**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        publishedAt: { type: 'date', required: true },
        updatedAt: { type: 'date', required: true },
        description: { type: 'string', required: false },
        image: { type: 'image' },
        isPublished: { type: 'boolean', required: true },
        author: { type: 'string', required: true },
        tags: { type: 'list', of: { type: 'string' }, required: false },
    },
    computedFields: {
        url: { type: 'string', resolve: (doc) => `/blogs/${doc._raw.flattenedPath}` },
        readingTime: {
            type: 'json',
            resolve: (doc) => readingTime(doc.body.raw)
        },
        toc: {
            type: "json",
            resolve: (doc) => {
                const regularExp = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
                const slugger = new GithubSlugger();
                const headings = Array.from(doc.body.raw.matchAll(regularExp)).map(({ groups }) => {
                    const flag = groups?.flag;
                    const content = groups?.content;
                    return {
                        flag: flag,
                        level: flag?.length == 1 ? "one" : flag?.length == 2 ? "two" : "three",
                        text: content,
                        slug: content ? slugger.slug(content) : undefined
                    };
                });
                return headings;
            }
        }
    },
}));

const codeOptions = {
    theme: 'github-dark',
    keepBackground: true,
};

export default makeSource({
    contentDirPath: 'content',
    documentTypes: [Blog],
    mdx: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'append' }], [rehypePrettyCode, codeOptions]] }
});