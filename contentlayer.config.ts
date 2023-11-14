// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Blog = defineDocumentType(() => ({
    name: 'Blog',
    filePathPattern: `**/**/*.mdx`,
    fields: {
        title: { type: 'string', required: true },
        publishedAt: { type: 'date', required: true },
        updatedAt: { type: 'date', required: true },
        description: { type: 'string', required: false },
        image: { type: 'string', required: false },
        isPublished: { type: 'boolean', required: true },
        author: { type: 'string', required: true },
        tags: { type: 'list', of: { type: 'string' }, required: false },
    },
    computedFields: {
        url: { type: 'string', resolve: (doc) => `/blogs/${doc._raw.flattenedPath}` },
    },
}));

export default makeSource({ contentDirPath: 'content', documentTypes: [Blog] });