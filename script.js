function getFeedback(score, name) {
  const minScore = 51;

  if (score < minScore) {
    const diff = minScore - score;
    return `სამწუხაროდ ${name}, თქვენ ვერ გადალახეთ მინიმალური ბარიერი, თქვენ დაგაკლდათ ${diff} ქულა, უკეთესად მოემზადეთ.`;
  } else if (score >= minScore && score <= 90) {
    const diff = score - minScore;
    return `გილოცავთ ${name}, თქვენ ${diff} ქულით მეტი აიღეთ ბარიერზე.`;
  } else {
    return `გილოცავთ ${name}! თქვენ ძალიან კარგი შედეგი გაქვთ.`;
  }
}
// მაგალითები:

console.log(getFeedback(32, 'ხატია'));
console.log(getFeedback(71, 'ნინო'));
console.log(getFeedback(93, 'გიორგი'));
