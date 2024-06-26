import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;
const STATIC_API = import.meta.env.VITE_STATIC_FILES_URL;

const ViewJob = () => {
  const navigate = useNavigate();
  const location = useLocation();

  if (!location.state) {
    navigate("/");
  }

  const jobId = location.state.jobId;

  const [job, setJob] = useState({});

  useEffect(() => {
    const fetchJob = async () => {
      const response = await fetch(`${API}/utils/job/${jobId}`, {
        method: "GET",
      });

      const data = await response.json();

      if (response.ok) {
        setJob(data.results[0]);
      } else {
        console.error(data.message);
      }
    };

    fetchJob();
  }, [jobId]);

  return (
    <div className="container">
      <section className="view-job">
        <h1>
          Job at <strong className="highlight-text">{job.companyName}</strong>
        </h1>
        <div className="job">
          <img
            src={`${STATIC_API}/uploads/profilePictures/${job.profilePicture}`}
            alt={job.profilePicture}
          />
          <h2>{job.jobDesignation}</h2>
          <div className="job-details">
            <div className="job-detail">
              <h3>Email Address:</h3>
              <p>{job.email}</p>
            </div>
            <div className="job-detail">
              <h3>Job Title</h3>
              <p>{job.jobTitle}</p>
            </div>
            <div className="job-detail">
              <h3>Job Designation</h3>
              <p>{job.jobDesignation}</p>
            </div>
            <div className="job-detail">
              <h3>Job Type:</h3>
              <p>{job.jobType}</p>
            </div>
            <div className="job-detail">
              <h3>Industry:</h3>
              <p>{job.industryCategory}</p>
            </div>
            <div className="job-detail">
              <h3>Job Duration:</h3>
              <p>{job.jobDuration}</p>
            </div>
            <div className="job-detail">
              <h3>Location:</h3>
              <p>{job.cityname}</p>
            </div>
            <div className="job-detail">
              <h3>Salary:</h3>
              <p>
                {job.salaryMin} - {job.salaryMax}
              </p>
            </div>
            <div className="job-detail">
              <h3>Nature of Business:</h3>
              <p>{job.natureOfBusiness}</p>
            </div>
            <div className="job-detail">
              <h3>Address:</h3>
              <p>
                {job.cityname}, {job.statename}, {job.countryname}
              </p>
            </div>
            <div className="job-detail">
              <h3>Job Description:</h3>
              <p>{job.dutyDescription}</p>
            </div>
            <div className="job-detail">
              <h3>Company Description:</h3>
              <p>{job.companyDescription}</p>
            </div>
            <div className="job-detail">
              <h3>Minumum Education:</h3>
              <p>{job.minimumEducation}</p>
            </div>
            <div className="job-detail">
              <h3>Minumum Experience:</h3>
              <p>{job.minimumExperience}</p>
            </div>
            <div className="job-detail">
              <h3>Age Limit:</h3>
              <p>{job.ageLimit}</p>
            </div>
            <div className="job-detail">
              <h3>Women Eligible:</h3>
              <p>{job.womenEligible ? "Yes" : "No"}</p>
            </div>
            <div className="job-detail">
              <h3>Working Hours:</h3>
              <p>
                {job.workingHoursFrom} to {job.workingHoursTo}
              </p>
            </div>
            <div className="job-detail">
              <h3>Work Place Type:</h3>
              <p>{job.workplaceType}</p>
            </div>
            <div className="job-detail">
              <h3>Resumes to be Sent:</h3>
              <p>
                {job.resumesToBeSend === "email" ? job.resumeEmail : "Hardcopy"}
              </p>
            </div>
            <div className="job-detail">
              <h3>Regular Vacancies:</h3>
              <p>{job.vacanciesRegular}</p>
            </div>
            <div className="job-detail">
              <h3>Temporary Vacancies:</h3>
              <p>{job.vacanciesTemporary}</p>
            </div>
            <div className="job-detail">
              <h3>Disability Info:</h3>
              <p>{job.disabilityInfoType}</p>
            </div>
            <div className="job-detail">
              <h3>Disability Percentage:</h3>
              <p>{job.disabilityInfoPercentage}</p>
            </div>
            <div className="job-detail">
              <h3>Disability Aid or Appliances:</h3>
              <p>{job.disabilityInfoAidOrAppliance}</p>
            </div>
            {job.ownVehiclePreferred ? (
              <div className="job-detail">
                <h3>Own Vehicle Preferred:</h3>
                <p>Yes</p>
              </div>
            ) : null}
            {job.conveyanceProvided ? (
              <>
                <div className="job-detail">
                  <h3>Conveyance Provided:</h3>
                  <p>Yes</p>
                </div>
                <div className="job-detail">
                  <h3>Vehicle Type:</h3>
                  <p>{job.conveyanceType}</p>
                </div>
              </>
            ) : null}
          </div>
          <h2>Interview Details</h2>
          <div className="job-details">
            <div className="job-detail">
              <h3>Interview Date:</h3>
              <p>{job.interviewDetailsDate}</p>
            </div>
            <div className="job-detail">
              <h3>Interview Time:</h3>
              <p>{job.interviewDetailsTime}</p>
            </div>
            <div className="job-detail">
              <h3>Interview Contact Person:</h3>
              <p>{job.interviewDetailsContactPerson}</p>
            </div>
            <div className="job-detail">
              <h3>Interview Contact Number:</h3>
              <p>{job.mobile}</p>
            </div>
            <div className="job-detail">
              <h3>Apptitude Test:</h3>
              <p>{job.interviewDetailsAptitudeTest ? "Yes" : "No"}</p>
            </div>
            <div className="job-detail">
              <h3>Group Discussion:</h3>
              <p>{job.interviewDetailsGroupDiscussion ? "Yes" : "No"}</p>
            </div>
            <div className="job-detail">
              <h3>Personal Interview:</h3>
              <p>{job.interviewDetailsPersonalInterview ? "Yes" : "No"}</p>
            </div>
            <div className="job-detail">
              <h3>Technical Interview:</h3>
              <p>{job.interviewDetailsTechnicalInterview ? "Yes" : "No"}</p>
            </div>
            {job.interviewDetailsTechnicalInterview && (
              <div className="job-detail">
                <h3>Technical Interview Details:</h3>
                <p>{job.interviewTopics}</p>
              </div>
            )}
          </div>
          <div className="job-footer">
            {job.resumeEmail && (
              <Link
                className="btn"
                to={`mailto:${job.email}?subject=Application for the post of ${job.jobDesignation}&body=I am interested in the job. Please find my resume attached.`}
              >
                Apply
              </Link>
            )}
            {job.resumeWebsite && (
              <a
                className="btn"
                href={
                  job.resumeWebsite.startsWith("http://") ||
                  job.resumeWebsite.startsWith("https://")
                    ? job.resumeWebsite
                    : `http://${job.resumeWebsite}`
                }
                target="_blank"
                rel="noreferrer"
              >
                Apply
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewJob;
