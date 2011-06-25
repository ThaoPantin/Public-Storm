function add_suggestion(base_url)
{
	var formulaire = document.getElementById("suggestionForm");
	//var exists = suggestion_exists(permaname(formulaire.suggestion.value));
	//var suggestion = formulaire.suggestion.value;
	var suggestion = $jQuery("#suggestion").val();
	var storm_id = $jQuery("#storm_id").val();
	var exists = suggestion_exists(permaname(suggestion));
	if( exists == false )
	{
		var id = 'elt_'+alea(5);
		var e = $jQuery(
			'<li class="size_10 hidden bulle" id="'+id+'">' +
			'<blockquote title=""><a href="'+base_url+'/storm/'+permaname(suggestion)+'/">'+ucfirst(suggestion)+'</a>' +
			'	<span class="size" id="total_'+permaname(suggestion)+'">(1)</span>' +
			'	<span id="suggestions_'+permaname(suggestion)+'" class="hidden" style="vertical-align:top;" />' +
			'	<input type="hidden" name="suggestion" value="'+permaname(suggestion)+'">' +
			'</blockquote>' +
			'	<cite>' +
			'		Suggérée par xxxx, le xx/xx/xxxx' +
			'	</cite>' +
			'</li>'
		);
	}
	if( $jQuery("#storm_"+storm_id+" li.no_suggestion") )
	{
		$jQuery("#storm_"+storm_id+" li.no_suggestion").hide();
	}
	_gaq.push(['_trackPageview', '/add_suggestion/'+$jQuery('#storm_permaname').val()+'/'+permaname(suggestion)]);
	$jQuery.post(
		formulaire.action,
		{
			suggestion: suggestion,
			storm_id: storm_id
		},
		function(data)
		{
			if( e )
			{
				$jQuery('#storm_'+storm_id).append(e);
				$jQuery('#'+id).fadeIn("slow");
			}
		},
		"text"
	);

	// send to meteor
	if ( Meteor )
	{
		$jQuery.post(
			//BASE_URL+'/admin/gettab/meteor/addSuggestion/'+getChannelName()+'/',
			BASE_URL+'/meteor/meteor.php',
			{
				command: "addSuggestion", 
				user: '', 
				channel: getChannelName(), 
				message: suggestion
			},
			function(data) { setSubscribers(data); },
			"json"
		);
	}

	display_new_suggestion('storm_'+storm_id, '+1', permaname(suggestion));
	//formulaire.suggestion.value = "";
	$jQuery("#suggestion").val("");
}

function suggest_too(suggestion, base_url)
{
	$jQuery("#suggestion").val(suggestion);
	add_suggestion(base_url);
	return false;
}

function suggestion_exists(suggestion)
{
	if ( $jQuery('#total_' + permaname(suggestion)).length )
	{
		return true;
	}
	else
	{
		return false;
	}
}

function add_storm(base_url, span)
{
	if ( !$jQuery('#add_this_storm_form').html() ) 
	{
		$jQuery.get(
			base_url+"/storm/add_storm.php",
			function(data)
			{
				$jQuery('body').append("<div id='add_this_storm_form' style='display:none;'>"+data+"</div>");
				display_my_add_form();
			}
		);
	}
	else
	{
		display_my_add_form();
	}
}

function display_my_add_form() {
	$jQuery('#add_this_storm_form').dialog({
		title: $jQuery('#add_this_storm h2').html(),
		width: 350,
		height: 90,
		resizable: false,
		modal: true,
		buttons: {
			"Ajouter": function() {
				$jQuery( "button" ).button( "option", "disabled", true );
				$jQuery('#add_this_storm form').submit();
			}
		}
	});
	$jQuery('#add_this_storm_form').width(350);
	$jQuery('#add_this_storm_form').height(90);
}

function add_this_storm(form, base_url)
{
	document.location.href = form.action + permaname(form.storm.value) + '/' + encodeURI(form.storm.value) + '/';
}

function display_new_suggestion(id, inhtml, elt)
{
	$jQuery('#' + id + ' li input[name=suggestion]').each(
		function(index, element)
		{
			var v = $jQuery(element).val();
			//alert(v+' '+elt);
			if (v == elt) {
				$jQuery("#suggestions_"+v).text(inhtml);
				$jQuery("#suggestions_"+v).fadeIn('fast');
				$jQuery("#suggestions_"+v).css('font-size', '0em');
				$jQuery("#suggestions_"+v).css('display', 'inline');
				$jQuery("#suggestions_"+v).animate({
					opacity: 1,
					fontSize: "2.4em",
					},
					1500
				);
				$jQuery("#suggestions_"+v).fadeOut('slow');
				var totalText = $jQuery("#total_"+v).text();
				var totalInt = totalText.substring(1, totalText.length-1);
				var total = eval(totalInt+"+"+1);
				$jQuery("#total_"+v).text("("+total+")");
				return true;
			}
			// l'élément n'éxiste pas, on doit le créer ?
		}
	);
}
