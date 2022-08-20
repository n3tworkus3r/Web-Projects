const [trackIndex, setTrackIndex] = useState(0);
const [trackProgress, setTrackProgress] = useState(0);
const [isPlaying, setIsPlaying] = useState(false);

// Destructure for conciseness
// const { title, artist, color, image, audioSrc } = tracks[trackIndex];

// Refs
const audioRef = useRef(new Audio('http://127.0.0.1:8080/3.mp3'));
const intervalRef = useRef();
const isReady = useRef(false);

// Destructure for conciseness
const { duration } = audioRef.current;

const currentPercentage = duration
  ? `${(trackProgress / duration) * 100}%`
  : "0%";
const trackStyling = `
  -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #777), color-stop(${currentPercentage}, #fff))
`;

const startTimer = () => {
  // Clear any timers already running
  clearInterval(intervalRef.current);

  intervalRef.current = setInterval(() => {
    if (audioRef.current.ended) {
      toNextTrack();
    } else {
      setTrackProgress(audioRef.current.currentTime);
    }
  }, [1000]);
};

const onScrub = (value) => {
  // Clear any timers already running
  clearInterval(intervalRef.current);
  audioRef.current.currentTime = value;
  setTrackProgress(audioRef.current.currentTime);
};

const onScrubEnd = () => {
  // If not already playing, start
  if (!isPlaying) {
    setIsPlaying(true);
  }
  startTimer();
};

const toPrevTrack = () => {
  if (trackIndex - 1 < 0) {
    //setTrackIndex(tracks.length - 1);
  } else {
    //setTrackIndex(trackIndex - 1);
  }
};

const toNextTrack = () => {
  /*if (trackIndex < tracks.length - 1) {
    setTrackIndex(trackIndex + 1);
  } else {
    setTrackIndex(0);
  }
  */
};

useEffect(() => {
  if (isPlaying) {
    audioRef.current.play();
    startTimer();
  } else {
    audioRef.current.pause();
  }
}, [isPlaying]);

useEffect(() => {
  audioRef.current.pause();

  audioRef.current = new Audio('http://127.0.0.1:8080/3.mp3');
  setTrackProgress(audioRef.current.currentTime);

  if (isReady.current) {
    audioRef.current.play();
    setIsPlaying(true);
    startTimer();
  } else {
    // Set the isReady ref as true for the next pass
    isReady.current = true;
  }
}, [trackIndex]);

useEffect(() => {
  // Pause and clean up on unmount
  return () => {
    audioRef.current.pause();
    clearInterval(intervalRef.current);
  };
}, []);