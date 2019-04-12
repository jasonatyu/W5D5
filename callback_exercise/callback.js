class Clock {
  constructor() {
    // 1. Create a Date object.
    const now = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.seconds = now.getSeconds();
    this.hours = now.getHours();
    this.minutes = now.getMinutes();
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.  
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    if (this.seconds < 59) {
      this.seconds += 1;
    } else if (this.seconds === 59) {
      this.seconds = 0;
      if (this.minutes < 59) {
        this.minutes += 1; 
      } else if (this.minutes === 59) {
          this.minutes = 0;
        if (this.hours < 23) {
          this.hours += 1; 
        } else if (this.hours === 23) {
          this.hours = 0; 
        }
      } 
    }
    this.printTime(); 
  }
}

const clock = new Clock();
