"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { Search, ChevronDown, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Fuse from "fuse.js"
import { motion, AnimatePresence } from "framer-motion"
import { terms, categories, type Term } from "@/data/terms"

export default function MechatronikLexikon() {
  const [searchTerm, setSearchTerm] = useState("")
  const [collapsedCategories, setCollapsedCategories] = useState<Set<string>>(new Set())
  const [selectedTerm, setSelectedTerm] = useState<Term | null>(null)
  const [isSticky, setIsSticky] = useState(false)
  const controlsRef = useRef<HTMLDivElement>(null)
  const controlsPlaceholderRef = useRef<HTMLDivElement>(null)

  // Fuse.js Setup für Fuzzy Search
  const fuse = useMemo(() => {
    return new Fuse(terms, {
      keys: ["title", "description", "example"],
      threshold: 0.3,
      includeScore: true,
    })
  }, [])

  // Suchergebnisse
  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return []
    return fuse.search(searchTerm).map(result => result.item)
  }, [searchTerm, fuse])

  const toggleCategory = (categoryId: string) => {
    const newCollapsed = new Set(collapsedCategories)
    if (newCollapsed.has(categoryId)) {
      newCollapsed.delete(categoryId)
    } else {
      newCollapsed.add(categoryId)
    }
    setCollapsedCategories(newCollapsed)
  }

  const toggleAllCategories = () => {
    if (collapsedCategories.size === Object.keys(categories).length) {
      setCollapsedCategories(new Set())
    } else {
      setCollapsedCategories(new Set(Object.keys(categories)))
    }
  }

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

  const clearSearch = () => setSearchTerm("")
  const handleTermClick = (term: Term) => setSelectedTerm(term)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-purple-900 p-2 sm:p-4">
      <div className="max-w-6xl mx-auto bg-slate-800/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-700">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-4 sm:p-8 text-center border-b border-slate-600">
          <h1 className="text-2xl sm:text-4xl font-light mb-2 sm:mb-3">
            ⚙️ Mechatronik Lexikon
          </h1>
          <p className="text-sm sm:text-lg opacity-90 mb-2">
            Umfassendes Nachschlagewerk für das LAP Fachgespräch
          </p>
          <p className="text-xs sm:text-sm opacity-70">
            {terms.length} Begriffe in {Object.keys(categories).length} Kategorien
          </p>
        </div>

        <div ref={controlsPlaceholderRef} className={isSticky ? "h-[76px] sm:h-[84px]" : ""} />

        {/* Controls mit Animation */}
        <motion.div
          ref={controlsRef}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className={`${isSticky ? "fixed top-0 left-0 right-0 z-50 bg-slate-800/98 backdrop-blur-md shadow-lg" : "relative bg-slate-800/95 backdrop-blur-sm"} border-b border-slate-600 p-3 sm:p-4`}
        >
          <div className={`${isSticky ? "max-w-6xl mx-auto" : ""} flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center`}>
            <div className="flex-1 min-w-0 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <Input
                type="text"
                placeholder="Begriff suchen... (z.B. Schutzklasse, Diode, SPS)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-10 py-2 sm:py-3 rounded-full border-2 border-slate-600 bg-slate-700 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-0"
              />
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              )}
            </div>
            <Button
              onClick={() => toggleAllCategories()}
              variant="outline"
              className="rounded-full px-4 bg-slate-700 border-slate-600 text-white hover:bg-slate-600 text-sm"
            >
              {collapsedCategories.size === Object.keys(categories).length ? "Alle öffnen" : "Alle schliessen"}
            </Button>
          </div>
        </motion.div>

        {/* Suchergebnisse */}
        {searchTerm && (
          <div className="p-4 bg-slate-700/50">
            <p className="text-sm text-gray-400 mb-3">
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
                  {searchResults.map((term) => (
                    <motion.div
                      key={term.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleTermClick(term)}
                      className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-xl p-4 shadow-lg cursor-pointer"
                    >
                      <div className="font-semibold mb-1">{term.title}</div>
                      <div className="text-xs opacity-80">
                        {categories[term.category]?.icon} {categories[term.category]?.title}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="no-result"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center py-10 text-gray-400"
                >
                  <div className="text-3xl mb-2">🔍</div>
                  Keine Ergebnisse gefunden.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Kategorien (wenn keine Suche aktiv) */}
        {!searchTerm && (
          <div className="p-4">
            {Object.entries(categories).map(([categoryId, category]) => {
              const categoryTerms = terms.filter((t) => t.category === categoryId)
              const isCollapsed = collapsedCategories.has(categoryId)
              return (
                <div key={categoryId} className="mb-6 bg-slate-700/50 rounded-xl shadow-lg border border-slate-600 overflow-hidden">
                  <div
                    onClick={() => toggleCategory(categoryId)}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 flex items-center justify-between cursor-pointer hover:from-purple-500 hover:to-blue-500 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{category.icon}</span>
                      <div>
                        <h2 className="text-lg font-semibold">{category.title}</h2>
                        <p className="text-sm opacity-90">{category.description}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {categoryTerms.length} Begriffe • Bearbeitet von: {category.author}
                        </p>
                      </div>
                    </div>
                    <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isCollapsed ? "-rotate-90" : ""}`} />
                  </div>
                  <AnimatePresence>
                    {!isCollapsed && (
                      <motion.div
                        key="cat-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {categoryTerms.length > 0 ? (
                            categoryTerms.map((term) => (
                              <motion.div
                                key={term.id}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleTermClick(term)}
                                className="bg-gradient-to-br from-purple-600/80 to-blue-600/80 hover:from-purple-500 hover:to-blue-500 text-white rounded-xl p-4 shadow-lg cursor-pointer transition-all"
                              >
                                <div className="flex flex-col h-32 justify-between">
                                  <h3 className="text-base font-semibold text-center">{term.title}</h3>
                                  <div className="flex-1 flex items-center justify-center">
                                    <span className="text-4xl opacity-50">📄</span>
                                  </div>
                                </div>
                              </motion.div>
                            ))
                          ) : (
                            <div className="col-span-full text-center py-8 text-gray-400">
                              <div className="text-3xl mb-2">📝</div>
                              Noch keine Inhalte vorhanden.
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        )}

        {/* Footer */}
        <div className="bg-slate-700/30 text-center py-4 text-gray-400 text-sm border-t border-slate-600">
          Mechatronik Lexikon • LAP Fachgespräch 2025
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedTerm && (
            <Dialog open={!!selectedTerm} onOpenChange={(open) => !open && setSelectedTerm(null)}>
              <DialogContent className="max-w-[90vw] sm:max-w-2xl max-h-[90vh] p-0 overflow-hidden bg-white border-0 shadow-2xl">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <DialogHeader className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-6">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{categories[selectedTerm.category]?.icon}</span>
                      <div>
                        <DialogTitle className="text-xl font-semibold">
                          {selectedTerm.title}
                        </DialogTitle>
                        <p className="text-sm opacity-80 mt-1">
                          {categories[selectedTerm.category]?.title}
                        </p>
                      </div>
                    </div>
                  </DialogHeader>
                  <div className="p-6 overflow-y-auto max-h-[60vh]">
                    <div className="prose prose-slate max-w-none">
                      <h4 className="text-lg font-semibold text-slate-800 mb-3">Beschreibung</h4>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {selectedTerm.description}
                      </p>

                      <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                        <h4 className="font-semibold text-slate-700 mb-2">💡 Beispiele</h4>
                        <p className="text-gray-600">{selectedTerm.example}</p>
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
