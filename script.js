function updateDateTime() {
    const now = new Date();
    const options = {  
        year: 'numeric', month: 'long', day: 'numeric',hour: 'numeric', minute: 'numeric', second: 'numeric',timeZoneName: 'short'
    };
    const formattedTime = now.toLocaleString('en-US', options);
    document.getElementById('datetime').textContent = formattedTime;
}

updateDateTime();
let interval = setInterval(updateDateTime, 1000);

document.getElementById('refreshButton').addEventListener('click', () => {
    updateDateTime();
});
