import React from "react";

interface WelcomePageProps {
  title: string;
}
const WelcomePage = (props: WelcomePageProps) => {
  return <div>{props.title}</div>;
};

export default WelcomePage;
