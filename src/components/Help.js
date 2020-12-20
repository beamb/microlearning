import React from "react";
import { HelpContainer } from "../styling/Containers";

export const Help = () => {
  return (
    <HelpContainer>
      <h2>FAQ</h2>
      <h4>How can I sign out of the extension?</h4>
      <p>
        Click on the “Sign out” button at the top of the page.
        <br />
        <br />A login prompt will appear next time you click on the extension.
      </p>
      <h4>How can I sign in with a different account?</h4>
      <p>
        To sign in with a different account, you first need to sign out.
        <br />
        Click on the “Sign out” button at the top of the page.
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
      <h4>Why are Netflix, Facebook and Youtube in my list?</h4>
      <p>
        We've setup these websites by default. Feel free to change your list!
        <br /> To do so, navigate to “Settings” and click the trash can icon
        next to the website you wish to delete or the "Add more websites"
        button. You can either pick a website from the predefined dropdown list
        or you can type/copy&amp;paste a URL and assign a name for that website
        in the fields below. The update should be immediately visible.
      </p>
      <h4>After how many minutes on a website will I be interrupted?</h4>
      <p>
        By default, you'll be interrupted after 15 minutes on one of the
        websites in your list. To change this, navigate to “Settings” and select
        the website(s) you wish to update. You can either use the slider to
        change the timeframe for several websites at once or change a value
        directly by clicking on it (at the end of the line of your chosen
        website). You can choose any time between 5 and 60 minutes.
      </p>
      <h4>
        How can I temporarily remove a website from the interruption list?
      </h4>
      <p>
        Navigate to “Settings” and toggle the desired website's switch. By
        default, all websites in your list are enabled.
      </p>
      <h4>How can I delete a website from the interruption list?</h4>
      <p>
        Navigate to “Settings” and click the trash can icon of the desired
        website.
      </p>
      <h4>How can I add a website to the interruption list?</h4>
      <p>
        Navigate to “Settings” and click the "Add more websites" button. You can
        either pick a website from the predefined dropdown list or you can
        type/copy&amp;paste a URL and assign a name for that website in the
        fields below. The update should be immediately visible.
      </p>
    </HelpContainer>
  );
};

export default Help;
