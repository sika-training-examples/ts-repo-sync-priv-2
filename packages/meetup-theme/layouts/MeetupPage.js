import React from "react";
import Head from "next/head";
import HeaderBar from "@app/meetup-theme/components/HeaderBar";
import FooterBar from "@app/meetup-theme/components/FooterBar";
import HeaderLarge from "@app/meetup-theme/components/HeaderLarge";
import Section from "@app/meetup-theme/components/Section";

const MeetupPage = (props) => {
  return (
    <div>
      <Head>
        <title>{props.meetup_name}</title>
      </Head>
      <div className="mt-3">
        <HeaderBar site_name={props.site_name}></HeaderBar>
      </div>
      <div className="mt-3">
        <HeaderLarge
          logo={props.logo}
          heading={props.meetup_name}
        ></HeaderLarge>
      </div>
      <Section heading={props.about_us_header}>
        {props.about_us_content}
      </Section>
      <Section heading={props.join_us_header}>{props.join_us_content}</Section>
      {props.children}
      <FooterBar
        site_name={props.site_name}
        meetupcom_url={props.meetupcom_url}
      />
    </div>
  );
};

export default MeetupPage;
