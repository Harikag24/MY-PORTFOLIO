import React from 'react'
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
         <div className="projects-section-title">
        <h3>My Projects</h3>
        <div className="projects-section">
        {/* <h3>My Projects</h3> */}
        <div className='project'>
            <h4>She’s Store</h4>
            <p>Developed a full-stack e-commerce website for women’s accessories using Python, Flask, MySQL, HTML, and CSS. The site includes product management, user accounts, and order processing features.</p>
        </div>
        <div className='project'>
            <h4>YouTube Clone</h4>
            <p>Created a YouTube clone to enhance front-end skills, using HTML, CSS, and JavaScript. Implemented dynamic content loading, pagination, and search functionality.</p>
        </div>

        <div className='project'>
            <h4>Weather prediction using (RNN) LSTM</h4>
            <p>Developed an LSTM-based Recurrent Neural Network for time series weather prediction, leveraging a large dataset to forecast weather patterns with high accuracy.
               Applied advanced machine learning techniques for model training and evaluation, achieving an 88% improvement in forecasting accuracy compared to previous models.
               Proficient in data preprocessing, including cleaning, normalization, and feature engineering, to ensure high-quality input for the model.</p>
        </div>

        <div className='project'>
            <h4>Disease Prediction using Machine Learning</h4>
            <p>Developed and optimized a disease prediction model using Decision Trees and Random Forests, achieving high accu- racy. Applied data preprocessing techniques including SMOTE and feature selection to handle imbalanced datasets. Utilized Python libraries like scikit-learn and pandas for development, with visualizations from Matplotlib and Seaborn for performance insights.</p>
        </div>


        </div>
        </div>

        
    </section>
  )
}

export default Projects
