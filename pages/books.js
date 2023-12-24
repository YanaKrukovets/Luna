import React, { useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <h1>Page Header</h1>
      <p>{props.children}</p>
      <p>Page number: {props.number}</p>
    </div>
  );
});

function MyBook(props) {
  return (
    <HTMLFlipBook width={300} height={300} showCover={true}>
      <PageCover>BOOK TITLE</PageCover>
      <Page number="1">Page text</Page>
      <Page number="2">Page text</Page>
      <Page number="3">Page text</Page>
      <Page number="4">Page text</Page>
      <Page number="5">Page text</Page>
      <Page number="6">Page text</Page>
      <PageCover>THE END</PageCover>
    </HTMLFlipBook>
  );
}

export default function Books() {
  return <MyBook />;
}
