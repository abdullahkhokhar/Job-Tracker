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

// delete job
UI.prototype.deleteJob = function(target){
  if(target.className === 'delete'){
    target.parentElement.parentElement.remove();
  }
}

UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('employee').value = '';
  document.getElementById('job-number').value = '';
}

UI.prototype.showAlert = function(msg, className){
  // create a div
  const div = document.createElement('div');
  div.className = `alert ${className}`;
  // ad text node
  div.appendChild(document.createTextNode(msg));
  // get parent
  const container = document.querySelector('.container');
  const form = document.querySelector('#job-form');
  container.insertBefore(div, form); // want to put the div before the parent form

  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 3000);
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

  // check for empty insertions and provide some change
  if(title === '' || employee === '' || job === ''){
    // error alert
    ui.showAlert('Fill in All Fields!', 'error');
  } else {
    // add the job to list
    ui.addJobToList(new_job);
    // show showAlert
    ui.showAlert('Job Added to be Tracked!', 'success')
    ui.clearFields();
  }

  e.preventDefault();
});

// event lister for delete
document.getElementById('job-list').addEventListener('click', function(e){
  // Instantiate a UI object
  const ui = new UI();

  ui.deleteJob(e.target);

  // show an alert
  ui.showAlert('Job sucsessfully removed!', 'success');

  e.preventDefault();
})
