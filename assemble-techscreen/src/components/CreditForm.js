import React, { PureComponent } from "react";
import { render } from "react-dom";
import creditCardType from "credit-card-type";

import { Container, Input, Columns, Segment, Select, Button } from "./elements";
import fillCardGaps from "./fillCardGaps";

class Credit extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: "",
      name: "",
      expMonth: "",
      expYear: "",
      cvv: "",
      cardType: {
        niceType: "",
        type: "",
        gaps: [],
        lengths: [],
        code: {
          name: "CVV",
          length: 3
        }
      }
    };
  }
  handleInputChange = e => {
    const target = e.target;
    const id = target.id;
    let value = target.value;

    switch (id) {
      case "cardNumber":
      case "expirationMonth":
      case "expirationYear":
      case "cvv":
        if (!/^[ 0-9]*$/gm.test(value)) {
          return;
        }
        break;
      default:
        break;
    }

    if (id === "cardNumber") {
      const cardTypes = creditCardType(value.replace(/ /g, ""));
      const newCardType = cardTypes ? cardTypes[0] : null;
      this.setState(({ cardType }) => ({
        [id]: fillCardGaps(value, newCardType.gaps),
        cardType: newCardType || cardType
      }));
    } else {
      this.setState({ [id]: value });
    }
  };
  handleSubmit = () => {
    if (this.isFormValid()) {
      const details = {
        ...this.state,
        cardNumber: this.state.cardNumber.replace(/ /g, "")
      };
      console.log(details);
    }
  };
  isFormValid = () => {
    const fields = ["cardNumber", "name", "expMonth", "expYear", "cvv"];
    fields.map(field =>
      this.setState({ [`${field}Required`]: this.state[field] === "" })
    );
    return !fields.some(field => this.state[field] === "");
  };
  render() {
    const {
      cardNumber,
      name,
      expMonth,
      expYear,
      cvv,
      cardType,
      cardNumberRequired,
      nameRequired,
      expMonthRequired,
      expYearRequired,
      cvvRequired
    } = this.state;
    return (
      <Container>
        <Columns>
          <label>{cardType.niceType} Card Number</label>
          <Input
            type="text"
            id="cardNumber"
            value={cardNumber}
            maxLength={cardType.lengths[0] + cardType.gaps.length}
            placeholder=""
            onChange={this.handleInputChange}
            requiredError={cardNumberRequired}
          />
        </Columns>
        <Columns>
          <label>Name</label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={this.handleInputChange}
            requiredError={nameRequired}
          />
        </Columns>
        <Columns>
          <Segment>
            <label>Expiration Date</label>
            <label>&nbsp;</label>
            <label>{cardType.code.name}</label>
          </Segment>
          <Segment>
            <Select
              id="expMonth"
              requiredError={expMonthRequired}
              onChange={this.handleInputChange}
            >
              <option value={expMonth}>{expMonth}</option>
              {[
                "01",
                "02",
                "03",
                "04",
                "05",
                "06",
                "07",
                "08",
                "09",
                "10",
                "11",
                "12"
              ].map(
                month =>
                  month !== expMonth ? (
                    <option key={`month${month}`} value={month}>
                      {month}
                    </option>
                  ) : null
              )}
            </Select>
            <Select
              id="expYear"
              requiredError={expYearRequired}
              onChange={this.handleInputChange}
            >
              <option value={expYear}>{expYear}</option>
              {new Array(11)
                .fill(new Date().getFullYear())
                .map((currentYear, addition) => {
                  const year = `${currentYear + addition}`;
                  if (year !== expYear) {
                    return (
                      <option key={`year${year}`} value={year}>
                        {year}
                      </option>
                    );
                  }
                  return;
                })}
            </Select>
            <Input
              type="text"
              id="cvv"
              value={cvv}
              maxLength={cardType.code.size || 3}
              onChange={this.handleInputChange}
              requiredError={cvvRequired}
            />
          </Segment>
        </Columns>
        <Columns>
          <Button onClick={this.handleSubmit}>Submit</Button>
        </Columns>
      </Container>
    );
  }
}

export default Credit;