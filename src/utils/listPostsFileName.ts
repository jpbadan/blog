import path from 'path';
import fs from 'fs';

export default function listPostsFileName(){
    // Reads all posts that are .mdx and returns a JSON array
    const postsFolderPath = path.join(process.cwd(), 'posts')
    const posts = []
  
     fs.readdirSync(postsFolderPath).forEach(file => {
      if(path.extname(file) == '.mdx'){
        posts.push(path.parse(file).name)
      }
     })
    
    // console.log('list Posts ==> ', posts)
    return posts
  }