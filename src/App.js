import React from "react";
import Layout from "./components/layout";

function App() {
  return (
    <main>
      <Layout>
        <div>
          <img alt="Picture user" source="https://avatars.githubusercontent.com/u/13878534?v=4" />
          <h1>Djonny Nogueira</h1>
          <h3>Username:</h3>
          <span>djonny</span>
          <div>
            <h4>Followers: </h4>
            <span>5</span>
          </div>
          <div>
            <h4>Starreds: </h4>
            <span>5</span>
          </div>
          <div>
            <h4>Followings: </h4>
            <span>5</span>
          </div>
          
        </div>
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
    )
  }

export default App;
