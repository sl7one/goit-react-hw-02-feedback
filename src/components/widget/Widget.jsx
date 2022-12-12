import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Headerline from './Title';
import Statistic from './Statistic';
import Notification from './Notification';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

const StatisticWrapper = styled.div`
  justify-content: flex-start;
  width: 100%;
`;

class Widget extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  total = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  positive = () => {
    if (!this.total()) {
      return `0%`;
    }
    const result = ((this.state.good / this.total()) * 100).toFixed(2);
    return `${result}%`;
  };

  onClickGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  onClickNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  onClickBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  StatComponent = () => {
    return (
      <StatisticWrapper>
        <Statistic name="Good: " value={this.state.good} />
        <Statistic name="Neutral: " value={this.state.neutral} />
        <Statistic name="Bad: " value={this.state.bad} />
        <Statistic name="Total: " value={this.total()} />
        <Statistic name="Positive feedback: " value={this.positive()} />
      </StatisticWrapper>
    );
  };

  render() {
    return (
      <Wrapper>
        <Headerline title="Please leave feedback" />
        <ButtonWrapper>
          <Button title="Good" onClick={this.onClickGood} />
          <Button title="Neutral" onClick={this.onClickNeutral} />
          <Button title="Bad" onClick={this.onClickBad} />
        </ButtonWrapper>
        <Headerline title="Statistics" />
        {!this.total() ? (
          <Notification message="There is no feedback" />
        ) : (
          this.StatComponent()
        )}

        {/* <StatisticWrapper>
          <Statistic name="Good: " value={this.state.good} />
          <Statistic name="Neutral: " value={this.state.neutral} />
          <Statistic name="Bad: " value={this.state.bad} />
          <Statistic name="Total: " value={this.total()} />
          <Statistic name="Positive feedback: " value={this.positive()} />
        </StatisticWrapper> */}
      </Wrapper>
    );
  }
}

export default Widget;
