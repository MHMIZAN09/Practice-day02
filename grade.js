let result = 80;

if (result < 0) {
  console.log('failed');
} else if (result >= 0 && result <= 39) {
  console.log('tumi C grade paicho');
} else if (result >= 40 && result <= 59) {
  console.log('tumi B grade paicho');
} else if (result >= 60 && result <= 79) {
  console.log('tumi A- grade paicho');
} else if (result >= 70 && result <= 79) {
  console.log('tumi A grade paicho');
} else if (result >= 80 && result <= 100) {
  console.log('tumi A+ grade paicho');
}
