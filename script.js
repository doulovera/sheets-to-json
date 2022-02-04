const textarea = document.getElementById('data');
const button = document.getElementById('btn');
const target = document.getElementById('transformed');

let value = {};

textarea.addEventListener('input', (e) => {
  const split = e.target.value.split('\n');

  split.forEach(row => {
    const [title, translation] = row.split('\t')

    if (!title.trim() && !translation.trim()) return;

    return Object.assign(value, { [title]: translation })
  });
});

button.addEventListener('click', () => {
  const newJson = JSON.stringify(value, null, 2);
  console.log(newJson)
  target.value = newJson
})
