import React from "react";
import CourseDD from "@app/ondrejsika-theme/layouts/CourseDD";
import logo from "@app/data/pictures/courses/white/go.png";

const Page = (props) => (
  <CourseDD
    site={props.site}
    course_id="go"
    lang={props.site.lang}
    logo={logo}
    location="cz"
    show_sessions={true}
  />
);

export default Page;
