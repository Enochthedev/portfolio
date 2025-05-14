"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Code,
  Twitch,
  Youtube,
  Power,
  MessageSquare,
  X,
} from "lucide-react"
import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { AnimatedCard } from "@/components/ui/AnimatedCard"
import { ComicCard } from "@/components/ui/ComicCard"
import { ContentTabs } from "@/components/ui/ContentTabs"
import type { TabItem } from "@/types"
import type { ContentStream, Platform, Project } from "@/types/api"
import { getContentStreams, getProjects, formatDate } from "@/api/content"
import { useMobile } from "@/hooks/use-mobile"

interface MusicTrack {
  title: string
  artist: string
  duration: string
}

export default function ContentPage() {
  const isMobile = useMobile()
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [tvOn, setTvOn] = useState(true)
  const [streams, setStreams] = useState<ContentStream[]>([])
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [showChat, setShowChat] = useState(!isMobile)

  useEffect(() => {
    async function fetchData() {
      try {
        const streamsData = await getContentStreams()
        const projectsData = await getProjects()
        setStreams(streamsData)
        setProjects(projectsData)
      } catch (error) {
        console.error("Failed to fetch content data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Set showChat based on mobile state
  useEffect(() => {
    setShowChat(!isMobile)
  }, [isMobile])

  const musicTracks: MusicTrack[] = [
    { title: "Coding Beats", artist: "LoFi Producer", duration: "3:45" },
    { title: "Stream Vibes", artist: "Chillhop", duration: "4:12" },
    { title: "Late Night Coding", artist: "Code Beats", duration: "3:28" },
    { title: "Focus Mode", artist: "Productivity Mix", duration: "5:01" },
  ]

  // Function to get platform icon based on platform name
  const getPlatformIcon = (platform: Platform) => {
    switch (platform) {
      case "Twitch":
        return <Twitch className="h-5 w-5" />
      case "YouTube":
        return <Youtube className="h-5 w-5" />
      default:
        return null
    }
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % musicTracks.length)
  }

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + musicTracks.length) % musicTracks.length)
  }

  const toggleTV = () => {
    setTvOn(!tvOn)
  }

  const toggleChat = () => {
    setShowChat(!showChat)
  }

  const streamsContent = (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
      {streams.map((stream, index) => (
        <AnimatedCard key={stream.id} index={index}>
          <ComicCard className="group h-full" borderColor="border-primary">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Image
                src={stream.thumbnail || "/placeholder.svg?height=200&width=350&query=stream+thumbnail"}
                alt={stream.title}
                width={350}
                height={200}
                loading="lazy"
                className="w-full h-36 sm:h-48 object-cover rounded-t-md"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button variant="secondary" size="sm" className="shadow-lg">
                  Watch Now
                </Button>
              </div>
              <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm p-1 rounded-md">
                {getPlatformIcon(stream.platform)}
              </div>
            </div>
            <CardHeader className="p-3 md:p-4">
              <CardTitle className="text-base md:text-lg line-clamp-1">{stream.title}</CardTitle>
              <CardDescription className="text-xs md:text-sm">
                {stream.platform} • {formatDate(stream.date)}
              </CardDescription>
            </CardHeader>
          </ComicCard>
        </AnimatedCard>
      ))}
    </div>
  )

  const projectsContent = (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {projects.map((project, index) => (
        <AnimatedCard key={project.id} index={index}>
          <ComicCard className="h-full" borderColor={project.color}>
            <div className="relative">
              <Image
                src={project.image || "/placeholder.svg?height=150&width=300&query=coding+project"}
                alt={project.title}
                width={300}
                height={150}
                loading="lazy"
                className="w-full h-32 sm:h-40 object-cover rounded-t-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                <Button variant="secondary" size="sm" className="gap-2 shadow-lg">
                  <Code className="h-4 w-4" />
                  View Code
                </Button>
              </div>
            </div>
            <CardHeader className="p-3 md:p-4">
              <CardTitle className="text-base md:text-lg line-clamp-1">{project.title}</CardTitle>
              <CardDescription className="text-xs md:text-sm line-clamp-2">{project.description}</CardDescription>
            </CardHeader>
            <CardFooter className="p-3 md:p-4 pt-0">
              <div className="flex flex-wrap gap-1 md:gap-2">
                {project.tags.slice(0, isMobile ? 3 : 5).map((tag, tagIndex) => (
                  <motion.span
                    key={tagIndex}
                    className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
                {project.tags.length > (isMobile ? 3 : 5) && (
                  <span className="px-2 py-0.5 bg-muted text-muted-foreground rounded-full text-xs">
                    +{project.tags.length - (isMobile ? 3 : 5)}
                  </span>
                )}
              </div>
            </CardFooter>
          </ComicCard>
        </AnimatedCard>
      ))}
    </div>
  )

  const musicContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <Card className="comic-border border-secondary overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20">
        <CardHeader className="pb-2 p-4">
          <CardTitle className="text-center text-lg md:text-xl">Retro Music Player</CardTitle>
          <CardDescription className="text-center text-xs md:text-sm">Tunes to code and stream to</CardDescription>
        </CardHeader>
        <CardContent className="p-3 md:p-4">
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-3 md:p-4 mb-3 md:mb-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-sm md:text-base">{musicTracks[currentTrack].title}</h3>
              <span className="text-xs md:text-sm text-muted-foreground">{musicTracks[currentTrack].duration}</span>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">{musicTracks[currentTrack].artist}</p>

            <div className="w-full bg-primary/20 rounded-full h-1.5 mb-4 md:mb-6">
              <motion.div
                className="bg-primary h-1.5 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: isPlaying ? "100%" : "0%" }}
                transition={{ duration: 30, ease: "linear" }}
              ></motion.div>
            </div>

            <div className="flex items-center justify-center gap-2 md:gap-4">
              <Button variant="ghost" size="icon" onClick={prevTrack} className="h-9 w-9 md:h-10 md:w-10">
                <SkipBack className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <Button
                variant="default"
                size="icon"
                className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary hover:bg-primary/90"
                onClick={togglePlay}
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4 md:h-5 md:w-5" />
                ) : (
                  <Play className="h-4 w-4 md:h-5 md:w-5 ml-0.5" />
                )}
              </Button>
              <Button variant="ghost" size="icon" onClick={nextTrack} className="h-9 w-9 md:h-10 md:w-10">
                <SkipForward className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </div>
          </div>

          <div className="space-y-1 md:space-y-2">
            {musicTracks.map((track, index) => (
              <motion.div
                key={index}
                className={`flex items-center justify-between p-2 md:p-3 rounded-md ${
                  currentTrack === index ? "bg-primary/20 border border-primary/30" : "hover:bg-muted/50"
                }`}
                whileHover={{ x: 5 }}
                onClick={() => setCurrentTrack(index)}
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    {currentTrack === index && isPlaying ? (
                      <div className="flex items-center gap-0.5">
                        <motion.div
                          className="w-1 bg-primary"
                          animate={{ height: [4, 12, 4] }}
                          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
                        ></motion.div>
                        <motion.div
                          className="w-1 bg-primary"
                          animate={{ height: [12, 4, 12] }}
                          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, delay: 0.2 }}
                        ></motion.div>
                        <motion.div
                          className="w-1 bg-primary"
                          animate={{ height: [8, 16, 8] }}
                          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, delay: 0.4 }}
                        ></motion.div>
                      </div>
                    ) : (
                      <span className="text-xs">{index + 1}</span>
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-xs md:text-sm">{track.title}</p>
                    <p className="text-xs text-muted-foreground hidden sm:block">{track.artist}</p>
                  </div>
                </div>
                <span className="text-xs md:text-sm text-muted-foreground">{track.duration}</span>
              </motion.div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between p-3 md:p-4">
          <Button variant="ghost" size="sm" className="gap-1 md:gap-2 h-8 md:h-9">
            <Volume2 className="h-3 w-3 md:h-4 md:w-4" />
            <span className="text-xs md:text-sm">Volume</span>
          </Button>
          <Button variant="outline" size="sm" className="h-8 md:h-9 text-xs md:text-sm">
            Add to Playlist
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )

  const tabs: TabItem[] = [
    {
      value: "streams",
      label: "Streams",
      emotion: "content",
      content: streamsContent,
    },
    {
      value: "projects",
      label: "Projects",
      emotion: "excited",
      content: projectsContent,
    },
    {
      value: "music",
      label: "Music",
      emotion: "happy",
      content: musicContent,
    },
  ]

  if (loading) {
    return (
      <Section>
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="animate-pulse text-primary">Loading content...</div>
        </div>
      </Section>
    )
  }

  return (
    <Section className="px-2 sm:px-4">
      <SectionHeader
        title={
          <span>
            <span className="text-primary">Content</span> <span className="text-secondary">Hub</span>
          </span>
        }
        description="Streams, coding projects, and music all in one place!"
      />

      {/* Twitch Stream Section */}
      <div className="mb-8 md:mb-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 flex flex-col md:flex-row gap-4"
        >
          <div className={`tv-box relative ${!isMobile || !showChat ? "w-full" : "md:w-2/3"}`}>
            <div className="hidden sm:block tv-antenna"></div>
            <div className="hidden sm:block tv-knob"></div>
            <div className="flex justify-between items-center mb-2 md:mb-4">
              <div className="flex items-center gap-1 md:gap-2">
                <Twitch className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                <span className="text-white font-bold text-sm md:text-base">LIVE STREAM</span>
              </div>
              <div className="flex gap-2">
                {isMobile && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:text-white/80 text-xs h-8 px-2"
                    onClick={toggleChat}
                  >
                    {showChat ? (
                      <X className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                    ) : (
                      <MessageSquare className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                    )}
                    <span>{showChat ? "Hide Chat" : "Show Chat"}</span>
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-secondary hover:text-secondary/80 text-xs h-8 px-2"
                  onClick={toggleTV}
                >
                  <Power className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                  <span>{tvOn ? "OFF" : "ON"}</span>
                </Button>
              </div>
            </div>

            <div className="relative aspect-video w-full overflow-hidden rounded-md">
              {tvOn ? (
                <iframe
                  src="https://player.twitch.tv/?channel=wavedidwhat&parent=wavedidwhat.xyz"
                  height="100%"
                  width="100%"
                  className="absolute inset-0"
                  allowFullScreen
                  title="Wave's Twitch Stream"
                ></iframe>
              ) : (
                <div className="absolute inset-0 bg-black flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-white text-opacity-20 text-4xl sm:text-6xl md:text-9xl mb-2 md:mb-4">📺</div>
                    <p className="text-white text-opacity-50 text-sm md:text-base">Stream is currently offline</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 md:mt-4 border-primary text-primary hover:bg-primary/10 h-8"
                      onClick={toggleTV}
                    >
                      Turn On
                    </Button>
                  </div>
                </div>
              )}

              {/* TV Scan lines effect */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-black/10 mix-blend-overlay"></div>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, rgba(255,255,255,0.03), rgba(255,255,255,0.03) 1px, transparent 1px, transparent 2px)",
                  backgroundSize: "100% 2px",
                }}
              ></div>
            </div>

            <div className="flex justify-between items-center mt-2 md:mt-4">
              <span className="text-white text-opacity-70 text-xs md:text-sm">Channel: Wave</span>
              <span className="text-white text-opacity-70 text-xs md:text-sm hidden sm:block">
                Follow for notifications!
              </span>
            </div>
          </div>

          {/* Chat section - only shown when toggled on mobile or always on desktop */}
          {(showChat || !isMobile) && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className={`bg-black/80 rounded-md overflow-hidden ${isMobile ? "w-full" : "md:w-1/3"} h-[300px] md:h-auto`}
            >
              <div className="flex items-center justify-between bg-black/90 p-2">
                <div className="flex items-center gap-1">
                  <MessageSquare className="h-3 w-3 md:h-4 md:w-4 text-white" />
                  <span className="text-white text-xs md:text-sm font-medium">Live Chat</span>
                </div>
                {isMobile && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0 text-white hover:text-white/80"
                    onClick={toggleChat}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                )}
              </div>
              <iframe
                src="https://www.twitch.tv/embed/wavedidwhat/chat?parent=wavedidwhat.xyz&darkpopout"
                height="100%"
                width="100%"
                className="h-full"
                title="Twitch chat"
              ></iframe>
            </motion.div>
          )}
        </motion.div>

        {/* Stream info and buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="bg-black/30 backdrop-blur-sm rounded-md p-3 md:p-4 mb-6"
        >
          <h3 className="font-bold text-sm md:text-base text-white mb-1">Latest Stream: Coding the Wave Portal</h3>
          <p className="text-white/70 text-xs md:text-sm mb-3">
            Join me as I build interactive web experiences with React and Three.js
          </p>
          <div className="flex flex-wrap gap-2">
            <Button size="sm" className="h-8 md:h-9 text-xs md:text-sm gap-1 md:gap-2">
              <Twitch className="h-3 w-3 md:h-4 md:w-4" />
              Follow
            </Button>
            <Button variant="outline" size="sm" className="h-8 md:h-9 text-xs md:text-sm">
              View Schedule
            </Button>
            <Button variant="secondary" size="sm" className="h-8 md:h-9 text-xs md:text-sm ml-auto">
              Subscribe
            </Button>
          </div>
        </motion.div>
      </div>

      <ContentTabs tabs={tabs} defaultValue="streams" className="mb-12 md:mb-20" />

      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-primary">Want More Content?</h2>
        <p className="text-muted-foreground mb-4 md:mb-6 max-w-2xl mx-auto text-sm md:text-base">
          Follow me on social media to stay updated with the latest streams, projects, and music!
        </p>
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          <Button
            variant="outline"
            className="gap-2 border-primary text-primary hover:bg-primary/10 h-9 md:h-10 text-xs md:text-sm"
          >
            <Twitch className="h-3 w-3 md:h-4 md:w-4" />
            <span>Twitch</span>
          </Button>
          <Button
            variant="outline"
            className="gap-2 border-secondary text-secondary hover:bg-secondary/10 h-9 md:h-10 text-xs md:text-sm"
          >
            <Youtube className="h-3 w-3 md:h-4 md:w-4" />
            <span>YouTube</span>
          </Button>
          <Button variant="default" className="gap-2 bg-primary hover:bg-primary/90 h-9 md:h-10 text-xs md:text-sm">
            <span>Subscribe</span>
          </Button>
        </div>
      </motion.div>
    </Section>
  )
}
