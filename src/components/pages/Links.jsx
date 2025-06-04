import React, { useState } from "react";
import "../Home.css";
import { Link } from "react-router-dom";

export const Links = () => {
  const [hoveredIcon, setHoveredIcon] = useState(false);

  const iconData = [
    {
      icon: "fa fa-coffee",
      label: "ko-fi",
      sitelink: "https://ko-fi.com/hannanodaa/shop",
    },
    {
      icon: "fa fa-etsy",
      label: "etsy",
      sitelink: "https://www.etsy.com/ca/shop/hannanodaa",
    },
    {
      icon: "fa fa-cloud",
      label: "bluesky",
      sitelink: "https://bsky.app/profile/hannanodaa.bsky.social",
    },
    {
      icon: "fa fa-instagram",
      label: "instagram",
      sitelink: "https://www.instagram.com/hannanodaa",
    },
    {
      icon: "fa fa-twitter",
      label: "twitter",
      sitelink: "https://x.com/hannanodaa",
    },
    {
      icon: "fa fa-tumblr",
      label: "tumblr",
      sitelink: "https://hannanodaa.tumblr.com/",
    },
  ];
  return (
    <div className="content">
      <div>
        <div className="linkspage icon-links">
          {iconData.map((item, index) => (
            <span
              key={index}
              className={`linkspage-icons ${item.label} link-nav ${
                hoveredIcon === index ? "enlarged" : ""
              }`}
              onMouseOver={() => setHoveredIcon(index)}
              onMouseOut={() => setHoveredIcon(null)}
              style={{ gridArea: item.label }}
            >
              <Link
                to={item.sitelink}
                className={`fa ${item.icon}`}
                target="_blank"
              ></Link>
              <p></p>
              <Link
                to={item.sitelink}
                className="linkspage-links"
                target="_blank"
              >
                {item.label}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
