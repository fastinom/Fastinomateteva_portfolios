import { Calendar, Clock, Tag, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'wouter';
import { blogPosts, BlogPost } from '@/data/blog';

const categories = ["All", "NLP", "ML", "Computer Vision", "Research", "Deep Learning", "IoT"];

interface BlogSectionProps {
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
}

export default function BlogSection({ selectedCategory = "All", onCategoryChange }: BlogSectionProps) {
  
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = filteredPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <section className="py-20 bg-secondary/30" id="blog" data-testid="section-blog">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in" data-testid="heading-blog">
            Research & Insights
          </h2>
          <p className="text-xl text-muted-foreground animate-slide-up" data-testid="text-blog-subtitle">
            Thoughts on AI research, technology, and innovation
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange?.(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground"
              }`}
              data-testid={`blog-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <div className="bg-card rounded-xl p-8 card-hover" data-testid="featured-blog-post">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Tag className="h-4 w-4" />
                <span>Featured Article</span>
                <Calendar className="h-4 w-4 ml-4" />
                <span>{new Date(featuredPost.publishedAt).toLocaleDateString()}</span>
                <Clock className="h-4 w-4 ml-4" />
                <span>{featuredPost.readTime} read</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground" data-testid="featured-post-title">
                {featuredPost.title}
              </h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed" data-testid="featured-post-excerpt">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {featuredPost.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-secondary/50 px-3 py-1 rounded-full text-xs text-muted-foreground"
                      data-testid={`featured-tag-${index}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  to={`/blog/${featuredPost.id}`}
                  className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
                  data-testid="button-read-featured"
                >
                  Read More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <article 
              key={post.id} 
              className="bg-card rounded-xl p-6 card-hover group cursor-pointer" 
              data-testid={`blog-post-${index}`}
            >
              {/* Post Meta */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                <Clock className="h-4 w-4 ml-2" />
                <span>{post.readTime}</span>
              </div>

              {/* Category Badge */}
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-4">
                {post.category}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors" data-testid={`post-title-${index}`}>
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`post-excerpt-${index}`}>
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="bg-secondary/50 px-2 py-1 rounded text-xs text-muted-foreground"
                    data-testid={`post-tag-${index}-${tagIndex}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Read More */}
              <div className="flex items-center justify-between">
                <Link 
                  to={`/blog/${post.id}`}
                  className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm"
                  data-testid={`button-read-more-${index}`}
                >
                  Read Article <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </div>
            </article>
          ))}
        </div>

        {/* No Posts Message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12" data-testid="no-posts-message">
            <BookOpen className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold text-muted-foreground mb-2">No articles found</h3>
            <p className="text-muted-foreground">Try selecting a different category to see more content.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-4">
            Interested in collaborating on AI research?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            data-testid="button-research-collaboration-cta"
          >
            Let's Discuss Research
          </a>
        </div>
      </div>
    </section>
  );
}