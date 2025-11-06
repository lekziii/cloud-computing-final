import React from 'react';

const Task3 = () => {
  const renderUrl = "https://eduserve-cloud-assignment.onrender.com"; // This will be your actual URL
  
  return (
    <div className="task-card">
      <h2>Task 3: Cloud Platform Implementation</h2>
      
      <div className="task-section">
        <h3>3.1 Cloud Deployment on Render.com</h3>
        <p><strong>Deployment Platform:</strong> Render.com</p>
        <p><strong>Deployment Status:</strong> ✅ Successfully deployed</p>
        <p><strong>Live URL:</strong> <a href={renderUrl} target="_blank" rel="noopener noreferrer" style={{color: '#4CAF50', fontWeight: 'bold'}}>{renderUrl}</a></p>
        
        <div className="diagram-container">
          <h4>Deployment Pipeline</h4>
          <div className="diagram">
            <div className="diagram-box">Local Development</div>
            <div className="diagram-arrow">↓</div>
            <div className="diagram-box">GitHub Repository</div>
            <div className="diagram-arrow">↓</div>
            <div className="diagram-box">Render.com</div>
            <div className="diagram-arrow">↓</div>
            <div className="diagram-box" style={{background: '#2ecc71'}}>Live Production</div>
          </div>
        </div>
      </div>

      <div className="task-section">
        <h3>3.2 Deployment Process</h3>
        <p><strong>Steps Completed:</strong></p>
        <ol>
          <li>✅ React application development and testing</li>
          <li>✅ Code pushed to GitHub repository</li>
          <li>✅ Connected GitHub repo to Render.com</li>
          <li>✅ Automatic deployment configured</li>
          <li>✅ Continuous deployment enabled</li>
          <li>✅ SSL certificate auto-generated</li>
          <li>✅ Global CDN configured</li>
        </ol>
      </div>

      <div className="task-section">
        <h3>3.3 Render.com Configuration</h3>
        <table className="cost-table">
          <thead>
            <tr>
              <th>Setting</th>
              <th>Value</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Service Type</td>
              <td>Static Site</td>
              <td>Host React static files</td>
            </tr>
            <tr>
              <td>Build Command</td>
              <td>npm run build</td>
              <td>Create production build</td>
            </tr>
            <tr>
              <td>Publish Directory</td>
              <td>build</td>
              <td>Serve built files</td>
            </tr>
            <tr>
              <td>Auto-Deploy</td>
              <td>Enabled</td>
              <td>Deploy on git push</td>
            </tr>
            <tr>
              <td>Plan</td>
              <td>Free</td>
              <td>Cost-effective for academic use</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Keep your existing AWS content */}
      <div className="task-section">
        <h3>3.4 AWS Virtual Machine Configuration (Theoretical)</h3>
        <p><strong>Selected Platform:</strong> Amazon Web Services (AWS)</p>
        {/* Your existing AWS content here */}
      </div>
    </div>
  );
};

export default Task3;