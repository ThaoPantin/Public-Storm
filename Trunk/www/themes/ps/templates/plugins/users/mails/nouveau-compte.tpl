<html>
<body>
<a href="{$base_url_http}?utm_source=nouveau-compte&utm_medium=email&utm_term=key1&utm_campaign=Public-Storm"><img src="{$theme_dir_http}img/logo.jpg" align="left" border="0"></a>
<h1 style="font-size:18px;">{t}inscription.subject{/t}</h1>
<p style="font-size:12px;">
	{t}inscription.welcome{/t}
</p>
<p style="font-size:12px;">
	{t}field.nom{/t} : <b>{$user_infos.nom|escape}</b><br />
	{t}field.prenom{/t} : <b>{$user_infos.prenom|escape}</b><br />
	{t}field.login{/t} : <b>{$user_infos.login|escape}</b><br />
	{t}field.password{/t} : <b>{$user_infos.password|escape}</b>
</p>
<p style="font-size:12px;">{t}share PS to your friend{/t}</p>
<p style="font-size:12px;">
<a href="https://play.google.com/store/apps/details?id=info.internetcollaboratif.publicstorm.app&utm_source=nouveau-compte&utm_medium=email&utm_term=key4-link-to-app&utm_campaign=Public-Storm"><img src="{$theme_dir_http}img/app-promo.jpg" border="0" alt="{t}Public-Storm-App sur Play{/t}" /></a>
<br />
{t}Public-Storm-App sur Play{/t}<br />
{t}L'application Android pour tablettes et Smartphones est disponible en version Beta sur Google Play.{/t}<br />
<a href="https://play.google.com/store/apps/details?id=info.internetcollaboratif.publicstorm.app&utm_source=nouveau-compte&utm_medium=email&utm_term=key5-link-to-app&utm_campaign=Public-Storm"><img src="{$theme_dir_http}img/play_logo.png" border="0" alt="{t}Public-Storm-App sur Play{/t}" style="display: block; margin: 30px auto;" /></a>
</p>
<p>&nbsp;</p>
<p style="font-size:12px;">
	<br />-- <br />{t}inscription.signature{/t}
</p>
</body>
</html>
