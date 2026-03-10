/**
 * Blog data access – delegates to constants/posts.ts.
 * Swap this module to fetch from Sanity/Contentful when moving to a CMS.
 */
export {
  getPosts,
  getPostBySlug,
  getPostSlugs,
  getReadingTimeMinutes,
  type PostLocalized as Post,
  type BlogCategoryId,
  type BlogLocale,
  BLOG_CATEGORY_IDS,
  BLOG_LOCALES,
} from '@/constants/posts';
