import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../UI/Header";
import { Footer } from "../../UI/Footer";
import { Button } from "../../UI/Button";
import { CustomDatePicker as DatePicker } from "./Date";
import { PassionsModal } from "./Modal";
import { Gender } from "./Gender";
import RangeSlider from "./RangeSlider";
import { sendUserImage } from "../../services/UserService";

const validateForm = ({
  firstName,
  lastName,
  gender,
  min,
  max,
  city,
  selectedState,
  genderPrefer,
  relationIntent,
  selectedPassions,
  photoUrl,
  bioContent,
}) => {
  // Checking if any field is empty
  if (
    !firstName ||
    !lastName ||
    !gender ||
    !min ||
    !max ||
    !city ||
    !selectedState ||
    !genderPrefer ||
    !relationIntent ||
    !photoUrl ||
    !bioContent
  ) {
    return { isValid: false, message: "All fields must be filled!" };
  }

  // Checking if names contain numbers
  const hasNumber = /\d/;
  if (hasNumber.test(firstName) || hasNumber.test(lastName)) {
    return { isValid: false, message: "Names cannot contain numbers!" };
  }

  if (hasNumber.test(city)) {
    return { isValid: false, message: "City cannot contain numbers!" };
  }

  if (isNaN(min) || min < 18 || min > 65) {
    return {
      isValid: false,
      message: "Age must be a number between 18 and 65!",
    };
  }

  if (isNaN(max) || max < 18 || max > 65) {
    return {
      isValid: false,
      message: "Age must be a number between 18 and 65!",
    };
  }

  if (min >= max) {
    return {
      isValid: false,
      message: "Minimum age must be less than maximum age!",
    };
  }

  if (selectedPassions.length < 3) {
    return {
      isValid: false,
      message: "At least three passions must be selected!",
    };
  }

  return { isValid: true, message: "" };
};

