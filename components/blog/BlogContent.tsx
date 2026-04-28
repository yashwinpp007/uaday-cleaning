import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface BlogContentProps {
  content: string
}

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="prose prose-lg max-w-none
      prose-headings:font-heading prose-headings:font-800 prose-headings:text-dark-text
      prose-p:text-body-text prose-p:leading-relaxed
      prose-a:text-brand-green prose-a:no-underline hover:prose-a:underline
      prose-strong:text-dark-text prose-strong:font-700
      prose-ul:text-body-text prose-ol:text-body-text
      prose-li:my-1
      prose-blockquote:border-brand-green prose-blockquote:bg-brand-green-light prose-blockquote:rounded-2xl prose-blockquote:py-1 prose-blockquote:not-italic
      prose-code:bg-off-white prose-code:text-brand-green prose-code:rounded-lg prose-code:px-1.5
      prose-table:text-sm
      prose-th:bg-brand-green prose-th:text-white prose-th:font-700
      prose-img:rounded-3xl prose-img:shadow-card
    ">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  )
}
