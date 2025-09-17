import { useParams, useLocation } from 'wouter';
import { ArrowLeft, Calendar, Clock, Tag, User } from 'lucide-react';
import { blogPosts, BlogPost } from '@/data/blog';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import profileImage from '@assets/pps_1758111701428.jpg';

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const [, setLocation] = useLocation();

  const post = blogPosts.find((p: BlogPost) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Button onClick={() => setLocation('/')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <article className="container mx-auto px-4 py-20 max-w-4xl" data-testid="blog-post-article">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => setLocation('/')}
          className="mb-8"
          data-testid="button-back-to-home"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Button>

        {/* Article Header */}
        <header className="mb-12">
          {/* Category Badge */}
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            {post.category}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6" data-testid="post-title">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Fastino Mateteva</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime} read</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag: string, index: number) => (
              <span 
                key={index}
                className="flex items-center gap-1 bg-secondary/50 px-3 py-1 rounded-full text-sm text-muted-foreground"
                data-testid={`post-tag-${index}`}
              >
                <Tag className="h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>

          {/* Excerpt */}
          <p className="text-xl text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-6" data-testid="post-excerpt">
            {post.excerpt}
          </p>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none dark:prose-invert" data-testid="post-content">
          {post.content ? (
            <div className="whitespace-pre-wrap leading-relaxed">
              {post.content}
            </div>
          ) : (
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                This article provides comprehensive insights into the latest developments in AI research 
                and technology. The content explores practical applications, theoretical foundations, 
                and future directions in the field.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Key Insights</h2>
              <p className="leading-relaxed">
                The research presented here demonstrates significant advances in artificial intelligence 
                applications, particularly in the context of solving real-world challenges. Through 
                careful analysis and experimentation, we can observe meaningful progress in areas such 
                as natural language processing, machine learning optimization, and intelligent system design.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Technical Implementation</h2>
              <p className="leading-relaxed">
                The implementation approach focuses on scalable solutions that balance performance with 
                practical deployment considerations. By leveraging modern frameworks and methodologies, 
                we achieve robust systems capable of handling complex computational requirements while 
                maintaining efficiency and reliability.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Future Directions</h2>
              <p className="leading-relaxed">
                Looking ahead, the field continues to evolve rapidly with emerging technologies and 
                methodologies. The integration of advanced AI techniques with domain-specific knowledge 
                opens new possibilities for innovation and practical application across various industries 
                and research areas.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="border-t border-border pt-8 mt-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full border-2 border-accent overflow-hidden bg-gradient-to-br from-card to-secondary flex-shrink-0">
                <img 
                  src={profileImage} 
                  alt="Fastino Mateteva"
                  className="w-full h-full object-cover object-center"
                  data-testid="author-profile-image"
                />
              </div>
              <div>
                <h3 className="font-semibold mb-2">About the Author</h3>
                <p className="text-muted-foreground">
                  Fastino Mateteva is an AI Research Scientist specializing in NLP and machine learning 
                  applications for African languages and contexts.
                </p>
              </div>
            </div>
            
            <Button 
              onClick={() => setLocation('/#contact')}
              data-testid="button-contact-author"
            >
              Contact Author
            </Button>
          </div>
        </footer>
      </article>
      
      <Footer />
    </div>
  );
}