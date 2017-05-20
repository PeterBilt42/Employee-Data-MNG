
// Initialize Firebase
var config = {
	apiKey: "AIzaSyAvtuzDqSlZpMovTcdiEo2apokzdvo34OI",
	authDomain: "employee-data-management-aa852.firebaseapp.com",
	databaseURL: "https://employee-data-management-aa852.firebaseio.com",
	// projectId: "employee-data-management-aa852",
	storageBucket: "employee-data-management-aa852.appspot.com"
	// messagingSenderId: "349290059912"
};
firebase.initializeApp(config);

var database = firebase.database();

database.ref().on('child_added', function(snapshot){
	console.log(snapshot.val().employeeName);

	var row = $('<tr>');
	var nameCell = $('<td>').html(snapshot.val().employeeName);

	row.append(nameCell);


	$('#employee-table tr:last').after(row);
});


$('#submit').on('click', function(event){
	event.preventDefault();

	var employeeName = $('#employee-name').val().trim();
	var role = $('#role').val().trim();
	var startDate = $('#start-date').val().trim();
	var monthlyRate = $('#monthly-rate').val();

	database.ref().push({
		employeeName: employeeName,
		role: role,
		startDate: startDate,
		monthlyRate: monthlyRate
	});
});

