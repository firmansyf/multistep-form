import React from 'react';

interface Step1Props {
  formData: {
    name?: string;
    gender?: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    name?: string;
    gender?: string;
  }>>;
}

const Step1: React.FC<Step1Props> = ({ formData, setFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
      <p className="mb-6">Please fill out your personal information</p>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required
          value={formData.name || ''}
          onChange={handleChange}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Gender</label>
        <div className="mt-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
              className="form-radio"
            />
            <span className="ml-2">Male</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
              className="form-radio"
            />
            <span className="ml-2">Female</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              name="gender"
              value="other"
              checked={formData.gender === 'other'}
              onChange={handleChange}
              className="form-radio"
            />
            <span className="ml-2">Other</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Step1;
