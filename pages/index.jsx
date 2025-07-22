import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import BaseLayout from '@layouts/BaseLayout';
import Link from 'next/link';
import VanillaTilt from 'vanilla-tilt';

import HomepageStyles from '@styles/HomepageStyles';

export default function Homepage() {

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll('.home__project'), {
      max: 10,
      speed: 750,
      scale: 1.05,
      glare: true,
      "max-glare": 0.3
    });
  }, []);

  return (
    <>
      <Head>
        <title>Georgi Dimulski | Software Engineer</title>
        <meta name="description" content="Georgi Dimulski's personal website" />
      </Head>

      <BaseLayout
        content={
          <>
            <div className="home">
              <section className="home__hero">
                <h1 className="home__hero-heading">
                  <div className="home__hero-heading-line">
                    Hey.
                  </div>
                  <div className="home__hero-heading-line home__hero-heading-line--leading">
                    I&apos;m Georgi, a software engineer
                  </div>
                  <div className="home__hero-heading-line home__hero-heading-line--follow-up">
                    based in Sofia, Bulgaria.
                  </div>
                </h1>
              </section>

              <section className="home__projects">
                <div className="home__projects-title">
                  <h2 className="home__projects-title-heading">Projects:</h2>
                </div>

                <ul className="home__projects-list">
                  <li className="home__projects-list-item">
                    <Link href="https://www.weddyplace.com/magazin/">
                      <a className="home__project" target="_blank">
                        <div className="home__project-image">
                          <Image
                            className="home__project-image-wrapper"
                            src="/weddyplace-magazin-cover.png"
                            alt=""
                            width={578}
                            height={810}
                            layout="responsive"
                          />
                        </div>
                        <div className="home__project-info">
                          <h3 className="home__project-tools">
                            Next.js, Tailwind CSS
                          </h3>
                          <h2 className="home__project-title">
                            WeddyPlace Magazine
                          </h2>
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
              </section>
            </div>

            <style jsx>{HomepageStyles}</style>
          </>
        }
      />
    </>
  );
};
