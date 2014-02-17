---
title: Perl
parent: search
order: 4
---

The request in python

<pre><code class="language-perl">
# Main subroutine
sub main {

	#Get the subroutine arguments
	my $settings_ref = shift;

	# Get the script arguments
	(my $returncode) = get_arguments($settings_ref);

	if( $returncode == 0 ) {

		# perform specified action
		given ($settings_ref->{handle}->{action}) {
			when('get')		{ performGet($settings_ref); }
			when('put')		{ performPut($settings_ref); }
			when('delete')	{ performDelete($settings_ref); }
			when('post')	{ performPost($settings_ref); }
		}

	}
	return($returncode);
}
 
</code></pre>

