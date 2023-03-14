const context = new AudioContext();

export async function load( url:string ){
    return fetch(url)
    .then(response => response.arrayBuffer())
    .then(buffer => context.decodeAudioData(buffer));
}
export async function play( sample:AudioBuffer, sampleNote:number, noteToPlay:number ) {
    const source = context.createBufferSource();
    source.buffer = sample;
    source.playbackRate.value = 2 ** ((noteToPlay - sampleNote) / 12);
    source.connect(context.destination);
    source.start(0);
}