import React from "react";
import Navbar from "../Header/Navbar";
import TopBanner from "./TopBanner";
import GoalSection from "./GoalSection";
import CertificateSection from "./CertficateSection";
import WorkSection from "./WorkSection";
import Votes from "./Votes";
import JoinTeam from "./JoinTeam";
import TeamMember from "./TeamMember";
import MainFooter from "../Footer/MainFooter";
import TermFooter from "../Footer/TermFooter";

function About() {
    return (
        <div>
            <Navbar />
            <div className="main_section">
                <TopBanner />
                <GoalSection />
                <CertificateSection />
                <WorkSection />
                <Votes />
                <JoinTeam />
                <TeamMember />
            </div>
            <MainFooter />
            <TermFooter />
        </div>
    );
};

export default About;