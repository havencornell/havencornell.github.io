import * as React from "react";

import Footer from "../elements/Footer";
import "../../styles/constants.scss";

interface IProps {
  children: React.ReactNode;
}

const App = (props: IProps) => {
  const children = props.children;
  return (
    <div className="app">
      {children}
      <Footer />
    </div>
  );
};

export default App;
