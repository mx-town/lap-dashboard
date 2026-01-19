import { getAllContent } from '@/lib/content'

export default async function HomePage() {
  const categories = await getAllContent()

  return (
    <div className="px-6 py-8 space-y-16">
      {categories.map(category => (
        <section key={category.id} id={category.id} className="space-y-8">
          {category.content}
        </section>
      ))}
    </div>
  )
}
