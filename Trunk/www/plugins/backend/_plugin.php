<?php
/*
    Public-Storm
    Copyright (C) 2008-2012 Mathieu Lory <mathieu@internetcollaboratif.info>
    This file is part of Public-Storm.

    Public-Storm is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Public-Storm is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Public-Storm. If not, see <http://www.gnu.org/licenses/>.
 */

final class backend extends Plugins {
 	public static $subdirs = array('backend');
 	public static $name = "backend";
 	public static $rssfeeds = array();
 	
	public function __construct() {
		$settings = new Settings();
		require($settings->getVar('prefix') . 'conf/backend.php');
		self::addRssfeeds(
			array(
				"href"	=> $settings->getVar('base_url').'/backend/rss.php',
				"rel"	=> "alternate",
				"type"	=> "application/rss+xml",
				"title"	=> i18n::_("Flux RSS")." ".$settings->getVar('site_name'),
			)
		);
		self::addRssfeeds(
			array(
				"href"	=> $settings->getVar('base_url').'/backend/atom.php',
				"rel"	=> "alternate",
				"type"	=> "application/atom+xml",
				"title"	=> i18n::_("Flux Atom")." ".$settings->getVar('site_name'),
			)
		);
	}
	
	public static function addRssfeeds($rss=array()) {
		array_push(self::$rssfeeds, $rss); 
		return self::$rssfeeds;
	}
	
	public static function getRssfeeds() {
		return self::$rssfeeds;
	}
	
	public function loadLang()
	{
		return parent::loadLang(self::$name);
	}
	
	public function getVersion()
	{
		return parent::getVersion();
	}
	
	public function getName()
	{
		return self::$name;
	}
	
	public function getDescription()
	{
		return parent::getDescription();
	}
	
	public function getAuthor()
	{
		return parent::getAuthor();
	}
	
	public function getSubDirs()
	{
		return self::$subdirs;
	}
}


?>