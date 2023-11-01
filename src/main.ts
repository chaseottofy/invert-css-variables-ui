import './root.css';
import invert from 'invert-css';

const textarea = document.querySelector('.textinput') as HTMLTextAreaElement;
const output = document.querySelector('.textoutput') as HTMLElement;
const copyBtn = document.querySelector('.float-copy') as HTMLElement;
const resetBtn = document.querySelector('.float-reset') as HTMLElement;
const runBtn = document.querySelector('.run-btn') as HTMLElement;

const exampleText = `
  > Invert CSS variables with ease.
  > Just paste variables and run
  > Perfect for creating themes.

  --------------------------------------------
  
  > ACCEPTED COLOR FORMATS
  --color-1: #eee;
  --color-2: #EEEEEE;
  --color-3: rgb(0,85,51);
  --color-4: rgba(0,85,51,0.5);
  --color-5: hsl(160,100%,88%);
  --color-4: hsla(160,100%,88%,0.5);
`;

const demoText = `
--selection: #f81ce5;
--white1: #f7f5f5;
--white2: #cccbcb;
--white3: #b0aeae;
--black0: #000;
--black1: #0e0e0f;
--black2: #333;
--accent-1: #111;
--accent-3: #333;
--accent-6: #888;
--accent-7: #eaeaea;
--accent-8: #fafafa;
--accent-9: #b6b9c2;
`;

textarea.setAttribute('placeholder', exampleText);
textarea.textContent = demoText;
const copyToClipboard = (text: string): void => {
  navigator.clipboard.writeText(text);
};

const reset = (): void => {
  output.innerText = '';
  textarea.innerText = '';
};

const handleRun = (): void => {
  const input = textarea.value;
  if (!input) return;
  output.innerText = invert(input);
};

runBtn.addEventListener('click', handleRun);

copyBtn.addEventListener('click', () => {
  copyToClipboard(output.innerText);
});

resetBtn.addEventListener('click', reset);