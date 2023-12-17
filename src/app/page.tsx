import type { ReactNode } from 'react';

import { Button, ButtonIcon, Stack, Typography } from '@plesiosaurus/ui';
import { Bird, Component, Flame, Github } from 'lucide-react';
import Link from 'next/link';

import packageJson from '../../package.json';

import { GITHUB_LINK } from '@/components/constants/link';

const Home = (): ReactNode => (
  <main className="h-screen">
    <div className="flex flex-row p-12 w-full h-full">
      <div className="w-1/2 flex justify-center items-center h-full">
        <p className="text-[360px]">🦖</p>
      </div>
      <div className="w-1/2 h-fit">
        <Stack direction="column">
          <div className="flex flex-row items-end">
            <Typography
              variant="h1"
              component="h1"
              animationProps={{
                in: {
                  key: 'slide',
                  option: {
                    direction: 'left',
                    duration: '0.6s',
                    delay: '0s',
                  },
                },
              }}
            >
              Plesiosaurus UI
            </Typography>
            <Typography
              component="p"
              variant="p"
              animationProps={{
                in: {
                  key: 'slide',
                  option: {
                    direction: 'bottom',
                    duration: '0.6s',
                    delay: '0s',
                  },
                },
              }}
            >
              {`V${packageJson.dependencies['@plesiosaurus/ui'].replace(
                '^',
                ''
              )}`}
            </Typography>
          </div>

          <Typography
            variant="p"
            component="p"
            className="text-7xl pl-4"
            animationProps={{
              in: {
                key: 'slide',
                option: {
                  direction: 'left',
                  duration: '0.7s',
                  delay: '0.1s',
                },
              },
            }}
          >
            Plesiosaurus UI provide React UI Component Library components
            provided various animations.
          </Typography>
          <Stack
            spacing="12px"
            direction="column"
            className="items-center h-full justify-center pt-12"
          >
            <Link href="/components">
              <Button
                radius="md"
                className="w-48"
                animationProps={{
                  hover: {
                    key: 'shake',
                    option: {
                      duration: '0.7s',
                      delay: '0s',
                    },
                  },
                }}
              >
                <ButtonIcon>
                  <Component />
                </ButtonIcon>
                Components
              </Button>
            </Link>
            <Link href="/animations">
              <Button
                radius="md"
                className="w-48"
                animationProps={{
                  hover: {
                    key: 'shake',
                    option: {
                      duration: '0.7s',
                      delay: '0s',
                    },
                  },
                }}
              >
                <ButtonIcon>
                  <Bird />
                </ButtonIcon>
                Animations
              </Button>
            </Link>
            <Link href="/start">
              <Button radius="md" className="w-48">
                <ButtonIcon>
                  <Flame />
                </ButtonIcon>
                Coming soon...
              </Button>
            </Link>
            <Stack direction="column" className="mt-4">
              <Link href={GITHUB_LINK}>
                <Button>
                  <Github />
                  Github
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </div>
    </div>
  </main>
);

export default Home;
