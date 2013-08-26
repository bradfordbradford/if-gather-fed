// jPlayer for Unleash Page
$(document).ready(function(){

    // Local copy of jQuery selectors, for performance.
    var my_jPlayer = $("#jquery_jplayer"),
        my_trackName = $("#player-wrap .track-name"),
        my_playState = $("#player-wrap .play-state"),
        my_extraPlayInfo = $("#player-wrap .extra-play-info");

    // Some options
    var opt_play_first = false, // If true, will attempt to auto-play the default track on page loads. No effect on mobile devices, like iOS.
        opt_auto_play = true, // If true, when a track is selected, it will auto-play.
        opt_text_playing = "Now playing", // Text when playing
        opt_text_selected = "Track selected"; // Text when not playing

    // A flag to capture the first track
    var first_track = true;

    // Change the time format
    $.jPlayer.timeFormat.padMin = false;
    $.jPlayer.timeFormat.padSec = false;
    $.jPlayer.timeFormat.sepMin = " min ";
    $.jPlayer.timeFormat.sepSec = " sec";

    // Initialize the play state text
    my_playState.text(opt_text_selected);

    // Instance jPlayer
    my_jPlayer.jPlayer({
        ready: function () {
            $("#player-wrap .track-default").click();
        },
        timeupdate: function(event) {
            my_extraPlayInfo.text(parseInt(event.jPlayer.status.currentPercentAbsolute, 10) + "%");
        },
        play: function(event) {
            my_playState.text(opt_text_playing);
        },
        pause: function(event) {
            my_playState.text(opt_text_selected);
        },
        ended: function(event) {
            my_playState.text(opt_text_selected);
        },
        swfPath: "js",
        cssSelectorAncestor: "#player-wrap",
        supplied: "mp3",
        wmode: "window"
    });

    // Create click handlers for the different tracks
    $("#player-wrap .track").hover(function(e) {
        my_trackName.text($(this).text());
        my_jPlayer.jPlayer("setMedia", {
            mp3: $(this).attr("href")
        });
        my_jPlayer.jPlayer("play");
        first_track = false;
        $(this).blur();
        return false;
    });

    $("#player-wrap .track").mouseout(function(e) {
        my_trackName.text($(this).text());
        my_jPlayer.jPlayer("setMedia", {
            mp3: $(this).attr("href")
        });
        my_jPlayer.jPlayer("stop");
        first_track = false;
        $(this).blur();
        return false;
    });

});
