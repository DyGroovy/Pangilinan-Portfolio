<template>
  <div class="creative-page">
    <h1>Guitar Fretboard Note Identifier Game</h1>
    <div class="content">
      <div class="fretboard">
        <div class="string" v-for="(string, index) in strings" :key="index">
          <div
            class="note"
            v-for="fret in frets"
            :key="fret"
            :class="{ active: isActive(index, fret) }"
          >
            {{ fret === 0 ? notes[index + 1][0] : fret }}
          </div>
        </div>
      </div>

      <div class="note-display-container">
        <p>Identify the note:</p>
        <p><strong>String: {{ strings[currentString] }}</strong></p>
        <p><strong>Fret: {{ currentFret }}</strong></p>
        <input v-model="userGuess" placeholder="Enter your guess" />
        <button @click="checkGuess">Guess</button>
        <p v-if="resultMessage">{{ resultMessage }}</p>
        <button v-if="showNewNote" @click="generateNote">Next Note</button>
        <p class="correct-note" v-if="showNewNote">
          The correct note was: <strong>{{ correctNote }}</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreativePage',
  data() {
    return {
      strings: ['Low E', 'A', 'D', 'G', 'B', 'High E'],
      frets: Array.from({ length: 13 }, (_, i) => i),
      notes: {
        1: ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#'],
        2: ['B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#'],
        3: ['G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#'],
        4: ['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#'],
        5: ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'],
        6: ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#'],
      },
      currentString: null,
      currentFret: null,
      correctNote: null,
      userGuess: '',
      resultMessage: '',
      showNewNote: false,
    };
  },
  created() {
    this.generateNote();
  },
  methods: {
    generateNote() {
      this.currentString = Math.floor(Math.random() * 6);
      this.currentFret = Math.floor(Math.random() * 12);
      this.correctNote = this.notes[this.currentString + 1][this.currentFret];
      this.userGuess = '';
      this.resultMessage = '';
      this.showNewNote = false;
    },
    checkGuess() {
      if (this.userGuess.toUpperCase() === this.correctNote) {
        this.resultMessage = 'Correct! 🎉';
      } else {
        this.resultMessage = `Incorrect!`;
      }
      this.showNewNote = true;
    },
    isActive(string, fret) {
      return string === this.currentString && fret === this.currentFret;
    },
    getNote(string, fret) {
      return fret <= 11 ? fret : '';
    },
  },
};
</script>

<style scoped>
.creative-page {
  text-align: center;
  padding: 30px;
  background-color: #000;
  color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(255, 215, 0, 0.2);
  max-width: 1000px;
  margin: 2% auto;
  font-family: 'Roboto', sans-serif;
  margin-left: 0%;
  margin-top: 7%;
}

h1 {
  font-family: 'Georgia', serif;
  color: #ffd700;
  margin-bottom: 30px;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
}

.content {
  display: flex;
  justify-content: space-between;
}

.fretboard {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}

.string {
  display: flex;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  transition: background 0.3s, transform 0.2s;
}

.string:hover {
  background: rgba(231, 231, 231, 0.2);
  transform: scale(1.02);
}

.note {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  background-color: #fff;
  border-radius: 50%;
  transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
  position: relative;
  z-index: 1;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.note:hover {
  background: rgba(255, 215, 0, 0.8);
  transform: scale(1.1);
  box-shadow: 0 4px 20px rgba(255, 215, 0, 0.6);
}

.active {
  background: rgba(255, 215, 0, 0.9);
  transform: scale(1.1);
}

.note-display-container {
  background-color: #000;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(255, 215, 0, 0.2);
  color: #fff;
  margin-left: 240px;
  height: 50%;
}

.note-display {
  margin-bottom: 0;
  font-size: 22px;
  font-family: 'Arial', sans-serif;
}

input {
  padding: 12px;
  font-size: 16px;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(255, 215, 0, 0.2);
  background-color: #444;
  color: #fff;
  transition: border 0.3s;
}

input:focus {
  outline: none;
  border: 2px solid #ffd700;
}

button {
  padding: 12px 20px;
  font-size: 16px;
  margin-top: 10%;
  background-color: #444;
  color: #ffd700;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: background 0.3s, transform 0.2s;
}

button:hover {
  background-color: #555555;
  transform: translateY(-2px);
}

.correct-note {
  margin-top: 15px;
  font-size: 18px;
}
</style>
