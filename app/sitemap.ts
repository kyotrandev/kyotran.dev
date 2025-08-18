import { MetadataRoute } from 'next';
import { allBlogs } from 'contentlayer/generated';
import siteMetadata from '@/data/siteMetadata';
import { slug } from 'github-slugger';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl;

  // Load tag data
  const tagDataPath = path.join(process.cwd(), 'app', 'tag-data.json');
  const tagData = JSON.parse(fs.readFileSync(tagDataPath, 'utf8'));

  // Main static routes with priorities
  const routes = [
    {
      url: `${siteUrl}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${siteUrl}/tags`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
  ];

  // Blog post routes
  const blogRoutes = allBlogs
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${siteUrl}/${post.path}`,
      lastModified: post.lastmod || post.date,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }));

  // Blog pagination routes
  const POSTS_PER_PAGE = 5;
  const totalPages = Math.ceil(allBlogs.filter((post) => !post.draft).length / POSTS_PER_PAGE);
  const blogPaginationRoutes = Array.from({ length: totalPages }, (_, i) => ({
    url: `${siteUrl}/blog/page/${i + 1}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: i === 0 ? 0.9 : 0.7,
  }));

  // Tag routes
  const tagRoutes = Object.keys(tagData).map((tag) => ({
    url: `${siteUrl}/tags/${slug(tag)}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  // Tag pagination routes
  const tagPaginationRoutes: MetadataRoute.Sitemap = [];
  Object.entries(tagData).forEach(([tag, count]) => {
    const tagPages = Math.ceil((count as number) / POSTS_PER_PAGE);
    for (let i = 2; i <= tagPages; i++) {
      tagPaginationRoutes.push({
        url: `${siteUrl}/tags/${slug(tag)}/page/${i}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.5,
      });
    }
  });

  return [...routes, ...blogRoutes, ...blogPaginationRoutes, ...tagRoutes, ...tagPaginationRoutes];
}
