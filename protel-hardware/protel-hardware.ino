/*
  
  1  4
  2  5
  3  6

*/

const byte braillePatterns[36][6] = {
  // Letters a-z (0-25)
  {1,0,0,0,0,0}, {1,1,0,0,0,0}, {1,0,0,1,0,0}, {1,0,0,1,1,0}, // a, b, c, d
  {1,0,0,0,1,0}, {1,1,0,1,0,0}, {1,1,0,1,1,0}, {1,1,0,0,1,0}, // e, f, g, h
  {0,1,0,1,0,0}, {0,1,0,1,1,0}, {1,0,1,0,0,0}, {1,1,1,0,0,0}, // i, j, k, l
  {1,0,1,1,0,0}, {1,0,1,1,1,0}, {1,0,1,0,1,0}, {1,1,1,1,0,0}, // m, n, o, p
  {1,1,1,1,1,0}, {1,1,1,0,1,0}, {0,1,1,1,0,0}, {0,1,1,1,1,0}, // q, r, s, t
  {1,0,1,0,0,1}, {1,1,1,0,0,1}, {0,1,0,1,1,1}, {1,0,1,1,0,1}, // u, v, w, x
  {1,0,1,1,1,1}, {1,0,1,0,1,1}, // y, z

  // Numbers 0-9
  {0,1,0,1,1,0}, // 0 (⠚)
  {1,0,0,0,0,0}, // 1 (⠁)
  {1,1,0,0,1,0}, // 2 (⠃)
  {1,0,0,1,0,0}, // 3 (⠉)
  {1,0,0,1,1,0}, // 4 (⠙)
  {1,0,0,0,1,0}, // 5 (⠑)
  {1,1,0,1,0,0}, // 6 (⠋)
  {1,1,0,1,1,0}, // 7 (⠛)
  {1,1,0,0,1,0}, // 8 (⠓)
  {0,1,0,1,0,0}  // 9 (⠊)
};

// Punctuation
const byte punctuationPatterns[7][6] = {
  {0,1,0,0,1,1}, // . (period)
  {0,1,0,0,0,0}, // , (comma)
  {0,1,0,0,0,1}, // ? (question)
  {0,1,1,0,1,0}, // ! (exclamation)
  {0,0,1,0,0,0}, // ' (apostrophe)
  {0,0,1,0,0,1}, // - (hyphen)
  {0,1,1,0,0,0}  // ; (semicolon)
};

const byte controlPins[6] = {2,3,4,5,6,7}; // Solenoid pins
String inputText = "";     // Stores text from Serial
bool newTextReceived = false;

void setup() {
  Serial.begin(9600);
  for (byte i = 0; i < 6; i++) {
    pinMode(controlPins[i], OUTPUT);
    digitalWrite(controlPins[i], LOW);
  }
  Serial.println("Enter text (a-z, 0-9, .,?;!'):");
}

void loop() {
  if (Serial.available()) {
    inputText = Serial.readStringUntil('\n');
    inputText.trim();
    inputText.toLowerCase();
    newTextReceived = true;
    Serial.print("Displaying: \"");
    Serial.print(inputText);
    Serial.println("\"");
  }

  if (newTextReceived) {
    displayBraille(inputText);
    resetSolenoids();
    newTextReceived = false;
    Serial.println("\nEnter new text:");
  }
}

void displayBraille(String text) {
  for (unsigned int i = 0; i < text.length(); i++) {
    char c = text[i];
    bool charSupported = true;
    
    if (c >= 'a' && c <= 'z') {
      // Letters
      byte patternIndex = c - 'a';
      activatePattern(braillePatterns[patternIndex]);
      Serial.print(c);
    } 
    else if (c >= '0' && c <= '9') {
      // Numbers
      byte patternIndex = 26 + (c - '0'); // Start from index 26
      activatePattern(braillePatterns[patternIndex]);
      Serial.print(c);
    }
    else if (c == ' ') {
      // Space
      resetSolenoids();
      Serial.print(' ');
    }
    else {
      // Punctuation
      switch(c) {
        case '.': activatePattern(punctuationPatterns[0]); break;
        case ',': activatePattern(punctuationPatterns[1]); break;
        case '?': activatePattern(punctuationPatterns[2]); break;
        case '!': activatePattern(punctuationPatterns[3]); break;
        case '\'': activatePattern(punctuationPatterns[4]); break;
        case '-': activatePattern(punctuationPatterns[5]); break;
        case ';': activatePattern(punctuationPatterns[6]); break;
        default: 
          resetSolenoids();
          Serial.print('?'); // Unsupported character
          charSupported = false;
      }
      if(charSupported) Serial.print(c);
    }

    delay(1000); // Display character for 1 second
  }
}

void activatePattern(const byte pattern[6]) {
  for (byte pin = 0; pin < 6; pin++) {
    digitalWrite(controlPins[pin], pattern[pin]);
  }
}

void resetSolenoids() {
  for (byte i = 0; i < 6; i++) {
    digitalWrite(controlPins[i], LOW);
  }
}