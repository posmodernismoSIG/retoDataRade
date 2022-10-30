from flask import Flask

api = Flask(__name__)

@api.route('/test', methods=['GET'])
def test():
    response_body = {
        "name": "Flask Test",
        "about" :"Conexión Exitosa"
    }
    return response_body
