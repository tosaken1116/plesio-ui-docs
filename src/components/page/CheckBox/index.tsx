'use client'

import type { ReactNode } from "react";

import { Typography, Checkbox } from "@plesiosaurus/ui";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

import type { AnimationProps } from "@plesiosaurus/ui/types/libs/animation/variant/AnimationFactory";

import { AnimateDocsProvider } from "@/components/ui/AnimateDocsProvider";
import { ComponentProvider } from "@/components/ui/ComponentProvider";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const CheckboxToBeAnimated: React.FC = ({animationProps}:{ animationProps: AnimationProps; children?: ReactNode; }) => (
    <Checkbox animationProps={animationProps} id='checkbox_animation' label= 'Checkbox' />
    )
    
export const Screen: React.FC = () => (
    <>
      <div>
        <Typography variant="h1" component="h1">
          CheckBox
        </Typography>
        <div>
          <Typography variant="h3" component="h3">
            Default CheckBox
          </Typography>
          <SyntaxHighlighter language="javascript" style={dracula}>
            {`
      const CheckboxExample = () =>
      <Checkbox id='checkbox' label= 'Checkbox' />;
          `}
          </SyntaxHighlighter>
  
          <ComponentProvider>
            <Checkbox id='checkbox' label= 'Checkbox' />
          </ComponentProvider>
        </div>
      </div>
      
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <AnimateDocsProvider componentName="Checkbox" Component={CheckboxToBeAnimated} />
    </>
  );
  
