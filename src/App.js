import React from "react";
import Layout from "./components/layout";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import { ResetCSS } from "./global/resetCSS";
import GitHubProvider from "./providers/github-provider";

const App = () => {
  return (
    <main>
      <GitHubProvider>
        <ResetCSS />
        <Layout>
          <Profile />

          <Repositories /> 
        </Layout>
        </GitHubProvider>
    </main>
    )
  }

export default App;
