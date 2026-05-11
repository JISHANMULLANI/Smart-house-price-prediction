from flask import Flask, request, jsonify
from flask_cors import CORS

from groq import Groq
from dotenv import load_dotenv

import os
import util

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)

app = Flask(__name__)

CORS(app)


@app.route('/')
def home():

    return "Smart House Price Prediction Server Running"


@app.route('/get_location_names', methods=['GET'])
def get_location_names():

    response = jsonify({
        'locations': util.get_location_names()
    })

    return response


@app.route('/predict_home_price', methods=['POST'])
def predict_home_price():

    try:

        total_sqft = float(request.form['total_sqft'])

        location = request.form['location']

        bhk = int(request.form['bhk'])

        bath = int(request.form['bath'])

        estimated_price = util.get_estimated_price(
            location,
            total_sqft,
            bhk,
            bath
        )

        response = jsonify({
            'estimated_price': estimated_price
        })

        return response

    except Exception as e:

        return jsonify({
            'estimated_price': f'Error: {str(e)}'
        })


@app.route('/chat', methods=['POST'])
def chat():

    try:

        user_message = request.json['message']

        completion = client.chat.completions.create(

            model="llama-3.3-70b-versatile",

            messages=[

                {
                    "role": "system",

                    "content":
                    """
                    You are a professional AI real estate assistant.

                    Help users with:
                    - Bangalore house prices
                    - Investment suggestions
                    - Budget recommendations
                    - Property buying advice
                    - Best locations in Bangalore
                    """
                },

                {
                    "role": "user",

                    "content": user_message
                }

            ]

        )

        reply = completion.choices[0].message.content

        return jsonify({
            "reply": reply
        })

    except Exception as e:

        return jsonify({
            "reply": f"Server Error: {str(e)}"
        })


if __name__ == "__main__":

    print("Starting Flask Server...")

    util.load_saved_artifacts()

    app.run(debug=True)