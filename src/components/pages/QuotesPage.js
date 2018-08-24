import React from 'react';
import { connect } from 'react-redux';
import QuotesPageLayout from '../layout/QuotesPageLayout';
import QuoteCard from '../layout/QuoteCard';

class QuotesPage extends React.Component {
  constructor() {
    super();
    this.state = {
      policies: null
    };
  }

  componentDidMount() {
    const url = 'https://us-central1-database-788c5.cloudfunctions.net/getPolicies';

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(this.props.fields),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ policies: data.policies }));
  }

  render() {
    if (this.state.policies === null) return null;

    return (
      <QuotesPageLayout
        titleText="Your Cyber Insurance Matches"
        description="We've sifted through all of our carriers, and identified the top three options that work well for businesses
            like yours. Highlighted is the one that we think is best for your business based on breadth of coverage,
            liability limit, and overall value."
      >
        <QuoteCard
          img="./img/bcs.jpg"
          alt="bcs logo"
          title={`${this.state.policies[0].coverages.length} Coverages`}
          coverages={this.state.policies[0].coverages}
        />
        <QuoteCard
          img="./img/hiscox2.jpg"
          alt="hiscox logo"
          title={`${this.state.policies[1].coverages.length} Coverages`}
          coverages={this.state.policies[1].coverages}
        />
        <QuoteCard
          img="./img/chubb.jpg"
          alt="chubb logo"
          title={`${this.state.policies[2].coverages.length} Coverages`}
          coverages={this.state.policies[2].coverages}
        />
      </QuotesPageLayout>
    );
  }
}

const mapStateToProps = ({ fields }) => ({
  fields
});

export default connect(mapStateToProps)(QuotesPage);
