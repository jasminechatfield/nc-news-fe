import React from "react";

const PageChooser = props => {
  const { updatePage, articleCount, page } = props;

  let buttonArray = [];

  for (let i = 1; i <= articleCount / 10 + 1; i++) {
    buttonArray.push([i]);
  }

  return (
    <>
      {buttonArray.map(number => {
        return (
          <button
            key={number}
            className="pagination"
            onClick={() => {
              updatePage(number - 1);
            }}
          >
            {number}
          </button>
        );
      })}
    </>

    // <>
    //   <button
    //     className="pagination"
    //     onClick={() => {
    //       updatePage(0);
    //     }}
    //   >
    //     1
    //   </button>
    //   <button
    //     className="pagination"
    //     onClick={() => {
    //       updatePage(1);
    //     }}
    //   >
    //     2
    //   </button>
    //   <button
    //     className="pagination"
    //     onClick={() => {
    //       updatePage(2);
    //     }}
    //   >
    //     3
    //   </button>
    //   <button
    //     className="pagination"
    //     onClick={() => {
    //       updatePage(3);
    //     }}
    //   >
    //     4
    //   </button>
    //   <button
    //     className="pagination"
    //     onClick={() => {
    //       updatePage(4);
    //     }}
    //   >
    //     5
    //   </button>
    // </>
  );
};

export default PageChooser;
