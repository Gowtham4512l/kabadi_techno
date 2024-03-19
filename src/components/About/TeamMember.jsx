import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import "../../css/Team_Member.css";

import kuldeepImage from "../../images/Team Members/1_kuldeep.png";
import pritamImage from "../../images/Team Members/2_pritam_singh.png";

const teamMember = [
    {
        dp: kuldeepImage,
        name: "Kuldeep",
        title: "Founder"
    },
    {
        dp: pritamImage,
        name: "Pritam Singh",
        title: "Co-founder"
    }
];

function TeamMember() {
    return (
        <div className="team_member_section" id="ourteam">
            <h1>Our Team Members</h1>
            {teamMember.length !== 0 ? (
                <div className="about_carousel_section">
                    <Splide
                        className="team_member"
                        options={{
                            type: "loop",
                            gap: "1rem",
                            autoplay: true,
                            pauseOnHover: false,
                            resetProgress: false,
                            pagination: false,
                            arrows: false,
                        }}
                    >
                        {teamMember.map((eachMember, eachMemberIndex) => {
                            return (
                                <SplideSlide className="member" key={eachMemberIndex}>
                                    <img src={eachMember.dp} alt="" />
                                    <div>
                                        <h1>{eachMember.name}</h1>
                                        <p>({eachMember.title})</p>
                                    </div>
                                </SplideSlide>
                            );
                        })}
                    </Splide>
                </div>
            ) : null}
        </div>
    );
}

export default TeamMember;
