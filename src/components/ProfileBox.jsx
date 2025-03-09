import React from "react";
import "./ProfileBox.css";

export default function ProfileBox() {
  return (
    <div className="profile-box">
      <h2 className="profile-title">Emma Gonzalez's Recipe Box</h2>

      <div className="profile-row-container">
        {/* Profile Image */}
        <img
          src="/avatar.png"
          alt="Emma Gonzalez"
          className="profile-image"
        />

        {/* Profile Content */}
        <div className="profile-content">
          <p className="profile-description">
            Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as
            a former cooking editor at The Los Angeles Times. She is also an
            accomplished author, contributing to numerous cookbooks and food
            publications. Originally from East Los Angeles, Emma now resides in
            New York City, where she explores a wide range of culinary delights.
          </p>

          {/* Actions: Subscribe Count + Share Button */}
          <div className="profile-actions">
            <span className="subscribe-count">6.5k Subscribes</span>
            <button className="share-btn">
              Share <span className="share-icon"><img src="/sharefat.png" alt="" /></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
