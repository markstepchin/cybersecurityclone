import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import NextButton from '../layout/NextButton';

const IntroPage = () => (
  <React.Fragment>
    <Header />
    <div className="container-fluid progress-nav text-uppercase d-flex justify-content-center empty-nav-height" />

    <div className="container pt-5">
      <div className="row">
        <div className="col">
          <h3 className="mb-4">Dear CoverHound / CyberPolicy:</h3> {/* TITLE */}
          <p>My name is Mark Stepchin, and I'd love to work here.</p>
          <p>
            Back when I was in the senior year of my bachelor's degree in CS, Erik Shestopal
            introduced me to React.js. The focus of my classes was mostly theoretical, and most of
            the coding that we did was building various terminal applications. It was fun and I
            enjoyed it. But I'm a visual person, and it didn't even come close to giving me the
            satisfaction that React did, where I could immediately see the impact of my work in a
            more visual way.
          </p>
          <p>
            I graduated June 2018, and decided that even though I didn't know React very well, I
            enjoyed writing it much more than I did Java or c. I spent the next couple months
            teaching myself HTML, CSS, JavaScript, and React. It was a steep learning curve. Erik
            told me that CoverHound was growing and needed people, but in order to get hired, a
            candidate had to demonstrate that they could contribute from day one.
          </p>
          <p>
            That's where the idea for this project came from. If I created a clone of your website,
            or at least a partial one, I hoped that I could show that I was not only enthusiastic
            about working here, but also proficient in using the technologies used at your company
            to create a similar product.
          </p>
          <p>Here's what I used to build my clone.</p>
          <ul>
            <li>
              <b>React.js</b> to build the application itself
            </li>
            <li>
              <b>ReactRouter</b> for routing
            </li>
            <li>
              <b>Redux</b> using the <b>ducks</b> pattern for state management (Erik mentioned that
              you use it at CoverHound)
            </li>
            <li>
              <b>Firebase</b> for a REST API
            </li>
            <li>
              <b>Bootstrap</b> and a bit of <b>Flexbox</b> for the layout
            </li>
          </ul>
          <p>
            It doesn't look exactly like the the real app, and it doesn't have all of the
            functionality that the real one does, but I hope that it's enough for my purposes.
          </p>
          <p>
            You can find the code for the app{' '}
            <a href="https://github.com/markstepchin/cybersecurityclone" target="_blank">
              here
            </a>
            , and the code for the endpoint{' '}
            <a href="https://github.com/markstepchin/CyberPolicyEndpoint" target="_blank">
              here
            </a>
            .
          </p>
          <Link to="./info">
            <NextButton btnText="the clone" />
          </Link>
        </div>
      </div>
    </div>
    <Footer />
  </React.Fragment>
);

export default IntroPage;
