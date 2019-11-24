import React from "react";

const PageChooser = props => {
  const { updatePage, count, page } = props;

  let buttonArray = [];

  for (let i = 1; i <= count / 10 + 1; i++) {
    buttonArray.push([i]);
  }

  return (
    <div id="pagechooser">
      {buttonArray.map(number => {
        return (
          <button
            key={number}
            className={
              number - 1 === page ? "pagination current" : "pagination"
            }
            onClick={() => {
              updatePage(number - 1);
            }}
          >
            {number}
          </button>
        );
      })}
    </div>

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
