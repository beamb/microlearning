import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: left;
  width: 500px;
  background: white;
  color: black;
`;

export const Help = () => {
  return (
    <Container>
      <h2>FAQ</h2>
      <h4>How can I sign out of the extension?</h4>
      <p>
        Navigate to “Settings” and click on the “Sign out” button at the top of
        the page.
        <br />
        <br />A login prompt will appear next time you click on the extension.
      </p>
      <h4>How can I sign in with a different account?</h4>
      <p>
        To sign in with a different account, you first need to sign out.
        <br />
        Navigate to “Settings” and click on the “Sign out” button at the top of
        the page.
        <br />
        <br />A login prompt will appear next time you click on the extension.
      </p>
      <h4>
        How can I choose the number of questions that should be asked each time?
      </h4>
      <p>
        Navigate to “Settings” and select whether you should be asked 5, 10 or
        15 questions at a time. Remember, you always have the possibility to
        keep going after you’re done answering your set number of questions. If
        you choose to continue, your next session will have the same number of
        questions as your previous one. You can always quit in the middle of a
        session - however, your progress will not be stored in case you quit
        before the end of a session.
      </p>
    </Container>
  );
};

export default Help;
