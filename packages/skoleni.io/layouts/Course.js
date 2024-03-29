import React from "react";
import StaticDB from "@app/common/staticdb";
import Header from "@app/skoleni.io/components/Header";
import { Container } from "react-bootstrap";
import Markdown from "@app/common/components/Markdown";
import styled from "styled-components";
import courses_data from "@app/data/skoleni.io/courses.yml";
import lecturers_data from "@app/data/skoleni.io/lecturers.yml";
import recommendations_data from "@app/data/skoleni.io/recommendations.yml";
import H3 from "@app/skoleni.io/components/H3";
import Head from "next/head";

const InquiryBtn = styled.a`
  border: 2px solid #131480;
  padding: 0.475rem 0.85rem;
  margin: 0.5em 0 1em 0;
  display: inline-block;
  vertical-align: middle;
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  &:hover {
    background-color: #c8bfb0;
    border: 2px solid #c8bfb0;
    cursor: pointer;
    color: white;
  }
`;

const PrizeHeader = styled.h4``;

const Wrapper = styled.div`
  padding-top: 1em;
`;

const getCourse = (course_id) => {
  let db = new StaticDB();
  db.add("courses", courses_data);
  db.add("lecturers", lecturers_data);
  db.setCursor("courses");
  db.filter("id", course_id);
  db.lookupOne("courses", "lecturers", "lecturer_id", "id", "lecturer");
  let course = db.getOne();
  return course;
};

const getRecommendationsByCourse = (course_id) => {
  let db = new StaticDB();
  db.add("recommendations", recommendations_data);
  db.setCursor("recommendations");
  db.filter("course_id", course_id);
  let recommendations = db.get();
  return recommendations;
};

const Course = (props) => {
  let course_id = props.course_id;
  let course = getCourse(course_id);

  let price_open = course.price_open;
  let price_in_house = course.price_in_house;
  let description = course.description;
  let course_name = course.name;
  let lecturer_id = course.lecturer.id;
  let lecturer_name = course.lecturer.name;
  return (
    <>
      <Head>
        <title>{course_name} - skoleni.io</title>
      </Head>
      <Header
        site={props.site}
        header={course_name}
        lecturer={lecturer_name}
        lecturer_id={lecturer_id}
      />
      <Container>
        <Markdown source={description} />
        <Wrapper>
          <PrizeHeader>Cena školení</PrizeHeader>
          <p>
            Otevřený termín: <b>{price_open}</b> bez DPH
          </p>
          <p>
            Firemní školení: <b>{price_in_house}</b> bez DPH
          </p>
        </Wrapper>
        <InquiryBtn
          href={`mailto:${course.lecturer.email}?subject=[skoleni.io][${course_id}] Poptavka skoleni ${course_name}&cc=skoleni@skoleni.io`}
        >
          Nezávazně poptat školení
        </InquiryBtn>
        {/* <H3>Doporučení</H3> */}
        {getRecommendationsByCourse(course_id.id).length > 0 && (
          <H3>Doporučení</H3>
        )}
        <ul>
          {getRecommendationsByCourse(course_id).map((recommendation, i) => {
            <li key={i}>
              {recommendation.text}
              <br />
              --{" "}
              <strong>
                {recommendation.name}, {recommendation.role},{" "}
                {recommendation.company}
              </strong>
            </li>;
          })}
        </ul>
      </Container>
    </>
  );
};

export default Course;
