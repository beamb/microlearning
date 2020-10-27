import React from 'react';
import styled from 'styled-components';

function MainScreen() {

  const Container = styled.div`
  display: inline-block;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 700px;
  height: 700px;
  background: papayawhip;
  color: black;
  `

    return (
      <Container>
          <p>
            This is where the CrossExit, SettingsButton, Question, Answer and ProgressBar components go.
          </p>
      </Container>
    );
  }
  
  export default MainScreen;