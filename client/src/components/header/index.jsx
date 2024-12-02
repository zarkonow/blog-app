import React from "react";
import classes from './styles.module.css'
import { Link } from "react-router-dom";



export default function Header() {
  return (
    <div className={classes.header}>
      <h3>Blog App</h3>
      <ul>
        <Link to={'/'}><li>Home</li></Link>
        <Link to={'/add-blog'}><li>Add Blog</li></Link>
        
        
      </ul>
    </div>
  );
}
