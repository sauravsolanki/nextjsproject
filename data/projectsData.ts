interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Detecting Harmful Content on Instagram',
    description: `Social media platforms like Instagram have become a vital part of our daily lives, fostering communities, creativity, and self-expression. However, with this increased connectivity comes a darker side—harmful content that ranges from cyberbullying to hate speech, misinformation, and explicit content. Detecting and moderating such content is a monumental challenge, especially at the scale Instagram operates, where millions of posts are generated every day. `,
    imgSrc: '/static/images/instagram.png',
    href: '/blog/harmful-content-detection.mdx',
  },
  // {
  //   title: 'The Time Machine',
  //   description: `Imagine being able to travel back in time or to the future. Simple turn the knob
  //   to the desired date and press "Go". No more worrying about lost keys or
  //   forgotten headphones with this simple yet affordable solution.`,
  //   imgSrc: '/static/images/time-machine.jpg',
  //   href: '/blog/the-time-machine',
  // },
]

export default projectsData
