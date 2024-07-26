import React from 'react';

interface Step2Props {
  formData: {
    description?: string;
    title?: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    description?: string;
    title?: string;
  }>>;
}

const Step2: React.FC<Step2Props> = ({ formData, setFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
      <p className="mb-6">Please provide additional details</p>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          name="description"
          placeholder="Enter a description"
          value={formData.description || ''}
          onChange={handleChange}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <input
          list="titles"
          name="title"
          placeholder="Enter a title"
          required
          value={formData.title || ''}
          onChange={handleChange}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
        />
        <datalist id="titles">
          <option value="Mr." />
          <option value="Mrs." />
          <option value="Ms." />
          <option value="Dr." />
          <option value="Prof." />
        </datalist>
      </div>
    </div>
  );
};

export default Step2;
