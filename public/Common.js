export const ReadEng = (value) => {
    var msg = new SpeechSynthesisUtterance();
    msg.text = `${value}`;
    window.speechSynthesis.speak(msg);
}