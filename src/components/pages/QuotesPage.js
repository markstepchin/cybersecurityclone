import React from "react";
import QuotesPageLayout from "../layout/QuotesPageLayout";
import QuoteCard from "../layout/QuoteCard";

const QuotesPage = () => (
  <QuotesPageLayout
    titleText="Your Cyber Insurance Matches"
    description="We've sifted through all of our carriers, and identified the top three options that work well for businesses
        like yours. Highlighted is the one that we think is best for your business based on breadth of coverage,
        liability limit, and overall value."
  >
    <QuoteCard
      img="./img/bcs.jpg"
      title="8 Coverages"
      coverages={[
        "Privacy Regulary Claims Coverage",
        "Security Breach Response Coverage",
        "Cyber Extortion",
        "Business Income and Digital Asset Restoration",
        "PCI DSS Assessment",
        "Privacy Liability (including Employee Privacy)",
        "Security liability",
        "Multimedia Liability"
      ]}
    />
    <QuoteCard
      img="./img/hiscox2.jpg"
      title="10 Coverages"
      coverages={[
        "Data Breach Response",
        "Cyber Extortion",
        "Data Recovery",
        "Business Interruption",
        "Dependent Business Interruption",
        "System Failure Business",
        "Cyber Crime",
        "Cyber Deception",
        "Privacy and Security Liability",
        "Media Liability"
      ]}
    />
    <QuoteCard
      img="./img/chubb.jpg"
      title="9 Coverages"
      coverages={[
        "Cyber Incident Response Fund",
        "Business Interruption",
        "Contingent Business Interruption",
        "Digital Data Recovery",
        "Network Extortion",
        "Cyber, Privacy and Network Security Liability",
        "Payment Card Loss",
        "Regulatory Proceeds",
        "Electronic, Social, and Printed Media Liability"
      ]}
    />
  </QuotesPageLayout>
);

export default QuotesPage;
