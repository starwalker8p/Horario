// Selecionando o elemento onde o horário será exibido
const timeElement = document.getElementById('time');
function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    timeElement.textContent = `${hours}:${minutes} ${ampm}`;
}
setInterval(updateTime, 1000);
updateTime();
