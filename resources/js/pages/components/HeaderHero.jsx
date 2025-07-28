import React, { useState } from "react";
import HomeAppointmentFrom from './form/homeAppointment'

const HeaderHero = ({ HeaderData, translations }) => {
  const header = HeaderData[0];

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden py-10">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">

          {/* Left - Hero Text (Hide on small screens) */}
          <div className="hidden md:block px-6">

            <h2 className={`mt-6 text-4xl tracking-tight leading-10 font-extrabold ${header.hero.textColor}`}>
              {header.hero.heading}
            </h2>
            <p className={`mt-4 text-base ${header.hero.paragraphColor}`}>
              {header.hero.subheading}
            </p>
            <p className={`mt-4 text-base ${header.hero.paragraphColor}`}>
              {header.hero.subheadingOne}
            </p>
          </div>

          {/* Right - Form (Visible on all screens) */}
          <div className="px-4">
            <h2 className="text-2xl font-bold text-blue-700 mb-3 ml-3"> {header.department} {translations?.Appointment || ''}  </h2>
            <div className=" ">
              <HomeAppointmentFrom header={header} />
            </div>
          </div>
        </div>
      </div>


      <section className="bg-gradient-to-r from-blue-100 to-[#e0f7f6] py-12 px-6 text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">{header.centersection.center.title}</h1>
        <p className="text-gray-900 text-bold max-w-6xl mx-auto">
          {header.centersection.center.subtitle}
        </p>
      </section>

      {/*threed section */}
      <div className="bg-white py-12 px-4 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex items-center justify-center text-center gap-8">
          {/* Left Quote Section */}
          <div className="flex-1 text-center lg:text-left relative">
            <p className="text-gray-700 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              {header.threedSection.heading}
            </p>
          </div>

          {/* Image */}
          <div className=" lg:items-start">
            <div className="relative ">
              {/* Circle Background */}
              <div className="absolute inset-0 items-center justify-center"></div>
              {/* Doctor Image */}
              <img
                src={header.threedSection.image.src}
                alt={header.threedSection.image.alt}
                className={header.threedSection.image.classes}
              />
            </div>
          </div>

          {/* Subheading Section */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-gray-700 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              {header.threedSection.subheading}
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <section className={header.whyChoose.layout.wrapperClasses}>
        <img
          src={header.whyChoose.image.src}
          alt={header.whyChoose.image.alt}
          className={header.whyChoose.image.classes}
        />

        <div>
          <h2 className={header.whyChoose.content.titleClasses}>
            {header.whyChoose.content.title}
          </h2>
          <ul className={header.whyChoose.content.listClasses}>
            {header.whyChoose.content.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* call to action */}
      <section className="bg-[#F0FBFB] py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Left Text Content */}
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-blue-800 mb-2">{header.ctaSection.title}</h2>
            <p className="text-lg text-gray-700 mb-4">
              {header.ctaSection.description}
            </p>
            <p className="text-md text-gray-600 mb-2">
              <strong>{header.ctaSection.details.address.label}</strong> - {header.ctaSection.details.address.value}
            </p>
            <p className="text-md text-gray-600 mb-4">
              <strong>{header.ctaSection.details.phone.label}</strong>
              <a href={header.ctaSection.details.phone.link} className="text-blue-700 hover:underline"> - {header.ctaSection.details.phone.value}</a>
            </p>
            <p className="text-blue-800 font-semibold italic">{header.ctaSection.footerNote}</p>
          </div>

          {/* Right Action Button */}
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <a
              href={header.ctaSection.button.link}
              className="inline-block  hover:bg-[#80CAC7] bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
            >
              {header.ctaSection.button.label}
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className={header.conditions.layout.wrapperClasses}>
        <div>
          <h2 className={header.conditions.content.titleClasses}>
            {header.conditions.content.title || 'BM Hospital'}
          </h2>
          <ul className={header.conditions.content.listClasses}>
            {header.conditions.content.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>

        <img
          src={header.conditions.image.src || 'BM Hospital'}
          alt={header.conditions.image.alt || 'BM Hospital'}
          className={header.conditions.image.classes || 'BM Hospital'}
        />
      </section>
    </>
  );
};

export default HeaderHero;