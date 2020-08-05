from flask import Flask, render_template, request, redirect, jsonify, \
    url_for, flash

import random
import string
import logging
import json
import httplib2
import requests


app = Flask(__name__)


@app.route('/')
def checkServer():
    return jsonify({"msg": "SIH ML SERVER"})


# Expects the list of the products he has visited in last 5-6 sessions
@app.route('/getRecommendedProduct/all', , methods=['POST'])
def getRecommendedProduct():
    data = request.get_data()

    # DATA will be in form of json that will containst the product 
    # search history of the user


    # Model code will come here, fetching the data from model


    # Return the recommended product to the user.
    #  List of product ids of recommended product
    return jsonify({"data" : ['productID', 'productID', 'productID']})

@app.route('/getRecommendedProduct/', , methods=['POST'])
def getTopFiveRecommendedProduct():
    data = request.get_data()

    # DATA will be in form of json that will containst the product 
    # search history of the user


    # Model code will come here, fetching the data from model


    # Return the recommended product to the user.
    #  List of product ids of recommended product
    return jsonify({"data" : ['productID', 'productID', 'productID']})




# Expects the list of the sellers from whom he have purchased
@app.route('/getRecommendedSellers/all', , methods=['POST'])
def getRecommendedProduct():
    data = request.get_data()

    # DATA will be in form of json that will containst the Sellers
    # search history of the user


    # Model code will come here, fetching the data from model


    # Return the recommended Sellers to the user.
    #  List of Sellers ids of recommended Sellers
    return jsonify({"data" : ['SellersID', 'SellersID', 'SellersID']})

@app.route('/getRecommendedSellers/', , methods=['POST'])
def getTopFiveRecommendedSellers():
    data = request.get_data()

    # DATA will be in form of json that will containst the Sellers 
    # search history of the user


    # Model code will come here, fetching the data from model


    # Return the recommended Sellers to the user.
    #  List of Sellers ids of recommended Sellers
    return jsonify({"data" : ['SellersID', 'SellersID', 'SellersID']})



# Expects the list of the couriers he has choosen in his last few purchases
@app.route('/getRecommendedCouriers/all', , methods=['POST'])
def getRecommendedCouriers():
    data = request.get_data()

    # DATA will be in form of json that will containst the Couriers 
    # search history of the user


    # Model code will come here, fetching the data from model


    # Return the recommended Couriers to the user.
    #  List of Couriers ids of recommended Couriers
    return jsonify({"data" : ['CouriersID', 'CouriersID', 'CouriersID']})

@app.route('/getRecommendedCouriers/', methods=['POST'])
def getTopFiveRecommendedCouriers():
    data = request.get_data()

    # DATA will be in form of json that will containst the Couriers
    # search history of the user


    # Model code will come here, fetching the data from model


    # Return the recommended Couriers to the user.
    #  List of Couriers ids of recommended product
    return jsonify({"data" : ['CouriersID', 'CouriersID', 'CouriersID']})



# Routes expects the product id with list of info about the product and 
# prices over the past perioud of time based on region and quality he have sold.
@app.route('/predictPrice', methods=['POST'])
def getPredictedPriceForFuture():
    data = request.get_data()

    # Data will be in form of list that will be passed over to the model
    # Which will return us the predicted price of product in future.

    # Will return a list of predicted prices from day starting tommorow, because
    # Current would already be shown into it.
    return jsonify({"data": [{"day": "tommorow", "price": "89/kg"}]})



if __name__ == '__main__':
    app.secret_key = 'secret_key'
    app.debug = True
    app.run(host='0.0.0.0', port=8000)