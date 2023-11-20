import React, { useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";

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
    <HTMLFlipBook width={300} height={300}>
      <Page number="1">Page text</Page>
      <Page number="2">Page text</Page>
      <Page number="3">Page text</Page>
      <Page number="4">Page text</Page>
      <Page number="5">Page text</Page>
      <Page number="6">Page text</Page>
    </HTMLFlipBook>
  );
}

export default function Books() {
  return <MyBook />;
}
