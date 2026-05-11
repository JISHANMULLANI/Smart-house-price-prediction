# 🏠 Smart House Price Prediction with AI Chatbot

An AI-powered real estate web application that predicts Bangalore house prices using Machine Learning and provides customer assistance through a Groq AI chatbot.


# 🚀 Features

✅ Bangalore house price prediction  
✅ Machine Learning regression model  
✅ Modern responsive UI  
✅ Flask backend API  
✅ Real-time property estimation  
✅ Location-based price prediction  
✅ AI-powered chatbot using Groq  
✅ Interactive customer support assistant  
✅ Real estate investment suggestions  


# 🤖 AI Chatbot Features

The project includes an AI chatbot powered by Groq LLM.

The chatbot can:
- Answer real estate questions
- Suggest investment locations
- Recommend properties
- Help users with pricing information
- Provide Bangalore property guidance


# 📂 Project Structure

```bash
HOUSE PRICE PREDICTION/
│
├── Client/
│   ├── images/
│   │   └── bot.png
│   │
│   ├── app.html
│   ├── app.css
│   └── app.js
│
├── Model/
│   ├── House_price_prediction.ipynb
│   └── Bengaluru_House_Data.csv
│
├── Server/
│   ├── artifacts/
│   │   ├── bangalore_home_prices_model.pickle
│   │   └── columns.json
│   │
│   ├── .env
│   ├── server.py
│   └── util.py
│
├── requirements.txt
├── README.md
└── .gitignore
````

---

# 🧠 Machine Learning Algorithms Used

* Linear Regression
* Lasso Regression
* Decision Tree Regressor
* GridSearchCV for best model selection


# 📊 Regression Metrics

The model evaluation includes:

* R² Score
* MAE (Mean Absolute Error)
* MSE (Mean Squared Error)
* RMSE (Root Mean Squared Error)



# ⚙️ Technologies Used

## Frontend

* HTML5
* CSS3
* JavaScript
* jQuery

## Backend

* Flask
* Flask-CORS

## Machine Learning

* Scikit-learn
* Pandas
* NumPy
* Matplotlib

## AI Chatbot

* Groq API
* Llama 3 Model



# 📦 Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/JISHANMULLANI/Smart-house-price-prediction.git
```



## 2️⃣ Open Project Folder

```bash
cd "HOUSE PRICE PREDICTION"
```



## 3️⃣ Install Required Libraries

```bash
pip install -r requirements.txt
```



# 🔑 Setup Groq API Key

Create file:

```bash
Server/.env
```

Add:

```env
GROQ_API_KEY=your_groq_api_key
```

---

# ▶️ Run Project

## Step 1 — Start Flask Server

```bash
cd Server

python server.py
```

Server will run at:

```bash
http://127.0.0.1:5000
```


## Step 2 — Open Frontend

Open:

```bash
Client/app.html
```

OR use VS Code Live Server.



# 💬 Chatbot Usage

Click chatbot icon at bottom-right corner.

You can ask:

* Which area is best under 50 lakhs?
* What is minimum property price?
* Is Electronic City a good investment?
* Which location is expensive?



# 📈 Example Prediction

Input:

* Area = 1000 sqft
* BHK = 2
* Bathrooms = 2
* Location = Indira Nagar

Output:

```bash
₹ 86.81 Lakhs
```



# 📌 API Endpoints

## Get Locations

```bash
GET /get_location_names
```



## Predict House Price

```bash
POST /predict_home_price
```

Parameters:

* total_sqft
* bhk
* bath
* location



## AI Chatbot

```bash
POST /chat
```



# 🖥️ Frontend Features

✅ Glassmorphism UI
✅ Responsive design
✅ Modern real estate theme
✅ Floating chatbot icon
✅ Interactive chatbot popup
✅ AI customer support


# 🔥 Future Improvements

* User authentication
* Property recommendation system
* Price trend visualization
* Database integration


# 👨‍💻 Author

Jishan Mullani


# 📜 License

This project is for educational and learning purposes.


# ⭐ Support

If you like this project:

⭐ Star the repository
⭐ Fork the project
⭐ Share with others

```
```


