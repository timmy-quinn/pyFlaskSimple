from flask import Blueprint, render_template, request, jsonify, redirect, url_for
import random 

def getNum():
    return str(random.randint(1, 10))


views = Blueprint(__name__, "views")
    


@views.route("/")
def home():
    return render_template("index.html")

@views.route("/test", methods = ['GET', 'POST'])
def test():
    if request.method == 'POST':
        data = request.get_json()
        action = data.get('action')
        if action == 'call_my_function':
            result = getNum()
            return result
        
    return render_template('test.html', action=None)

@views.route("/json")
def get_json():
    return jsonify({'name' : 'Tim', 'coolness': 40})

@views.route("/data")
def get_data():
    data = request.json
    return jsonify(data)

@views.route("/go-to-home")
def go_to_home():
    return redirect(url_for("views.home"))

# def call_python_function():
#     # Your Python function code here
#     data = request.get_json()
#     result = cpp_function(data)  # Replace with function
#     return jsonify(result=result)