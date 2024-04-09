import React from "react";
import { meetings, companies } from "./ClubData";
import "./Club.css";

function Club({ selectedCategory }) {
  // prop으로 전달받은 selectedCategory를 사용하여 필터링
  const filteredMeetings = meetings.filter(
    (meeting) => meeting.category === selectedCategory
  );
  const filteredCompanies = companies.filter(
    (company) => company.category === selectedCategory
  );

  return (
    <div>
      <div className="items-container">
        {filteredMeetings.map((meeting) => (
          <div key={meeting.id} className="item">
            <img
              src={meeting.thumbnail}
              alt={meeting.name}
              className="thumbnail"
            />
            <h3>{meeting.name}</h3>
            <p>{meeting.location}</p>
            <p>{meeting.meetingDay}</p>
            <p>{meeting.fee}</p>
          </div>
        ))}
        {filteredCompanies.map((company) => (
          <div key={company.id} className="item">
            <img
              src={company.thumbnail}
              alt={company.name}
              className="thumbnail"
            />
            <h3>{company.name}</h3>
            <p>{company.location}</p>
            <p>{company.time}</p>
            <p>{company.fee}</p>
            {/* 업체 정보 추가 위치 */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Club;
