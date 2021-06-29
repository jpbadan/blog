import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import listPostsFileName from './listPostsFileName';
import MdxPost from '../interfaces/PostProps';

interface RegisterPostInterfaceDTO{
    id: any,
    postData: any,
    content: any,
}

function registerPostInterface({id, postData, content}:RegisterPostInterfaceDTO):MdxPost{
    let mdxPost:MdxPost

    try {
        if('title' in postData == false){
            throw 'title property is missing for ' + id
        } 
        else if ('isPublished' in postData == false){
            throw 'isPublished property is missing for ' + id
        }
        else{
            mdxPost = {content, props:{... postData, id}} 
        }
        
    } catch (error) {
        console.log(error)
        return undefined
    }

    
    return mdxPost
}

// export default function getAllPosts():Promise<MdxPost[]>{
    export default function getAllPosts():MdxPost[]{
    const posts:MdxPost[]  = [];
    const fileNames = listPostsFileName();
    const folderPath = path.join(process.cwd(), 'posts')

    fileNames.forEach((postName) => {
        const filePath = path.join(folderPath, `${postName}.mdx`)
        const rawFileSource = fs.readFileSync(filePath)

        const { content, data: postData } = matter(rawFileSource)

        const currentPost = registerPostInterface({id: postName, content, postData})

        currentPost ? posts.push(currentPost):''
        

        // posts.push({
        //     postName:postName,
        //     mdx:content,
        //     frontMatter: postData,
        // })
        
    });
    
    return posts
}
