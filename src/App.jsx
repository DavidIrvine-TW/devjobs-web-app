import Header from "./components/Header";
import { useEffect, useState } from "react";
import useToggle from "./components/useToggle.js";
import JobDetailsPage from "./components/JobDetailsPage";
import ListPage from "./components/ListPage";

function App() {
  //darkmode
  const [darkMode, setDarkMode] = useToggle(
    localStorage.getItem("theme-color") === "dark"
  );
  useEffect(() => {
    document.documentElement.className = darkMode ? "dark" : "";
    localStorage.setItem("theme-color", darkMode ? "dark" : "light");
  }, [darkMode]);




  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
   // conditional rendering of job detail page and main list
   const [jobDetailPage, setJobDetailPage] = useState(false);
  // job card ID capture
    const [jobId, setJobId] = useState(null)
    const clickedJobHandler = (id) => {
      setJobId(id)
      setJobDetailPage(true)
      scrollToTop()
    }


  return (
    <div
      id="wrapper"
      className={` bg-lgray dark:bg-midnight w-[full] min-h-screen mx-auto relative`}
    >
      <div className="max-w-[1440px] mx-auto">
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          setJobDetailPage={setJobDetailPage}
        />

        <main className="px-[1.5rem] pb-[1.5rem] tablet:px-[2.5rem] tablet:pb-[2.5rem]">
          {jobDetailPage? (
            <JobDetailsPage jobId={jobId}/>
          ) : (
            <ListPage clickedJobHandler={clickedJobHandler}/>
          )}
        </main>

      </div>
    </div>
  );
}

export default App;
