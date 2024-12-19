import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Layout>
      <div className="container mt-4">
        {/* Welcome Section */}
        <div className="text-center mb-5">
          <h1 className="display-4">Welcome Admin, <i className="text-success">{user?.name}</i>!</h1>
          <p className="lead text-muted">
            Monitor, manage, and optimize the blood bank operations with ease. Let’s ensure every drop counts!
          </p>
          <hr className="my-4" />
        </div>

        {/* About Section */}
        <div className="about-section p-4 bg-light rounded shadow-sm">
          <h2 className="mb-3">About the Blood Bank App</h2>
          <p className="text-muted">
            The Blood Bank App is designed to streamline blood bank operations, providing administrators like you with powerful tools to:
          </p>
          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item">Track blood inventory levels in real-time.</li>
            <li className="list-group-item">Manage donor and recipient information effectively.</li>
            <li className="list-group-item">Generate insightful reports for data-driven decision making.</li>
            <li className="list-group-item">Ensure compliance with medical regulations and standards.</li>
          </ul>
          <p className="text-muted">
            Our mission is to support lifesaving efforts by ensuring that no patient ever has to wait for a critical blood transfusion. 
          </p>
        </div>

        {/* Features Section */}
        <div className="features-section mt-5">
          <h2 className="mb-4">Key Features</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">Real-Time Monitoring</h5>
                  <p className="card-text text-muted">
                    Track and manage your blood bank inventory with up-to-date data.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">Donor Management</h5>
                  <p className="card-text text-muted">
                    Maintain a comprehensive database of donors and their history.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">Detailed Reporting</h5>
                  <p className="card-text text-muted">
                    Generate reports to analyze trends and improve efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
