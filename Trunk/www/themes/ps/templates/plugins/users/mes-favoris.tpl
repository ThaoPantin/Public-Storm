{setlocale type="all" locale="fr_FR.utf8"}

<h3>{t}Mes favoris{/t}</h3>

<div class="table _100">
	<div class="table-row">
		<div class="table-cell _30">
	
			<ul class="liste">
				{foreach from=$storms item=storm}
				{assign var=cap value=$storm.permaname.0}
				{if $cap ne $prevcap}
					{if $loopnum gt $item_per_col|floor}
						</ul></div>
						{assign var=loopnum value=0}
						<div class="table-cell _30"><ul class="liste">
					{/if}
					<li class="cap">{$cap|ucfirst}</li>
				{/if}
				{if $storm.root ne ""}<li><a href="{$base_url}/storm/{$storm.permaname|url}/" class="storm">{$storm.root|ucfirst}</a>{if $storm.author_login ne ""} <small class="author">({t}by{/t} <a href="{$base_url}/utilisateurs/{$storm.author_login}/">{$storm.author}</a>)</small>{/if}</li>{/if}
				{assign var=prevcap value=$cap}
				
				{assign var=loopnum value=$loopnum+1}
				{/foreach}
			</ul>
			
		</div>
	</div>
</div>