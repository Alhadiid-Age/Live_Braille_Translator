import serial

try:
    arduino = serial.Serial('COM3', 9600)
    arduino.write(b'HELLO\n')
    print("✅ Sukses kirim data ke Arduino.")
except Exception as e:
    print("❌ Gagal:", e)
