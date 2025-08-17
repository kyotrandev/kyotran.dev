import React from 'react';
import Typed from 'typed.js';

import Twemoji from '@/components/ui/Twemoji';

const TypedBios = () => {
  const el = React.useRef(null);
  const typed = React.useRef<Typed | null>(null);

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    });

    return () => typed.current?.destroy();
  }, []);

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          I'm aliased as <b className="font-medium">Kyo</b> at work.
        </li>
        <li>
          I live in <b className="font-medium">Ho Chi Minh, Viet Nam</b>.
        </li>
        <li>
          I'm from <b className="font-medium">Quang Ngai</b> province.
        </li>
        <li>
          My first programming language I learned was <b className="font-medium">C++</b>.
        </li>
        <li>I love web application development and AI research tools.</li>
        <li>
          I'm focusing on building <b className="font-medium">Indie Projects</b>.
        </li>
        <li>
          I work mostly with <b className="font-medium">Javascript/Typescript</b> technologies.
        </li>
        <li>
          I'm a sporty-guy. I love
          <span className="ml-1">
            <Twemoji emoji="🏃🏻‍➡️" />, <Twemoji emoji="🏸" />
          </span>
          .
        </li>
        <li>
          I love listening <Twemoji emoji="podcast" /> and <Twemoji emoji="music" />.
        </li>
        <li>
          I love watching esports <Twemoji emoji="video-game" />, T1 is my favorite team.
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  );
};

export default TypedBios;
