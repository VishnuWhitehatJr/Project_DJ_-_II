song_1 = "";
song_2 = "";

function preload()
{
    song_1 = loadSound("Sean Paul, Dua Lipa - No Lie.mp3");
    song_2 = loadSound("Ellie Goulding  Love Me Like You Do Lyrics.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 500);
}