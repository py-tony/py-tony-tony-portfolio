$(function() {
    var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});


var quotes = ["“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler",
"“First, solve the problem. Then, write the code.” – John Johnson",
"“Experience is the name everyone gives to their mistakes.” – Oscar Wilde",
"“Knowledge is power.” – Francis Bacon",
"“Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.” – Dan Salomon",
"“ Code is like humor. When you have to explain it, it’s bad.” – Cory House",
"“Fix the cause, not the symptom.” – Steve Maguire",
"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. - Martin Golding",
]





