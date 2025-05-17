
const tintColorLight = '#297373'; // elegant teal for light mode
const tintColorDark = '#f3b700';  // vibrant yellow for dark mode

export const Colors = {
  light: {
    text: '#202020',             // strong readable charcoal
    background: '#ffffff',       // pure white for clean design
    buttonText: '#ffffff',       // white text on buttons
    tint: tintColorLight,        // main accent (teal)
    icon: '#D9534F',             // soft red (Bootstrap danger)
    tabIconDefault: '#B0B0B0',   // muted gray for unselected
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#e6e6e6',             // soft white text
    background: '#141414',       // deep dark gray
    buttonText: '#141414',       // dark text on bright buttons
    tint: tintColorDark,         // warm yellow pop
    icon: '#f3b700',             // yellow alert icons
    tabIconDefault: '#555555',   // muted dark gray
    tabIconSelected: tintColorDark,
  },
};