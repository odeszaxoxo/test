function loadPlans(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open(
    "GET",
    "https://my-json-server.typicode.com/odeszaxoxo/plans/db",
    true
  );
  xobj.onreadystatechange = function() {
    if (xobj.readyState === 4 && xobj.status === 200) {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

function loadGroups(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open(
    "GET",
    "https://my-json-server.typicode.com/odeszaxoxo/groups",
    true
  );
  xobj.onreadystatechange = function() {
    if (xobj.readyState === 4 && xobj.status === 200) {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

function fetchGroups(id, callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open(
    "GET",
    "https://my-json-server.typicode.com/odeszaxoxo/groups" + "/" + id,
    true
  );
  xobj.onreadystatechange = function() {
    if (xobj.readyState === 4 && xobj.status === 200) {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

function onPlanClickHandler(id) {
  fetchGroups(id, function(response) {
    var data = JSON.parse(response);
    var groupsTitles = [];
    var firstList = $("ul.main-content__first-group");
    var secondList = $("ul.main-content__second-group");
    var thirdList = $("ul.main-content__third-group");
    $("ul.main-content__first-group").empty();
    $("ul.main-content__second-group").empty();
    $("ul.main-content__third-group").empty();
    $("#firstGroup").text(data[0].title + " : ");
    $("#secondGroup").text(data[0].title + " : ");
    $("#thirdGroup").text(data[0].title + " : ");
    for (var j = 0; j < data[0].groups.length; j++) {
      groupsTitles.push(data[0].groups[j].title);
    }
    console.log(groupsTitles);
    $.each(groupsTitles, function(j) {
      var linkColor = data[0].groups[j].color;
      var border = "2px " + "dotted " + linkColor;
      var firstLi = $("<li/>")
        .addClass("main-content__upper-item")
        .attr("role", "menuitem")
        .appendTo(firstList);
      var firstLink = $("<a/>")
        .addClass("upper-link")
        .text(groupsTitles[j])
        .appendTo(firstLi)
        .css({ color: linkColor, borderBottom: border, cursor: "pointer" })
        .on("click", function() {
          console.log("clicked");
          if ($("#first").css("display") == "none") {
            $("#first").css({ display: "block" });
          } else {
            $("#first").css({ display: "none" });
          }
        });
    });
    $.each(groupsTitles, function(j) {
      var linkColor = data[0].groups[j].color;
      var border = "2px " + "dotted " + linkColor;
      var secondLi = $("<li/>")
        .addClass("main-content__upper-item")
        .attr("role", "menuitem")
        .appendTo(secondList);
      var secondLink = $("<a/>")
        .addClass("upper-link")
        .text(groupsTitles[j])
        .appendTo(secondLi)
        .css({ color: linkColor, borderBottom: border, cursor: "pointer" })
        .on("click", function() {
          console.log("clicked");
          if ($("#first").css("display") == "none") {
            $("#first").css({ display: "block" });
          } else {
            $("#first").css({ display: "none" });
          }
        });
    });
    $.each(groupsTitles, function(j) {
      var linkColor = data[0].groups[j].color;
      var border = "2px " + "dotted " + linkColor;
      var thirdLi = $("<li/>")
        .addClass("main-content__right-item")
        .attr("role", "menuitem")
        .appendTo(thirdList);
      var thirdLink = $("<a/>")
        .addClass("right-link")
        .text(groupsTitles[j])
        .appendTo(thirdLi)
        .css({ color: linkColor, cursor: "pointer" })
        .on("click", function() {
          console.log("clicked");
          if ($("#first").css("display") == "none") {
            $("#first").css({ display: "block" });
          } else {
            $("#first").css({ display: "none" });
          }
        });
    });
  });
}

function initPlans() {
  loadPlans(function(response) {
    var data = JSON.parse(response);
    console.log(data.plans);
    var plansList = $("ul.main-content__plans");
    var plansTitles = [];
    for (var j = 0; j < data.plans.length; j++) {
      plansTitles.push(data.plans[j].title);
    }
    $.each(plansTitles, function(j) {
      var plansLi = $("<li/>")
        .addClass("main-content__plans-item")
        .attr("role", "menuitem")
        .appendTo(plansList);
      var plansLink = $("<a/>")
        .addClass("plan-link")
        .text(plansTitles[j])
        .appendTo(plansLi)
        .css({cursor: "pointer"})
        .on("click", function() {
          $("#planimg").attr("src", data.plans[j].url);
          $("#maintitle").text(data.plans[j].title);
          onPlanClickHandler(data.plans[j].id);
        });
    });
    $("ul.main-content__plans li")
      .first()
      .find("a")
      .click();
  });
}

// function init() {
//   loadJSON(function(response) {
//     var data = JSON.parse(response);
//     for (var i = 0; i < data[1].length; i++) {
//       groups.push(data[1][i].title);
//       console.log(groups);
//     }
//     var departList = $("ul.main-content__departaments");
//     $.each(groups, function(i) {
//       console.log(groups[i]);
//       var linkColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
//       var border = "2px " + "dotted " + linkColor;
//       var departLi = $("<li/>")
//         .addClass("main-content__departaments-item")
//         .attr("role", "menuitem")
//         .appendTo(departList);
//       var departLink = $("<a/>")
//         .addClass("departament-link")
//         .text(groups[i])
//         .appendTo(departLi)
//         .css({ color: linkColor, borderBottom: border, cursor: "pointer" })
//         .on("click", function() {
//           console.log("clicked");
//           if ($("#first").css("display") == "none") {
//             $("#first").css({ display: "block" });
//           } else {
//             $("#first").css({ display: "none" });
//           }
//         });
//     });
//   });
// }

// init();
initPlans();
