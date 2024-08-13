import React from 'react';
import { FaBookReader, FaRegBookmark, FaDownload } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="download-resume">
        <a href="/path-to-your-resume.pdf" download className="download-link button">
          <FaDownload className="icon" /> Download Resume
        </a>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Lok Jagruti University"
            date="2022 — 2026"
          />
          <TimelineItem
            title="Doon International Public School"
            date="2020 — 2022"
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Certificates</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title='HTML, CSS, and Javascript for Web Developers - Coursera'
          />
          <TimelineItem
            title='Introduction to Frontend Development - Coursera'
          />
          <TimelineItem
            title='Data Structures - Coursera'
          />
          <TimelineItem
            title='SQL - Coursera'
          />
          <TimelineItem
            title='Foundation of Project Management - Coursera'
          />
          <TimelineItem
            title='Exploratory Data Analysis for Machine Learning - Coursera'
          />
          <TimelineItem
            title='Data Science - SVNIT'
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="React Js" value={80} />
          <SkillItem title="Node js" value={60} />
          <SkillItem title="MongoDb" value={60} />
          <SkillItem title="Pandas" value={80} />
          <SkillItem title="Machine Learning" value={90} />
          <SkillItem title='Django' value={60} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
