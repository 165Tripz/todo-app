import React from "react";
import TodoApp from "./TodoApp";

function Layout() {
  return (
    <div className="Layout">

      <div className="header">
        <h1 style={{backgroundColor:'red', width:'100%', height:'100%'}}> Header 1</h1>
        <h1 style={{backgroundColor:'blue', width:'100%', height:'100%'}}> Header 2</h1>
      </div>
      
      <div className="content">
        <h1> Content</h1>
        <TodoApp></TodoApp>
      </div>
      
      <div className="footer">
        <h1> Footer</h1>
      </div>
      
    </div>
  );
}

export default Layout;
