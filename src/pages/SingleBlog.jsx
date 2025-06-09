import React from "react";
import { useParams } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import blogs from "../data/blogs";
import Navbar1 from "../components/Navbar1";
import { GoDotFill } from "react-icons/go";
import socials from "../assets/Socials.png";
import RelatedPosts from "../components/RelatedPosts";
import MainLayout from "../layout/MainLayout";

const SingleBlog = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <>
      <MainLayout>
        <div className="m-4">
          <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 bg-primary1 mt-6 rounded-2xl">
            <div className="">
              {/* Heading */}
              <div className="relative mx-auto max-w-xl md:w[50%] md:p-6">
                <h1 className="md:text-4xl text-xl font-bold text-dark2">
                  {blog.title}
                </h1>
              </div>
              <img src={blog.image} className="md:p-6 mt-1" />
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 bg-primary1 mt-10 md:mt-20 rounded-2xl">
            <div className="relative mx-auto md:w-[60%]">
              <h1 className="text-dark3 md:text-3xl font-bold text-xl ">
                Introduction
              </h1>
              <p className="mt-5 text-xs">{blog.content}</p>
              <p className="mt-2 text-xs">
                Luckily, do you know LinkedIn provides a more structured and
                less intimidating way to network with people? If you're an
                introvert looking to expand your professional connections, this
                article will help you use LinkedIn effectively without stepping
                too far outside your comfort zone.
              </p>
              <img src={blog.image} className="md:mt-10 mt-5" />
              <div className="border-l-2 pl-1 border-dark2 mt-1">
                <p className="text-xs">
                  <span className="text-dark4 text-xs">
                    Image caption: {""}{" "}
                  </span>
                  {blog.caption}
                </p>
              </div>
              {/* h1 */}
              <div className="mt-10">
                <h1 className="text-sm font-bold">
                  1. Optimize Your LinkedIn Profile
                </h1>
                <p className="text-xs mt-2">
                  One of the things that can make you present more
                  professionally and ensure you get a response is if you have a
                  well-optimized profile. Before reaching out to others, ensure
                  your profile represents you well. This makes it easier for
                  potential connections to understand who you are and why they
                  should engage with you. A saying says how you present yourself
                  will be addressed, so invest your time in personal branding
                  and watch yourself connecting with expertise and
                  professionals.
                </p>
              </div>
              <div>
                <h1 className="text-sm font-bold mt-10">
                  Key Requirement For Profile Enhancements:
                </h1>
                {/* 1 */}
                <div className="flex gap-4 mt-1 pb-1">
                  <span>
                    <GoDotFill />
                  </span>
                  <p className="text-xs">
                    <span className="text-sm font-bold">
                      Professional Headshot:{" "}
                    </span>
                    Upload a clear, professional photo with a plain background
                    that makes a great first impression.
                  </p>
                </div>
                {/* 2 */}
                <div className="flex gap-4 mt-1 pb-1">
                  <span>
                    <GoDotFill />
                  </span>
                  <p className="text-xs">
                    <span className="text-sm font-bold">
                      Professional Headshot:{" "}
                    </span>
                    Highlight your expertise and the value you bring (e.g., "SEO
                    Content Marketing Strategist | SEO Expert | I help blog rank
                    on Google SERPs").
                  </p>
                </div>
                {/* 3 */}
                <div className="flex gap-4 mt-1 pb-1">
                  <span>
                    <GoDotFill />
                  </span>
                  <p className="text-xs">
                    <span className="text-sm font-bold">
                      Engaging About Section:{" "}
                    </span>
                    Share your professional journey, passions, and what you're
                    looking for on LinkedIn. A professional summary of yourself
                    gives some information about you, the project you've worked
                    on, key deliverables, and your experience in the expertise
                    you claimed.
                  </p>
                </div>
                {/* 4 */}
                <div className="flex gap-4 mt-1 pb-1">
                  <span>
                    <GoDotFill />
                  </span>
                  <p className="text-xs">
                    <span className="text-sm font-bold">
                      Experience & Skills:{" "}
                    </span>
                    If you want to get a response from professionals on LinkedIn
                    quickly, you need to showcase your work history and add
                    relevant skills to attract like-minded professionals.
                  </p>
                </div>
              </div>
              {/* h2 */}
              <div className="mt-10">
                <h1 className="text-sm font-bold">
                  2. Engage Through Thoughtful Content
                </h1>
                <p className="text-xs mt-2">
                  One of the best ways to network without direct messaging is by
                  sharing valuable content. When people check your profile and
                  see how professional it is and thereby proceed to check your
                  post, and they find engaging and educative posts, they will
                  likely want to connect with you because of the great value
                  that you shared.
                </p>
              </div>
              <div>
                <h1 className="text-sm font-bold mt-10">
                  Ways to Share Content:
                </h1>
                {/* 1 */}
                <div className="flex gap-4 mt-1 pb-1">
                  <span>
                    <GoDotFill />
                  </span>
                  <p className="text-xs">
                    <span className="text-sm font-bold">Write Posts: </span>
                    It is essential to know that your post should be based on
                    your niche and not outside to maintain your brand. Share
                    insights, industry trends, or lessons from your experiences.
                  </p>
                </div>
                {/* 2 */}
                <div className="flex gap-4 mt-1 pb-1">
                  <span>
                    <GoDotFill />
                  </span>
                  <p className="text-xs">
                    <span className="text-sm font-bold">
                      Comment on Others' Posts:{" "}
                    </span>
                    Another tip is to provide meaningful responses or comments
                    to post on Linkedin instead of just liking content. LinkedIn
                    – posting, commenting, sharing, connecting with others on
                    the platforms shows a high level of engagement within their
                    networks,” says Jonathan Reynolds, CEO of Titus Talent
                    Strategies.
                  </p>
                </div>
                {/* 3 */}
                <div className="flex gap-4 mt-1 pb-1">
                  <span>
                    <GoDotFill />
                  </span>
                  <p className="text-xs">
                    <span className="text-sm font-bold">
                      Share Articles & Insights:{" "}
                    </span>
                    If writing long posts is daunting, share relevant articles
                    with a brief caption.
                  </p>
                </div>
                {/* 4 */}
                <div className="flex gap-4 mt-1 pb-1">
                  <span>
                    <GoDotFill />
                  </span>
                  <p className="text-xs">
                    <span className="text-sm font-bold">
                      Use LinkedIn Stories & Polls:{" "}
                    </span>
                    These are engaging tools that allow quick interactions
                    without deep conversations. You can achieve this in no time.
                    You only need to leverage the tool and create an interactive
                    poll.
                  </p>
                </div>
              </div>
              {/* h3 */}
              <div className="mt-10">
                <h1 className="text-sm font-bold">
                  3. Connect with the Right People
                </h1>
                <p className="text-xs mt-2">
                  Introverts often prefer deep, meaningful relationships over a
                  vast network of acquaintances. Focus on quality over quantity.
                  Many individuals on LinkedIn believe that having an extensive
                  network might seem impressive, but they won't add value if
                  your connections don't align with your industry, interests, or
                  goals. A relevant network leads to meaningful interactions,
                  job opportunities, and business growth.
                </p>
              </div>
              <div>
                <h1 className="text-sm font-bold mt-10">
                  Strategies for Building Connections:
                </h1>
                {/* 1 */}
                <div className="flex gap-4 mt-1 pb-1">
                  <span>
                    <GoDotFill />
                  </span>
                  <p className="text-xs">
                    <span className="text-sm font-bold">
                      Start with People You Know:{" "}
                    </span>
                    Connect with colleagues, classmates, and industry peers.
                  </p>
                </div>
                {/* 2 */}
                <div className="flex gap-4 mt-1 pb-1">
                  <span>
                    <GoDotFill />
                  </span>
                  <p className="text-xs">
                    <span className="text-sm font-bold">
                      Personalize Connection Requests:{" "}
                    </span>
                    Instead of sending a blank request, add a note explaining
                    why you want to connect. This will position me as a
                    professional and some random individual.
                  </p>
                </div>
                {/* 3 */}
                <div className="flex gap-4 mt-1 pb-1">
                  <span>
                    <GoDotFill />
                  </span>
                  <p className="text-xs">
                    <span className="text-sm font-bold">
                      Join LinkedIn Groups:{" "}
                    </span>
                    Engage in discussions related to your industry and
                    interests.
                  </p>
                </div>
                {/* 4 */}
                <div className="flex gap-4 mt-1 pb-1">
                  <span>
                    <GoDotFill />
                  </span>
                  <p className="text-xs">
                    <span className="text-sm font-bold">
                      Follow Thought Leaders:{" "}
                    </span>
                    Learning from and interacting with industry experts can help
                    you stay informed and build relationships.
                  </p>
                </div>
              </div>
              {/* h4 */}
              <div className="mt-10">
                <h1 className="text-sm font-bold">
                  4. Master the Art of Meaningful Messaging
                </h1>
                <p className="text-xs mt-2">
                  Starting conversations online can be easier than in person,
                  but your messages must be intentional. Make sure you craft
                  your messages intentionally and do not make them look like
                  random chats with your friends because this platform is a
                  professional space.
                </p>
              </div>
              <div>
                <h1 className="text-sm font-bold mt-10">Best Practices:</h1>
                {/* 1 */}
                <div className="flex gap-4 mt-1 pb-1">
                  <span>
                    <GoDotFill />
                  </span>
                  <p className="text-xs">
                    <span className="text-sm font-bold">
                      Use a Friendly and Professional Tone:{" "}
                    </span>
                    Keep messages warm but concise. Do not ask for unnecessary,
                    personal, or out-of-the-box questions.
                  </p>
                </div>
                {/* 2 */}
                <div className="flex gap-4 mt-1 pb-1">
                  <span>
                    <GoDotFill />
                  </span>
                  <p className="text-xs">
                    <span className="text-sm font-bold">
                      Avoid Generic Openers:{" "}
                    </span>
                    Instead of "Hi, let's connect," try "I enjoyed your post on
                    [topic], and it was so impactful. I would love to stay
                    connected and get more valuable insights."
                  </p>
                </div>
                {/* 3 */}
                <div className="flex gap-4 mt-1 pb-1">
                  <span>
                    <GoDotFill />
                  </span>
                  <p className="text-xs">
                    <span className="text-sm font-bold">Offer Value: </span>
                    Share a relevant article, congratulate them on a milestone,
                    or mention a common interest.
                  </p>
                </div>
                {/* 4 */}
                <div className="flex gap-4 mt-1 pb-1">
                  <span>
                    <GoDotFill />
                  </span>
                  <p className="text-xs">
                    <span className="text-sm font-bold">
                      Don't Force Conversations:{" "}
                    </span>
                    If someone doesn't respond, move on and try with others.
                    Millions of people are on LinkedIn, so don't miss out on
                    opportunities.
                  </p>
                </div>
              </div>
              {/* h5 */}
              <div className="mt-10">
                <h1 className="text-sm font-bold">
                  5. Leverage LinkedIn Events and Webinars
                </h1>
                <p className="text-xs mt-2">
                  Virtual events are an excellent alternative for introverts who
                  dislike significant in-person events. With the help of
                  LinkedIn events, you can now engage and network more with
                  people on this platform.
                </p>
              </div>
              <div>
                <h1 className="text-sm font-bold mt-10">
                  How to Make the Most of LinkedIn Events:
                </h1>
                {/* 1 */}
                <div className="flex gap-4 mt-1 pb-1">
                  <span>
                    <GoDotFill />
                  </span>
                  <p className="text-xs">
                    <span className="text-sm font-bold">
                      Attend Industry-Specific Webinars:{" "}
                    </span>
                    Listen, take notes, and ask insightful questions in chat.
                  </p>
                </div>
                {/* 2 */}
                <div className="flex gap-4 mt-1 pb-1">
                  <span>
                    <GoDotFill />
                  </span>
                  <p className="text-xs">
                    <span className="text-sm font-bold">
                      Engage with Attendees:{" "}
                    </span>
                    Send connection requests to speakers and attendees with a
                    message referencing the event.
                  </p>
                </div>
                {/* 3 */}
                <div className="flex gap-4 mt-1 pb-1">
                  <span>
                    <GoDotFill />
                  </span>
                  <p className="text-xs">
                    <span className="text-sm font-bold">
                      Post Event Takeaways:{" "}
                    </span>
                    Share what you learned in a LinkedIn post to spark
                    engagement.
                  </p>
                </div>
              </div>
              {/* h6 */}
              <div className="mt-10">
                <h1 className="text-sm font-bold">
                  6. Use LinkedIn Features to Your Advantage
                </h1>
                <p className="text-xs mt-2">
                  LinkedIn offers several features that help introverts network
                  more effectively without feeling overwhelmed.
                </p>
              </div>
              <div>
                <h1 className="text-sm font-bold mt-10">
                  Features to Utilize:
                </h1>
                {/* 1 */}
                <div className="flex gap-4 mt-1 pb-1">
                  <span>
                    <GoDotFill />
                  </span>
                  <p className="text-xs">
                    <span className="text-sm font-bold">
                      LinkedIn Messaging:{" "}
                    </span>
                    Start low-pressure conversations with existing connections.
                  </p>
                </div>
                {/* 2 */}
                <div className="flex gap-4 mt-1 pb-1">
                  <span>
                    <GoDotFill />
                  </span>
                  <p className="text-xs">
                    <span className="text-sm font-bold">
                      Voice Notes & Video Messages:{" "}
                    </span>
                    A more personal touch without needing face-to-face
                    interaction.
                  </p>
                </div>
                {/* 3 */}
                <div className="flex gap-4 mt-1 pb-1">
                  <span>
                    <GoDotFill />
                  </span>
                  <p className="text-xs">
                    <span className="text-sm font-bold">
                      LinkedIn Articles:{" "}
                    </span>
                    Long-form content helps showcase your expertise and attract
                    relevant professionals.
                  </p>
                </div>
                {/* 4 */}
                <div className="flex gap-4 mt-1 pb-1">
                  <span>
                    <GoDotFill />
                  </span>
                  <p className="text-xs">
                    <span className="text-sm font-bold">
                      LinkedIn Creator Mode:{" "}
                    </span>
                    Expand your reach and visibility if you're comfortable
                    sharing insights regularly.
                  </p>
                </div>
              </div>
              {/* h7 */}
              <div className="mt-10">
                <h1 className="text-sm font-bold">
                  7. Set Boundaries and Network at Your Own Pace
                </h1>
                <p className="text-xs mt-2">
                  Networking doesn't have to be exhausting. Set boundaries to
                  ensure it remains a positive experience. Don't do too much,
                  but make it strictly professional.
                </p>
              </div>
              <div>
                <h1 className="text-sm font-bold mt-10">
                  Tips for Managing Networking Fatigue:
                </h1>
                {/* 1 */}
                <div className="flex gap-4 mt-1 pb-1">
                  <span>
                    <GoDotFill />
                  </span>
                  <p className="text-xs">
                    <span className="text-sm font-bold">
                      Limit Daily LinkedIn Time:{" "}
                    </span>
                    Spend 15-30 minutes engaging instead of scrolling aimlessly.
                  </p>
                </div>
                {/* 2 */}
                <div className="flex gap-4 mt-1 pb-1">
                  <span>
                    <GoDotFill />
                  </span>
                  <p className="text-xs">
                    <span className="text-sm font-bold">
                      Set Networking Goals:{" "}
                    </span>
                    Aim to connect with 4-5 new people per week instead of
                    overwhelming yourself.
                  </p>
                </div>
                {/* 3 */}
                <div className="flex gap-4 mt-1 pb-1">
                  <span>
                    <GoDotFill />
                  </span>
                  <p className="text-xs">
                    <span className="text-sm font-bold">
                      Don't Feel Pressured to Accept Every Request:{" "}
                    </span>
                    Connect with those who align with your interests and goals.
                  </p>
                </div>
                {/* 4 */}
                <div className="flex gap-4 mt-1 pb-1">
                  <span>
                    <GoDotFill />
                  </span>
                  <p className="text-xs">
                    <span className="text-sm font-bold">
                      Take Breaks When Needed:{" "}
                    </span>
                    If networking feels draining, step back and return when
                    ready
                  </p>
                </div>
              </div>
              <h1 className="text-dark3 md:text-3xl font-bold text-xl mt-6 ">
                Conclusion
              </h1>
              <p className="mt-2 text-xs">
                Networking on LinkedIn as an introvert doesn't have to be
                intimidating. You can comfortably expand your professional
                network by optimizing your profile, engaging through content,
                building intentional connections, and strategically using
                LinkedIn's features. Remember, quality matters more than
                quantity. Take your time, be authentic, and focus on meaningful
                interactions that align with your professional goals. By
                implementing these LinkedIn networking tips, you can create
                opportunities, build relationships, and grow your career—all
                while staying true to your introverted nature. At LinkedIn local
                halifax, we provide tips for becoming a great LinkedIn user and
                leveraging it for opportunities.
              </p>
              <div className="mt-20">
                <p className="text-sm font-semibold">Share this post</p>
                <img src={socials} width={90} className="cursor-pointer" />
              </div>
            </div>
          </div>
          {/* Related Post */}
          <div>
            <RelatedPosts />
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default SingleBlog;
