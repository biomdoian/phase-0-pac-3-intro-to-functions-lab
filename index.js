function shout(hello){
    return hello.toUpperCase();
}

function whisper(HELLO){
    return HELLO.toLowerCase()
}

function logShout(string) {
    console.log(string.toUpperCase());
  }
  logShout('hello');

  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  logWhisper('HELLO');

  function sayHiToHeadphonedRoommate(str) {
    if (str === "Let's have dinner together!") {
      return "I would love to!";
    } else if (str === str.toUpperCase() && str !== str.toLowerCase()) {
      return "YES INDEED!";
    } else if (str === str.toLowerCase() && str !== str.toUpperCase()) {
      return "I can't hear you!";
    } else {
      return "I can't hear you!";
    }
  }
  