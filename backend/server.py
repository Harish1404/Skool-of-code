from flask import Flask, request, jsonify
import subprocess

app = Flask(__name__)

@app.route("/execute", methods=["POST"])
def execute():
    data = request.json
    code = data.get("code")

    try:
        # Execute the Python code
        result = subprocess.run(
            ["python", "-c", code],
            capture_output=True,
            text=True,
        )
        output = result.stdout if result.returncode == 0 else result.stderr
        return jsonify({"output": output})
    except Exception as e:
        return jsonify({"output": f"Error: {str(e)}"})

if __name__ == "__main__":
    app.run(debug=True)