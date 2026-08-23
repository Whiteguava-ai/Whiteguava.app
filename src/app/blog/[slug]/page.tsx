import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPost from '@/components/BlogPost';
import JsonLd from '@/components/JsonLd';
import { blogPostList, getBlogPost } from '@/data/blog';
import { fetchPexelsImage, fetchPexelsImages } from '@/lib/pexels';
import { blogPostGraph } from '@/lib/schema';
import { postMetadata } from '@/lib/postMetadata';

export function generateStaticParams() {
  return blogPostList.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return postMetadata(post);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const sectionQueries = post.body
    .filter((b): b is Extract<typeof b, { type: 'h2' }> => b.type === 'h2' && !!b.imageQuery)
    .map((b) => ({ id: b.id, query: b.imageQuery as string, fallbackAlt: b.imageAlt ?? b.text }));

  const [cover, sectionImages] = await Promise.all([
    fetchPexelsImage(post.coverQuery, post.coverAlt),
    fetchPexelsImages(sectionQueries),
  ]);

  return (
    <>
      <JsonLd data={blogPostGraph(post, cover)} />
      <BlogPost post={post} cover={cover} sectionImages={sectionImages} />
    </>
  );
}
