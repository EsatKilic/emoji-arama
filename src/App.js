import React, { useState } from 'react';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

function App() {
  const [search, setSearch] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const handleEmojiSelect = (emoji) => {
    setSelectedEmoji(emoji.native);
    navigator.clipboard.writeText(emoji.native);
  };

  return (
    <div className="App">
      <h1>Emoji Arama Motoru</h1>
      <input
        type="text"
        placeholder="Emoji ara..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="emoji-container">
        <Picker
          style={{ width: '100%' }}
          emoji=""
          title="Emoji Seç"
          onSelect={handleEmojiSelect}
          theme="auto"
          search={search}
        />
      </div>
      {selectedEmoji && (
        <div className="selected-emoji">
          <p>Seçilen Emoji: {selectedEmoji}</p>
        </div>
      )}
    </div>
  );
}

export default App;
