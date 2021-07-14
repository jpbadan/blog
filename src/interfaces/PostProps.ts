export interface PostProps {
  id: string,
  title: string,
  isPublished: boolean,
  seoTitle?: string | undefined,
  author?: string | undefined,
  description?: string | undefined,
  favicon?: string | undefined,
  tags?: string[] | undefined,
  publishedAt?: string,

  // layout?: "article"|"essay",
}

export default interface MdxPost {
  content: string | undefined,
  props: PostProps;
}

