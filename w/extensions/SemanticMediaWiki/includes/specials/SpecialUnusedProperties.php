<?php

namespace SMW;

use SMWOutputs;

/**
 * Special page (Special:UnusedProperties) for MediaWiki shows all
 * unused properties
 *
 * @file
 *
 * @license GNU GPL v2+
 * @since   1.9
 *
 * @author Markus Krötzsch
 * @author Jeroen De Dauw
 * @author mwjames
 */

/**
 * This special page (Special:UnusedProperties) for MediaWiki shows all unused
 * properties.
 *
 * @ingroup SpecialPage
 */
class SpecialUnusedProperties extends SpecialPage {

	/**
	 * @see SpecialPage::__construct
	 * @codeCoverageIgnore
	 */
	public function __construct() {
		parent::__construct( 'UnusedProperties' );
	}

	/**
	 * @see SpecialPage::execute
	 */
	public function execute( $param ) {
		Profiler::In( __METHOD__ );

		$out = $this->getOutput();

		$out->setPageTitle( $this->msg( 'unusedproperties' )->text() );

		$page = new UnusedPropertiesQueryPage( $this->getStore(), $this->getSettings() );
		$page->setContext( $this->getContext() );

		list( $limit, $offset ) = wfCheckLimits();
		$page->doQuery( $offset, $limit );

		// Ensure locally collected output data is pushed to the output!
		SMWOutputs::commitToOutputPage( $out );

		Profiler::Out( __METHOD__ );
	}
}