// Component for handling user registration
export const RegistrationPage = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [city, setCity] = useState("");
  const [genderPrefer, setGenderPrefer] = useState("");
  const [relationIntent, setRelationIntent] = useState("");
  const [selectedPassions, setSelectedPassions] = useState([]);
  const [ageRange, setAgeRange] = useState({ min: 18, max: 65 });
  const [formError, setFormError] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [bioContent, setBioContent] = useState("");
  // Constants for backend communication
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const BACKEND_URL = "https://tulip-back-end.onrender.com";

  // Handler functions
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
  const handlePhotoUpload = async (e) => {
    const photoFile = e.target.files[0];
    const formData = new FormData();
    formData.append("image", photoFile);
    try {
      const res = await sendUserImage(formData);
      setPhotoUrl(res.photo_url);
    } catch (err) {
      console.error("Failed to upload the image.", err);
    }
  };
  const handleBioContent = (e) => {
    setBioContent(e.target.value);
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Trim input values to remove leading/trailing spaces
    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();
    const trimmedCity = city.trim();

    // Validation logic moved to a separate utility function
    const validationResult = validateForm({
      firstName: trimmedFirstName,
      lastName: trimmedLastName,
      gender,
      min: ageRange.min,
      max: ageRange.max,
      city: trimmedCity,
      selectedState,
      genderPrefer,
      relationIntent,
      selectedPassions,
      photoUrl,
      bioContent,
    });

    // Handle validation result
    if (!validationResult.isValid) {
      setFormError(validationResult.message);
    } else {
      // Reset error message
      setFormError("");

      const passionLabels = selectedPassions.map((passion) => passion.label);

      // Construct user info object for API call
      const userInfo = {
        name: trimmedFirstName,
        // trimmedLastName,
        gender: gender,
        age: age,
        city: trimmedCity,
        state: selectedState,
        gender_preference: genderPrefer,
        looking_for: relationIntent,
        passion: passionLabels,
        age_preference: ageRange,
        photo_url: photoUrl,
        bio: bioContent,
      };

      fetch(`${BACKEND_URL}/api/profile/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": `${token}`,
        },
        body: JSON.stringify(userInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          // Success handling
          navigate("/match");
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const handleCancel = () => {
    // reset the state for all form fields
    setFirstName("");
    setLastName("");
    setGender("");
    setAge("");
    setSelectedState("");
    setCity("");
    setGenderPrefer("");
    setRelationIntent("");
    setSelectedPassions([]);
    setAgeRange({ min: 18, max: 65 });
    setFormError("");
    setPhotoUrl("");
    setBioContent("");
  };

  return (
    <div>
      <Header />
      <form
        className="p-6 md:p-12 lg:p-20 xl:p-32 dark:bg-gray-900"
        onSubmit={handleSubmit}
      >
        <div className="space-y-12">
          {/* Profile title */}
          <div className="border-b border-gray-900/10 dark:border-gray-700 pb-12">
            <h1 className="text-5xl font-bold text-black dark:text-white text-center">
              Profile 👤
            </h1>
            <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400 text-center">
              "Get noticed for being you! Complete your profile to share your
              story with everyone."
            </p>
          </div>
          {/* Personal Info */}
          <div className="border-b border-gray-900/10 dark:border-gray-700 pb-12">
            <h2 className="text-base text-lg font-semibold leading-7 text-gray-900 dark:text-white">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
              Use a rough address to match with people from your area.
            </p>

            {/* Image upload */}
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <div className="group relative flex justify-center items-center rounded-lg border border-dashed border-gray-900/ dark:border-gray-700 p-6">
                  <span
                    className="ease absolute left-0 top-0 h-0 w-0 transition-all duration-200 group-hover:w-full"
                    style={{ borderTop: "2px solid var(--magenta)" }}
                  ></span>
                  <span
                    className="ease absolute right-0 top-0 h-0 w-0 transition-all duration-200 group-hover:h-full"
                    style={{ borderRight: "2px solid var(--magenta)" }}
                  ></span>
                  <span
                    className="ease absolute bottom-0 right-0 h-0 w-0 transition-all duration-200 group-hover:w-full"
                    style={{ borderBottom: "2px solid var(--magenta)" }}
                  ></span>
                  <span
                    className="ease absolute bottom-0 left-0 h-0 w-0 transition-all duration-200 group-hover:h-full"
                    style={{ borderLeft: "2px solid var(--magenta)" }}
                  ></span>

                  <div className="text-center z-10">
                    <label
                      htmlFor={"file-upload"}
                      className="relative cursor-pointer rounded-lg p-4"
                    >
                      {photoUrl ? (
                        <div className="w-1/5 mx-auto">
                          <img src={photoUrl} alt="" />
                        </div>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mx-auto h-12 w-12 text-gray-300"
                        >
                          <circle cx="12" cy="12" r="3.2"></circle>
                          <path d="M9 2L7.17 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3.17L15 2H9z"></path>
                        </svg>
                      )}
                      <input
                        id={"file-upload"}
                        name={"file-upload"}
                        type="file"
                        className="sr-only"
                        onChange={handlePhotoUpload}
                        accept="image/*"
                      />
                    </label>
                    <p className="mt-4 text-xs leading-5 text-gray-600 dark:text-gray-400">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              {/* First name */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="firstName"
                  className="block text-lg font-medium leading-6 text-gray-900 dark:text-gray-400"
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* Last name */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="lastName"
                  className="block text-lg font-medium leading-6 text-gray-900 dark:text-gray-400"
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* Bio */}
              <div className="sm:col-span-6">
                <label
                  htmlFor="lastName"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Bio
                </label>
                <div className="mt-2">
                  <textarea
                    name="bio"
                    id="bio"
                    maxLength="300"
                    placeholder="Enter your bio. (max 50 words)"
                    value={bioContent}
                    onChange={(e) => handleBioContent(e)}
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 dark:text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
              {/* Age Filter */}
              <div className="sm:col-span-3">
                <RangeSlider ageRange={ageRange} setAgeRange={setAgeRange} />
              </div>
              {/* Location */}
              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-lg font-medium leading-6 text-gray-900 dark:text-gray-400"
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-lg font-medium leading-6 text-gray-900 dark:text-gray-400"
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
          <div className="border-b border-gray-900/10 dark:border-gray-700 pb-12">
            <h2 className="text-lg font-semibold leading-7 text-gray-900 dark:text-gray-400">
              Show me
            </h2>
            <div className="mt-10 space-y-10">
              {/* Preferences */}
              <fieldset>
                <legend className="text-md font-semibold leading-6 text-gray-900 dark:text-gray-400">
                  Preferences
                </legend>
                <div className="mt-6 space-y-6">
                  {/* Male option */}
                  <div className="flex items-center gap-x-3">
                    <input
                      id="Male"
                      name="show-me"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-primary-800 focus:ring-primary-800"
                      value={"Male"}
                      checked={genderPrefer === "Male"}
                      onChange={handleGenderPreferChange}
                    />
                    <label
                      htmlFor="Male"
                      className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-400"
                    >
                      Male
                    </label>
                  </div>
                  {/* Female option */}
                  <div className="flex items-center gap-x-3">
                    <input
                      id="Female"
                      name="show-me"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-primary-800 focus:ring-primary-800"
                      value={"Female"}
                      checked={genderPrefer === "Female"}
                      onChange={handleGenderPreferChange}
                    />
                    <label
                      htmlFor="Female"
                      className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-400"
                    >
                      Female
                    </label>
                  </div>
                  {/* Others option */}
                  <div className="flex items-center gap-x-3">
                    <input
                      id="Others"
                      name="show-me"
                      type="radio"
                      value={"Others"}
                      checked={genderPrefer === "Others"}
                      onChange={handleGenderPreferChange}
                      className="h-4 w-4 border-gray-300 text-primary-800 focus:ring-primary-800"
                    />
                    <label
                      htmlFor="Others"
                      className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-400"
                    >
                      Other
                    </label>
                  </div>
                  {/* All option */}
                  <div className="flex items-center gap-x-3">
                    <input
                      id="All"
                      name="show-me"
                      type="radio"
                      value={"All"}
                      checked={genderPrefer === "All"}
                      onChange={handleGenderPreferChange}
                      className="h-4 w-4 border-gray-300 text-primary-800 focus:ring-primary-800"
                    />
                    <label
                      htmlFor="All"
                      className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-400"
                    >
                      All
                    </label>
                  </div>
                </div>
              </fieldset>
              {/* Looking for */}
              <fieldset>
                <legend className="text-lg font-semibold leading-6 text-gray-900">
                  Looking for
                </legend>
                <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
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
                      className="h-4 w-4 border-gray-300 text-primary-800 focus:ring-primary-800"
                    />
                    <label
                      htmlFor="long-term"
                      className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-400"
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
                      className="h-4 w-4 border-gray-300 text-primary-800 focus:ring-primary-800"
                    />
                    <label
                      htmlFor="friends"
                      className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-400"
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
                      className="h-4 w-4 border-gray-300 text-primary-800 focus:ring-primary-800"
                    />
                    <label
                      htmlFor="figuring-out"
                      className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-400"
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
          {formError && <div className="mt-4 text-red-600">{formError}</div>}
          <div className="mt-16 mb-12 md:mb-8 lg:mb-0 flex items-center justify-between gap-x-6">
            <Button text={"Cancel"} type="button" onClick={handleCancel} />
            <Button text={"Save"} type="submit" disabled={formError !== ""} />
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};
