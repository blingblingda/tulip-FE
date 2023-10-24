import React, { Component } from "react";
import Header from "../../UI/Header";
import Footer from "../../UI/Footer";
import Button from "../../UI/Button";
import { MapPinIcon, PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import DatePicker from "./Date";
import { useForm } from 'react-hook-form';
import PassionsModal from "./Modal";
import StaticBackdrop from "./Modal";




export default function Profile() {
  return (
    <div>
      <Header />
      <form className="p-6 md:p-12 lg:p-20 xl:p-32">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h1 className="text-6xl font-bold text-black text-center">Profile</h1>
          <p className="mt-1 text-sm leading-6 text-gray-600 text-center">
            This information will be displayed publicly so be careful what you share.
          </p>

          {/* <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-lg font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-lg font-medium leading-6 text-gray-900">
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
            </div>

            <div className="col-span-full">
              <label htmlFor="photo" className="block text-lg font-medium leading-6 text-gray-900">
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-lg font-medium leading-6 text-gray-900">
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base text-lg font-semibold leading-7 text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Use a rough address to match with people from your area.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-lg font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-lg font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
            <DatePicker />
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-lg font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-lg font-medium leading-6 text-gray-900">
                Gender
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Non-binary</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-lg font-medium leading-6 text-gray-900">
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Australia</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div> */}
            

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-lg font-medium leading-6 text-gray-900">
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-lg font-medium leading-6 text-gray-900">
                State / Province
              </label>
              <div className="mt-2">
                <select
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="ACT">Australian Capital Territory</option>
                  <option value="NSW">New South Wales</option>
                  <option value="NT">Northern Territory</option>
                  <option value="QLD">Queensland</option>
                  <option value="SA">South Australia</option>
                  <option value="TAS">Tasmania</option>
                  <option value="VIC">Victoria</option>
                  <option value="WA">Western Australia</option>
                </select>
              </div>
            </div>


            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-lg font-medium leading-6 text-gray-900">
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  pattern="^[0-9]{4}$"  // This ensures only 4 digits are allowed
                  title="Postal code must be a 4-digit number."
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-lg font-semibold leading-7 text-gray-900">Show me</h2>
            <div className="mt-10 space-y-10">
                <fieldset>
                    <legend className="text-md font-semibold leading-6 text-gray-900">Preferences</legend>
                    <div className="mt-6 space-y-6">
                        <div className="flex items-center gap-x-3">
                            <input
                                id="men"
                                name="show-me"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label htmlFor="men" className="block text-sm font-medium leading-6 text-gray-900">
                                Men
                            </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input
                                id="women"
                                name="show-me"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label htmlFor="women" className="block text-sm font-medium leading-6 text-gray-900">
                                Women
                            </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input
                                id="everyone"
                                name="show-me"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label htmlFor="everyone" className="block text-sm font-medium leading-6 text-gray-900">
                                Everyone
                            </label>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend className="text-lg font-semibold leading-6 text-gray-900">Looking for</legend>
                    <p className="mt-1 text-sm leading-6 text-gray-600">Add relationship intent.</p>
                    <div className="mt-6 space-y-6">
                        <div className="flex items-center gap-x-3">
                            <input
                                id="long-term"
                                name="looking-for"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label htmlFor="long-term" className="block text-sm font-medium leading-6 text-gray-900">
                                Long-term partner ❤️
                            </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input
                                id="friends"
                                name="looking-for"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label htmlFor="friends" className="block text-sm font-medium leading-6 text-gray-900">
                                New friends 😍
                            </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input
                                id="figuring-out"
                                name="looking-for"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label htmlFor="figuring-out" className="block text-sm font-medium leading-6 text-gray-900">
                                Still figuring it out 😇
                            </label>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
      </div>

      <div>
        <PassionsModal />
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Button text={"Cancel"} type="button"/>
        <Button text={"Save"} type="submit"/>
      </div>
    </form>
    <Footer />
    </div>
    
  )
}


// const TOTAL_SECTIONS = 4;

// export default class ProfilePage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentSection: 0,
//       firstName: '',
//       lastName: '',
//       email: '',
//       dob: '',
//       gender: '',
//       location: '',
//       sexuality: [],
//       datingPreference: [],
//       datingIntention: '',
//       ethnicity: '',
//       children: '',
//       familyPlans: '',
//       education: '',
//       religion: '',
//       drink: '',
//       smoke: '',
//       photos: [],
//       bio: '',
//       errors: {
//         firstName: '',
//         lastName: '',
//         email: '',
//         dob: '',
//         gender: '',
//         location: '',
//         sexuality: '',
//         datingPreference: '',
//         datingIntention: '',
//         ethnicity: '',
//         children: '',
//         familyPlans: '',
//         education: '',
//         religion: '',
//         drink: '',
//         smoke: '',
//         photos: '',
//         bio: ''
//       }
//     };
//   }

//   validateCurrentSection() {
//     const { currentSection, firstName, lastName, email } = this.state;
  
//     if (currentSection === 0) {
//       if (!firstName.trim() || !lastName.trim()) {
//         this.setState({ errors: { firstName: 'Both first and last name are required' } });
//         return false;
//       } else if (!/^[A-Za-z]+$/.test(firstName) || !/^[A-Za-z]+$/.test(lastName)) {
//         this.setState({ errors: { firstName: 'First and last name should contain only letters' } });
//         return false;
//       }
//     } else if (currentSection === 1) {
//       if (!email.trim()) {
//         this.setState({ errors: { email: 'Email is required' } });
//         return false;
//       } else if (!/\S+@\S+\.\S+/.test(email)) {
//         this.setState({ errors: { email: 'Invalid email format' } });
//         return false;
//       }
//     }
  
//     this.setState({ errors: {} });
//     return true;
//   }

//   handleNext = () => {
//     if (this.validateCurrentSection()) {
//       this.setState(prevState => ({ currentSection: prevState.currentSection + 1 }));
//     }
//   }

//   handleBack = () => {
//     this.setState(prevState => ({ currentSection: prevState.currentSection - 1 }));
//   }

//   clearError = (field) => {
//     if (this.state.errors[field]) {
//       this.setState({ errors: { ...this.state.errors, [field]: '' } });
//     }
//   }

//   renderNameSection() {
//     const { firstName, lastName, errors } = this.state;
//     return (
//       <div className="p-4">
//         <input
//           type="text"
//           placeholder="First Name"
//           value={firstName}
//           onChange={e => {
//             this.setState({ firstName: e.target.value });
//             this.clearError('firstName'); // Clear error for the first name field
//           }}
//           className={`border p-2 w-full mb-4 ${errors.firstName ? 'border-red-500' : ''}`}
//         />
//         <input
//           type="text"
//           placeholder="Last Name"
//           value={lastName}
//           onChange={e => {
//             this.setState({ lastName: e.target.value });
//             this.clearError('lastName'); // Clear error for the last name field
//           }}
//           className={`border p-2 w-full ${errors.lastName ? 'border-red-500' : ''}`}
//         />
//         {errors.firstName && <p className="text-red-500 mt-2">{errors.firstName}</p>}
//       </div>
//     );
//   }
  
//   renderEmailSection() {
//     const { email, errors } = this.state;
//     return (
//       <div className="p-4">
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={e => {
//             this.setState({ email: e.target.value });
//             this.clearError('email'); // Clear error for the email field
//           }}
//           className={`border p-2 w-full ${errors.email ? 'border-red-500' : ''}`}
//         />
//         {errors.email && <p className="text-red-500 mt-2">{errors.email}</p>}
//       </div>
//     );
//   }

//   handleSubmit = () => {
//     // Handle form submission logic here
//     console.log("Form submitted!");
//   }
  

//   render() {
//     return (
//       <div className="flex flex-col min-h-screen">
//         <Header />
//         <main className="flex-1 container mx-auto p-4">
//           {this.state.currentSection === 0 && this.renderNameSection()}
//           {this.state.currentSection === 1 && this.renderEmailSection()}
//           <div className="flex justify-between mt-4">
//             {this.state.currentSection > 0 && <Button text="Back" onClick={this.handleBack} />}
//             {this.state.currentSection < TOTAL_SECTIONS - 1 ? 
//               <Button text="Next" onClick={this.handleNext} /> : 
//               <Button text="Submit" onClick={this.handleSubmit} />
//             }
//           </div>
//         </main>
//         <Footer />
//       </div>
//     );
//   }
// }