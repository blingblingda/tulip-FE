import React, { useState } from "react";
import Header from "../../UI/Header";
import Footer from "../../UI/Footer";
import Button from "../../UI/Button";
import DatePicker from "./Date";
import PassionsModal from "./Modal";
import Gender from "./Gender";

export default function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [city, setCity] = useState("");
  const [genderPrefer, setGenderPrefer] = useState("");
  const [relationIntent, setRelationIntent] = useState("");
  const [selectedPassions, setSelectedPassions] = useState([]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "city") {
      setCity(value);
    }
  };

  const handleGenderOptionChange = (option) => {
    setGender(option);
  };

  const handleAgeChange = (age) => {
    setAge(age);
  };

  const handleGenderPreferChange = (e) => {
    setGenderPrefer(e.target.value);
  };

  const handleRelationIntentChange = (e) => {
    setRelationIntent(e.target.value);
  };

  const handlePassionsChange = (selectedPassions) => {
    setSelectedPassions(selectedPassions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const passionLabels = selectedPassions.map((passion) => passion.label);

    console.log(
      firstName,
      lastName,
      gender,
      age,
      city,
      selectedState,
      genderPrefer,
      relationIntent,
      passionLabels
    );
  };

  return (
    <div>
      <Header />
      <form className="p-6 md:p-12 lg:p-20 xl:p-32" onSubmit={handleSubmit}>
        <div className="space-y-12">
          {/* Profile title */}
          <div className="border-b border-gray-900/10 pb-12">
            <h1 className="text-6xl font-bold text-black text-center">
              Profile
            </h1>
            <p className="mt-1 text-sm leading-6 text-gray-600 text-center">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
          {/* Personal Info */}
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base text-lg font-semibold leading-7 text-gray-900">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use a rough address to match with people from your area.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* First name */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="firstName"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    autoComplete="given-name"
                    value={firstName}
                    onChange={(e) => handleInputChange(e)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* Last name */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="lastName"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    autoComplete="family-name"
                    value={lastName}
                    onChange={(e) => handleInputChange(e)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* Gender */}
              <div className="sm:col-span-4">
                <Gender onGenderChange={handleGenderOptionChange} />
              </div>
              {/* Birthday */}
              <div className="sm:col-span-3">
                <DatePicker onAgeChange={handleAgeChange} />
              </div>
              {/* Location */}
              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    value={city}
                    onChange={(e) => handleInputChange(e)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  State / Province
                </label>
                <div className="mt-2">
                  <select
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
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
            </div>
          </div>
          {/* Show me */}
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-lg font-semibold leading-7 text-gray-900">
              Show me
            </h2>

            <div className="mt-10 space-y-10">
              {/* Preferences */}
              <fieldset>
                <legend className="text-md font-semibold leading-6 text-gray-900">
                  Preferences
                </legend>
                <div className="mt-6 space-y-6">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="men"
                      name="show-me"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value={"Men"}
                      checked={genderPrefer === "Men"}
                      onChange={handleGenderPreferChange}
                    />
                    <label
                      htmlFor="men"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Men
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="women"
                      name="show-me"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value={"Women"}
                      checked={genderPrefer === "Women"}
                      onChange={handleGenderPreferChange}
                    />
                    <label
                      htmlFor="women"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Women
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="everyone"
                      name="show-me"
                      type="radio"
                      value={"Everyone"}
                      checked={genderPrefer === "Everyone"}
                      onChange={handleGenderPreferChange}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="everyone"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Everyone
                    </label>
                  </div>
                </div>
              </fieldset>
              {/* Looking for */}
              <fieldset>
                <legend className="text-lg font-semibold leading-6 text-gray-900">
                  Looking for
                </legend>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Add relationship intent.
                </p>
                <div className="mt-6 space-y-6">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="long-term"
                      name="looking-for"
                      type="radio"
                      value={"Long-term partner"}
                      checked={relationIntent === "Long-term partner"}
                      onChange={handleRelationIntentChange}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="long-term"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Long-term partner ❤️
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="friends"
                      name="looking-for"
                      type="radio"
                      value={"New friends"}
                      checked={relationIntent === "New friends"}
                      onChange={handleRelationIntentChange}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="friends"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      New friends 😍
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="figuring-out"
                      name="looking-for"
                      type="radio"
                      value={"Still figuring it out"}
                      checked={relationIntent === "Still figuring it out"}
                      onChange={handleRelationIntentChange}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="figuring-out"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Still figuring it out 😇
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <div className="py-3">
          <PassionsModal onPassionsChange={handlePassionsChange} />
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Button text={"Cancel"} type="button" />
          <Button text={"Save"} type="submit" />
        </div>
      </form>
      <Footer />
    </div>
  );
}
