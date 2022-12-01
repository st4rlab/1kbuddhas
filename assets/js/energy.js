function getRandom() {
  var numberGen = document.getElementById("number")
  numberGen.innerHTML = `<span>Your Lucky Number:</span> ` + Math.floor((Math.random() * 100000000) + 1);

      document.getElementById("clickprogress").insertAdjacentHTML("afterend",
          "||");


}

function randomImg() {
      var insights = [
        {
          text: "Initiating",
          linknumber: "001",
          img: "/oracle/assets/img/buddhas/buddha-001.jpg"
        }, {
          text: "Responding",
          linknumber: "002",
          img: "/oracle/assets/img/buddhas/buddha-002.jpg",
        }, {
          text: "Beginning",
          linknumber: "003",
          img: "/oracle/assets/img/buddhas/buddha-003.jpg",
        }, {
          text: "Childhood",
          linknumber: "004",
          img: "/oracle/assets/img/buddhas/buddha-004.jpg",
        }, {
          text: "Patience",
          linknumber: "005",
          img: "/oracle/assets/img/buddhas/buddha-005.jpg",
        }, {
          text: "Conflict",
          linknumber: "006",
          img: "/oracle/assets/img/buddhas/buddha-006.jpg"
        }, {
          text: "Discipline",
          linknumber: "007",
          img: "/oracle/assets/img/buddhas/buddha-007.jpg",
        }, {
          text: "Union",
          linknumber: "008",
          img: "/oracle/assets/img/buddhas/buddha-008.jpg",
        }, {
          text: "Small Influences",
          linknumber: "009",
          img: "/oracle/assets/img/buddhas/buddha-009.jpg",
        }, {
          text: "Fulfillment",
          linknumber: "010",
          img: "/oracle/assets/img/buddhas/buddha-010.jpg",
        },



        {
          text: "Advance",
          linknumber: "011",
          img: "/oracle/assets/img/buddhas/buddha-011.jpg"
        }, {
          text: "Hindrance",
          linknumber: "012",
          img: "/oracle/assets/img/buddhas/buddha-012.jpg",
        }, {
          text: "Harmony",
          linknumber: "013",
          img: "/oracle/assets/img/buddhas/buddha-013.jpg",
        }, {
          text: "Harvest",
          linknumber: "014",
          img: "/oracle/assets/img/buddhas/buddha-014.jpg",
        }, {
          text: "Humility",
          linknumber: "015",
          img: "/oracle/assets/img/buddhas/buddha-015.jpg",
        }, {
          text: "Delight",
          linknumber: "016",
          img: "/oracle/assets/img/buddhas/buddha-016.jpg"
        }, {
          text: "Following",
          linknumber: "017",
          img: "/oracle/assets/img/buddhas/buddha-017.jpg",
        }, {
          text: "Remedy",
          linknumber: "018",
          img: "/oracle/assets/img/buddhas/buddha-018.jpg",
        }, {
          text: "Approaching",
          linknumber: "019",
          img: "/oracle/assets/img/buddhas/buddha-019.jpg",
        }, {
          text: "Overview",
          linknumber: "020",
          img: "/oracle/assets/img/buddhas/buddha-020.jpg",
        },



        {
          text: "Eradication",
          linknumber: "021",
          img: "/oracle/assets/img/buddhas/buddha-021.jpg"
        }, {
          text: "Adorning",
          linknumber: "022",
          img: "/oracle/assets/img/buddhas/buddha-022.jpg",
        }, {
          text: "Falling Away",
          linknumber: "023",
          img: "/oracle/assets/img/buddhas/buddha-023.jpg",
        }, {
          text: "Turning Back",
          linknumber: "024",
          img: "/oracle/assets/img/buddhas/buddha-024.jpg",
        }, {
          text: "Honesty",
          linknumber: "025",
          img: "/oracle/assets/img/buddhas/buddha-025.jpg",
        }, {
          text: "Accumulation",
          linknumber: "026",
          img: "/oracle/assets/img/buddhas/buddha-026.jpg"
        }, {
          text: "Nourishing",
          linknumber: "027",
          img: "/oracle/assets/img/buddhas/buddha-027.jpg",
        }, {
          text: "Exceeding",
          linknumber: "028",
          img: "/oracle/assets/img/buddhas/buddha-028.jpg",
        }, {
          text: "Darkness",
          linknumber: "029",
          img: "/oracle/assets/img/buddhas/buddha-029.jpg",
        }, {
          text: "The Light",
          linknumber: "030",
          img: "/oracle/assets/img/buddhas/buddha-030.jpg",
        },


        {
          text: "Mutual Influence",
          linknumber: "031",
          img: "/oracle/assets/img/buddhas/buddha-031.jpg"
        }, {
          text: "Long Lasting",
          linknumber: "032",
          img: "/oracle/assets/img/buddhas/buddha-032.jpg",
        }, {
          text: "Retreat",
          linknumber: "033",
          img: "/oracle/assets/img/buddhas/buddha-033.jpg",
        }, {
          text: "Strength",
          linknumber: "034",
          img: "/oracle/assets/img/buddhas/buddha-034.jpg",
        }, {
          text: "Forward Motion",
          linknumber: "035",
          img: "/oracle/assets/img/buddhas/buddha-035.jpg",
        }, {
          text: "Blessing",
          linknumber: "036",
          img: "/oracle/assets/img/buddhas/buddha-036.jpg"
        }, {
          text: "Household",
          linknumber: "037",
          img: "/oracle/assets/img/buddhas/buddha-037.jpg",
        }, {
          text: "Diversity",
          linknumber: "038",
          img: "/oracle/assets/img/buddhas/buddha-038.jpg",
        }, {
          text: "Hardship",
          linknumber: "039",
          img: "/oracle/assets/img/buddhas/buddha-039.jpg",
        }, {
          text: "Relief",
          linknumber: "040",
          img: "/oracle/assets/img/buddhas/buddha-040.jpg",
        },
      ];
      var insight = insights[Math.floor(Math.random() * insights.length)];
      document.getElementById("insight").innerHTML =
        '<h3>Congratulations! The 1000 Buddhas have chosen this important life lesson for you.</h3><h2>' + insight.text + '</h2><p>Click image for the details about your fortune</p>' +
        '<a href="/oracle/buddhas/' + insight.linknumber + '"><img src="' + insight.img + '"></a>';
    }
