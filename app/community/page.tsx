"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThumbsUp, MessageSquare, Share2, Send, ExternalLink } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { ContentTabs } from "@/components/ui/ContentTabs"
import type { TabItem } from "@/types"

interface Comment {
  id: number
  user: {
    name: string
    avatar: string
  }
  text: string
  likes: number
  time: string
}

interface Poll {
  id: number
  question: string
  options: {
    text: string
    votes: number
  }[]
  totalVotes: number
  userVoted: number | null
}

interface SocialPlatform {
  platform: string
  icon: string
  iconClass: string
  posts: any[]
}

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("highlights")
  const [commentText, setCommentText] = useState("")
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      user: {
        name: "Alex",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      text: "Love your content! The coding tutorials have been super helpful for my projects.",
      likes: 12,
      time: "2 hours ago",
    },
    {
      id: 2,
      user: {
        name: "Sam",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      text: "That NFT collection is fire! When's the next drop?",
      likes: 8,
      time: "5 hours ago",
    },
    {
      id: 3,
      user: {
        name: "Jordan",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      text: "The stream yesterday was awesome. Learned a lot about React Three Fiber!",
      likes: 15,
      time: "1 day ago",
    },
  ])

  const [polls, setPolls] = useState<Poll[]>([
    {
      id: 1,
      question: "What content would you like to see more of?",
      options: [
        { text: "Coding Tutorials", votes: 45 },
        { text: "Gaming Streams", votes: 28 },
        { text: "Web3 & NFTs", votes: 37 },
        { text: "Behind the Scenes", votes: 19 },
      ],
      totalVotes: 129,
      userVoted: null,
    },
    {
      id: 2,
      question: "Which project should I work on next?",
      options: [
        { text: "3D Portfolio with Three.js", votes: 52 },
        { text: "NFT Marketplace", votes: 38 },
        { text: "Mobile App", votes: 25 },
        { text: "AI Integration", votes: 41 },
      ],
      totalVotes: 156,
      userVoted: null,
    },
  ])

  const socialHighlights: SocialPlatform[] = [
    {
      platform: "X",
      icon: "/placeholder.svg?height=30&width=30",
      iconClass: "bg-black text-white",
      posts: [
        {
          id: "x1",
          user: {
            name: "Wave",
            handle: "@wavedidwhat",
            avatar: "/images/wave-character.png",
          },
          content: "Just launched a new NFT collection! Check out the gallery on my website 🚀 #NFT #Web3 #DigitalArt",
          likes: 142,
          reposts: 38,
          comments: 24,
          time: "2 days ago",
          image: "/placeholder.svg?height=200&width=400",
        },
        {
          id: "x2",
          user: {
            name: "Wave",
            handle: "@wavedidwhat",
            avatar: "/images/wave-character.png",
          },
          content:
            "Going live in 30 minutes to code a new React component from scratch! Join me on Twitch 💻 #WebDev #ReactJS #LiveCoding",
          likes: 87,
          reposts: 12,
          comments: 9,
          time: "1 week ago",
        },
        {
          id: "x3",
          user: {
            name: "Web3 Conference",
            handle: "@web3conf",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          content:
            "We're excited to announce @wavedidwhat as a speaker at our upcoming conference! Can't wait to hear about your journey in the Web3 space.",
          likes: 215,
          reposts: 64,
          comments: 31,
          time: "3 weeks ago",
        },
      ],
    },
    {
      platform: "Twitch",
      icon: "/placeholder.svg?height=30&width=30",
      iconClass: "bg-[#9146FF] text-white",
      posts: [
        {
          id: "twitch1",
          title: "Building a 3D Portfolio with Three.js",
          thumbnail: "/placeholder.svg?height=200&width=350",
          views: 1248,
          duration: "2:45:18",
          date: "Yesterday",
          clips: [
            {
              title: "That moment when the 3D animation finally worked",
              views: 532,
              duration: "0:58",
            },
          ],
        },
        {
          id: "twitch2",
          title: "Web3 Development: Creating Your First dApp",
          thumbnail: "/placeholder.svg?height=200&width=350",
          views: 876,
          duration: "3:12:45",
          date: "3 days ago",
          clips: [
            {
              title: "Explaining smart contracts in simple terms",
              views: 421,
              duration: "1:24",
            },
          ],
        },
        {
          id: "twitch3",
          title: "Late Night Coding Session: Fixing Bugs & Vibing",
          thumbnail: "/placeholder.svg?height=200&width=350",
          views: 654,
          duration: "4:02:37",
          date: "1 week ago",
          clips: [
            {
              title: "When the bug was just a missing semicolon",
              views: 789,
              duration: "0:42",
            },
          ],
        },
      ],
    },
    {
      platform: "Discord",
      icon: "/placeholder.svg?height=30&width=30",
      iconClass: "bg-[#5865F2] text-white",
      posts: [
        {
          id: "discord1",
          channel: "#announcements",
          content:
            "Hey everyone! I've just updated the community resources section with new tutorials and code snippets. Check them out in the #resources channel!",
          reactions: [
            { emoji: "🎉", count: 45 },
            { emoji: "👍", count: 32 },
            { emoji: "❤️", count: 28 },
          ],
          time: "Yesterday",
        },
        {
          id: "discord2",
          channel: "#project-showcase",
          user: {
            name: "DevMaster",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          content:
            "I built this portfolio site using the techniques from Wave's React workshop. Thanks for the inspiration!",
          image: "/placeholder.svg?height=150&width=300",
          reactions: [
            { emoji: "🔥", count: 38 },
            { emoji: "👏", count: 27 },
          ],
          time: "2 days ago",
        },
        {
          id: "discord3",
          channel: "#events",
          content:
            "Our monthly community coding challenge starts tomorrow! This month's theme: 'Interactive Data Visualization'. Prize pool: $200 in crypto!",
          reactions: [
            { emoji: "🚀", count: 56 },
            { emoji: "💻", count: 42 },
            { emoji: "💰", count: 39 },
          ],
          time: "3 days ago",
        },
      ],
    },
  ]

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (commentText.trim() === "") return

    const newComment = {
      id: comments.length + 1,
      user: {
        name: "You",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      text: commentText,
      likes: 0,
      time: "Just now",
    }

    setComments([newComment, ...comments])
    setCommentText("")
  }

  const handleVote = (pollId: number, optionIndex: number) => {
    setPolls(
      polls.map((poll) => {
        if (poll.id === pollId) {
          const updatedOptions = poll.options.map((option, index) => {
            if (index === optionIndex) {
              return { ...option, votes: option.votes + 1 }
            }
            return option
          })

          return {
            ...poll,
            options: updatedOptions,
            totalVotes: poll.totalVotes + 1,
            userVoted: optionIndex,
          }
        }
        return poll
      }),
    )
  }

  const highlightsContent = (
    <div className="space-y-12">
      {socialHighlights.map((platform) => (
        <motion.div
          key={platform.platform}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full ${platform.iconClass} flex items-center justify-center`}>
              {platform.platform === "X" && <span className="font-bold">𝕏</span>}
              {platform.platform === "Twitch" && <span className="text-xl">󠁧</span>}
              {platform.platform === "Discord" && <span className="text-xl">󠁧</span>}
            </div>
            <h2 className="text-2xl font-bold text-[#1F2937]">{platform.platform} Highlights</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platform.platform === "X" &&
              platform.posts.map((post) => (
                <motion.div
                  key={post.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-[#E5E7EB]"
                >
                  <div className="p-4">
                    <div className="flex items-start gap-3 mb-3">
                      <Avatar className="h-10 w-10 rounded-full border border-[#E5E7EB]">
                        <AvatarImage src={post.user.avatar} alt={post.user.name} />
                        <AvatarFallback>{post.user.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="font-bold text-[#1F2937]">{post.user.name}</span>
                          <span className="text-[#6B7280] text-sm">{post.user.handle}</span>
                        </div>
                        <span className="text-xs text-[#6B7280]">{post.time}</span>
                      </div>
                    </div>

                    <p className="text-[#1F2937] mb-3">{post.content}</p>

                    {post.image && (
                      <div className="mb-3 rounded-lg overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt="Post image"
                          width={400}
                          height={200}
                          loading="lazy"
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    )}

                    <div className="flex items-center justify-between text-sm text-[#6B7280]">
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Share2 className="h-4 w-4" />
                        <span>{post.reposts}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

            {platform.platform === "Twitch" &&
              platform.posts.map((stream) => (
                <motion.div
                  key={stream.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-[#E5E7EB]"
                >
                  <div className="relative">
                    <Image
                      src={stream.thumbnail || "/placeholder.svg"}
                      alt={stream.title}
                      width={350}
                      height={200}
                      loading="lazy"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                      {stream.duration}
                    </div>
                    <div className="absolute top-2 left-2 bg-[#9146FF] text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span>LIVE</span>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-bold text-[#1F2937] mb-2">{stream.title}</h3>

                    <div className="flex justify-between text-sm text-[#6B7280] mb-3">
                      <span>{stream.views.toLocaleString()} views</span>
                      <span>{stream.date}</span>
                    </div>

                    {stream.clips && stream.clips.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-[#E5E7EB]">
                        <div className="text-xs font-medium text-[#6B7280] mb-2">POPULAR CLIP</div>
                        <div className="text-sm text-[#1F2937]">{stream.clips[0].title}</div>
                        <div className="text-xs text-[#6B7280] mt-1">
                          {stream.clips[0].views.toLocaleString()} views • {stream.clips[0].duration}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

            {platform.platform === "Discord" &&
              platform.posts.map((post) => (
                <motion.div
                  key={post.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-[#E5E7EB]"
                >
                  <div className="bg-[#5865F2]/10 px-4 py-2 border-b border-[#E5E7EB]">
                    <div className="text-[#5865F2] font-medium">{post.channel}</div>
                  </div>

                  <div className="p-4">
                    {post.user && (
                      <div className="flex items-center gap-2 mb-3">
                        <Avatar className="h-8 w-8 rounded-full">
                          <AvatarImage src={post.user.avatar} alt={post.user.name} />
                          <AvatarFallback>{post.user.name[0]}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium text-[#1F2937]">{post.user.name}</span>
                      </div>
                    )}

                    <p className="text-[#1F2937] mb-3">{post.content}</p>

                    {post.image && (
                      <div className="mb-3 rounded-lg overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt="Post image"
                          width={300}
                          height={150}
                          loading="lazy"
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-2">
                      {post.reactions.map((reaction, index) => (
                        <div
                          key={index}
                          className="bg-[#F3F4F6] rounded-full px-2 py-1 text-sm flex items-center gap-1"
                        >
                          <span>{reaction.emoji}</span>
                          <span className="text-[#6B7280]">{reaction.count}</span>
                        </div>
                      ))}
                    </div>

                    <div className="text-xs text-[#6B7280] mt-2">{post.time}</div>
                  </div>
                </motion.div>
              ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="gap-2">
              <span>View more on {platform.platform}</span>
              <ExternalLink size={16} />
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  )

  const discussionsContent = (
    <div className="max-w-3xl mx-auto">
      <Card className="comic-border mb-8 border-primary shadow-glow">
        <CardHeader>
          <CardTitle className="text-primary">Join the Conversation</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCommentSubmit} className="space-y-4">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Your avatar" />
                <AvatarFallback>You</AvatarFallback>
              </Avatar>
              <Textarea
                placeholder="Share your thoughts..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="min-h-[100px] border-primary focus:ring-primary"
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit" className="gap-2 bg-primary hover:bg-primary/90 shadow-glow-sm">
                <Send className="h-4 w-4" />
                <span>Post Comment</span>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {comments.map((comment) => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="speech-bubble shadow-glow-sm">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src={comment.user.avatar} alt={comment.user.name} />
                  <AvatarFallback>{comment.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">{comment.user.name}</h3>
                    <span className="text-xs text-muted-foreground">{comment.time}</span>
                  </div>
                  <p className="mb-4">{comment.text}</p>
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="gap-1 text-primary">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{comment.likes}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-1 text-secondary">
                      <MessageSquare className="h-4 w-4" />
                      <span>Reply</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-1 text-accent-blue">
                      <Share2 className="h-4 w-4" />
                      <span>Share</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const pollsContent = (
    <div className="max-w-3xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {polls.map((poll) => (
          <motion.div
            key={poll.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="comic-border overflow-hidden border-secondary hover:shadow-lg transition-all duration-300 shadow-glow-sm">
              <CardHeader>
                <CardTitle className="text-xl text-secondary">{poll.question}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {poll.options.map((option, index) => {
                  const percentage = Math.round((option.votes / poll.totalVotes) * 100) || 0

                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{option.text}</span>
                        <span className="text-sm text-muted-foreground">{percentage}%</span>
                      </div>
                      <div className="relative">
                        <Progress
                          value={percentage}
                          className="h-8 bg-secondary/20"
                          indicatorClassName="bg-secondary"
                        />
                        {poll.userVoted === index && (
                          <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                            <span className="text-xs bg-secondary text-white px-2 py-1 rounded-full">Your Vote</span>
                          </div>
                        )}
                      </div>
                      {poll.userVoted === null && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full mt-1 border-secondary text-secondary hover:bg-secondary/10"
                          onClick={() => handleVote(poll.id, index)}
                        >
                          Vote
                        </Button>
                      )}
                    </div>
                  )
                })}
              </CardContent>
              <CardFooter className="flex justify-between border-t px-6 py-4">
                <span className="text-sm text-muted-foreground">{poll.totalVotes} votes</span>
                <Button variant="ghost" size="sm" className="text-secondary">
                  Share Poll
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 p-6 comic-border bg-card border-primary shadow-glow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h3 className="text-xl font-bold mb-4 text-primary">Suggest a Poll</h3>
        <p className="mb-4">Have an idea for a community poll? Let me know what you'd like to see!</p>
        <form className="space-y-4">
          <Textarea
            placeholder="Suggest a poll question..."
            className="min-h-[100px] border-primary focus:ring-primary"
          />
          <Button className="w-full bg-primary hover:bg-primary/90 shadow-glow-sm">Submit Suggestion</Button>
        </form>
      </motion.div>
    </div>
  )

  const tabs: TabItem[] = [
    {
      value: "highlights",
      label: "Social Highlights",
      emotion: "community",
      content: highlightsContent,
    },
    {
      value: "discussions",
      label: "Discussions",
      emotion: "community",
      content: discussionsContent,
    },
    {
      value: "polls",
      label: "Polls & Voting",
      emotion: "excited",
      content: pollsContent,
    },
  ]

  return (
    <Section className="bg-gradient-to-b from-[#F3F4F6] to-[#FAFAFA]">
      <SectionHeader
        title={
          <span>
            <span className="text-primary">Community</span> <span className="text-secondary">Interaction</span>
          </span>
        }
        description="Join the conversation across platforms with highlights from X, Twitch, and Discord!"
      />

      <ContentTabs tabs={tabs} defaultValue="highlights" className="mb-20" />

      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-primary">Join Our Community</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Connect with like-minded individuals in our Discord server and social media channels!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 shadow-glow-sm">
            Discord
          </Button>
          <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 shadow-glow-sm">
            X
          </Button>
          <Button variant="default" className="bg-primary hover:bg-primary/90 shadow-glow">
            Subscribe to Newsletter
          </Button>
        </div>
      </motion.div>
    </Section>
  )
}
