document.addEventListener('DOMContentLoaded', () => {
    // 1. Countdown Timer Logic
    const countdown = document.getElementById('countdown');
    const daysSpan = document.getElementById('days');
    const hoursSpan = document.getElementById('hours');
    const minutesSpan = document.getElementById('minutes');
    const secondsSpan = document.getElementById('seconds');

    function updateCountdown() {
        const now = new Date();
        // تحديد تاريخ ووقت التمرين: الجمعة القادمة الساعة 4:00 مساءً بتوقيت الخرطوم (CAT)
        // اليوم هو الاثنين 30 يونيو 2025، لذا الجمعة القادمة هي 4 يوليو 2025.
        // يجب تعديل هذا التاريخ ليتناسب مع الجمعة القادمة الفعلية عند استخدام الموقع.
        // مثال: إذا كان اليوم هو 30 يونيو 2025 (الاثنين)، فالجمعة القادمة هي 4 يوليو 2025.
        // إذا كان اليوم هو 5 يوليو 2025 (السبت)، فالجمعة القادمة هي 11 يوليو 2025.

        // لحساب الجمعة القادمة ديناميكيًا:
        const targetDate = new Date(now);
        targetDate.setDate(now.getDate() + (5 + 7 - now.getDay()) % 7); // 5 for Friday
        targetDate.setHours(16, 0, 0, 0); // 4 PM (16:00)

        // إذا كان وقت التمرين قد مر بالفعل في هذا الأسبوع، ننتقل للجمعة في الأسبوع التالي
        if (now > targetDate) {
            targetDate.setDate(targetDate.getDate() + 7);
        }

        const distance = targetDate - now;

        if (distance < 0) {
            countdown.innerHTML = "<h2>وقت التمرين قد بدأ!</h2>";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysSpan.textContent = String(days).padStart(2, '0');
        hoursSpan.textContent = String(hours).padStart(2, '0');
        minutesSpan.textContent = String(minutes).padStart(2, '0');
        secondsSpan.textContent = String(seconds).padStart(2, '0');
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Call immediately to avoid delay

    // 2. Player Cards Logic
    const playersContainer = document.getElementById('players-container');

    const players = [
        { name: "تمبوش", rating: 50, position: "CM", image: "" },
        { name: "البراء", rating: 100, position: "GK", image: "player2.png" },
        { name: "أ:احمد", rating: 50, position: "CB", image: "player3.png" },
        { name: "د:احمد", rating: 50, position: "RW", image: "player4.png" },
        { name: "د:اشرف", rating: 50, position: "GK", image: "player5.png" },
        { name: "د:عثمان", rating: 50, position: "LB", image: "player6.png" },
        { name: "ج:نزار", rating: 50, position: "CDM", image: "player7.png" },
        { name: "ج:معتصم", rating: 50, position: "RB", image: "player8.png" },
        { name: "سنهوري", rating: 50, position: "CAM", image: "player9.png" },
        { name: "اسنوكر", rating: 50, position: "LM", image: "player10.png" },
        { name: "بنكك", rating: 50, position: "RM", image: "player11.png" },
        { name: "اثل", rating: 50, position: "CF", image: "player12.png" },
        { name: "محمد", rating: 50, position: "LWB", image: "player13.png" },
        { name: "د:عثمان2", rating: 50, position: "RWB", image: "player14.png" },
        { name: "محمد زين", rating: 50, position: "SW", image: "player15.png" },
        { name: "مجتبى", rating: 50, position: "CM", image: "player16.png" },
        { name: "بكري", rating: 50, position: "ST", image: "player17.png" },
        { name: "س:الامين", rating: 50, position: "CB", image: "player18.png" },
    ];

    players.forEach(player => {
        const card = document.createElement('div');
        card.classList.add('player-card');

        // استخدام رابط صورة تجريبية إذا لم تكن لديك صور محلية
        // يمكنك تغيير هذا الرابط إلى مسار صورتك المحلية مثل `images/${player.image}`
        const imagePath = `images/${player.image}`; // افترض أن الصور في مجلد 'images'
        // أو استخدم صور وهمية إذا لم يكن لديك صور:
        // const imagePath = `https://via.placeholder.com/100x100?text=${player.name}`;


        card.innerHTML = `
            <img src="${imagePath}" alt="${player.name}">
            <div class="rating">${player.rating}</div>
            <h3>${player.name}</h3>
            <p class="position">${player.position}</p>
        `;
        playersContainer.appendChild(card);
    });
});