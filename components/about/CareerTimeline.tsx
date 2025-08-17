import TimelineItem from './TimelineItem';

export const EXPERIENCES = [
  {
    org: 'Academy of Cryptography Techniques',
    url: 'https://actvn.edu.vn',
    logo: '/static/images/experiences/kma-logo.png',
    start: 'Sep 2022',
    end: 'Sep 2026',
    title: 'Software Engineering Student at KMA - Ho Chi Minh City',
    icon: 'man-technologist',
    event: 'kma-experience',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            <strong>Currently pursuing a degree in Software Engineering</strong>, with a focus on web application
            development. This journey has been a key part of shaping my skills and identity as a developer.
          </li>
        </ul>
      );
    },
  },
];

const CareerTimeline = () => (
  <ul className="m-0 list-none p-0">
    {EXPERIENCES.map((experience, idx) => (
      <li key={experience.url} className="m-0 p-0">
        <TimelineItem exp={experience} last={idx === EXPERIENCES.length - 1} />
      </li>
    ))}
  </ul>
);

export default CareerTimeline;
