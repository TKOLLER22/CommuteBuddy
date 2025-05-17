
const tintColorLight = '#297373'; // teal for light mode
const tintColorDark = '#f3b700';  // yellow for dark mode

export const Colors = {
  light: {
    text: '141414',            // dark gray for good readability
    background: 'transparent',
    buttonText:'#e6e6e6',       // light gray background
    tint: tintColorLight,       // primary accent (teal)
    icon: '#95190c',            // deep red for alert-style icons
    tabIconDefault: '#297373',  // same as tint
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#e6e6e6',            // light gray on dark background
    background: 'transparent',
    buttonText:'#141414',      // dark gray as the base
    tint: tintColorDark,        // bold yellow pops on dark
    icon: '#f3b700',            // same as tint for icons
    tabIconDefault: '#e6e6e6',  // subtle light gray
    tabIconSelected: tintColorDark,
  },
};