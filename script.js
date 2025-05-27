function shortcut(s1, s2) {
  const s11 = s1.charAt(0);
  const s22 = s2.charAt(0);

  if (s11 === ' ' || s22 === ' ') {
    return ' ';
  }

  return s11 + s22;
}



// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
