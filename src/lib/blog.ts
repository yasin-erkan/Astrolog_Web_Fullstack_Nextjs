/**
 * Blog data access – delegates to constants/posts.ts.
 * Swap this module to fetch from Sanity/Contentful when moving to a CMS.
 */
export {
  getPosts,
  getPostBySlug,
  getPostSlugs,
  getReadingTimeMinutes,
  type Post,
  type BlogCategoryId,
  BLOG_CATEGORY_IDS,
} from '@/constants/posts';
