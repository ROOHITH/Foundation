$(document).ready(function () {
  $("#varibaleName").text("Rohith R");

  $("#varibaleAge").text("24");

  $("#varibaleIsStudent").text(false);

  function greet(name, age, isStudent) {
    console.log("Hello, " + name + "!");
    console.log(`Iam ${age} is old`);
    console.log(`iam nor a ${isStudent}`);
    $("#formated_string").text(
      `Hello,  ${name} !, Iam ${age} is old iam nor a ${isStudent}`
    );
  }
  greet(
    $("#varibaleName").text(),
    $("#varibaleAge").text(),
    $("#varibaleIsStudent").text()
  );
  $("#varibalePerson").text(
    JSON.stringify({
      name: $("#varibaleName").text(),
      age: $("#varibaleAge").text(),
      isStudent: $("#varibaleIsStudent").text(),
    })
  );

  function fetchData(callback) {
    setTimeout(() => {
      let data = "Async data";
      callback(data);
    }, 2000);
  }

  $("#fetchDataBtn").on("click", () => {
    fetchData((result) => {
      console.log(result);
      $("#fetchData").text(result);
    });
  });
});
