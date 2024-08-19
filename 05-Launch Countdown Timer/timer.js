const INTERVAL_MS = 250;
const ONE_DAY_IN_SECONDS = 86400;
const ONE_HOUR_IN_SECONDS = 3600;
const ONE_MINUTE_IN_SECONDS = 60;

const futureDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 9);
let oldRemainingTime;

const timeCards = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds')
};

function createFlipElement(className) {
    const flipElement = document.createElement('div');
    flipElement.classList.add(className);
    return flipElement;
}

function flip(timeCard, newNumber) {
    const topHalf = timeCard.querySelector('.top');
    const startNumber = parseInt(topHalf.textContent);

    if (parseInt(newNumber) === startNumber) return;

    const bottomHalf = timeCard.querySelector('.bottom');
    const topFlip = createFlipElement("top-flip");
    const bottomFlip = createFlipElement("bottom-flip");

    topHalf.textContent = String(startNumber).padStart(2, "0");
    bottomHalf.textContent = startNumber;
    topFlip.textContent = String(startNumber).padStart(2, "0");
    bottomFlip.textContent = newNumber;

    timeCard.querySelectorAll('.top, .bottom').forEach(el => el.textContent = String(startNumber).padStart(2, "0"));

    topFlip.addEventListener("animationstart", () => topHalf.textContent = newNumber);
    topFlip.addEventListener("animationend", () => topFlip.remove());
    bottomFlip.addEventListener("animationend", () => {
        bottomHalf.textContent = newNumber;
        bottomFlip.remove();
    });

    timeCard.append(topFlip, bottomFlip);
}

function flipAllCards(time) {
    const timeUnits = {
        days: String(Math.floor(time / ONE_DAY_IN_SECONDS)).padStart(2, "0"),
        hours: String(Math.floor((time % ONE_DAY_IN_SECONDS) / ONE_HOUR_IN_SECONDS)).padStart(2, "0"),
        minutes: String(Math.floor((time % ONE_HOUR_IN_SECONDS) / ONE_MINUTE_IN_SECONDS)).padStart(2, "0"),
        seconds: String(time % ONE_MINUTE_IN_SECONDS).padStart(2, "0")
    };

    Object.entries(timeUnits).forEach(([unit, value]) => flip(timeCards[unit], value));
}

setInterval(() => {
    const currentDate = new Date();
    const newRemainingTime = Math.ceil((futureDate - currentDate) / 1000);

    if (oldRemainingTime !== newRemainingTime) {
        flipAllCards(newRemainingTime);
        oldRemainingTime = newRemainingTime;
    }
}, INTERVAL_MS);