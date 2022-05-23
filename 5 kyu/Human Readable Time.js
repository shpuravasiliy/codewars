function humanReadable (seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - hours * 3600) / 60);
    seconds = seconds - (minutes * 60 + hours * 3600);
    const zeros = (num) => {
      return  num < 10 ? '0' + num : num;
    }
    return zeros(hours) + ':' + zeros(minutes) + ':' + zeros(seconds);
}

console.log(humanReadable(3601));