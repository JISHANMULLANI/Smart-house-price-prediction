````md
# 🏠 Bangalore House Price Prediction

An AI-powered web application that predicts house prices in Bangalore using Machine Learning.

This project uses:
- Python
- Flask
- Scikit-learn
- HTML/CSS/JavaScript
- Machine Learning Regression Model

---

# 🚀 Features

✅ Predict Bangalore house prices  
✅ Modern responsive UI  
✅ Flask backend API  
✅ Machine Learning model  
✅ Real estate price estimation  
✅ Location-based prediction  
✅ Interactive frontend  

---

# 📂 Project Structure

HOUSE PRICE PREDICTION/
│
├── Client/
│ ├── app.html
│ ├── app.css
│ └── app.js
│
├── Model/
│ ├── House_price_prediction.ipynb
│ └── Bengaluru_House_Data.csv
│
├── Server/
│ ├── server.py
│ ├── util.py
│ │
│ └── artifacts/
│ ├── bangalore_home_prices_model.pickle
│ └── columns.json
│
├── requirements.txt
├── README.md
└── .gitignore

---

# 🧠 Machine Learning Algorithms Used

- Linear Regression
- Lasso Regression
- Decision Tree Regressor
- GridSearchCV for best model selection

---

# 📊 Dataset

Dataset used:

- Bengaluru House Data

Dataset contains:
- Location
- BHK
- Bathrooms
- Total Square Feet
- Price

---

# ⚙️ Technologies Used

## Frontend
- HTML5
- CSS3
- JavaScript
- jQuery

## Backend
- Flask
- Flask-CORS

## Machine Learning
- NumPy
- Pandas
- Scikit-learn
- Matplotlib

---

# 📦 Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/JISHANMULLANI/Smart-house-price-prediction
````

---

## 2️⃣ Open Project Folder

```bash
cd "HOUSE PRICE PREDICTION"
```

---

## 3️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

---

# ▶️ Run Project

## Step 1 — Run Flask Server

```bash
cd Server
python server.py
```

Server will start at:

```bash
http://127.0.0.1:5000
```

---

## Step 2 — Open Frontend

Open:

```bash
Client/app.html
```

OR use VS Code Live Server.

---

# 🧪 Example Prediction

Input:

* Area = 1000 sqft
* BHK = 2
* Bathrooms = 2
* Location = Indira Nagar

Output:

```bash
₹ 86.81 Lakhs
```

---

# 📈 Model Training

Model training is done inside:

```bash
Model/House_price_prediction.ipynb
```

The notebook:

* Cleans data
* Removes outliers
* Performs feature engineering
* Trains ML model
* Saves model as pickle file

---

# 💾 Saved Artifacts

Generated files:

```bash
bangalore_home_prices_model.pickle
columns.json
```

Stored inside:

```bash
Server/artifacts/
```

---

# 📌 API Endpoints

## Get Locations

```bash
GET /get_location_names
```

---

## Predict Price

```bash
POST /predict_home_price
```

Parameters:

* total_sqft
* bhk
* bath
* location



# 🖥️ Frontend Preview

Features:

* Modern UI
* Responsive Design
* Real Estate Theme
* Interactive Prediction Form



# 🔥 Future Improvements

* Add chatbot assistant
* Add authentication
* Deploy on cloud
* Add price trend charts
* Add property recommendations
* Add map integration



# 👨‍💻 Author

MD.jishan Mullani



# 📜 License

This project is for educational purposes.



# ⭐ Support

If you like this project:

⭐ Star the repository
⭐ Fork the project
⭐ Share with others

