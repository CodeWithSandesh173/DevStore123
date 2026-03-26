// Trust Widgets & Social Proof - Expanded Data
const salesData = [
    { name: "Sushant", location: "Dhikurpokhari", product: "PUBG UC 660", time: "2 mins ago" },
    { name: "Samip", location: "Dhikurpokhari", product: "Free Fire 1240 Diamonds", time: "5 mins ago" },
    { name: "Sandesh", location: "Dhikurpokhari", product: "Steam Gift Card $50", time: "1 min ago" },
    { name: "Yogesh", location: "Dhikurpokhari", product: "Discord Nitro 1 Year", time: "12 mins ago" },
    { name: "Saugat", location: "Dhikurpokhari", product: "Spotify Premium 12 Months", time: "15 mins ago" },
    { name: "Nasib", location: "Dhikurpokhari", product: "Netflix 1 Month Standard", time: "4 mins ago" },
    { name: "Suman K.", location: "Kathmandu", product: "PUBG UC 660", time: "8 mins ago" },
    { name: "Rohan M.", location: "Pokhara", product: "Free Fire 1240 Diamonds", time: "6 mins ago" },
    { name: "Anish T.", location: "Lalitpur", product: "Steam Gift Card $10", time: "20 mins ago" },
    { name: "Deepa B.", location: "Butwal", product: "Google Play $5 Card", time: "10 mins ago" },
    { name: "Rajan B.", location: "Itahari", product: "Valorant 1000 VP", time: "3 mins ago" },
    { name: "Manoj R.", location: "Bhaktapur", product: "PUBG UC 60", time: "11 mins ago" }
];

function createSalesPopup() {
    const popup = document.createElement('div');
    popup.className = 'sales-popup glass-card'; // Added glass-card
    popup.id = 'salesPopup';
    popup.innerHTML = `
        <img src="images/icon.png" alt="Order">
        <div class="sales-content">
            <strong id="popupName">Suman K. from Kathmandu</strong>
            <p id="popupProduct">just bought PUBG UC 660</p>
            <small id="popupTime" class="text-muted">2 mins ago</small>
        </div>
    `;
    document.body.appendChild(popup);

    // Create Live Viewers Widget
    const viewers = document.createElement('div');
    viewers.className = 'glass-card';
    viewers.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        padding: 5px 12px;
        border-radius: 20px;
        font-size: 0.8rem;
        display: flex;
        align-items: center;
        gap: 6px;
        z-index: 998;
        font-weight: 500;
        border-left: 3px solid #10B981;
    `;
    viewers.innerHTML = `<span style="width: 8px; height: 8px; background: #10B981; border-radius: 50%; display: inline-block; animation: pulse-green 2s infinite;"></span> <span id="viewerCount">24</span> people viewing`;
    document.body.appendChild(viewers);

    // Fluctuate viewers
    setInterval(() => {
        const current = parseInt(document.getElementById('viewerCount').textContent);
        const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
        document.getElementById('viewerCount').textContent = Math.max(12, current + change);
    }, 5000);
}

function showRandomSale() {
    const popup = document.getElementById('salesPopup');
    if (!popup) return;

    // Pick a random sale from the expanded list
    const sale = salesData[Math.floor(Math.random() * salesData.length)];

    document.getElementById('popupName').textContent = `${sale.name} from ${sale.location}`;
    document.getElementById('popupProduct').textContent = `just bought ${sale.product}`;
    document.getElementById('popupTime').textContent = sale.time;

    popup.classList.add('active');

    setTimeout(() => {
        popup.classList.remove('active');
    }, 5000);
}

// Initialize Trust Widgets
document.addEventListener('DOMContentLoaded', () => {
    createSalesPopup();

    function scheduleNextSale() {
        // Random delay between 15 and 45 seconds
        const delay = Math.floor(Math.random() * (45000 - 15000 + 1)) + 15000;
        setTimeout(() => {
            showRandomSale();
            scheduleNextSale();
        }, delay);
    }

    // Start the cycle after initial 5s delay
    setTimeout(() => {
        showRandomSale();
        scheduleNextSale();
    }, 5000);
});
