import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../style/feedback.css'
import ReactDOM from 'react-dom';

function feedback() {
  return (
  <div className="cover">
    <Carousel className="feedback">
      <Carousel.Item interval={1000}>
          <h3>Huy Anh - SnapChat Software Engineer Intern</h3>
          <p2>"For every 10 cold emails sent to the recruiter, I got 6 interviews scheduled."</p2>
      </Carousel.Item>
      <Carousel.Item interval={500}>
          <h3>Dat Bac Do - Software Engineer @Amazon</h3>
          <p2>"When I was looking for my first job, I wrote around 20 cold emails. Got about 80% response rate."</p2>
      </Carousel.Item>
      <Carousel.Item>
          <h3>Kevin Smith</h3>
          <p2>"I applied to 200+ companies and recieved no response. I sent cold emails to 5 recruiters and recieve 3 job offers."</p2>
      </Carousel.Item>
    </Carousel>
  </div>
  );
}

export default feedback;



