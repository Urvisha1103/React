// Create an registration form with following details when user enter etails it should be visible under the registration form.
// - Cricketer name (TextBox  min: 10 char)
// - Gender (Radio Button)
// - Email (TextBox - format validation)
// - Type of matches played (checkbox)
//   (ODI, TEST, T20, Domestic)
// - State (Dropdown)
// - Date of Birth

import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    email: '',
    matches: [],
    state: '',
    dob: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const states = ['Gujarat', 'Maharashtra', 'Rajasthan', 'Karnataka', 'Punjab'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        matches: checked
          ? [...prev.matches, value]
          : prev.matches.filter((match) => match !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.length < 10) {
      alert('Cricketer name must be at least 10 characters long.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email.');
      return;
    }
    setSubmittedData(formData);
  };

  return (
    <div>
      <h1>Cricketer Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Cricketer Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              minLength="10"
            />
          </label>
        </div>
        <div>
          <label>
            Gender:
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
              required
            />
            Male
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
              required
            />
            Female
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Type of Matches Played:
            <div>
              <label>
                <input
                  type="checkbox"
                  name="matches"
                  value="ODI"
                  onChange={handleChange}
                />
                ODI
              </label>
              <label>
                <input
                  type="checkbox"
                  name="matches"
                  value="TEST"
                  onChange={handleChange}
                />
                TEST
              </label>
              <label>
                <input
                  type="checkbox"
                  name="matches"
                  value="T20"
                  onChange={handleChange}
                />
                T20
              </label>
              <label>
                <input
                  type="checkbox"
                  name="matches"
                  value="Domestic"
                  onChange={handleChange}
                />
                Domestic
              </label>
            </div>
          </label>
        </div>
        <div>
          <label>
            State:
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            Date of Birth:
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Register</button>
      </form>

      {submittedData && (
        <div>
          <h2>Registration Details</h2>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Gender:</strong> {submittedData.gender}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Matches Played:</strong> {submittedData.matches.join(', ')}</p>
          <p><strong>State:</strong> {submittedData.state}</p>
          <p><strong>Date of Birth:</strong> {submittedData.dob}</p>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;
