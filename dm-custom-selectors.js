


///////////////////////////////////////////////////////////////////// 1.2

// <script>
(function dmCustomIDX() {
	console.log('dm custom idx, active');

	// // for IDX template pages
	// let subDivs = "";

	// IDX shortcodes
	function shortCode() {
		console.log('shortcode?');
		// for code block with shortcode
		const oeSC = document.querySelectorAll('.oe-shortcode');

		if(oeSC.length === 0) {
			console.log('no');
			return;
		} else {
			console.log('yes');
			// gather all dm-js selectors
			for (let i = 0; i < oeSC.length; i++) {
				// link to target element
				let trgtElm = oeSC[i].children[0].children[0];			
				// remove id attribute "ihf-main-container"
				trgtElm.removeAttribute('id');
				// remove class selector "ihf-color-scheme-gray"
				trgtElm.classList.remove('ihf-color-scheme-gray');
				// insert removed id into class attribute
				trgtElm.classList.add('ihf-main-container');
			}
		}
	}

	// IDX stock pages: gallery, reports
	function galleryPg() {
		console.log('gallery?');
		const pstCntnt = document.querySelectorAll('.post-content');
		let trgtElm = pstCntnt[0].children[0].children[0];

		if (trgtElm === undefined) {
			console.log('no');
			return;
		} else if (!trgtElm.classList.contains('ihf-container')) {
			console.log('no');
			return;
		} else {
			console.log('yes');
			// remove id attribute "ihf-main-container"
			trgtElm.removeAttribute('id');
			// remove class selector "ihf-color-scheme-gray"
			trgtElm.classList.remove('ihf-color-scheme-gray');
			// insert remove id into class attribute
			trgtElm.classList.add('ihf-main-container');
		}
	}

	// IDX stock pages: gallery, reports
	function singlePg() {
		console.log('single?');

		// link to parent container
		const pstCntnt = document.querySelector('.post-content');
		
		let pstChild = pstCntnt.children[3];

		if (pstChild === undefined) {
			console.log('no');
			return;
		} else {
			
			let trgtElm = pstChild.children[0];
			// console.log(trgtElm);

			if (trgtElm === undefined) {
				console.log('no');
				return;
			} else if (!trgtElm.classList.contains('ihf-container')) {
				console.log('no');
				return;
			} else {
				console.log('yes');
				// remove id attribute "ihf-main-container"
				trgtElm.removeAttribute('id');
				// remove class selector "ihf-color-scheme-gray"
				trgtElm.classList.remove('ihf-color-scheme-gray');
				// insert remove id into class attribute
				trgtElm.classList.add('ihf-main-container');
				// insert custom selector into class attribute
				trgtElm.classList.add('dm-tmp-single');
			}
		}
	}

	// IDX listing modals
	function oeModal() {
		console.log('modal?');

		// link to parent container	
		const trgtElm = document.querySelector('.ihf-modal-container');
		
		if (trgtElm === null) {
			console.log('no');
			return;
		} else {
			console.log('yes');
			// remove id attribute "ihf-main-container"
			trgtElm.removeAttribute('id');
			// remove class selector "ihf-color-scheme-gray"
			trgtElm.classList.remove('ihf-color-scheme-gray');
			// insert remove id into class attribute
			trgtElm.classList.add('ihf-main-container');
			// insert custom selector into class attribute
			trgtElm.classList.add('dm-tmp-mdl');
		}

	}

	// On load
	setTimeout(function(){
		shortCode();
		galleryPg();
		singlePg();
		oeModal();
	}, 2000);
})();
// </script>