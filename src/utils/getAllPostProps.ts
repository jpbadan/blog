import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import listPostsFileName from './listPostsFileName';

export default function getAllPostProps(){
    const postProps = [];
    const fileNames = listPostsFileName();
    const folderPath = path.join(process.cwd(), 'posts')

    fileNames.forEach((post) => {
        const filePath = path.join(folderPath, `${post}.mdx`)
        const rawFileSource = fs.readFileSync(filePath)

        const { content, data } = matter(rawFileSource)

        postProps.push({
            postName:post,
            mdx:content,
            frontMatter: data,
        })
        
    });
    
    return postProps
}
