import React from "react";

const ErrorDisplayer = error => {
  console.log(error.error);
  return (
    <main>
      <h2>Error {error.error.status}</h2>
      <p>{error.error.statusText}</p>
    </main>
  );
};

export default ErrorDisplayer;
