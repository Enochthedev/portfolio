"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, ExternalLink, Github, ChevronDown } from "lucide-react"
import Persona from "@/components/Persona"
import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { useMobile } from "@/hooks/use-mobile"
import type { PortfolioProject } from "@/types/api"
import { getPortfolioProjects, getCategoryColor, getCategoryBgColor, getCategoryTextColor } from "@/api/portfolio"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const [projects, setProjects] = useState<PortfolioProject[]>([])
  const [loading, setLoading] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getPortfolioProjects()
        setProjects(data)
      } catch (error) {
        console.error("Failed to fetch projects:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  // Extract all unique categories
  const categories = Array.from(new Set(projects.map((project) => project.category))).sort()

  // Extract all unique skills
  const allSkills = Array.from(new Set(projects.flatMap((project) => project.tags))).sort()

  const filteredProjects = activeFilter
    ? projects.filter((project) => project.tags.includes(activeFilter) || project.category === activeFilter)
    : projects

  const handleCardClick = (id: number) => {
    if (expandedCard === id) {
      setExpandedCard(null)
    } else {
      setExpandedCard(id)
    }
  }

  if (loading) {
    return (
      <Section className="bg-[#F3F4F6]">
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="animate-pulse text-primary">Loading projects...</div>
        </div>
      </Section>
    )
  }

  return (
    <Section className="bg-[#F3F4F6]">
      <SectionHeader
        title={
          <span>
            <span className="text-[#8B5CF6]">Wave</span> Portfolio
          </span>
        }
        description="A collection of projects I've worked on, organized in a clean, Notion-inspired layout."
      />

      {/* Filters */}
      <div className="mb-6 md:mb-10">
        <div className="flex flex-wrap justify-center gap-2 mb-4 px-1">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition-all text-sm md:text-base ${
              activeFilter === null ? "bg-[#8B5CF6] text-white" : "bg-white text-[#1F2937] hover:bg-[#8B5CF6]/10"
            }`}
            onClick={() => setActiveFilter(null)}
          >
            All Projects
          </motion.button>

          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition-all text-sm md:text-base ${
                activeFilter === category
                  ? `bg-[#8B5CF6] text-white`
                  : `bg-white text-[#1F2937] hover:${getCategoryBgColor(category)}`
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-1 md:gap-2 px-1">
          {allSkills.map((skill) => (
            <motion.button
              key={skill}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm transition-all ${
                activeFilter === skill ? "bg-[#FB923C] text-white" : "bg-white text-[#4B5563] hover:bg-[#FB923C]/10"
              }`}
              onClick={() => setActiveFilter(skill)}
            >
              {skill}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${
                expandedCard === project.id ? "md:col-span-2 lg:col-span-3" : ""
              }`}
            >
              <div
                className={`cursor-pointer ${expandedCard === project.id ? "" : "h-full"}`}
                onClick={() => handleCardClick(project.id)}
              >
                {expandedCard === project.id ? (
                  <div className="p-4 md:p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h2 className="text-xl md:text-2xl font-bold text-[#1F2937]">{project.title}</h2>
                        <div className={`text-xs md:text-sm ${getCategoryTextColor(project.category)}`}>
                          {project.category}
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setExpandedCard(null)
                        }}
                        className="p-1 rounded-full hover:bg-[#F3F4F6]"
                      >
                        <X size={isMobile ? 16 : 20} className="text-[#4B5563]" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          loading="lazy"
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <p className="text-sm md:text-base text-[#4B5563] mb-4">{project.description}</p>

                        <div className="mb-4">
                          <h3 className="text-xs md:text-sm font-medium text-[#1F2937] mb-2">Technologies</h3>
                          <div className="flex flex-wrap gap-1 md:gap-2">
                            {project.tags.map((skill, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="bg-[#F9FAFB] text-[#4B5563] text-xs md:text-sm"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-2 md:gap-3">
                          <Button
                            variant="outline"
                            size={isMobile ? "sm" : "default"}
                            className="gap-1 md:gap-2"
                            asChild
                          >
                            <a
                              href="https://github.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Github size={isMobile ? 14 : 16} />
                              <span className="text-xs md:text-sm">Code</span>
                            </a>
                          </Button>

                          {project.link && (
                            <Button
                              variant="default"
                              size={isMobile ? "sm" : "default"}
                              className="gap-1 md:gap-2 bg-[#8B5CF6] hover:bg-[#7C3AED]"
                              asChild
                            >
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <ExternalLink size={isMobile ? 14 : 16} />
                                <span className="text-xs md:text-sm">View Demo</span>
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col">
                    <div
                      className={`h-2 ${getCategoryBgColor(project.category)} ${getCategoryColor(project.category)}`}
                    ></div>
                    <div className="p-3 md:p-5 flex-grow flex flex-col">
                      <div className="flex justify-between items-start mb-2 md:mb-3">
                        <h3 className="text-base md:text-lg font-medium text-[#1F2937]">{project.title}</h3>
                        <Badge
                          variant="outline"
                          className={`${getCategoryBgColor(project.category)} ${getCategoryTextColor(
                            project.category,
                          )} border-0 text-xs`}
                        >
                          {project.category}
                        </Badge>
                      </div>

                      <p className="text-xs md:text-sm text-[#4B5563] mb-3 md:mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-3 md:mb-4">
                        {project.tags.slice(0, 3).map((skill, index) => (
                          <Badge key={index} variant="outline" className="bg-[#F9FAFB] text-[#4B5563] text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {project.tags.length > 3 && (
                          <Badge variant="outline" className="bg-[#F9FAFB] text-[#4B5563] text-xs">
                            +{project.tags.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="mt-auto flex items-center justify-center text-[#8B5CF6] text-xs md:text-sm">
                        <ChevronDown size={isMobile ? 14 : 16} className="mr-1" />
                        <span>Click to expand</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8 md:py-12">
          <div className="mb-4 flex justify-center">
            <Persona emotion="confused" size={isMobile ? "small" : "medium"} />
          </div>
          <h3 className="text-lg md:text-xl font-medium text-[#1F2937] mb-2">No projects found</h3>
          <p className="text-sm md:text-base text-[#4B5563]">
            Try adjusting your filters to find what you're looking for.
          </p>
          <Button variant="outline" className="mt-4" onClick={() => setActiveFilter(null)}>
            Clear filters
          </Button>
        </motion.div>
      )}
    </Section>
  )
}
