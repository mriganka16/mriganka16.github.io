$(document).ready(function() {

	$("#s1").click(function() {
		$('#o1').show()
		$('#o2').hide()
		$('#o3').hide()
		$('#o4').hide()
		$('#o5').hide()

	})

	$("#s2").click(function() {
		$('#o2').show()
		$('#o1').hide()
		$('#o3').hide()
		$('#o4').hide()
		$('#o5').hide()
	})
	$("#s3").click(function() {
		$('#o3').show()
		$('#o1').hide()
		$('#o2').hide()
		$('#o4').hide()
		$('#o5').hide()
	})
	$("#s4").click(function() {
		$('#o4').show()
		$('#o1').hide()
		$('#o2').hide()
		$('#o3').hide()
		$('#o5').hide()
	})
	$("#s5").click(function() {
		$('#o5').show()
		$('#o1').hide()
		$('#o2').hide()
		$('#o3').hide()
		$('#o4').hide()
	})


	$("#strip-button").click(function () {
		$(".outfit").fadeOut()
	})
	
})