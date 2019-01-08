$(document).ready(() => {

    var skillScores = {
            Dutch: "80%",
            English: "90%",
            Spanish: "60%",
            Papiamentu: "80%",
            Word: "80%",
            Excel: "70%",
            ArcGIS: "70%",
            HTML: "70%",
            CSS: "70%",
            Javascript: "60%",
            "Adobe Photoshop": "60%",
            "Adobe Illustrator": "60%",
            "Adobe Premiere": "60%"
    };

    // window is scrolled to the anchor (decide where the anchor should go)
    // at the start point the scene is initiated
    // scene
        // select all of the #pBar elements
        var sel = document.querySelectorAll("#pBar li div div");
        // get their width
    
    //intialize the controller
    var controller = new ScrollMagic.Controller ();

    // loop throug each pbar element
    sel.forEach( (el) => {
        // get the text content and the width of the element
        var skill = el.textContent;
        var width = skillScores[skill];

        // initialize the animation function
        barAnimate(el, width)
        
    })

    // function for animating the Pbars
    function barAnimate (pBar, width) {        
        
        // create tween
        var tween = TweenMax.to(pBar, 1, {width: width, boxShadow: "0px 0px 1px 2px #4F97C5"});
    
        // create scene
        var pBarScene = new ScrollMagic.Scene({
            tweenChanges:true,
            triggerElement: "#trigger",
            onReverse: false
        })
        .addIndicators()
        .setTween(tween)
        .reverse(false)
        .addTo(controller);
    };


    
});