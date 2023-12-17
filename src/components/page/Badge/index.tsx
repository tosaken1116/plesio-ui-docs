import type { ReactNode } from "react";

import { Badge, Typography } from "@plesiosaurus/ui";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

import type { AnimationProps } from "@plesiosaurus/ui/types/libs/animation/variant/AnimationFactory";

import { AnimateDocsProvider } from "@/components/ui/AnimateDocsProvider";
import { ComponentProvider } from "@/components/ui/ComponentProvider";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const BadgeToBeAnimated: React.FC = ({animationProps}:{ animationProps: AnimationProps; children?: ReactNode; }) => (
      <Badge animationProps={animationProps} badgeComponent='new'>
         <div style={{ padding: '2rem', backgroundColor: 'gray', borderRadius: '8px' }}>
           Badge
         </div>
      </Badge>
    )
  

export const Screen: React.FC =  () => (
    <>
      <div>
        <Typography variant="h1" component="h1">
          Badge
        </Typography>
        <div>
          <Typography variant="h3" component="h3">
            Default Badge
          </Typography>
          <SyntaxHighlighter language="javascript" style={dracula}>
            {`
      const ButtonExample = () =>
            <Badge badgeComponent={1}>
                <div style={{ padding: '2rem', backgroundColor: 'gray', borderRadius: '8px' }}>
                    Badge
                </div>
            </Badge>
          `}
          </SyntaxHighlighter>
  
          <ComponentProvider>
            <div>
              <Badge badgeComponent={1}>
                <div style={{ padding: '2rem', backgroundColor: 'gray', borderRadius: '8px' }}>
                    Badge
                </div>
              </Badge>
            </div>
          </ComponentProvider>
        </div>
      </div>
      <div>
        <Typography variant="h3" component="h3">
          Badge with icon
        </Typography>
        <SyntaxHighlighter language="javascript" style={dracula}>
          {`
      const ButtonExample = () =>
            <Badge badgeComponent={
                <span style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 0' }}>
                    🥰
                    1000
                </span>
            }>
                <div style={{ padding: '2rem', backgroundColor: 'gray', borderRadius: '8px' }}>
                    Badge
                </div>
            </Badge>
          `}
        </SyntaxHighlighter>
        <ComponentProvider>
          <Badge badgeComponent={
                <span style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 0' }}>
                    🥰
                    1000
                </span>
            }>
                <div style={{ padding: '2rem', backgroundColor: 'gray', borderRadius: '8px' }}>
                    Badge
                </div>
            </Badge>
        </ComponentProvider>
      </div>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <AnimateDocsProvider componentName="Badge" Component={BadgeToBeAnimated} />
    </>
  );
  