import React from 'react'
import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css";
import { Button } from '../../UI/Button';
import { Header } from '../../UI/Header';
import { Footer } from '../../UI/Footer';

export const NotFoundPage = () => {
  const navigate = useNavigate();


  const handleGoHome = () => {
    navigate("/")
  }

  return (
    <div className='min-h-screen flex flex-col'>
      <div className='flex-shrink-0'>
      <Header />
      </div>
      <div className="flex-1 my-5 text-center ">
        <h1 className="pt-4 text-custom-plum">Uh oh, that page doesn't exist.</h1>
        <section className="error-container">
          <span>4</span>
          <span>
            <span className="screen-reader-text">0</span>
          </span>
          <span>4</span>
        </section>
        <div className="flex justify-center mb-8">
          <Button text="Home" onClick={handleGoHome}/>
        </div>
      </div>
      <div className='flex-shrink-0'>
      <Footer/>
      </div>
    </div>
  )
}

