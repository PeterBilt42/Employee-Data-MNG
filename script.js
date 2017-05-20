
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

	var thisNumMonths = monthsWorked(snapshot.val().startDate);
	console.log(thisNumMonths);
	var thisRate = snapshot.val().monthlyRate;

	var totalBilled = getTotalBilled(thisNumMonths, thisRate);

	var row = $('<tr>');

	// do this for every cell
	var nameCell = $('<td>').html(snapshot.val().employeeName);
	row.append(nameCell);

	var roleCell = $('<td>').html(snapshot.val().role);
	row.append(roleCell);

	var startDateCell = $('<td>').html(snapshot.val().startDate);
	row.append(startDateCell);

	var monthsWorkedCell = $('<td>').html(thisNumMonths);
	row.append(monthsWorkedCell);

	var monthlyRateCell = $('<td>').html(thisRate);
	row.append(monthlyRateCell);

	var totalBilledCell = $('<td>').html(totalBilled);
	row.append(totalBilledCell);



	$('#employee-table tr:last').after(row);
});


$('#submit').on('click', function(event){
	event.preventDefault();

	var employeeName = $('#employee-name').val().trim();
	var role = $('#role').val().trim();
	var startDate = $('#start-date').val().trim();
	var monthlyRate = $('#monthly-rate').val();

	$('#employee-name').val('');
	$('#role').val('');
	$('#start-date').val('');
	$('#monthly-rate').val('');

	database.ref().push({
		employeeName: employeeName,
		role: role,
		startDate: startDate,
		monthlyRate: monthlyRate
	});
});

