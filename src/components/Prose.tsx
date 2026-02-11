import clsx from 'clsx'

export function Prose({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        'prose dark:prose-invert',
        'prose-headings:scroll-mt-24 prose-headings:font-semibold',
        'prose-h2:mt-12 prose-h2:mb-4 prose-h3:mt-10 prose-h3:mb-3',
        'prose-a:text-teal-600 prose-a:no-underline hover:prose-a:underline',
        'prose-hr:border-zinc-200 dark:prose-hr:border-zinc-700',
        'prose-strong:text-zinc-900 dark:prose-strong:text-zinc-100',
        'prose-blockquote:border-l-teal-500 prose-blockquote:text-zinc-700 dark:prose-blockquote:text-zinc-300',
        'prose-code:rounded prose-code:bg-zinc-100 prose-code:px-1 prose-code:py-0.5 prose-code:font-medium',
        'prose-code:text-zinc-800 dark:prose-code:bg-zinc-800/60 dark:prose-code:text-zinc-100',
        'prose-code:before:content-none prose-code:after:content-none',
        'prose-pre:rounded-xl prose-pre:bg-zinc-900 prose-pre:shadow-lg',
        'prose-pre:border prose-pre:border-zinc-800',
        'dark:prose-pre:bg-zinc-950 dark:prose-pre:border-zinc-800/80',
        'prose-pre:overflow-x-auto',
        'prose-img:rounded-xl prose-img:border prose-img:border-zinc-200 dark:prose-img:border-zinc-800',
        'prose-img:brightness-100 dark:prose-img:brightness-75 dark:prose-img:contrast-110',
        'prose-table:text-sm',
        'prose-th:border-b prose-th:border-zinc-200 prose-th:bg-zinc-50',
        'prose-td:border-b prose-td:border-zinc-100',
        'dark:prose-th:border-zinc-700 dark:prose-th:bg-zinc-800/60',
        'dark:prose-td:border-zinc-800/60',
      )}
      {...props}
    />
  )
}
