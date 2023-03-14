// https://github.com/diego-hartmann/master-pitch

const context : AudioContext = new AudioContext();

export async function loadBuffer(url:string){
    return fetch(url)
    .then( res => res.arrayBuffer() )
    .then( buff => context.decodeAudioData(buff) );
}

export async function playBuffer(sample : AudioBuffer, sampleNote:number, noteToPlay:number) {
    const src = context.createBufferSource();
    src.buffer = sample;
    src.playbackRate.value = 2 ** ( ( noteToPlay - sampleNote ) / 12 );
    src.connect( context.destination );
    src.start(0);
}