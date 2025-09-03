import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function QuoteForm() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    city: "",
    fromPostcode: "",
    toPostcode: "",
    distance: 0,
    propertySize: "",
    helpers: 1,
    date: "",
    time: "",
    stairs: 0,
    furniture: [{ name: "", number: "" }],
    customerName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFurnitureChange = (index, field, value) => {
    const updated = [...formData.furniture];
    updated[index][field] = value;
    setFormData({ ...formData, furniture: updated });
  };

  const addFurniture = () =>
    setFormData({
      ...formData,
      furniture: [...formData.furniture, { name: "", number: "" }],
    });

  const calculatePrice = () => {
    const baseRate = 50;
    const distanceCost = formData.distance * 2;
    const helperCost = formData.helpers * 30;
    const itemCost = formData.furniture.reduce(
      (acc, f) => acc + (parseInt(f.number) || 0) * 10,
      0
    );
    return baseRate + distanceCost + helperCost + itemCost;
  };

  const handleDistanceCalc = () => {
    if (formData.fromPostcode && formData.toPostcode) {
      const dist =
        Math.abs(
          formData.fromPostcode.charCodeAt(0) -
            formData.toPostcode.charCodeAt(0)
        ) * 10;
      setFormData({ ...formData, distance: dist });
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-8 rounded-2xl bg-white shadow-xl border border-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
        Get a Moving Quote
      </h2>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Step 1: Journey Details
            </h3>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                placeholder="Enter city"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                From Postcode
              </label>
              <input
                type="text"
                name="fromPostcode"
                value={formData.fromPostcode}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                placeholder="e.g. AB12 3CD"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                To Postcode
              </label>
              <input
                type="text"
                name="toPostcode"
                value={formData.toPostcode}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                placeholder="e.g. XY98 7ZT"
              />
            </div>

            <button
              onClick={handleDistanceCalc}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
            >
              Calculate Distance
            </button>

            {formData.distance > 0 && (
              <p className="text-sm text-gray-600">
                Estimated Distance: {formData.distance} miles
              </p>
            )}

            <div className="flex justify-end">
              <button
                onClick={() => setStep(2)}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg"
              >
                Next →
              </button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Step 2: Property & Helpers
            </h3>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Property Size
              </label>
              <select
                name="propertySize"
                value={formData.propertySize}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
              >
                <option value="">Select Property Size</option>
                <option value="1bhk">1 BHK</option>
                <option value="2bhk">2 BHK</option>
                <option value="3bhk">3 BHK</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                How many helpers?
              </label>
              <input
                type="number"
                name="helpers"
                value={formData.helpers}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                placeholder="e.g. 2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Pickup Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Pickup Time
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Stairs Count
              </label>
              <input
                type="number"
                name="stairs"
                value={formData.stairs}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                placeholder="e.g. 2"
              />
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-2 bg-gray-300 rounded-lg"
              >
                ← Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg"
              >
                Next →
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Step 3: Furniture Details
            </h3>

            {formData.furniture.map((f, index) => (
              <div key={index} className="flex gap-2">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Item Name
                  </label>
                  <input
                    type="text"
                    value={f.name}
                    onChange={(e) =>
                      handleFurnitureChange(index, "name", e.target.value)
                    }
                    placeholder="Furniture / Appliance"
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Qty
                  </label>
                  <input
                    type="number"
                    value={f.number}
                    onChange={(e) =>
                      handleFurnitureChange(index, "number", e.target.value)
                    }
                    placeholder="Qty"
                    className="w-24 p-3 border rounded-lg"
                  />
                </div>
              </div>
            ))}

            <button
              onClick={addFurniture}
              className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50"
            >
              + Add More
            </button>

            <div className="flex justify-between">
              <button
                onClick={() => setStep(2)}
                className="px-6 py-2 bg-gray-300 rounded-lg"
              >
                ← Back
              </button>
              <button
                onClick={() => setStep(4)}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg"
              >
                Next →
              </button>
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Step 4: Your Details
            </h3>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                placeholder="+44 123 456 789"
              />
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border text-center">
              <p className="text-gray-700">
                Estimated Price:{" "}
                <span className="text-xl font-bold text-indigo-600">
                  ${calculatePrice()}
                </span>
              </p>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setStep(3)}
                className="px-6 py-2 bg-gray-300 rounded-lg"
              >
                ← Back
              </button>
              <button
                onClick={() => alert("Quote submitted!")}
                className="px-6 py-2 bg-green-600 text-white rounded-lg"
              >
                Submit ✔
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default QuoteForm;
