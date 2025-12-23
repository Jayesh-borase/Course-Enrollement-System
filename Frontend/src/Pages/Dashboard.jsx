import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "Master modern web development with MERN stack, build real-world projects, and become job-ready.",
      duration: "12 weeks",
      level: "Intermediate",
      category: "Web Development"
    },
    {
      id: 2,
      title: "Data Science & Machine Learning",
      description: "Learn data analysis, visualization, and ML algorithms using Python and popular frameworks.",
      duration: "16 weeks",
      level: "Advanced",
      category: "Data Science"
    },
    {
      id: 3,
      title: "Mobile App Development with React Native",
      description: "Build cross-platform mobile apps for iOS and Android using React Native and modern tools.",
      duration: "10 weeks",
      level: "Intermediate",
      category: "Mobile Development"
    }
  ];

  const handleViewMore = (courseId) => {
    console.log(`View more clicked for course ${courseId}`);
    // Navigate to course details page
  };

  return (
    <div className="dashboard">
      {/* Spacing after navbar */}
      <div className="dashboard-spacing"></div>
      
      <div className="dashboard-header">
        <h1 className="dashboard-title">Available Courses</h1>
        <p className="dashboard-subtitle">Browse and enroll in our featured courses</p>
      </div>

      <div className="courses-container">
        <div className="courses-grid">
          {courses.map(course => (
            <div key={course.id} className="course-card">
              <div className="course-card-header">
                <span className="course-category">{course.category}</span>
                <h3 className="course-title">{course.title}</h3>
              </div>
              
              <div className="course-card-body">
                <p className="course-description">{course.description}</p>
                
                <div className="course-details">
                  <div className="detail-item">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">{course.duration}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Level:</span>
                    <span className="detail-value level-badge">{course.level}</span>
                  </div>
                </div>
              </div>

              <div className="course-card-footer">
                <button 
                  className="btn-view-more"
                  onClick={() => handleViewMore(course.id)}
                >
                  View More Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Spacing before footer */}
      <div className="dashboard-spacing"></div>
    </div>
  );
};

export default Dashboard;