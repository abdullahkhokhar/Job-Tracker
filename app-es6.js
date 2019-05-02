// initally with basic es5

// Job constructor
function Job(title, author, jobNum){
  this.title = title;
  this.author = author;
  this.jobNum = jobNum;
}

// UI Constructor --> set of prototype methods
function UI(){}

UI.prototype.addJobToList = function(job){
  const list = document.getElementById('job-list');
  // create a tr element
  const row = document.createElement('tr');
  row.innerHTML = `
  <td>${job.title}</td>
  <td>${job.author}</td>
  <td>${job.jobNum}</td>
  <td><a href ="#" class = "delete">X<a></td>
  `;
  list.appendChild(row);
}

UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('employee').value = '';
  document.getElementById('job-number').value = '';
}

// Create event listers
document.getElementById('job-form').addEventListener('submit', function(e){
  // get all the field values
  const title = document.getElementById('title').value;
  const employee = document.getElementById('employee').value;
  const job = document.getElementById('job-number').value;

  const new_job = new Job(title, employee, job); // Create a new job

  // Instantiate a UI object
  const ui = new UI();
  // add the job to list
  ui.addJobToList(new_job);
  ui.clearFields();

  e.preventDefault();
});
