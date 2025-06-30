from flask import Flask, request, jsonify
from flask_cors import CORS
import serial
import time

app = Flask(__name__)
CORS(app)

# Inisialisasi koneksi Serial ke Arduino
try:
    arduino = serial.Serial('COM3', 9600, timeout=1)
    time.sleep(2)  # Tunggu Arduino siap
    print("✅ Arduino terhubung di COM3")
except Exception as e:
    print("❌ Gagal membuka port Arduino:", e)
    arduino = None  # Biar tidak error total

@app.route('/')
def index():
    return "Flask backend is running and ready."

@app.route('/send', methods=['POST'])
def send_to_arduino():
    if not arduino or not arduino.is_open:
        return jsonify({'status': 'error', 'message': 'Koneksi ke Arduino tidak tersedia'}), 500

    data = request.get_json()
    message = data.get('message', '').strip()

    if not message:
        return jsonify({'status': 'error', 'message': 'Pesan kosong'}), 400

    try:
        # Kirim string sekaligus ke Arduino, diakhiri newline
        arduino.write((message + '\n').encode())
        print(f"📤 Mengirim ke Arduino: {message}")
        return jsonify({'status': 'success', 'message': f"Pesan '{message}' dikirim ke Arduino"})
    except Exception as e:
        return jsonify({'status': 'error', 'message': f"Gagal kirim ke Arduino: {e}"}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5501, use_reloader=False)
