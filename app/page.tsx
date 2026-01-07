"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { Search, ChevronRight, X, ArrowLeft, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Fuse from "fuse.js"
import { motion, AnimatePresence } from "framer-motion"
import { terms, categories, subcategories, type Term } from "@/data/terms"

type ViewState = "categories" | "subcategories" | "terms"

export default function MechatronikLexikon() {
  const [searchTerm, setSearchTerm] = useState("")
  const [viewState, setViewState] = useState<ViewState>("categories")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null)
  const [selectedTerm, setSelectedTerm] = useState<Term | null>(null)
  const [isSticky, setIsSticky] = useState(false)
  const controlsRef = useRef<HTMLDivElement>(null)
  const controlsPlaceholderRef = useRef<HTMLDivElement>(null)

  // Fuse.js Setup für Fuzzy Search (inkl. Subcategories)
  const fuse = useMemo(() => {
    return new Fuse(terms, {
      keys: ["title", "description", "example", "subcategory"],
      threshold: 0.3,
      includeScore: true,
    })
  }, [])

  // Suchergebnisse
  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return []
    return fuse.search(searchTerm).map(result => result.item)
  }, [searchTerm, fuse])

  // Navigation
  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setSelectedSubcategory(null)
    setViewState("subcategories")
  }

  const handleSubcategoryClick = (subcategoryId: string) => {
    setSelectedSubcategory(subcategoryId)
    setViewState("terms")
  }

  const handleBackToCategories = () => {
    setViewState("categories")
    setSelectedCategory(null)
    setSelectedSubcategory(null)
  }

  const handleBackToSubcategories = () => {
    setViewState("subcategories")
    setSelectedSubcategory(null)
  }

  const handleTermClick = (term: Term) => {
    setSelectedTerm(term)
  }

  const clearSearch = () => {
    setSearchTerm("")
    setViewState("categories")
    setSelectedCategory(null)
    setSelectedSubcategory(null)
  }

  // Sticky Header
  useEffect(() => {
    const handleScroll = () => {
      if (controlsRef.current && controlsPlaceholderRef.current) {
        const controlsRect = controlsPlaceholderRef.current.getBoundingClientRect()
        setIsSticky(controlsRect.top <= 0)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Get current category and subcategory data
  const currentCategory = selectedCategory ? categories[selectedCategory] : null
  const currentSubcategory = selectedSubcategory ? subcategories[selectedSubcategory] : null

  // Get subcategories for selected category
  const categorySubcategories = useMemo(() => {
    if (!selectedCategory) return []
    return Object.values(subcategories).filter(sub => sub.category === selectedCategory)
  }, [selectedCategory])

  // Get terms for selected subcategory
  const subcategoryTerms = useMemo(() => {
    if (!selectedSubcategory) return []
    return terms.filter(term => term.subcategory === selectedSubcategory)
  }, [selectedSubcategory])

  // Breadcrumb
  const breadcrumbs = useMemo(() => {
    const crumbs: Array<{ label: string; onClick: () => void }> = [
      { label: "Start", onClick: handleBackToCategories },
    ]
    if (currentCategory) {
      crumbs.push({ label: currentCategory.title, onClick: handleBackToSubcategories })
    }
    if (currentSubcategory) {
      crumbs.push({ label: currentSubcategory.title, onClick: () => {} })
    }
    return crumbs
  }, [currentCategory, currentSubcategory])

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="mb-8 border-b border-gray-800 pb-6">
          <h1 className="text-3xl sm:text-4xl font-light mb-2 text-white">
            Mechatronik Lexikon
          </h1>
          <p className="text-sm text-gray-400">
            Umfassendes Nachschlagewerk für das LAP Fachgespräch
          </p>
        </div>

        <div ref={controlsPlaceholderRef} className={isSticky ? "h-[76px]" : ""} />

        {/* Controls mit Sticky */}
        <motion.div
          ref={controlsRef}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={`${isSticky ? "fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-gray-800" : ""} mb-6`}
        >
          <div className={`${isSticky ? "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" : ""}`}>
            {/* Breadcrumb */}
            {viewState !== "categories" && (
              <div className="flex items-center gap-2 mb-4 text-sm text-gray-400">
                {breadcrumbs.map((crumb, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {index > 0 && <ChevronRight className="w-4 h-4" />}
                    <button
                      onClick={crumb.onClick}
                      className={`hover:text-white transition-colors ${index === breadcrumbs.length - 1 ? "text-white" : ""}`}
                    >
                      {crumb.label}
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Search */}
            <div className="flex gap-3 items-center">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Begriff suchen..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-10 py-2.5 rounded-lg border border-gray-800 bg-[#111111] text-white placeholder-gray-500 focus:border-gray-600 focus:ring-0"
                />
                {searchTerm && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
              {viewState !== "categories" && (
                <Button
                  onClick={handleBackToCategories}
                  variant="outline"
                  className="rounded-lg px-4 bg-[#111111] border-gray-800 text-gray-300 hover:bg-[#1a1a1a] hover:text-white"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Start
                </Button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="mt-6">
          {/* Suchergebnisse */}
          {searchTerm && (
            <div>
              <p className="text-sm text-gray-400 mb-4">
                {searchResults.length} Ergebnis{searchResults.length !== 1 ? "se" : ""} für &quot;{searchTerm}&quot;
              </p>
              <AnimatePresence>
                {searchResults.length > 0 ? (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                  >
                    {searchResults.map((term) => {
                      const category = categories[term.category]
                      const subcategory = term.subcategory ? subcategories[term.subcategory] : null
                      return (
                        <motion.div
                          key={term.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleTermClick(term)}
                          className="bg-[#111111] border border-gray-800 rounded-lg p-5 cursor-pointer hover:border-gray-700 transition-colors"
                        >
                          <div className="font-medium mb-2 text-white">{term.title}</div>
                          <div className="text-xs text-gray-400">
                            {category?.icon} {category?.title}
                            {subcategory && ` → ${subcategory.title}`}
                          </div>
                        </motion.div>
                      )
                    })}
                  </motion.div>
                ) : (
                  <motion.div
                    key="no-result"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-center py-16 text-gray-400"
                  >
                    <div className="text-4xl mb-3">🔍</div>
                    Keine Ergebnisse gefunden.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Hauptkategorien */}
          {!searchTerm && viewState === "categories" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.values(categories).map((category) => {
                const categoryTerms = terms.filter((t) => t.category === category.id)
                return (
                  <motion.div
                    key={category.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleCategoryClick(category.id)}
                    className="bg-[#111111] border border-gray-800 rounded-lg p-6 cursor-pointer hover:border-gray-700 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">{category.icon}</span>
                      <div className="flex-1">
                        <h2 className="text-lg font-medium mb-1 text-white">{category.title}</h2>
                        <p className="text-sm text-gray-400 mb-2">{category.description}</p>
                        <p className="text-xs text-gray-500">
                          {categoryTerms.length} Begriffe
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          )}

          {/* Unterkategorien */}
          {!searchTerm && viewState === "subcategories" && currentCategory && (
            <div>
              <div className="mb-6">
                <button
                  onClick={handleBackToCategories}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-4"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Zurück zu Kategorien
                </button>
                <h2 className="text-2xl font-light mb-2 text-white">
                  {currentCategory.icon} {currentCategory.title}
                </h2>
                <p className="text-sm text-gray-400">{currentCategory.description}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categorySubcategories.map((subcategory) => {
                  const subcategoryTerms = terms.filter((t) => t.subcategory === subcategory.id)
                  return (
                    <motion.div
                      key={subcategory.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSubcategoryClick(subcategory.id)}
                      className="bg-[#111111] border border-gray-800 rounded-lg p-5 cursor-pointer hover:border-gray-700 transition-colors"
                    >
                      <h3 className="text-base font-medium mb-2 text-white">{subcategory.title}</h3>
                      <p className="text-xs text-gray-500">
                        {subcategoryTerms.length} Begriff{subcategoryTerms.length !== 1 ? "e" : ""}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Begriffe */}
          {!searchTerm && viewState === "terms" && currentSubcategory && (
            <div>
              <div className="mb-6">
                <button
                  onClick={handleBackToSubcategories}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-4"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Zurück zu Unterkategorien
                </button>
                <h2 className="text-2xl font-light mb-2 text-white">
                  {currentSubcategory.title}
                </h2>
                {currentCategory && (
                  <p className="text-sm text-gray-400">
                    {currentCategory.icon} {currentCategory.title}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {subcategoryTerms.map((term) => (
                  <motion.div
                    key={term.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleTermClick(term)}
                    className="bg-[#111111] border border-gray-800 rounded-lg p-5 cursor-pointer hover:border-gray-700 transition-colors"
                  >
                    <div className="flex flex-col h-32 justify-between">
                      <h3 className="text-base font-medium text-white">{term.title}</h3>
                      <div className="flex-1 flex items-center justify-center">
                        {term.image && term.image !== "/images/placeholder.png" ? (
                          <img
                            src={term.image}
                            alt={term.title}
                            className="max-h-16 max-w-full object-contain opacity-50"
                            onError={(e) => {
                              e.currentTarget.style.display = "none"
                            }}
                          />
                        ) : (
                          <span className="text-4xl opacity-20">📄</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          Mechatronik Lexikon • LAP Fachgespräch 2025
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedTerm && (
            <Dialog open={!!selectedTerm} onOpenChange={(open) => !open && setSelectedTerm(null)}>
              <DialogContent className="max-w-[90vw] sm:max-w-3xl max-h-[90vh] p-0 overflow-hidden bg-[#111111] border border-gray-800">
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <DialogHeader className="bg-[#1a1a1a] border-b border-gray-800 p-6">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">
                        {categories[selectedTerm.category]?.icon}
                      </span>
                      <div className="flex-1">
                        <DialogTitle className="text-xl font-medium text-white">
                          {selectedTerm.title}
                        </DialogTitle>
                        <p className="text-sm text-gray-400 mt-1">
                          {categories[selectedTerm.category]?.title}
                          {selectedTerm.subcategory && ` → ${subcategories[selectedTerm.subcategory]?.title}`}
                        </p>
                      </div>
                    </div>
                  </DialogHeader>
                  <div className="p-6 overflow-y-auto max-h-[60vh]">
                    {/* Bild */}
                    {selectedTerm.image && selectedTerm.image !== "/images/placeholder.png" && (
                      <div className="mb-6">
                        <img
                          src={selectedTerm.image}
                          alt={selectedTerm.title}
                          className="w-full max-h-64 object-contain rounded-lg bg-[#0a0a0a] p-4 border border-gray-800"
                          onError={(e) => {
                            e.currentTarget.style.display = "none"
                          }}
                        />
                      </div>
                    )}
                    <div className="prose prose-invert max-w-none">
                      <h4 className="text-lg font-medium text-white mb-3">Beschreibung</h4>
                      <p className="text-gray-300 leading-relaxed mb-6 whitespace-pre-line">
                        {selectedTerm.description}
                      </p>
                      <div className="bg-[#1a1a1a] border-l-4 border-gray-700 p-4 rounded-r-lg">
                        <h4 className="font-medium text-white mb-2">Beispiele</h4>
                        <p className="text-gray-300">{selectedTerm.example}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
