import React, { useState } from "react";
import axios from "axios";
import mushroomFeatures from "./mushroomFeatures";
import "./MushroomClassifier.css";
import mushroomImage from "../images/kinoko_porcino_poruchini.png";

const MushroomClassifier = () => {
  const [prediction, setPrediction] = useState("");
  const [formData, setFormData] = useState(() => {
    // Initialize formData with empty values for each feature
    const initialFormData = {};
    for (const feature in mushroomFeatures) {
      initialFormData[feature] = "";
    }
    return initialFormData;
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Transform formData into the desired format
      const transformedData = {};
      for (const feature in formData) {
        transformedData[feature] = [formData[feature]];
      }
      console.log(transformedData);

      // Send the transformed data to the backend
      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        transformedData
      );
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <img src={mushroomImage} alt="eringi" name="mashroom" />

      <h1>Mushroom Poisonous or Edible Classifier</h1>
      <form onSubmit={handleSubmit}>
        {/* Dynamically generate select inputs for each feature */}
        {Object.entries(mushroomFeatures).map(
          ([feature, { label, options }]) => (
            <div key={feature}>
              <label htmlFor={feature}>{label}: </label>
              <select
                name={feature}
                id={feature}
                value={formData[feature]}
                onChange={handleChange}
              >
                <option required value="">
                  Select {label}
                </option>
                {/* Dynamically generate options for each feature */}
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          )
        )}
        <button type="submit">Predict</button>
      </form>

      {prediction && (
        <p
          className={
            prediction === "Edible"
              ? "green-background"
              : prediction === "Poisonous"
              ? "red-background"
              : ""
          }
        >
          Prediction: {prediction}
        </p>
      )}
    </div>
  );
};

export default MushroomClassifier;
