from flask import Flask, request
import requests

app = Flask(__name__)

@app.route('/graphql', methods=['POST'])
def proxy():
    url = 'https://leetcode.com/graphql/'
    response = requests.post(url, json=request.json)
    return response.content, response.status_code, response.headers.items()

if __name__ == '__main__':
    app.run()
