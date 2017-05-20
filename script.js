



$('#submit').on('click', function(event){
	event.preventDefault();

	var employeeName = $('#employee-name').val().trim();
	var startDate = $('#start-date').val().trim();
	var role = $('#role').val().trim();
	var monthlyRate = $('#monthly-rate').val();

	database.ref()
});