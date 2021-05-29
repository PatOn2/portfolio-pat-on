import React from "react";

import classes from "./Projects.module.scss";

import fotoTvShowProject from "../../assets/projectsPicture/tvShowProject.jpg";

const Projects = () => {
  return (
    <div className={classes.projectsPage}>
      <h1 className={classes.projectsPage__h1}>PROJECTS</h1>
      <h2 className={classes.projectsPage__h2__bigProj}>
        Noteworthy project built from start by me
      </h2>
      <div className={classes.projectsPage__myProjectsBigger}>
        <div className={classes.projectContainer}>
          <img
            h3
            className={classes.projectContainer__img}
            src={fotoTvShowProject}
            alt=""
          />
          <h3 className={classes.projectContainer__h3}>TV Show Project</h3>
          <p className={classes.projectContainer__description}>
            Pure Java Script project, which is using the View Port Model.
            Application is using REST API 'TV MAZE' to fetch data.{" "}
          </p>

          <a
            className={classes.projectContainer__liveLink}
            href="https://cyf-patrykn-tv.netlify.app/"
          >
            Live Page
          </a>
          <a
            className={classes.projectContainer__githubLink}
            href="https://github.com/Pat-On/tv-show-dom-project"
          >
            Source Code - GitHub
          </a>
        </div>

        <div className={classes.projectContainer}>
          <h3 className={classes.projectsH3}>Portfolio</h3>
          <p>React Application</p>

          <a href="https://patryk-nowak-portfolio.netlify.app/">Live Page</a>
          <a href="https://github.com/Pat-On/portfolio-pat-on">
            Source Code - GitHub
          </a>
        </div>
      </div>

      {/* small projects */}

      <h2 className={classes.projectsPage__h2__smallProj}>
        Small projects made for practice
      </h2>

      <div className={classes.projectsPage__myProjectsSmaller}>
        <div className={classes.projectContainer}>
          <h3 className={classes.projectsH3}>Job Listing</h3>
          <p>
            Simple application made in react, which is fetching the data from
            REST API
          </p>

          <a href="https://cyf-pat-on-jobs.netlify.app/">Live Page</a>
          <a href="https://github.com/Pat-On/cyf-job-listing-react">
            Source Code - GitHub
          </a>
        </div>

        <div className={classes.projectContainer}>
          <h3 className={classes.projectsH3}>Countries</h3>
          <p>
            Simple application made in react, which is using REST API 'REST
            Countries' to fetch data.
          </p>

          <a href="https://cyf-pat-on-countries-react.netlify.app/">
            Live Page
          </a>
          <a href="https://github.com/Pat-On/cyf-countries-react">
            Source Code - GitHub
          </a>
        </div>

        <div className={classes.projectContainer}>
          <h3 className={classes.projectsH3}>High Score Table</h3>
          <p>
            Simple application made in react, which is using data stored on
            local machine.
          </p>

          <a href="https://cyf-pat-on-scores.netlify.app/">Live Page</a>
          <a href="https://github.com/Pat-On/high-scores-react">
            Source Code - GitHub
          </a>
        </div>

        <div className={classes.projectContainer}>
          <h3 className={classes.projectsH3}>Hotel Page</h3>
          <p>
            Simple application made in react, which is using data stored on
            local machine.
          </p>

          <a href="https://cyf-pat-on-hotel-react.netlify.app/">Live Page</a>
          <a href="https://github.com/Pat-On/cyf-hotel-react">
            Source Code - GitHub
          </a>
        </div>

        <div className={classes.projectContainer}>
          <h3 className={classes.projectsH3}>Baby name finder</h3>
          <p>
            Simple application made in react, which is using data stored on
            local machine.
          </p>

          <a href="https://cyf-pat-on-baby-names.netlify.app/">Live Page</a>
          <a href="https://github.com/Pat-On/cyf-baby-names-react">
            Source Code - GitHub
          </a>
        </div>
      </div>
      {/* followed projects */}
      <h2 className={classes.projectsPage__h2__followed}>
        Projects made by following courses
      </h2>
      <div className={classes.projectsPage__projectFollowedCourses}>
        <div className={classes.projectContainer}>
          <h3>Burger Shop React</h3>
          <p>
            App was done following that course: <br />
            <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/">
              Maximilian Schwarzmüller, React - The Complete Guide (incl Hooks,
              React Router, Redux)
            </a>
          </p>

          <a href="https://react-my-burger-6df65.web.app/">Live Page</a>
          <a href="https://github.com/Pat-On/burger-shop-react">
            Source Code - GitHub
          </a>
        </div>

        <div className={classes.projectContainer}>
          <h3 className={classes.projectsH3}>Forkify - cooking recipes</h3>
          <p>
            App was done following that course: <br />
            <a href="https://www.udemy.com/course/the-complete-javascript-course/">
              Jonas Schmedtmann, The Complete JavaScript Course 2021: From Zero
              to Expert!
            </a>
          </p>

          <a href="https://forkify-patryk.netlify.app/">Live Page</a>
          <a href="https://github.com/Pat-On/studyProjectForkify">
            Source Code - GitHub
          </a>
        </div>

        <div className={classes.projectContainer}>
          <h3 className={classes.projectsH3}>
            Mapty - pseudo training tracker{" "}
          </h3>
          <p>
            App was done following that course: <br />
            <a href="https://www.udemy.com/course/the-complete-javascript-course/">
              Jonas Schmedtmann, The Complete JavaScript Course 2021: From Zero
              to Expert!
            </a>
          </p>

          <a href="https://pat-on.github.io/StudyProjectMaptyApp/">Live Page</a>
          <a href="https://github.com/Pat-On/StudyProjectMaptyApp">
            Source Code - GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
