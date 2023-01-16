import * as React from "react";
import { ReactIBRoot } from "@lyonbot/interactive-blocks-react";
import { MyBlock } from "./components/MyBlock";
import "./style.scss";

// ************************************************************************************************
// Main App

export function App() {
  return (
    <div>
      <h1><a href="https://github.com/lyonbot/interactive-blocks">InteractiveBlocks</a> x React</h1>
      <p>select some child cards, and press arrow keys, Ctrl+A, Ctrl+C, Ctrl+V etc</p>

      <ReactIBRoot onMount={(ctx) => {
        ctx.on('focus', () => console.log('focus'));
        ctx.on('blur', () => console.log('blur'));
      }}>
        <MyBlock path={[]} />
      </ReactIBRoot>
    </div>
  );
}
