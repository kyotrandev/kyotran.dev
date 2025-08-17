import { ReactNode } from 'react';
import type { Authors } from 'contentlayer/generated';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

import { CareerTimeline } from '@/components/about';
import { Link, Image, Button, Twemoji } from '@/components/ui';

interface Props {
  children: ReactNode;
  content: Omit<Authors, '_id' | '_raw' | 'body'>;
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = content;

  return (
    <>
      <div className="about divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400 md:text-lg md:leading-7">
            Further insights into who I am and the purpose of this blog.
          </p>
        </div>

        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8 sm:pt-28">
            <Image src={avatar || ''} alt="avatar" width={192} height={192} className="h-48 w-48 rounded-full" />

            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>

            <div className="mt-2 flex gap-3">
              <Link href={`mailto:${email}`}>
                <Mail size={24} strokeWidth={1} />
              </Link>
              <Link href={github || ''} target="_blank">
                <Github size={24} strokeWidth={1} />
              </Link>
              <Link href={linkedin || ''} target="_blank">
                <Linkedin size={24} strokeWidth={1} />
              </Link>
              <Link href={twitter || ''} target="_blank">
                <Twitter size={24} strokeWidth={1} />
              </Link>
            </div>
          </div>

          {/* <div className="prose max-w-none pb-8 dark:prose-dark xl:col-span-2">{children}</div> */}

          <div className="prose max-w-none pb-8 dark:prose-dark xl:col-span-2">
            <h2>
              Hey there! <Twemoji className="mx-2" emoji="waving-hand" /> I'm Quang Dieu (Kyo)
            </h2>
            <p>
              I’m passionate about <strong>JavaScript</strong>,<strong>TypeScript</strong>,{' '}
              <strong> and AI Technology</strong> and I love working on <strong>tech startups</strong> and{' '}
              <strong>web application</strong> development. Currently, I’m a fullstack developer and freelancer, mainly
              building with <strong>React</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, and{' '}
              <strong>Express.js</strong>.
            </p>
            <h2>Why have this blog?</h2>
            <blockquote>
              <p>
                I started this blog not only to sharpen my skills, but also to share my stories, personal reflections,
                hobbies, and perspectives — a place to archive unforgettable moments and my own point of view.
              </p>
            </blockquote>
            <p>
              This space is where I document my journey as a software developer — from coding practices to lessons
              learned while building real projects.
            </p>
            <p>
              Beyond the technical side, I also use this blog as a journal to express my thoughts, passions, and
              experiences that shape who I am, both as a developer and as a person.
            </p>
            <p>
              Writing helps me better understand new concepts and technologies, and I hope my posts can also serve as a
              helpful resource and maybe even some inspiration for fellow developers on their own paths.
            </p>
            <div className="flex items-center justify-between">
              <h2>My Career</h2>

              <Button as="a" href="/static/resume.pdf" target="_blank">
                <span>Resume</span>
                <Twemoji emoji="page-facing-up" />
              </Button>
            </div>
            <CareerTimeline />
            <h2>Tech stack</h2>
            <p>
              This blog is built with{' '}
              <a target="_blank" href="https://nextjs.org/">
                Next.js
              </a>{' '}
              and{' '}
              <a target="_blank" href="https://tailwindcss.com/">
                Tailwind CSS
              </a>{' '}
              using <strong>Tailwind Nextjs Starter Blog</strong>.
            </p>
            <p>A few major over-engineering-changes from the original repo:</p>

            <ul>
              <li>
                <Twemoji className="!mr-2" emoji="atom-symbol" /> Upgrading to <strong>React 18</strong>,{' '}
                <strong>Next 14</strong>.
              </li>
              <li>
                <Twemoji className="!mr-2" emoji="party-popper" /> Adopting <strong>Typescript</strong>, committing with{' '}
                <a target="_blank" href="https://www.conventionalcommits.org">
                  Conventional Commits
                </a>
              </li>
              <li>
                <Twemoji className="!mr-2" emoji="bar-chart" /> Monitoring site with{' '}
                <a target="_blank" href="https://umami.is/">
                  Umami
                </a>{' '}
                website analytics
              </li>
              <li>
                <Twemoji className="!mr-2" emoji="eyes" /> Theming in dark mode with{' '}
                <a target="_blank" href="https://github.com/folke/tokyonight.nvim">
                  Tokyonight Neovim Theme
                </a>{' '}
                colors for better contrast.
              </li>
              <li>
                <Twemoji className="!mr-2" emoji="man-technologist" /> My website refers to the design and code from the{' '}
                <a target="_blank" href="https://github.com/Karhdo/karhdo.dev">
                  karhdo.dev
                </a>{' '}
                repository and incorporates the tailwind-nextjs-starter-blog template, version 2.0.
              </li>
              <li>
                <Twemoji className="!mr-2" emoji="inbox-tray" /> Bumping up <code>mdx-bundler</code>,{' '}
                <code>rehype</code>/<code>remark</code> plugins and dependencies to the latest version
              </li>
            </ul>

            <p>
              See my{' '}
              <a target="_blank" href="https://github.com/kyotrandev/kyotran.dev">
                repository
              </a>{' '}
              for this blog.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
